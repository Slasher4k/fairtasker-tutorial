import React from 'react';
import Typography from "@material-ui/core/Typography";
import classes from "./TaskDetail.module.css";

const TaskDetail = ({ heading, left = null, right = null, icon = null }) => {
    return (<div className={classes.wrapper}>
        {icon && <div className={classes.iconContainer}>{icon}</div>}
        <div className="content-container">
            <Typography variant="subtitle2" className={classes.heading}>{heading.toUpperCase()}</Typography>
            <div className={classes.detail}>
                {(left || right) && <Typography variant="body1">{left}</Typography>}
                {right && <Typography variant="body1">{right}</Typography>}
            </div>
        </div>
    </div>);
}

export default TaskDetail;