import React from 'react'
import { Grid, Autocomplete } from '@mui/material'

import { styled } from '@mui/system'

import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'

const TextField = styled(TextValidator)(() => ({
    width: '100%',
    marginBottom: '16px',
}))

const CarsModel = ({
    number,
    value,
    onChange,
    partsList,
    handelAutoCompletChange,
}) => {
    return (
        <Grid container spacing={3}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <h3>{number + 1}</h3>
            </Grid>
            <Grid item lg={3} md={3} sm={12} xs={12}>
                <TextField
                    label="Make"
                    type="text"
                    name="carMake"
                    value={value.carMake || ''}
                    onChange={(e) => onChange(e, number)}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
            </Grid>
            <Grid item lg={3} md={3} sm={12} xs={12}>
                <TextField
                    label="Model"
                    type="text"
                    name="carModel"
                    value={value.carModel || ''}
                    onChange={(e) => onChange(e, number)}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
                <Grid container>
                    <Grid item lg={5} md={5} sm={12} xs={12}>
                        <TextField
                            label="Year"
                            type="text"
                            name="startYear"
                            value={value.startYear || ''}
                            onChange={(e) => onChange(e, number)}
                            validators={['required']}
                            errorMessages={['this field is required']}
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
                            name="endYear"
                            value={value.endYear || ''}
                            onChange={(e) => onChange(e, number)}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <Autocomplete
                    multiple
                    id="tags-outlined"
                    options={partsList}
                    value={value.parts}
                    getOptionLabel={(option) => option.partBrand}
                    onChange={(e, newValue) =>
                        handelAutoCompletChange(e, newValue, number)
                    }
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
                    type="number"
                    name="partsCost"
                    value={value.partsCost || ''}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
            </Grid>
            <Grid item lg={3} md={3} sm={12} xs={12}>
                <TextField
                    label="Labor Cost"
                    type="number"
                    name="laborCost"
                    value={value.laborCost || ''}
                    onChange={(e) => onChange(e, number)}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
            </Grid>
            <Grid item lg={3} md={3} sm={12} xs={12}>
                <TextField
                    label="Discount"
                    type="number"
                    name="discount"
                    value={value.discount || ''}
                    onChange={(e) => onChange(e, number)}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
            </Grid>
            <Grid item lg={3} md={3} sm={12} xs={12}>
                <TextField
                    label="Estimate Cost"
                    type="number"
                    name="estimateCost"
                    value={value.estimateCost || ''}
                    onChange={(e) => onChange(e, number)}
                    validators={['required']}
                    errorMessages={['this field is required']}
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
