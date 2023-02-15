import './App.css';
import { useState } from 'react';

function App(){
  const [newTask, setNewTask] = useState("");
  const [todoList, setTodoList] = useState([]);

  const inputHanlder = (event) => {
    setNewTask(event.target.value);
  }

  const addTaskHandler = () => {
    const taskObj = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      isComplete: false
    }

    setTodoList([...todoList, taskObj]);
  }

  const deleteHandler = (id) => {
    setTodoList(todoList.filter((taskObj) => taskObj.id !== id ))
  }

  const isCompleteHandler = (id) => {
    setTodoList(todoList.map((taskObj) => {
      
        if(taskObj.id === id){
          return{...taskObj, isComplete: true}
        }else{
          return taskObj;
        }
      
    }))
  }

  return(
    <div className='App'>

      <div className='Input' onChange={inputHanlder}>
        <input type="text"/>
        {" "}
        <button onClick={addTaskHandler}>Add Task</button>
      </div>

      <div className='List'>
        {todoList.map((taskObj) => {
          return(
            <div style={{backgroundColor: taskObj.isComplete ? "green" : 'cyan'}}>
              <h1>{taskObj.taskName}</h1>
              <button onClick={() => deleteHandler(taskObj.id)}>delete</button>
              {" "}
              <button onClick={ () => isCompleteHandler(taskObj.id)}>Done</button>
            </div>
            
          )
        })}
      </div>
    </div>
  )
}

export default App; 