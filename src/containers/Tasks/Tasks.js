// ./containers/Tasks/Tasks.js

import React, { Component } from 'react';
import TasksLeft from '../../components/TasksLeft/TasksLeft';
import TasksRight from '../../components/TasksRight/TasksRight';
import Grid from '@material-ui/core/Grid';
import MediaQuery from 'react-responsive';
import axios from '../../util/axios-tasks';

const NUM_TASKS_TO_FETCH = 10;

function initDataLoad() {
    return axios.get('tasks.json',{
        params:{
            orderBy:'"createdAt"',
            limitToLast: NUM_TASKS_TO_FETCH
        }
    })
}

function loadTask(taskId) {
    return axios.get(`tasks/${taskId}.json`)
}

class Tasks extends Component {
    state = {
        hasMore: true,
        isFetching: false,
        taskIds: [],
        selectedTask: null,
        tasks: null
    }

    componentDidMount(){
      
        const promises = [initDataLoad()];
        const { taskId } = this.props.match.params;

        if (taskId) {
            promises.push(loadTask(taskId))
        }

        Promise.all(promises).then((responses) => {
            console.log(responses)
            const { data: tasks } = responses[0];
            const tasksArray = Object.entries(tasks).reverse();
            const taskIds = tasksArray.map(([id]) => id)
            const newState = { tasks: tasksArray, taskIds };

            if (responses.length === 2) {
                newState.selectedTask = responses[1].data
            }

            this.setState(newState);
        })
    }

    componentDidUpdate(prevProps){
        
        const { taskId: previousId } = prevProps.match.params;
        const { taskId } = this.props.match.params;
        
        if (previousId !== taskId){
            let selectedTask = null;
            
            if (taskId) {
                const { tasks, taskIds } = this.state;
                let taskIndex = taskIds.findIndex(id => id === taskId);
                selectedTask = tasks[taskIndex][1];
            }

            this.setState({ selectedTask })
        }
        
    }

    loadMoreTasks = () => {
        const { hasMore, isFetching, tasks } = this.state;

        if (hasMore && !isFetching) {
            this.setState({isFetching: true});

            axios.get('tasks.json',{
                params:{
                    orderBy:'"createdAt"',
                    limitToLast: NUM_TASKS_TO_FETCH + 1,
                    endAt: tasks[tasks.length -1][1].createdAt
                }
            }).then(({data:tasks}) => {
                const tasksArray = Object.entries(tasks).reverse();
                tasksArray.shift()
                const newTaskIds = tasksArray.map(([id]) => id)
                
                if (tasksArray.length > 0) {
                    this.setState(({tasks, taskIds}) => {
                        const hasMore = tasksArray.length === NUM_TASKS_TO_FETCH;
                        console.log('set state load more',tasks, taskIds)
                        return {
                            isFetching: false,
                            tasks:[...tasks, ...tasksArray],
                            taskIds: [...taskIds, ...newTaskIds ],
                            hasMore
                        }
                    })
                }else{
                    this.setState({ hasMore: false, isFetching: false })                    
                }
            })
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
                                <TasksLeft tasks={tasks} visible={leftVisible} width={leftWidth} loadMore={this.loadMoreTasks}/>
                                <TasksRight task={selectedTask} visible={rightVisible} width={rightWidth}/>
                            </>
                        } }
                    </MediaQuery>
                </Grid>);
    }}
 
export default Tasks;