import React from 'react'
import { Grid, TextField, Autocomplete } from '@mui/material'

const TaskServices = () => {
    return (
        <Grid container spacing={3}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <Autocomplete
                    multiple
                    id="tags-outlined"
                    options={topService}
                    getOptionLabel={(option) => option.title}
                    filterSelectedOptions
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Select Service"
                            placeholder="Select Service"
                        />
                    )}
                    ChipProps={{ color: 'primary' }}
                />
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <Autocomplete
                    multiple
                    id="tags-outlined"
                    options={topParts}
                    getOptionLabel={(option) => option.title}
                    filterSelectedOptions
                    defaultValue={[topParts[1], topParts[0]]}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Parts"
                            placeholder="Parts"
                        />
                    )}
                    ChipProps={{ color: 'primary' }}
                />
            </Grid>

            <Grid item lg={3} md={3} sm={6} xs={12}>
                <TextField
                    label="Parts Cost"
                    type="text"
                    value={'Dummy'}
                    fullWidth
                />
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12}>
                <TextField
                    label="Labor Cost"
                    type="text"
                    value={'Dummy'}
                    fullWidth
                />
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12}>
                <TextField
                    label="Discount Cost"
                    type="text"
                    value={'Dummy'}
                    fullWidth
                />
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12}>
                <TextField
                    label="Estimation Price"
                    type="text"
                    value={'Dummy'}
                    fullWidth
                />
            </Grid>
        </Grid>
    )
}

export default TaskServices

const topService = [
    { title: 'Service 1' },
    { title: 'Service 2' },
    { title: 'Service 3' },
    { title: 'Service 4' },
    { title: 'Service 5' },
]

const topParts = [
    { title: 'Parts 1' },
    { title: 'Parts 2' },
    { title: 'Parts 3' },
    { title: 'Parts 4' },
    { title: 'Parts 5' },
]
