import './TodoItem.css'
import { useContext } from 'react';
import { TodoDispatchContext } from '../App';

const TodoItem = ({id, isDone, content, date}) => {

    const {onUpdate, onDelete} = useContext(TodoDispatchContext);
    const onChangeCheckbox = () => {
        onUpdate(id);
    }
    const onClickButton = () => {
        onDelete(id);
    }


    return (
        <div className='TodoItem'>
            <input onChange={onChangeCheckbox} checked={isDone} type='checkbox'></input>
            <div className='content'>{content}</div>
            <div className='date'>{new Date(date).toLocaleDateString()}</div>
            <button onClick={onClickButton}>삭제</button>
        </div>
    )
}

export default TodoItem;