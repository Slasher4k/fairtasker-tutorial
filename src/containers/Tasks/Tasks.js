// ./containers/Tasks/Tasks.js

import React, { Component } from 'react';
import TasksLeft from '../../components/TasksLeft/TasksLeft';
import TasksRight from '../../components/TasksRight/TasksRight';
import Grid from '@material-ui/core/Grid'

import MediaQuery from 'react-responsive';

class Tasks extends Component {
    state = {
        selectedTask: null,
        tasks: Array(8).fill(0).map( (_, i) => ({
            id: '' + i,
            title: `Task ${i}`,
            description: `I am task ${i}`,
            status: "Open" }))
    }

    componentDidUpdate(prevProps){
        const { taskId: previousId } = prevProps.match.params;
        const { taskId } = this.props.match.params;

        if (previousId !== taskId){
            const { tasks } = this.state;

            let selectedTask = null;
            if (taskId) {
                selectedTask = tasks[taskId]
            }

            this.setState({ selectedTask })
        }
        
    }

    render() { 
        const { tasks, selectedTask} = this.state;        

        return ( <Grid container spacing={16} justify="center">
                    <MediaQuery maxWidth={880}>
                        {(matches) =>{
                            let leftVisible =  true;
                            let rightVisible = true;
                            let leftWidth = 3;
                            let rightWidth = 5;
                            

                            if (matches) {
                                rightVisible = selectedTask !== null;
                                leftVisible = !rightVisible;
                                leftWidth = 6;
                                rightWidth = 10;
                            }                        

                            return  <>
                                <TasksLeft tasks={tasks} visible={leftVisible} width={leftWidth}/>
                                <TasksRight task={selectedTask} visible={rightVisible} width={rightWidth}/>
                            </>
                        } }
                    </MediaQuery>
                </Grid>);
    }}
 
export default Tasks;