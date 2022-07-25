import React from 'react'
import { Grid, TextField, Autocomplete } from '@mui/material'

const TaskServices = ({
    data,
    servicesData,
    partsData,
    number,
    onChange,
    handelAutoCompletPartsChange,
    handelAutoCompletServiceChange,
}) => {
    const {
        serviceName,
        partsValue,
        partsCost,
        laborCost,
        discount,
        estimationPrice,
    } = data

    return (
        <Grid container spacing={3}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <Autocomplete
                    id="tags-outlined"
                    options={servicesData}
                    value={serviceName}
                    getOptionLabel={(option) => option.serviceName}
                    filterSelectedOptions
                    onChange={(e, newValue) =>
                        handelAutoCompletServiceChange(e, newValue, number)
                    }
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
                    options={partsData}
                    value={partsValue}
                    getOptionLabel={(option) => option.partNumber}
                    filterSelectedOptions
                    onChange={(e, newValue) =>
                        handelAutoCompletPartsChange(e, newValue, number)
                    }
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
                    onChange={(e) => onChange(e, number)}
                />
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12}>
                <TextField
                    label="Labor Cost"
                    type="number"
                    value={laborCost}
                    name="laborCost"
                    fullWidth
                    onChange={(e) => onChange(e, number)}
                />
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12}>
                <TextField
                    label="Discount"
                    type="number"
                    value={discount}
                    name="discount"
                    fullWidth
                    onChange={(e) => onChange(e, number)}
                />
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12}>
                <TextField
                    label="Estimation Price"
                    type="number"
                    value={estimationPrice}
                    name="estimationPrice"
                    fullWidth
                    onChange={(e) => onChange(e, number)}
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
