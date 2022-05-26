import TaskItem from './TaskItem'
import Card from "../UI/Card";
import './Tasks.css';

const Tasks = (props) =>{

    const renderTaskItem = (tasks, index) =>(

        <TaskItem
            key = {index}
            title={tasks.title}
        />
    );

    return(
        <Card className='tasks'>
            {props.tasks?.map((tasks, index) => renderTaskItem(tasks, index))}
        </Card>
    );
};



export default Tasks;