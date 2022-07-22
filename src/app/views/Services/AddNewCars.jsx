import React from 'react'
import {
    Button,
    Grid,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    LinearProgress,
    Autocomplete,
} from '@mui/material'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { styled } from '@mui/system'

const TextField = styled(TextValidator)(() => ({
    width: '100%',
    marginBottom: '16px',
}))

const AddNewCars = ({
    open,
    handleClose,
    value,
    onChange,
    handelAutoCompletChange,
    loading,
    partsData,
    handelUpdate,
}) => {
    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
                fullWidth={true}
                maxWidth="md"
            >
                <ValidatorForm onSubmit={handelUpdate} onError={() => null}>
                    <DialogTitle id="form-dialog-title">
                        Add New Car
                    </DialogTitle>
                    <DialogContent>
                        <Grid container spacing={2} sx={{ marginTop: '10px' }}>
                            <Grid item xs={12} sm={12} md={6}>
                                <TextField
                                    label="Make"
                                    type="text"
                                    name="carMake"
                                    value={value.carMake || ''}
                                    onChange={onChange}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                                <TextField
                                    label="Model"
                                    type="text"
                                    name="carModel"
                                    value={value.carModel || ''}
                                    onChange={onChange}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                                <TextField
                                    label="Year"
                                    type="text"
                                    name="startYear"
                                    value={value.startYear || ''}
                                    onChange={onChange}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                                <TextField
                                    label="Year"
                                    type="text"
                                    name="endYear"
                                    value={value.endYear || ''}
                                    onChange={onChange}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12}>
                                <Autocomplete
                                    multiple
                                    options={partsData}
                                    value={value.parts}
                                    getOptionLabel={(option) =>
                                        option.partBrand
                                    }
                                    onChange={(e, newValue) =>
                                        handelAutoCompletChange(e, newValue)
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
                            <Grid item xs={12} sm={12} md={6}>
                                <TextField
                                    label="Parts Cost"
                                    type="number"
                                    name="partsCost"
                                    value={value.partsCost || ''}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                                <TextField
                                    label="Labor Cost"
                                    type="number"
                                    name="laborCost"
                                    value={value.laborCost || ''}
                                    onChange={onChange}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                                <TextField
                                    label="Discount"
                                    type="number"
                                    name="discount"
                                    value={value.discount || ''}
                                    onChange={onChange}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                                <TextField
                                    label="Estimate Cost"
                                    type="number"
                                    name="estimateCost"
                                    value={value.estimateCost || ''}
                                    onChange={onChange}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                />
                            </Grid>
                        </Grid>

                        <LinearProgress
                            color="success"
                            sx={{ mt: 2, display: loading ? '' : 'none' }}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button
                            variant="outlined"
                            color="secondary"
                            onClick={handleClose}
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            color="primary"
                            variant="contained"
                        >
                            Submit
                        </Button>
                    </DialogActions>
                </ValidatorForm>
            </Dialog>
        </div>
    )
}

export default AddNewCars
