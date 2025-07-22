import "./TodoItem.css";
import { memo } from "react";

const TodoItem = ({id, isDone, content, date, onUpdate,onDelete}) => {

    const onChangeCheckbox = () => {
        onUpdate(id);
    }
    const onClickDeleteButton = () => {
        onDelete(id);
    }
    return (
        <div className="TodoItem">
            <input onChange = {onChangeCheckbox} checked={isDone} type="checkbox"></input>
            <div className="content">{content}</div>
            <div className="Date">{new Date(date).toLocaleDateString()}</div>
            <button onClick={onClickDeleteButton}>삭제</button> 
        </div>
    )
}


//컴퍼넌트를 인수로 받아서, 해당 컴퍼넌트에 최적화나 memoization 같은 추가적인 기능을 덧붙여서 기능이 추가된 컴퍼넌트를 반환해주는 이런 memo와 같은 메서드들을
//고차 컴퍼넌트(HOC) 라고부름
// export default memo(TodoItem, (prevProps, nextProps)=>{
//     //객체타입의 props가 존재하기 때문에, 첫번째 방법으로 이전props값(prevProps)와, 현재props값(nextProps)을 직접 비교하는것.즉,커스터마이징하는것.
//     //반환값에 따라, Props가 바뀌었는지 안바뀌었는지 판단
//     // T-> Props 바뀌지 않음 -> 리랜더링 X
//     // F-> Props 바뀜 -> 리랜더링 O

//     //id, isDone, content, date 이 4개를 비교하면되지. 값이 바뀌었는지 안바뀌었는지.
//     if(prevProps.id !== nextProps.id) return false;
//     if(prevProps.isDone !== nextProps.isDone) return false;
//     if(prevProps.content !== nextProps.content) return false;
//     if(prevProps.date !== nextProps.date) return false;

//     return true;
// });

export default memo(TodoItem);