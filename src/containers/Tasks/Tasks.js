// ./containers/Tasks/Tasks.js

import React, { Component } from 'react';
import TasksLeft from '../../components/TasksLeft/TasksLeft';
import TasksRight from '../../components/TasksRight/TasksRight';
import Grid from '@material-ui/core/Grid'

class Tasks extends Component {
    state = {
        tasks: Array(8).fill(0).map( (_, i) => ({
            id: '' + i,
            title: `Task ${i}`,
            description: `I am task ${i}`,
            status: "Completed" }))
    }

    render() { 
        const {tasks} = this.state;
        const { taskId } = this.props.match.params;

        let selectedTask = null;
        if (taskId) {
            selectedTask = tasks[taskId]
        }

        return ( <Grid container spacing={16} justify="center">
                    <TasksLeft tasks={tasks} />
                    <TasksRight task={selectedTask} />
                </Grid>);
    }}
 
export default Tasks;