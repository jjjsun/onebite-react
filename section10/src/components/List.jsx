import "./List.css"
import TodoItem from "./TodoItem"
import { useState,useMemo } from "react"

const List = ({todos, onUpdate, onDelete}) => {

    const [search, setSearch] = useState("");

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    }

    const getFilteredData = () => {
        if(search === ""){
            return todos;
        }
        return todos.filter((todo)=> todo.content.toLowerCase().includes(search.toLowerCase()))
    }

    const filteredTodos = getFilteredData();

    // const getAnalyzedData = () => {
    //     const totalCount = todos.length;
    //     const doneCount = todos.filter((todo) => todo.isDone).length;
    //     const notDoneCount = totalCount - doneCount;

    //     return {
    //         totalCount,
    //         doneCount,
    //         notDoneCount
    //     }
    // }

    // useMemo(()=>{},[])
    // 의존성배열: deps. 
    // 저기 (두번째 인수로 전달한) deps [] 이 중괄호에 들어가는 값이 바뀌면 (첫번째 인수로 전달한)콜백함수를 다시실행하는 함수
    // 아무것도 deps로 전달되지 않았을때는 첫번째 콜백함수의 연산수행과 반환이 컴퍼넌트가 최초에 랜더링 되었을때 딱 한번만 수행함
    const {totalCount, doneCount, notDoneCount} =  useMemo(()=>{
        const totalCount = todos.length;
        const doneCount = todos.filter((todo) => todo.isDone).length;
        const notDoneCount = totalCount - doneCount;

        return {
            totalCount,
            doneCount,
            notDoneCount
        }
    },[todos])

    // const {totalCount, doneCount, notDoneCount} = getAnalyzedData();

    return (
        <div className="List">
            <h4>Todo List 🌱</h4>
            <div>total:{totalCount}</div>
            <div>done:{doneCount}</div>
            <div>notdone:{notDoneCount}</div>
            <input value={search} onChange={onChangeSearch} placeholder="검색어를 입력하세요"></input>
            <div className="todos_wrapper">
            {filteredTodos.map((todo)=> {
                return (
                    <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete}/>
                );
            })}
            </div>
        </div>
    )
}

export default List 