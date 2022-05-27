import React, { useState } from 'react';
import Card from '../UI/Card';
import './TaskItem.css';



const TaskItem = (props, deleteTask) =>{
    const [title] = useState(props.title);

    // function deleteTask(id){
    //     const updateTasks = [...Tasks].filter((task) => Tasks.id !== id);
        
    //     setTasks(updateTasks);
    // };

    return(
        <Card className='task-item'>
            <div className='task-item__description'>
                <h2>{title}</h2>
            </div>
            {/* <button onClick={deleteTask}>Remover</button> */}
        </Card>
    );

};

export default TaskItem;