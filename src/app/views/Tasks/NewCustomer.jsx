import { Grid } from '@mui/material'
import { styled } from '@mui/system'
import { addCustomerApi } from 'api-services/CustomersApi'

import React, { useState } from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import SaveIcon from '@mui/icons-material/Save'
import { LoadingButton } from '@mui/lab'

const TextField = styled(TextValidator)(() => ({
    width: '100%',
    marginBottom: '16px',
}))

const NewCustomer = ({ handelNext }) => {
    const [customerData, setCustomerData] = useState({})
    const [loading, setLoading] = useState(false)
    const handleSubmit = async () => {
        setLoading(true)
        try {
            let { data } = await addCustomerApi(customerData)
            setLoading(false)
            setCustomerData({})
            handelNext({
                customerId: data.data._id,
                customerPhone: data.data.phone,
            })
        } catch (error) {
            console.log('Error', error)
            setLoading(false)
        }
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
                <Grid
                    item
                    xs={12}
                    sx={{
                        mt: 2,
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        width: '100%',
                    }}
                >
                    <LoadingButton
                        loading={loading}
                        loadingPosition="start"
                        startIcon={<SaveIcon />}
                        variant="contained"
                        color="primary"
                        type="submit"
                        sx={{ minWidth: '300px' }}
                    >
                        Add Customer
                    </LoadingButton>
                </Grid>
            </Grid>
        </ValidatorForm>
    )
}

export default NewCustomer
