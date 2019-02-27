// ./components/TasksLeft/TasksLeft.js

import React from 'react';
import TaskCard from "./TaskCard/TaskCard"
import Grid from '@material-ui/core/Grid'

const TasksLeft = ({ tasks }) => {
    const cards = tasks.map(task => <TaskCard key={task.id} task={task} />)

    return (<Grid item xs={3} className="i-scroll tlc-width">{cards}</Grid> );
}
 
export default TasksLeft;