// ./components/TasksRight/TasksRight.js

import React from 'react';
import TasksMap from './TasksMap/TasksMap';
import TaskDetails from './TaskDetails/TaskDetails';
import Grid from '@material-ui/core/Grid';

const TasksRight = ({ task, visible, width }) => {
    const styles = visible ? {} : { display: 'none' } 

    styles.backgroundColor = 'white';
    // styles.zIndex = '-1';

    return (<Grid item xs={width} className='i-scroll' style={styles}>
        { task ? <TaskDetails task={task} /> : <TasksMap /> }         
    </Grid> );
}
 
export default TasksRight;