// ./components/TasksRight/TasksRight.js

import React from 'react';
import TasksMap from './TasksMap/TasksMap';
import TaskDetails from './TaskDetails/TaskDetails';
import Grid from '@material-ui/core/Grid';

const TasksRight = ({ task, visible, width }) => {
    const display = visible ? {} : { display: 'none' } 

    return (<Grid item xs={width} className='i-scroll' style={display}>
        { task ? <TaskDetails task={task} /> : <TasksMap /> }         
    </Grid> );
}
 
export default TasksRight;