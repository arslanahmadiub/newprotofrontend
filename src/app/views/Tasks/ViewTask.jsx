import { Grid, Typography } from '@mui/material'
import { getTask } from 'api-services/TaskApi'
import { isEmpty } from 'lodash'
import React, { useState, useEffect } from 'react'
import TaskViewCard from './TaskViewCard'

const ViewTask = () => {
    const [loading, setLoading] = useState(false)
    const [taskData, setTaskData] = useState([])

    const getTaskData = async () => {
        setLoading(true)
        try {
            const { data } = await getTask()
            if (data.success) {
                setTaskData(data.data)
            }
            setLoading(false)
        } catch (error) {
            console.log('Error', error)
            setLoading(false)
        }
    }

    useEffect(() => {
        getTaskData()
    }, [])

    if (!loading && isEmpty(taskData)) {
        return (
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid
                    item
                    xs={12}
                    sx={{
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 'calc(100vh - 128px)',
                    }}
                >
                    <Typography variant="h3">Task not found.</Typography>
                </Grid>
            </Grid>
        )
    }

    return (
        <Grid container spacing={5} direction="row">
            {taskData.map((item, index) => {
                return (
                    <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                        <TaskViewCard data={item} />
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default ViewTask
