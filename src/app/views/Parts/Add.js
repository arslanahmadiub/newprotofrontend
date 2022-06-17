import React from 'react'
import { Paper, Grid } from '@mui/material'

const Add = () => {
    const paperStyle = {
        hieght: '70vh',
        width: 580,
        margin: '40px auto',
    }
    return (
        <div>
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    Add Parts
                </Paper>
            </Grid>
        </div>
    )
}

export default Add
