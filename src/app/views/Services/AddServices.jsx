import React, { useState, useEffect } from 'react'
import { Button, IconButton, Card, CardContent, Grid } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { styled } from '@mui/system'
import ImagePreview from 'app/components/ImagePreview/ImagePreview'
import CarsModel from './CarsModel'
import { getPartsApi } from '../../../api-services/PartsApi'
import { addServiceApi } from '../../../api-services/ServicesApi'
import LoadingButton from '@mui/lab/LoadingButton'
import SaveIcon from '@mui/icons-material/Save'
import { sum } from 'lodash'

const TextField = styled(TextValidator)(() => ({
    width: '100%',
    marginBottom: '16px',
}))

const AddServices = () => {
    const [serviceImage, setServiceImage] = useState({
        serviceImageFile: null,
        serviceImageUrl: '',
    })
    const [loading, setLoading] = useState(false)
    const [serviceName, setServiceName] = useState('')

    const [isNotSelected, setIsNotSelected] = useState(false)

    const [partsList, setPartsList] = useState([])

    const selectImage = (e) => {
        let imageFile = e.target.files[0]
        let imageUrl = URL.createObjectURL(imageFile)
        setServiceImage({
            serviceImageFile: imageFile,
            serviceImageUrl: imageUrl,
        })
        setIsNotSelected(false)
    }

    const getPartsData = async () => {
        try {
            let { data } = await getPartsApi()
            setPartsList(data.data)
        } catch (error) {
            console.log('Error', error)
        }
    }

    const handelAutoCompletChange = (e, newValue, number) => {
        const price = sum(newValue.map((item) => parseFloat(item.price)))
        const copyModel = [...carModelObj]
        copyModel[number]['partsCost'] = price
        copyModel[number]['parts'] = newValue
        setCarModelObj(copyModel)
    }

    useEffect(() => {
        getPartsData()
    }, [])

    const [carModelObj, setCarModelObj] = useState([
        {
            carMake: '',
            carModel: '',
            startYear: '',
            endYear: '',
            parts: [],
            partsCost: '',
            laborCost: '',
            discount: '',
            estimateCost: '',
        },
    ])

    const handelAddCarModel = () => {
        let newCarModelObj = [
            ...carModelObj,
            {
                carMake: '',
                carModel: '',
                startYear: '',
                endYear: '',
                parts: [],
                partsCost: '',
                laborCost: '',
                discount: '',
                estimateCost: '',
            },
        ]
        setCarModelObj(newCarModelObj)
    }

    const handelCarModelDataChange = (e, index) => {
        const { name, value } = e.target
        const copyModel = [...carModelObj]
        copyModel[index][name] = value
        setCarModelObj(copyModel)
    }

    const handleSubmit = async () => {
        if (serviceImage.serviceImageFile === null) {
            setIsNotSelected(true)
        } else {
            let formData = new FormData()
            formData.append('serviceImage', serviceImage.serviceImageFile)
            formData.append('serviceName', serviceName)
            formData.append('cars', JSON.stringify(carModelObj))
            setLoading(true)
            try {
                let { data } = await addServiceApi(formData)
                if (data.success) {
                    setServiceImage({
                        serviceImageFile: null,
                        serviceImageUrl: '',
                    })
                    setServiceName('')
                    setCarModelObj([
                        {
                            carMake: '',
                            carModel: '',
                            startYear: '',
                            endYear: '',
                            parts: [],
                            partsCost: '',
                            laborCost: '',
                            discount: '',
                            estimateCost: '',
                        },
                    ])
                    setIsNotSelected(false)
                }
                setLoading(false)
            } catch (error) {
                console.log('Err', error)
                setLoading(false)
            }
        }
    }

    return (
        <Card>
            <CardContent>
                <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
                    <Grid container spacing={3} sx={{ mt: 1 }}>
                        <Grid item lg={4} md={4} sm={12} xs={12}>
                            <TextField
                                label="Service Name"
                                type="text"
                                name="serviceName"
                                value={serviceName || ''}
                                onChange={(e) => {
                                    setServiceName(e.target.value)
                                }}
                                validators={['required']}
                                errorMessages={['this field is required']}
                            />
                        </Grid>
                        <Grid
                            item
                            lg={8}
                            md={8}
                            sm={12}
                            xs={12}
                            sx={{
                                display: 'flex',
                                height: '200px',
                                justifyContent: 'space-between',
                            }}
                        >
                            <ImagePreview
                                onChange={selectImage}
                                imageUrl={serviceImage.serviceImageUrl}
                                notSelected={isNotSelected}
                            />
                        </Grid>
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            <h3>Cars</h3>
                        </Grid>
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            {carModelObj.map((item, index) => {
                                return (
                                    <CarsModel
                                        value={item}
                                        key={index}
                                        number={index}
                                        onChange={(event, number) =>
                                            handelCarModelDataChange(
                                                event,
                                                number
                                            )
                                        }
                                        partsList={partsList}
                                        handelAutoCompletChange={(
                                            event,
                                            newValue,
                                            number
                                        ) =>
                                            handelAutoCompletChange(
                                                event,
                                                newValue,
                                                number
                                            )
                                        }
                                    />
                                )
                            })}
                        </Grid>
                        <Grid
                            item
                            lg={12}
                            md={12}
                            sm={12}
                            xs={12}
                            sx={{ position: 'relative' }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    width: '100%',
                                    height: '1px',
                                    background: 'rgba(0, 0, 0, 0.23)',
                                    position: 'relative',
                                }}
                            ></div>
                            <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                                style={{
                                    position: 'absolute',
                                    top: '20%',
                                    left: '50%',
                                    background: 'white',
                                }}
                                onClick={handelAddCarModel}
                            >
                                <AddIcon />
                            </IconButton>
                        </Grid>
                        <Grid
                            item
                            lg={12}
                            md={12}
                            sm={12}
                            xs={12}
                            sx={{ marginTop: '15px' }}
                        >
                            <LoadingButton
                                loading={loading}
                                loadingPosition="start"
                                startIcon={<SaveIcon />}
                                variant="contained"
                                color="primary"
                                type="submit"
                                fullWidth
                            >
                                Submit
                            </LoadingButton>
                        </Grid>
                    </Grid>
                </ValidatorForm>
            </CardContent>
        </Card>
    )
}

export default AddServices
