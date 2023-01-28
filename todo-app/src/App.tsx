import React, {FC, useState, useEffect, useRef} from 'react';
import { ITodo } from './types/types';
import ToDoList from './components/ToDoList';
import './App.css';

const App:FC = ()=> {

  const [tasks,setTasks] = useState<ITodo[]>([])
  const [inputValue,setInputValue] = useState('')

  const inputRef = useRef<HTMLInputElement>(null)

  const addNewTodo = (e: React.FormEvent<HTMLFormElement>,value:string)=> {
    e.preventDefault();
    if(value){
      setTasks(
        [...tasks, {
          id:Date.now(),
          title:inputValue,
          complete: false
        }]
      )
      setInputValue('')
    }
  }

  const deleteTodoItem = (id:number | string):void => {
    setTasks(tasks.filter(task=>task.id !== id))
  }

  const toggleToDoITem = (id:number | string) : void => {
    setTasks(tasks.map(task=>{
      if (task.id !== id) return task
      return {
        ...task,
        complete: !task.complete
      }
    }))

  }

  useEffect(()=>{
    if(inputRef.current) inputRef.current.focus()
  },[])

  return (
    <div>
      <div>
       <form className='app__form' onSubmit={(e)=>addNewTodo(e,inputValue)}>
          <label htmlFor='addTodoItem' >Add new task:</label>
          <input 
            ref={inputRef}
            name='addTodoItem' 
            value={inputValue} 
            id='addTodoItem' 
            onChange={(e: React.FormEvent<HTMLInputElement>)=>setInputValue(e.currentTarget.value)}/>
          <input type="submit" className='app__submit' value="Add new Task"  />
       </form>
      </div>
      <div>
        <ToDoList 
          deleteTodoItem={deleteTodoItem} 
          toggleToDoITem={toggleToDoITem} 
          items={tasks} 
        />
      </div>
    </div>
  );
}

export default App;
