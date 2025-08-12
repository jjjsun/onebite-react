import './App.css'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'
import { useState, useRef, useReducer, createContext, useMemo } from 'react'

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().toDateString()
  },
  {
    id: 1,
    isDone: false,
    content: "수영하기",
    date: new Date().toDateString()
  },
  {
    id: 2,
    isDone: false,
    content: "운동하기",
    date: new Date().toDateString()
  }
]

function reducer(state, action){
  switch(action.type){
    case 'CREATE': 
      return [action.data, ...state]
    case 'UPDATE':
      return state.map((item)=> item.id === action.targetId ? {...item, isDone: !item.isDone}: item)
    case 'DELETE':
      return state.filter((item)=>item.id !==action.targetId)
    default:
      return state;
  }

}

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {


  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().toDateString()
      }
    })
  }

  const onUpdate = (targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId
    })
  }

  const onDelete = (targetId) => {
    dispatch({
      type:"DELETE",
      targetId: targetId
    })
  }

  const memoizedDispatch = useMemo(()=>{
    return {onCreate, onDelete, onUpdate};
  },[])

  return (
    <div className='App'>
      <Header />
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={memoizedDispatch}>
          <Editor />
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  )
}

export default App
