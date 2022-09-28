import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import {Todo} from './Model'
import SingleTodo from './SingleTodo'
import  './styles.css'

interface Props{
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
    completed: Todo[]
    setCompleted: React.Dispatch<React.SetStateAction<Todo[]>>
    
}
export default function (props: Props) {
    console.log(props.completed)
  return (
    <div className="container">
        <Droppable droppableId='TodosList'>
            {(provided,snapshot) => (
                    <div className={`todos ${snapshot.isDraggingOver? 'dragactive': ''}` }
                        ref={provided.innerRef} 
                        {...provided.droppableProps}>
                        <span className='todos_heading'>Active Task</span>
                        {
                            props.todos?.map((item, index) => (
                                <SingleTodo 
                                index={index}
                                item={item}
                                key={item.id}
                                todos={props.todos}
                                setTodos={props.setTodos}
                                />
                                
                            ))
                            
                        }
                        {provided.placeholder}

                    </div>
                )
            }
            </Droppable>
            <Droppable droppableId='TodosRemove'>
                {(provided,snapshot)=>(
                    <div className={`todos completed ${snapshot.isDraggingOver? 'dragcomplete': ''}`} 
                        ref={provided.innerRef}
                        {...provided.droppableProps}>
                         <span className='todos_heading'>Completed Task</span>
                        {
                            props.completed?.map((item, index) => (
                                    <SingleTodo 
                                    key={item.id}
                                    index={index}
                                    item={item}
                                    todos={props.completed}
                                    setTodos={props.setCompleted}
                                    />
                            ) )
                        }
                        {provided.placeholder}
                    </div>
                )
                }
            </Droppable>

            
        
    </div>
    )  
}
