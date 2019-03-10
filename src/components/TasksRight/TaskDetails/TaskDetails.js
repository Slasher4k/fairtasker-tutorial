// ./components/TasksRight/TaskDetails/TaskDetails.js

import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import classes from './TaskDetails.module.css';
import TaskDetail from './TaskDetail/TaskDetail';
import Moment from "moment";
import Button from "@material-ui/core/Button";
import OwnerSVG from "@material-ui/icons/Face";
import PlaceSVG from "@material-ui/icons/PlaceOutlined";
import DateSVG from "@material-ui/icons/Event";

const TaskDetails = ({ task }) => {
    const { title, createdAt, location, date, description, status, postedBy, budget } = task;

    return <CardContent>
            <div className={classes.taskDetailsTop}>
                <div className={classes.topLeft}>
                <div><span className={`${classes.taskStatus} ${classes[status]}`} >{status.toUpperCase()}</span></div>
                
                    <Typography variant="h5" component="h2" className={classes.title}>
                        {title}
                    </Typography>

                    <TaskDetail heading="posted by"
                        icon={<OwnerSVG />}
                        left={`${postedBy.firstName} ${postedBy.lastName[0]}.`}
                        right={Moment(createdAt).fromNow()} />

                    <TaskDetail heading="location"
                        icon={<PlaceSVG />}
                        left={`${location.city}, ${location.state}`} />

                    <TaskDetail heading="due date"
                        icon={<DateSVG />}
                        left={Moment(date).format('dddd, Do MMM YYYY')} />
                
                </div>
                <div className={classes.topRight}>
                    <div className={classes.budget}>
                    <Typography variant="subtitle2" align="center">
                    TASK BUDGET
                    </Typography>
                    <Typography variant="h5" align="center" className={classes.amount}>
                    {`$${budget}`}
                    </Typography>
                    <Button variant="contained" fullWidth color="primary">Make an offer</Button>
                    </div>
                </div>
            </div>
        <TaskDetail heading="details"
            left={description} />  
        </CardContent>;

}

export default TaskDetails;