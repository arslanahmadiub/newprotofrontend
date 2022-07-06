import React from 'react'
import { Button, Card, CardContent, Grid } from '@mui/material'

import { styled } from '@mui/system'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import Select, { SelectChangeEvent } from '@mui/material/Select'

const TextField = styled(TextValidator)(() => ({
    width: '100%',
    marginBottom: '16px',
}))

const CarsModel = (props) => {
    return (
        <Grid container spacing={3}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <h3>{props.number + 1}</h3>
            </Grid>
            <Grid item lg={3} md={3} sm={12} xs={12}>
                <TextField
                    label="Make"
                    type="text"
                    name="carMake"
                    // value={serviceName || ''}
                />
            </Grid>
            <Grid item lg={3} md={3} sm={12} xs={12}>
                <TextField
                    label="Model"
                    type="text"
                    name="carModel"
                    // value={serviceName || ''}
                />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
                <Grid container>
                    <Grid item lg={5} md={5} sm={12} xs={12}>
                        <TextField
                            label="Year"
                            type="text"
                            name="carYear"
                            // value={serviceName || ''}
                        />
                    </Grid>
                    <Grid
                        item
                        lg={2}
                        md={2}
                        sm={12}
                        xs={12}
                        sx={{
                            justifyContent: 'center',
                            display: 'flex',
                        }}
                    >
                        <h3>To</h3>
                    </Grid>
                    <Grid item lg={5} md={5} sm={12} xs={12}>
                        <TextField
                            label="Year"
                            type="text"
                            name="carYear"
                            // value={serviceName || ''}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Parts</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Select"
                    >
                        <MenuItem value={10}>Dummy Part 1</MenuItem>
                        <MenuItem value={20}>Dummy Part 2</MenuItem>
                        <MenuItem value={30}>Dummy Part 3</MenuItem>
                    </Select>
                </FormControl>
            </Grid>

            <Grid item lg={3} md={3} sm={12} xs={12}>
                <TextField
                    label="Parts Cost"
                    type="text"
                    name="partsCost"
                    // value={serviceName || ''}
                />
            </Grid>
            <Grid item lg={3} md={3} sm={12} xs={12}>
                <TextField
                    label="Labor Cost"
                    type="text"
                    name="laborCost"
                    // value={serviceName || ''}
                />
            </Grid>
            <Grid item lg={3} md={3} sm={12} xs={12}>
                <TextField
                    label="Discount"
                    type="text"
                    name="discount"
                    // value={serviceName || ''}
                />
            </Grid>
            <Grid item lg={3} md={3} sm={12} xs={12}>
                <TextField
                    label="Extimate Cost"
                    type="text"
                    name="estimateCost"
                    // value={serviceName || ''}
                />
            </Grid>
        </Grid>
    )
}

export default CarsModel
