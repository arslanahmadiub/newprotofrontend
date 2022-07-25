import {
    Button,
    Grid,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    LinearProgress,
} from '@mui/material'

import { styled } from '@mui/system'

import React, { useState } from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import SaveIcon from '@mui/icons-material/Save'
import { LoadingButton } from '@mui/lab'
import { addCarApi } from 'api-services/CarsApi'

const TextField = styled(TextValidator)(() => ({
    width: '100%',
    marginBottom: '16px',
}))

const AddNewClientCar = ({ open, handleClose, handelUpdate }) => {
    const [loading, setLoading] = useState(false)
    const [carData, setCarData] = useState({
        make: '',
        model: '',
        year: '',
        region: '',
    })

    const { make, model, year, region } = carData

    const handelChange = (e) => {
        setCarData({ ...carData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async () => {
        setLoading(true)
        try {
            const { data } = await addCarApi(carData)
            if (data.success) {
                setCarData({
                    make: '',
                    model: '',
                    year: '',
                    region: '',
                })
                handelUpdate()
                handleClose()
            }
            setLoading(false)
        } catch (error) {
            console.log('Error', error)
            setLoading(false)
        }
    }

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
                fullWidth={true}
                maxWidth="md"
            >
                <DialogTitle id="form-dialog-title">Add New Car</DialogTitle>
                <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
                    <DialogContent>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12} md={6}>
                                <TextField
                                    label="Manufacturer"
                                    name="make"
                                    type="text"
                                    fullWidth
                                    value={make}
                                    margin="dense"
                                    onChange={handelChange}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                                <TextField
                                    label="Model No"
                                    name="model"
                                    type="text"
                                    fullWidth
                                    value={model}
                                    margin="dense"
                                    onChange={handelChange}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                                <TextField
                                    label="From Year"
                                    name="year"
                                    type="text"
                                    fullWidth
                                    value={year}
                                    margin="dense"
                                    onChange={handelChange}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                />
                            </Grid>

                            <Grid item xs={12} sm={12} md={6}>
                                <TextField
                                    label="Region / Vin"
                                    name="region"
                                    type="text"
                                    fullWidth
                                    value={region}
                                    margin="dense"
                                    onChange={handelChange}
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
                        <LoadingButton
                            loading={loading}
                            loadingPosition="start"
                            startIcon={<SaveIcon />}
                            variant="contained"
                            color="primary"
                            type="submit"
                        >
                            Add Car
                        </LoadingButton>
                    </DialogActions>
                </ValidatorForm>
            </Dialog>
        </div>
    )
}

export default AddNewClientCar
