import './List.css'
import TodoItem from './TodoItem';
import { useState } from 'react';


const List = ({todos,onUpdate, onDelete}) => {

    const [search, setSearch] = useState("");

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    }

    const getFilteredData = () => {
        if(search === ""){
            return todos;
        }
        return todos.filter((todo)=>todo.content.toLowerCase().includes(search.toLowerCase()));
    }

    const filteredData = getFilteredData();

    return (
        <div className='List'>
            <h4>Todo List 🌱</h4>
            <input 
                value={search}
                onChange={onChangeSearch}
                placeholder='검색어를 입력하세요'/>
            <div className='todos_wrapper'>
                {filteredData.map((todo)=>{
                    return <TodoItem onUpdate={onUpdate} onDelete={onDelete} key={todo.id} {...todo}/>})}
            
            </div>
        </div>
    )
}


export default List;