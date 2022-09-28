import React, { useState, useRef, useEffect } from 'react'
import  './styles.css'
import {Todo} from "./Model"
import {AiFillEdit, AiFillDelete} from "react-icons/ai"
import {MdDone} from "react-icons/md"
import { Draggable } from 'react-beautiful-dnd'


type Props = {
    index: number
    item: Todo
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>

}

export default function SingleTodo({index, item, todos, setTodos}: Props) {
    const [edit, setEdit] = useState<boolean>(false)
    const [editTodo, setEditTodo] = useState<string>(item.todo)   
    
    function handleDone(id : Number){
        setTodos(
            todos.map(todo => todo.id === id ? {...todo,isDone: !todo.isDone} : todo))

    }
    function handleDelete(id : Number) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    function handleEdit(e: React.FormEvent, id : Number){
        e.preventDefault()
        setTodos(todos.map(todo =>
            (todo.id === id) ? {...todo, todo:editTodo} : todo))
        setEdit(false)
    }

    useEffect(()=>{
        inputRef.current?.focus()
    },[edit])

    const inputRef = useRef<HTMLInputElement>(null)
    console.log(item.isDone)
  return (
    <Draggable draggableId={item.id.toString()} index={index}>
    {(provided,snapshot)=>(

        <form className={`todo_single ${snapshot.isDragging? 'drag' : ''}` }
        onSubmit={(e)=> handleEdit(e, item.id)}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
        >
        {
            edit? (
                <input ref={inputRef} value={editTodo} onChange={(e)=> setEditTodo(e.target.value)} className='todos_single--text'/>
            ) :
            
        
        item.isDone? 
            (<s className='todos_single--text'>{item.todo}</s>) 
        :
            ( <span className='todos_single--text'>{item.todo}</span>)
         
        }

        <div>
            <span className='icon' onClick={() =>{
                if(!edit && !item.isDone){
                    setEdit(!edit)
                }
            }}><AiFillEdit/></span>
            <span className='icon' onClick={()=> handleDelete(item.id)}><AiFillDelete/></span>
            <span className='icon' onClick={()=> handleDone(item.id)}><MdDone/></span>

        </div>
    </form>
    )}

    </Draggable>
   
  )
}
