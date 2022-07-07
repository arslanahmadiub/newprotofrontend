import React from 'react'
import {
    Grid,
    InputLabel,
    FormControl,
    Select,
    MenuItem,
    styled,
    Paper,
    Chip,
    TextField,
} from '@mui/material'
import TagFacesIcon from '@mui/icons-material/TagFaces'

const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
}))

const TaskServices = () => {
    const handleDelete = () => {}

    return (
        <Grid container spacing={3}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <FormControl fullWidth>
                    <InputLabel id="select-service-label">
                        Select Service
                    </InputLabel>
                    <Select
                        labelId="select-service-label"
                        label="Select Service"
                    >
                        <MenuItem value={10}>Dummy Service 1</MenuItem>
                        <MenuItem value={20}>Dummy Service 2</MenuItem>
                        <MenuItem value={30}>Dummy Service 3</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <Paper
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        listStyle: 'none',
                        p: 0.5,
                        m: 0,
                        border: '1px solid lightGray',
                        boxShadow: 'none',
                    }}
                    component="ul"
                >
                    <ListItem>
                        <Chip
                            color="primary"
                            label="Service 1"
                            onDelete={handleDelete}
                        />
                    </ListItem>
                    <ListItem>
                        <Chip
                            color="primary"
                            label="Service 2"
                            onDelete={handleDelete}
                        />
                    </ListItem>
                    <ListItem>
                        <Chip
                            color="primary"
                            label="Service 3"
                            onDelete={handleDelete}
                        />
                    </ListItem>
                </Paper>
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
