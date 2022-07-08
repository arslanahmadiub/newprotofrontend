import React from 'react'
import { Grid, Autocomplete } from '@mui/material'

import { styled } from '@mui/system'

import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'

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
                <Autocomplete
                    multiple
                    id="tags-outlined"
                    options={top100Films}
                    getOptionLabel={(option) => option.title}
                    filterSelectedOptions
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

const top100Films = [
    { title: 'Part 1' },
    { title: 'Part 2' },
    { title: 'Part 3' },
    { title: 'Part 4' },
    { title: 'Part 5' },
]
