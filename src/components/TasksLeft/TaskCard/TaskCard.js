// ./components/Tasksleft/TaskCard/TaskCard.js

import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { TASK_STATUS } from '../../../util/constants'
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';

import Avatar from "@material-ui/core/Avatar";
import Moment from "moment";
import LocationSVG from "@material-ui/icons/PlaceOutlined";
import DateSVG from "@material-ui/icons/Event";
import TimeSVG from "@material-ui/icons/WatchLaterOutlined";

const styles = {
    root: {
        borderLeft: "3px solid",
        margin: '10px 0',
        [`&.${TASK_STATUS.ASSIGNED}`]: {
            borderLeftColor: '#f4be36',
            '& .bottomRow .status':{
                color: '#f4be36',
                textTransform: 'uppercase'
            }
        },
        [`&.${TASK_STATUS.COMPLETED}`]: {
            borderLeftColor: '#545a77',
            '& .bottomRow .status':{
                color: '#545a77',
                textTransform: 'uppercase'
            }
        },
        [`&.${TASK_STATUS.OPEN}`]: {
            borderLeftColor: 'limegreen',
            '& .bottomRow .status':{
                color: 'limegreen',
                textTransform: 'uppercase'
            }
        },
        '& .bottomRow':{
            fontSize: 11
        },
        '& .content span': {
            color: '#545a77',
            margin: '3px 0'
        },
        '& > div:first-of-type': {
            padding: "6px 12px"
        },
    },
    heading: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    avatar: {
        width: 34,
        height: 34,
        float: 'right',
    },
    active:{
        position: 'relative',
        display: 'block',
        '& > div':{
            boxShadow: 'none'
        },
        '&::after':{
            content: "' '",
            position: 'absolute',
            top: 0,
            border: '1px solid #00c9ff',
            boxShadow: '0 0 1px 1px rgba(2, 165, 209, .29)',
            bottom: 0,
            left: 0,
            right: 0,
            display: 'block',
            borderRadius: '4px',
            width: '100%'
        }        
    },
    smallSVG: {
        fontSize: 16,
        verticalAlign: 'middle'
    } 
}

const TaskCard = ({ task, classes }) => {
    console.log(classes);
        
    return (<NavLink to={'/'+task.id} activeClassName={classes.active}>
         <Card classes={{ root: classes.root }} className={task.status}>
            <CardContent>
                <div className={classes.heading}>
                    <Typography variant="subtitle1" component="span">
                        {task.title}
                    </Typography>
                    <Typography variant="h5" component="span">
                        ${task.budget}
                    </Typography>
                </div>
                <div className='content'>
                    <Avatar className={classes.avatar}>{task.postedBy.firstName[0]}</Avatar>
                    <Typography variant="caption">
                        <LocationSVG className={classes.smallSVG} /> {`${task.location.city}, ${task.location.state}`}
                    </Typography>
                    <Typography variant="caption">
                        <DateSVG className={classes.smallSVG} /> {Moment(task.date).format('ddd, D MMM')}
                    </Typography>
                    <Typography variant="caption">
                        <TimeSVG className={classes.smallSVG} /> {task.time.length > 4 ? task.time : task.time.join(', ')}
                    </Typography>
                </div>
                <hr />
                <Typography variant="caption" className="bottomRow">
                    <span className="status">{task.status}</span> - 1 offers
            </Typography>
            </CardContent>
        </Card>
        </NavLink>
     );
}
 
export default withStyles(styles)(TaskCard);