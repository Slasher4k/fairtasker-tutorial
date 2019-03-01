// ./components/TasksLeft/TasksLeft.js

import React from 'react';
import TaskCard from "./TaskCard/TaskCard";
import Grid from '@material-ui/core/Grid';
import Spinner from '../UI/Spinner/Spinner';

import { ScrollContainer } from "scrollmonitor-react";
import Watched from "../UI/Watched/Watched";

const TasksLeft = ({ tasks, visible, width, scrollContainer, loadMore }) => {
    let taskCards = null;
    
    if (tasks) {
        taskCards = tasks.map(([id, task]) => {
                task.id = id;
                return <TaskCard key={id} task={task} />
        })
        
        taskCards.splice(-2,0,<Watched 
            key={'watched'}
            scrollContainer={scrollContainer}
            fullyEnterViewport={loadMore}
        />)
    }

    const display = visible ? {} : { display: 'none' } 

    return (<Grid item xs={width} className="i-scroll tlc-width" style={display}>
        {taskCards || <Spinner /> }
    </Grid> );
}
 
export default ScrollContainer(TasksLeft);