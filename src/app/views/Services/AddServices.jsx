import { Button, Grid } from '@mui/material'
import { styled } from '@mui/system'
import { Span } from 'app/components/Typography'
import React, { useState } from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'

const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '16px',
        },
    },
}))

const TextField = styled(TextValidator)(() => ({
    width: '100%',
    marginBottom: '16px',
}))

const AddServices = () => {
    const [partsData, setPartsData] = useState({})

    const handleSubmit = (event) => {
        // console.log("submitted");
        // console.log(event);
    }

    const handleChange = (event) => {
        // event.persist()
        setPartsData({
            ...partsData,
            [event.target.name]: event.target.value,
        })
    }

    const { category, partNumber, brandName, unitType, quantity, price } =
        partsData

    return (
        <Container sx={{ mt: 3 }}>
            <div style={{ fontSize: 35, fontWeight: 'bold' }}>Add Services</div>

            <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <TextField
                            label="Category"
                            onChange={handleChange}
                            type="text"
                            name="category"
                            value={category || ''}
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
                            name="brandName"
                            value={brandName || ''}
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
                        <Button
                            color="primary"
                            variant="contained"
                            type="submit"
                            style={{ width: '150px' }}
                        >
                            <Span sx={{ pl: 1, textTransform: 'capitalize' }}>
                                Submit
                            </Span>
                        </Button>
                    </Grid>
                </Grid>
            </ValidatorForm>
        </Container>
    )
}

export default AddServices
