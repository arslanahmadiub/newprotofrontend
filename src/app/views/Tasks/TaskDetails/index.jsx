import React from 'react'
import Grid from '@mui/material/Grid'

import TaskStatus from './TaskStatus'
import Attachments from './Attachments'
import CarModelDetails from './CarModelDetails'
import CarRecentOrders from './CarRecentOrders'
import CommentsSection from './CommentsSection'

const index = () => {
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
                    <TaskStatus />
                    <CarModelDetails />
                </Grid>
                <Grid item lg={4} md={4} sm={12} xs={12}>
                    <Attachments />
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <CarRecentOrders />
                </Grid>
                <Grid item lg={10} md={10} sm={12} xs={12}>
                    <CommentsSection />
                </Grid>
            </Grid>
        </div>
    )
}

export default index
