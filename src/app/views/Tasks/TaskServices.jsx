import React from 'react'
import { Grid, Autocomplete } from '@mui/material'

import { styled } from '@mui/system'

import { TextValidator } from 'react-material-ui-form-validator'

const TextField = styled(TextValidator)(() => ({
    width: '100%',
    marginBottom: '16px',
}))

const TaskServices = ({
    data,
    servicesData,
    partsData,
    number,
    handelAutoCompletServiceChange,
    fieldRequired = true,
}) => {
    const {
        serviceValue,
        parts,
        partsCost,
        laborCost,
        discount,
        estimateCost,
    } = data

    return (
        <Grid container spacing={3}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <Autocomplete
                    id="free-solo-demo"
                    onChange={(e, newValue) =>
                        handelAutoCompletServiceChange(e, newValue, number)
                    }
                    value={serviceValue}
                    options={servicesData.map((option) => option.serviceName)}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Services"
                            placeholder="Select Services"
                        />
                    )}
                />
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <Autocomplete
                    multiple
                    id="tags-outlined"
                    readOnly
                    options={partsData}
                    value={parts}
                    getOptionLabel={(option) => option.partNumber}
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

            <Grid item lg={3} md={3} sm={6} xs={12}>
                <TextField
                    label="Parts Cost"
                    type="number"
                    value={partsCost}
                    name="partsCost"
                    fullWidth
                    InputProps={{
                        readOnly: true,
                    }}
                    validators={fieldRequired && ['required']}
                    errorMessages={['this field is required']}
                />
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12}>
                <TextField
                    label="Labor Cost"
                    type="number"
                    value={laborCost}
                    name="laborCost"
                    fullWidth
                    InputProps={{
                        readOnly: true,
                    }}
                    validators={fieldRequired && ['required']}
                    errorMessages={['this field is required']}
                />
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12}>
                <TextField
                    label="Discount"
                    type="number"
                    value={discount}
                    name="discount"
                    fullWidth
                    InputProps={{
                        readOnly: true,
                    }}
                    validators={fieldRequired && ['required']}
                    errorMessages={['this field is required']}
                />
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12}>
                <TextField
                    label="Estimate Cost"
                    type="number"
                    value={estimateCost}
                    name="estimateCost"
                    fullWidth
                    InputProps={{
                        readOnly: true,
                    }}
                    validators={fieldRequired && ['required']}
                    errorMessages={['this field is required']}
                />
            </Grid>
        </Grid>
    )
}

export default TaskServices
