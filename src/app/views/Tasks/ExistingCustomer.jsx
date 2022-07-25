import React, { useState } from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import SaveIcon from '@mui/icons-material/Save'
import { LoadingButton } from '@mui/lab'
import { Box, styled } from '@mui/system'
import { getCustomerByPhoneApi } from 'api-services/CustomersApi'

const TextField = styled(TextValidator)(() => ({
    width: '100%',
    marginBottom: '16px',
}))

const ExistingCustomer = ({ handelNext }) => {
    const [phone, setPhone] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async () => {
        try {
            setLoading(true)
            const { data } = await getCustomerByPhoneApi(phone)
            if (data.success) {
                handelNext(data.data.phone)
            }
            setLoading(false)
        } catch (error) {
            console.log('Error', error)
            setLoading(false)
        }
    }

    return (
        <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
            <TextField
                label="Phone"
                onChange={(e) => {
                    setPhone(e.target.value)
                }}
                type="text"
                name="phone"
                value={phone || ''}
                validators={['required']}
                errorMessages={['this field is required']}
            />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <LoadingButton
                    loading={loading}
                    loadingPosition="start"
                    startIcon={<SaveIcon />}
                    variant="contained"
                    color="primary"
                    type="submit"
                    sx={{
                        minWidth: {
                            xs: '100%',
                            sm: '100%',
                            md: '300px',
                        },
                        marginTop: '20px',
                    }}
                >
                    Search Customer
                </LoadingButton>
            </Box>
        </ValidatorForm>
    )
}

export default ExistingCustomer
