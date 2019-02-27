// ./components/TasksRight/TasksRight.js

import React from 'react';
import TasksMap from './TasksMap/TasksMap';
import TaskDetails from './TaskDetails/TaskDetails';
import Grid from '@material-ui/core/Grid';
import { Route } from "react-router-dom";

const TasksRight = ({ task }) => {
    
    return (<Grid item xs={4} className='i-scroll'>
        { task ? <TaskDetails task={task} /> : <TasksMap /> }         
    </Grid> );
}
 
export default TasksRight;