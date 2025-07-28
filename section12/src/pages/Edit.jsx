import { useParams, useNavigate, replace } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext, useEffect, useState } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "../App";


const Edit = () => {
    const params = useParams();
    const nav = useNavigate();
    const {onDelete, onUpdate} = useContext(DiaryDispatchContext);
    const data = useContext(DiaryStateContext);
    const [curDiaryItem, setCurDiaryItem] = useState();

    useEffect(()=>{
        const currentDiaryItem = data.find(
            (item)=>String(item.id) === String(params.id)
        );
        if(!currentDiaryItem){
            window.alert("존재하지 않는 일기입니다.");
            nav("/", {replace: true});
        }
 
        setCurDiaryItem(currentDiaryItem);
    },[params.id])   //params.id나 data가 바뀌었을때 현재 수정하려는 일기 item을 가져와서 setCurDiaryItem이라는 함수를 통해서 curDiaryItem 이 state에 보관하게 됨.

    const onClickDelete = () => {
        if (
            window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요! ")    //확인과 취소 버튼이 달려있는 팝업창을 발생시키는 기능.(confirm)
        ){
            //일기 삭제 로직 
            onDelete(params.id);
            nav('/',{replace: true});
        }
        
    }

    const onSubmit = (input) => {
        if(window.confirm("일기를 정말 수정할까요?")){
            onUpdate(
                params.id, 
                input.createdDate.getTime(), 
                input.emotionId, 
                input.content
            );
            nav("/", {replace: true})

        }

    }

    return (
        <div>
            <Header 
                title={"일기 수정하기"}
                leftChild={<Button onClick={()=>nav(-1)} text={"< 뒤로 가기"}/>}
                rightChid={<Button onClick={onClickDelete} text={"삭제하기"} type={"NEGATIVE"}/>}
            />
            <Editor initData={curDiaryItem} onSubmit={onSubmit}/>
        </div>
    )
}

export default Edit;