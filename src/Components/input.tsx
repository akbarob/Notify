import React, { useRef } from 'react'
import  './styles.css'

interface Props{
    todo: string
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd:(e: React.FormEvent) => void
}


export default function Input({todo, setTodo, handleAdd}: Props) {
     const inputRef = useRef<HTMLInputElement>(null)
    console.log(todo)
  return (
    <form className='input' onSubmit={(e) => {
        handleAdd(e)
        inputRef.current?.blur()
    }}>
        <input
        ref={inputRef} type='input' placeholder='Enter a task' 
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className='input_box'/>
        <button className='input_submit' type='submit'>Go</button>

    </form>
  )
}
