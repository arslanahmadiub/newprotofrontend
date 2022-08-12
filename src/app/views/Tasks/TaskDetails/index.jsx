import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'

import TaskStatus from './TaskStatus'
import Attachments from './Attachments'
import CarModelDetails from './CarModelDetails'
import CarRecentOrders from './CarRecentOrders'
import CommentsSection from './CommentsSection'
import { getTaskById } from 'api-services/TaskApi'
import { useParams } from 'react-router-dom'

const Main = () => {
    const params = useParams()
    const [loading, setLoading] = useState(false)
    const [taskData, setTaskData] = useState({})

    const getTask = async () => {
        setLoading(true)
        try {
            const { data } = await getTaskById(params.id)
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
        getTask()
    }, [])

    return (
        <div>
            <Grid container spacing={1}>
                <Grid
                    item
                    lg={8}
                    md={8}
                    sm={12}
                    xs={12}
                    direction={'column'}
                    spacing={1}
                >
                    <TaskStatus
                        data={taskData}
                        taskId={params.id}
                        reload={() => getTask()}
                    />
                    <CarModelDetails data={taskData} />
                </Grid>
                <Grid item lg={4} md={4} sm={12} xs={12}>
                    <Attachments
                        taskId={params.id}
                        reload={() => getTask()}
                        data={taskData}
                    />
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <CarRecentOrders data={taskData} />
                </Grid>
                <Grid item lg={10} md={10} sm={12} xs={12}>
                    <CommentsSection
                        taskId={params.id}
                        reCallApi={() => {
                            getTask()
                        }}
                        data={taskData}
                    />
                </Grid>
            </Grid>
        </div>
    )
}

export default Main
