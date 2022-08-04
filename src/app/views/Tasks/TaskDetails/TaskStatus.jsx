import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}))

const TaskStatus = () => {
    return (
        <Box sx={{ flexGrow: 1, backgroundColor: 'white' }}>
            <Grid container spacing={1}>
                <Grid item xs={8} direction={'column'} spacing={1}>
                    <Box sx={{ display: "flex", flexDirection: 'row', justifyContent: "space-between"}}>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox defaultunChecked />}
                                label="Mark as completed"
                            />
                        </FormGroup>
                        <Box mr={0}>...</Box>
                    </Box>
                </Grid>

                <Grid item xs={8} direction={'column'} spacing={1}>
                    3
                </Grid>

                <Grid item xs={8} direction={'column'} spacing={1}>
                    4
                </Grid>

                <Grid item xs={8} direction={'column'} spacing={1}>
                    5
                </Grid>
            </Grid>
        </Box>
    )
}

export default TaskStatus
