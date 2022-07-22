import React, { useState, useEffect } from 'react'
import { Button, Card, CardContent, Grid } from '@mui/material'
import AddNewCars from './AddNewCars'
import {
    addNewCarInServiceApi,
    detailServiceApi,
} from 'api-services/ServicesApi'
import { isEmpty, sum } from 'lodash'
import { useParams } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress'

import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import { getPartsApi } from '../../../api-services/PartsApi'

const ServicesDetails = () => {
    const params = useParams()

    const [showCarModel, setShowCarModel] = useState(false)
    const [loading, setLoading] = useState(false)
    const [serviceData, setServiceData] = useState({})

    const [updateLoading, setUpdateLoading] = useState(false)

    const [partsData, setPartsData] = useState([])

    const [newCarData, setNewCarData] = useState({
        carMake: '',
        carModel: '',
        startYear: '',
        endYear: '',
        parts: [],
        partsCost: '',
        laborCost: '',
        discount: '',
        estimateCost: '',
    })

    const getPartsData = async () => {
        try {
            let { data } = await getPartsApi()
            setPartsData(data.data)
        } catch (error) {
            console.log('Error', error)
        }
    }

    const handleClose = () => {
        setShowCarModel(false)
    }

    const getServicesDetails = async () => {
        try {
            setLoading(true)
            const { data } = await detailServiceApi(params.id)
            if (data.success) {
                setServiceData(data.data)
            }
            setLoading(false)
        } catch (error) {
            console.log('Error', error)
            setLoading(false)
        }
    }

    useEffect(() => {
        getPartsData()
        getServicesDetails()
    }, [])

    const handelNewCarChange = (e) => {
        const { name, value } = e.target
        const copyModel = { ...newCarData }

        if (name === 'discount') {
            const discountValue = value === '' ? 0 : value
            const laborValue =
                copyModel['laborCost'] === '' ? 0 : copyModel['laborCost']
            const partsValue =
                copyModel['partsCost'] === '' ? 0 : copyModel['partsCost']

            const estimateCost =
                parseFloat(partsValue) +
                parseFloat(laborValue) -
                parseFloat(discountValue)

            copyModel[name] = value
            copyModel['estimateCost'] = estimateCost
            setNewCarData(copyModel)
        } else if (name === 'laborCost') {
            const laborValue = value === '' ? 0 : value
            const discountValue =
                copyModel['discount'] === '' ? 0 : copyModel['discount']
            const partsValue =
                copyModel['partsCost'] === '' ? 0 : copyModel['partsCost']

            const estimateCost =
                parseFloat(partsValue) +
                parseFloat(laborValue) -
                parseFloat(discountValue)

            copyModel[name] = value
            copyModel['estimateCost'] = estimateCost
            setNewCarData(copyModel)
        } else if (name === 'estimateCost') {
            const estimateValue = value === '' ? 0 : value

            const discountValue =
                copyModel['discount'] === '' ? 0 : copyModel['discount']
            const partsValue =
                copyModel['partsCost'] === '' ? 0 : copyModel['partsCost']

            const laborCostFirst =
                parseFloat(partsValue) - parseFloat(discountValue)
            const laborCostSecond = parseFloat(estimateValue) - laborCostFirst

            copyModel[name] = value
            copyModel['laborCost'] = laborCostSecond
            setNewCarData(copyModel)
        } else {
            copyModel[name] = value
            setNewCarData(copyModel)
        }
    }
    const handelCarAutoCompleteChange = (e, newValue) => {
        const price = sum(newValue.map((item) => parseFloat(item.price)))
        const copyModel = { ...newCarData }
        copyModel['partsCost'] = price

        const discountValue =
            copyModel['discount'] === '' ? 0 : parseFloat(copyModel['discount'])
        const laborValue =
            copyModel['laborCost'] === ''
                ? 0
                : parseFloat(copyModel['laborCost'])

        const estimateCost = price + laborValue - discountValue

        copyModel['parts'] = newValue
        copyModel['estimateCost'] = estimateCost
        setNewCarData(copyModel)
    }

    const handelUpdate = async () => {
        setUpdateLoading(true)
        try {
            const { data } = await addNewCarInServiceApi(params.id, {
                car: newCarData,
            })
            if (data.success) {
                getServicesDetails()
                setShowCarModel(false)
            }
            setUpdateLoading(false)
        } catch (error) {
            setUpdateLoading(false)
            console.log('Error', error)
        }
    }

    if (loading) {
        return (
            <Grid container>
                <Grid
                    item
                    xs={12}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100vh',
                    }}
                >
                    <CircularProgress color="inherit" />
                </Grid>
            </Grid>
        )
    }

    if (isEmpty(serviceData)) {
        return (
            <Grid container>
                <Grid item xs={12}>
                    <h1>Data not found.</h1>
                </Grid>
            </Grid>
        )
    }

    return (
        <Grid container>
            <Grid
                item
                xs={12}
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <h2>{serviceData.serviceName}</h2>
                <Button
                    variant="contained"
                    onClick={() => setShowCarModel(true)}
                >
                    {' '}
                    Add New Car
                </Button>
            </Grid>

            {serviceData.cars.map((item, index) => {
                const {
                    carMake,
                    carModel,
                    startYear,
                    endYear,
                    estimateCost,
                    discount,
                    partsCost,
                    laborCost,
                    parts,
                } = item
                return (
                    <Grid
                        item
                        xs={12}
                        sx={{ marginBottom: '20px' }}
                        key={index}
                    >
                        <Card style={{ border: '1px solid gray' }}>
                            <CardContent style={{ padding: '0px' }}>
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        color: 'gray',
                                        fontWeight: '500',
                                        fontSize: '16px',
                                        borderBottom: '1px solid gray',
                                        padding: '0 20px',
                                    }}
                                >
                                    <p>{carMake}</p>
                                    <p>{carModel}</p>
                                    <p>
                                        {startYear} - {endYear}
                                    </p>
                                </div>
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        color: 'gray',
                                        fontWeight: '500',
                                        fontSize: '16px',
                                        borderBottom: '1px solid gray',
                                        padding: '0 20px',
                                        height: '150px',
                                    }}
                                >
                                    <Stack direction="row" spacing={3}>
                                        {parts.map((part, partIndex) => {
                                            return (
                                                <Chip
                                                    label={part.partBrand}
                                                    key={partIndex}
                                                />
                                            )
                                        })}
                                    </Stack>
                                </div>
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        width: '100%',
                                    }}
                                >
                                    <div
                                        style={{
                                            display: 'flex',
                                            color: 'gray',
                                            fontWeight: '500',
                                            fontSize: '16px',
                                            padding: '0 20px',
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: 'flex',
                                            }}
                                        >
                                            <p>Parts Cost</p>
                                            <p style={{ marginLeft: '10px' }}>
                                                ${partsCost}
                                            </p>
                                        </div>

                                        <div
                                            style={{
                                                display: 'flex',
                                                marginLeft: '20px',
                                            }}
                                        >
                                            <p>Labor Cost</p>
                                            <p style={{ marginLeft: '10px' }}>
                                                ${laborCost}
                                            </p>
                                        </div>
                                        <div
                                            style={{
                                                display: 'flex',
                                                marginLeft: '20px',
                                            }}
                                        >
                                            <p>Discount</p>
                                            <p style={{ marginLeft: '10px' }}>
                                                ${discount}
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            display: 'flex',
                                            color: 'gray',
                                            fontWeight: '500',
                                            fontSize: '16px',
                                            padding: '0 20px',
                                        }}
                                    >
                                        <div style={{ display: 'flex' }}>
                                            <p>Total Estimated Cost</p>
                                            <p style={{ marginLeft: '10px' }}>
                                                ${estimateCost}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                )
            })}

            <AddNewCars
                open={showCarModel}
                handleClose={handleClose}
                loading={updateLoading}
                value={newCarData}
                partsData={partsData}
                onChange={handelNewCarChange}
                handelAutoCompletChange={(e, v) =>
                    handelCarAutoCompleteChange(e, v)
                }
                handelUpdate={handelUpdate}
            />
        </Grid>
    )
}

export default ServicesDetails
