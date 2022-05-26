import React, { useState } from 'react';

import './TaskForm.css';

const TaskForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');

    const titleExchangeHandler =(event) =>{
        setEnteredTitle(event.target.value);

    };

    const submitHandler = (event) =>{
        event.preventDefault();

        const taskData = {
            title: enteredTitle,
        }

        console.log(taskData);
        props.onSaveTaskData(taskData);
        setEnteredTitle('');

    };

    return(
        <form onSubmit={submitHandler}>
            <div className='new-task__controls'>
                <div className='new-task__control'>
                    <label>Titulo</label>
                    <input type='text' value={enteredTitle} onChange={titleExchangeHandler}></input>
                </div>
            </div>
            <div className='new-task__actions'>
                <button type='submit'>Adicionar Tarefa</button>
            </div>
        </form>
    )

};

export default TaskForm;