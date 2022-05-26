import React, { useState } from 'react';
import Card from '../UI/Card';
import './TaskItem.css'

const TaskItem = (props) =>{
    const [title, setTitle] = useState(props.title);

    const clickHandler = () =>{
        setTitle('UPDATED!');
        console.log(title);
    };

    return(
        <Card className='task-item'>
            <div className='task-item__description'>
                <h2>{title}</h2>
            </div>
            <button onClick={clickHandler}>Mudar Titulo</button>
        </Card>
    );

};

export default TaskItem;