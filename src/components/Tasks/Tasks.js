import TaskItem from './TaskItem'
import Card from "../UI/Card";
import './Tasks.css';

const Tasks = (props) =>{
    return(
        <Card className='tasks'>
            <TaskItem
            title={props.item[0].title}
            />
            <TaskItem
            title={props.item[1].title}
            />
            <TaskItem
            title={props.item[2].title}
            />
        </Card>
    );
};

export default Tasks;