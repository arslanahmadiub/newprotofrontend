import { Button, Grid } from '@mui/material'
import { styled } from '@mui/system'
import { Span } from 'app/components/Typography'
import React, { useState } from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'

const TextField = styled(TextValidator)(() => ({
    width: '100%',
    marginBottom: '16px',
}))

const NewCustomer = () => {
    const [customerData, setCustomerData] = useState({})

    const handleSubmit = (event) => {
        // console.log("submitted");
        // console.log(event);
    }

    const handleChange = (event) => {
        // event.persist()
        setCustomerData({
            ...customerData,
            [event.target.name]: event.target.value,
        })
    }

    const { firstName, lastName, email, phone, address } = customerData

    return (
        <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
            <Grid container spacing={2} sx={{ mt: 1 }}>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <TextField
                        label="First Name"
                        onChange={handleChange}
                        type="text"
                        name="firstName"
                        value={firstName || ''}
                        validators={['required']}
                        errorMessages={['this field is required']}
                    />
                </Grid>

                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <TextField
                        label="Last Name"
                        onChange={handleChange}
                        type="text"
                        name="lastName"
                        value={lastName || ''}
                        validators={['required']}
                        errorMessages={['this field is required']}
                    />
                </Grid>

                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <TextField
                        label="email"
                        onChange={handleChange}
                        type="text"
                        name="email"
                        value={email || ''}
                        validators={['required']}
                        errorMessages={['this field is required']}
                    />
                </Grid>

                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <TextField
                        label="Phone"
                        onChange={handleChange}
                        type="text"
                        name="phone"
                        value={phone || ''}
                        validators={['required']}
                        errorMessages={['this field is required']}
                    />
                </Grid>

                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <TextField
                        label="Address"
                        onChange={handleChange}
                        type="text"
                        name="address"
                        value={address || ''}
                        validators={['required']}
                        errorMessages={['this field is required']}
                    />
                </Grid>
            </Grid>
        </ValidatorForm>
    )
}

export default NewCustomer
