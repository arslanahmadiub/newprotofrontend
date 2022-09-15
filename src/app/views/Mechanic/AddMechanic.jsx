import {
    Card,
    CardContent,
    Grid,
    styled,
    Typography,
    Box,
    Button,
} from '@mui/material'
import ImagePreview from 'app/components/ImagePreview/ImagePreview'
import React, { useState } from 'react'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'

const TextField = styled(TextValidator)(() => ({
    width: '100%',
    marginBottom: '16px',
}))

const AddMechanic = () => {
    const handleSubmit = () => {}
    const [mechanicFormData, setMechanicFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        socialSecurityNumber: '',
        mechanicEmail: '',
        mechanicLocation: '',
    })
    const {
        firstName,
        lastName,
        phoneNumber,
        socialSecurityNumber,
        mechanicEmail,
        mechanicLocation,
    } = mechanicFormData

    const handelChange = (e) => {
        const { name, value } = e.target
        setMechanicFormData({ ...mechanicFormData, [name]: value })
    }

    const [isNotSelected, setIsNotSelected] = useState(false)
    const [mechanicImage, setMechanicImage] = useState({
        mechanicImageFile: '',
        mechanicImageUrl: '',
    })
    const selectImage = (e) => {
        let imageFile = e.target.files[0]
        let imageUrl = URL.createObjectURL(imageFile)
        setMechanicImage({
            mechanicImageFile: imageFile,
            mechanicImageUrl: imageUrl,
        })
        setIsNotSelected(false)
    }

    return (
        <Card>
            <CardContent>
                <Box sx={{ mb: '20px' }}>
                    <Typography variant="h5">Add Mechanic</Typography>
                </Box>

                <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} md={4}>
                            <TextField
                                label="Mechanic First Name"
                                type="text"
                                value={firstName}
                                name="firstName"
                                onChange={handelChange}
                                validators={['required']}
                                errorMessages={['this field is required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <TextField
                                label="Mechanic Last Name"
                                type="text"
                                value={lastName}
                                name="lastName"
                                onChange={handelChange}
                                validators={['required']}
                                errorMessages={['this field is required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <ImagePreview
                                onChange={selectImage}
                                imageUrl={mechanicImage.mechanicImageUrl}
                                notSelected={isNotSelected}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <TextField
                                label="Mechanic Phone Number"
                                type="text"
                                value={phoneNumber}
                                onChange={handelChange}
                                name="phoneNumber"
                                validators={['required']}
                                errorMessages={['this field is required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <TextField
                                label="Mechanic Social Security Number"
                                type="text"
                                value={socialSecurityNumber}
                                onChange={handelChange}
                                name="socialSecurityNumber"
                                validators={['required']}
                                errorMessages={['this field is required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <TextField
                                label="Mechanic Email"
                                type="email"
                                value={mechanicEmail}
                                onChange={handelChange}
                                name="mechanicEmail"
                                validators={['required']}
                                errorMessages={['this field is required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <TextField
                                label="Mechanic Location"
                                type="text"
                                value={mechanicLocation}
                                name="mechanicLocation"
                                onChange={handelChange}
                                validators={['required']}
                                errorMessages={['this field is required']}
                            />
                        </Grid>

                        <Grid item xs={12} sm={12} md={12}>
                            <Button variant="contained" type="submit" fullWidth>
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </ValidatorForm>
            </CardContent>
        </Card>
    )
}

export default AddMechanic
