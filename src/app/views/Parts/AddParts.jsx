import { Button, Grid } from '@mui/material'
import { styled } from '@mui/system'
import { Span } from 'app/components/Typography'
import React, { useState } from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { addPartsApi } from '../../../api-services/PartsApi'

import LoadingButton from '@mui/lab/LoadingButton'
import SaveIcon from '@mui/icons-material/Save'

const TextField = styled(TextValidator)(() => ({
    width: '100%',
    marginBottom: '16px',
}))

const AddParts = () => {
    const [partsData, setPartsData] = useState({
        partCategory: '',
        partNumber: '',
        partBrand: '',
        unitType: '',
        quantity: '',
        price: '',
    })

    const [loading, setLoading] = useState(false)

    const handleSubmit = async (event) => {
        try {
            setLoading(true)
            let { data } = await addPartsApi(partsData)
            setLoading(false)

            setPartsData({
                partCategory: '',
                partBrand: '',
                unitType: '',
                quantity: '',
                partNumber: '',
                price: '',
            })
        } catch (error) {
            console.log('Error', error)
            setLoading(false)
        }
    }

    const handleChange = (event) => {
        setPartsData({
            ...partsData,
            [event.target.name]: event.target.value,
        })
    }

    const { partCategory, partNumber, partBrand, unitType, quantity, price } =
        partsData

    return (
        <div sx={{ mt: 3 }}>
            <div style={{ fontSize: 35, fontWeight: 'bold' }}>Add Parts</div>

            <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <TextField
                            label="Category"
                            onChange={handleChange}
                            type="text"
                            name="partCategory"
                            value={partCategory || ''}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <TextField
                            label="Number"
                            onChange={handleChange}
                            type="text"
                            name="partNumber"
                            value={partNumber || ''}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                    </Grid>

                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <TextField
                            label="Brand"
                            onChange={handleChange}
                            type="text"
                            name="partBrand"
                            value={partBrand || ''}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <TextField
                            label="Unit Type"
                            onChange={handleChange}
                            type="text"
                            name="unitType"
                            value={unitType || ''}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <TextField
                            label="Quantity"
                            onChange={handleChange}
                            name="quantity"
                            type="number"
                            value={quantity || ''}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <TextField
                            label="Price"
                            onChange={handleChange}
                            name="price"
                            type="number"
                            value={price || ''}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                    </Grid>

                    <Grid
                        item
                        lg={12}
                        md={12}
                        sm={12}
                        xs={12}
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                        }}
                    >
                        <LoadingButton
                            loading={loading}
                            loadingPosition="start"
                            startIcon={<SaveIcon />}
                            variant="contained"
                            color="primary"
                            type="submit"
                        >
                            Save
                        </LoadingButton>
                    </Grid>
                </Grid>
            </ValidatorForm>
        </div>
    )
}

export default AddParts
