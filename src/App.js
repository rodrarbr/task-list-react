import React, { useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTasks/NewTask"

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
    setTasks(oldTasks => {
      return [task, ...oldTasks]
    });
  };
  

  return (
    <div>
      <NewTask onAddTask={addTaskHandler}/>
      <Tasks item={tasks}/>
    </div>
  );
};

export default App;
