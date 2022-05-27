import React, { useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTasks/NewTask"
// import Card from "./components/UI/Card";

const modelTasks = [
  {
    id:'e1',
    title:'Levar o lixo pra fora',
  },
  {
    id:'e2',
    title:'Varrer a casa'
  },
  {
    id:'e3',
    title:'Estudar'
  }
];

const App = () => {
  const [tasks, setTasks] = useState(modelTasks);

  const addTaskHandler = task =>{
    setTasks((oldTasks) => {
      return [...oldTasks, task];
    });
    // console.log(tasks)
  };

  return (
    <div>
      <NewTask onAddTask={addTaskHandler}/>
      <Tasks tasks={tasks}/>
    </div>
    
  );
};

export default App;
