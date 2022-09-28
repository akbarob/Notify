import React, { useState } from 'react';
import './App.css';
import Input from './Components/input';
import { Todo } from './Components/Model';
import TodoList from './Components/TodoList';
import { DragDropContext, DropResult } from 'react-beautiful-dnd'


const App: React.FC = () => {

  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])
  const [completed, setCompleted] = useState<Todo[]>([])

  const handleAdd =(e: React.FormEvent) => {
    e.preventDefault();
    if(todo){
      setTodos([...todos,{id:Date.now(), todo:todo , isDone:false}])
    setTodo("")
    }
  }

  console.log(todos)

  const onDragEnd = (result:DropResult)=> {
    const {source, destination} = result
    console.log(result)
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    let add;
    let active = todos;
    let complete = completed;
    // Source Logic
    if (source.droppableId === "TodosList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    // Destination Logic
    if (destination.droppableId === "TodosList") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }

    setCompleted(complete);
    setTodos(active);
    
     
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <span className='heading'>Notify</span>
        <Input todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
        <TodoList 
        todos={todos}
         setTodos={setTodos}
          completed={completed} 
          setCompleted={setCompleted}
          />
      </div>
      
    </DragDropContext>
  );
}

export default App;

