import React from 'react';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography'

const TaskDetails = ({ task }) => {

    return <Card>
        <CardContent>
            <Typography variant="headline">
                {task.title}
            </Typography>
            <Typography variant="body1">
                {task.description}
            </Typography>
        </CardContent>
    </Card>;
}

export default TaskDetails;