import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'

import TaskStatus from './TaskStatus'
import Attachments from './Attachments'
import CarModelDetails from './CarModelDetails'
import CarRecentOrders from './CarRecentOrders'
import CommentsSection from './CommentsSection'

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }))

const index = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
                <Grid item xs={8} direction={'column'} spacing={1}>
                    <TaskStatus />
                    <CarModelDetails />
                </Grid>
                <Grid item xs={4}>
                    <Attachments />
                </Grid>
                <Grid item xs={12}>
                    <CarRecentOrders />
                </Grid>
                <Grid item xs={8}>
                    <CommentsSection />
                </Grid>
            </Grid>
        </Box>
    )
}

export default index
