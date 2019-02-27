import React from 'react';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography'

const TaskMap = ({ task }) => {

    return <Card>
        <CardContent>
            <Typography variant="headline">
                Tasks Map
            </Typography>
           
        </CardContent>
    </Card>;
}

export default TaskMap;