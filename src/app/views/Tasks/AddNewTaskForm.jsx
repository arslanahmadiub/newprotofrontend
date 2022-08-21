import React, { useState, useEffect } from 'react'

import AddIcon from '@mui/icons-material/Add'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import TaskServices from './TaskServices'
import { getServiceForSelector } from 'api-services/ServicesApi'
import { getPartsApi } from 'api-services/PartsApi'
import { head, sum, compact } from 'lodash'

import {
    Button,
    IconButton,
    Grid,
    Autocomplete,
    Box,
    styled,
} from '@mui/material'
import { addTask } from 'api-services/TaskApi'

const TextField = styled(TextValidator)(() => ({
    width: '100%',
    marginBottom: '16px',
}))

const AddNewTaskForm = ({ data, reset }) => {
    const { customerId, customerPhone, selectedCar } = data
    const [servicesData, setServicesData] = useState([])
    const [partsData, setPartsData] = useState([])
    const [overView, setOverView] = useState('')

    const [totalCostObject, setTotalCostObject] = useState({
        totalPrice: '',
        extraPartsCost: '',
        tax: '',
        finalPrice: '',
        millage: '',
        enginNumber: '',
    })

    const {
        totalPrice,
        extraPartsCost,
        tax,
        finalPrice,
        millage,
        enginNumber,
    } = totalCostObject

    const [extraParts, setExtraParts] = useState([])

    const handelExtraPartsChange = (e, value) => {
        setExtraParts(value)
    }

    useEffect(() => {
        const extraValue = sum(
            extraParts.map((item) => {
                return parseFloat(item.price)
            })
        )
        const totalPriceValue = totalPrice === '' ? 0 : parseFloat(totalPrice)
        const taxValue = tax === '' ? 0 : parseFloat(tax)

        const finalPriceValue = taxValue + totalPriceValue + extraValue

        setTotalCostObject({
            ...totalCostObject,
            extraPartsCost: extraValue,
            finalPrice: finalPriceValue,
        })
    }, [extraParts])

    const [taskServiceData, setTaskServiceData] = useState([
        {
            serviceId: '',
            serviceValue: '',
            parts: [],
            partsCost: '',
            laborCost: '',
            discount: '',
            estimateCost: '',
        },
    ])

    const handelFinalCostChange = (e) => {
        const { name, value } = e.target

        if (name === 'tax') {
            const totalPriceValue =
                totalPrice === '' ? 0 : parseFloat(totalPrice)
            const extraPartsValue =
                extraPartsCost === '' ? 0 : parseFloat(extraPartsCost)
            const taxValue = parseFloat(value)

            const finalPriceValue = totalPriceValue + extraPartsValue

            const finalPriceValueWitTax =
                finalPriceValue + (finalPriceValue * taxValue) / 100

            setTotalCostObject({
                ...totalCostObject,
                tax: value,
                finalPrice: finalPriceValueWitTax,
            })
        } else {
            setTotalCostObject({
                ...totalCostObject,
                [name]: value,
            })
        }
    }

    useEffect(() => {
        const totalPriceValue = sum(
            compact(
                taskServiceData.map((item) => {
                    return parseFloat(item.estimateCost)
                })
            )
        )

        const extraPartsValue =
            extraPartsCost === '' ? 0 : parseFloat(extraPartsCost)

        const taxValue = tax === '' ? 0 : parseFloat(tax)

        const finalPriceValue = totalPriceValue + extraPartsValue

        const finalPriceValueWithTax =
            finalPriceValue + (finalPriceValue * taxValue) / 100

        setTotalCostObject({
            ...totalCostObject,
            totalPrice: totalPriceValue,
            finalPrice: finalPriceValueWithTax,
        })
    }, [taskServiceData])

    const handelAddTaskServices = () => {
        setTaskServiceData([
            ...taskServiceData,
            {
                serviceId: '',
                serviceValue: '',
                parts: [],
                partsCost: '',
                laborCost: '',
                discount: '',
                estimateCost: '',
            },
        ])
    }

    const handelAutoCompletServiceChange = (event, newValue, number) => {
        const selectedService = servicesData.find(
            (item) => item.serviceName === newValue
        )

        const carData = head(selectedService.cars)

        const carId = carData._id
        const serviceId = selectedService._id
        carData._id = serviceId
        carData.carId = carId
        carData.serviceValue = newValue
        const serviceData = [...taskServiceData]
        serviceData[number] = carData
        setTaskServiceData(serviceData)
    }

    const getSelectorService = async () => {
        try {
            const { data } = await getServiceForSelector(selectedCar)
            if (data.success) {
                setServicesData(data.data)
            }
        } catch (error) {
            console.log('Error', error)
        }
    }

    const getSelectorParts = async () => {
        try {
            const { data } = await getPartsApi()
            if (data.success) {
                setPartsData(data.data)
            }
        } catch (error) {
            console.log('Error', error)
        }
    }

    useEffect(() => {
        getSelectorService()
        getSelectorParts()
    }, [])

    const handleSubmit = async () => {
        let requestedData = {
            customerId,
            selectedCar,
            totalCostObject,
            extraParts,
            taskServiceData,
            overView,
        }

        try {
            const { data } = await addTask(requestedData)
            if (data.success) {
                setTaskServiceData([
                    {
                        serviceId: '',
                        serviceValue: '',
                        parts: [],
                        partsCost: '',
                        laborCost: '',
                        discount: '',
                        estimateCost: '',
                    },
                ])
                setExtraParts([])
                setTotalCostObject({
                    totalPrice: '',
                    extraPartsCost: '',
                    tax: '',
                    finalPrice: '',
                    millage: '',
                    enginNumber: '',
                })
                reset()
            }
        } catch (error) {
            console.log('Error', error)
        }
    }

    return (
        <>
            <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sx={{ marginBottom: '20px' }}>
                        <TextField
                            label="Customer Mobile Number"
                            type="text"
                            value={customerPhone}
                            sx={{
                                width: {
                                    xs: '100%',
                                    sm: '100%',
                                    md: '40%',
                                },
                            }}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            label="Overview"
                            type="text"
                            multiline
                            rows={4}
                            value={overView}
                            onChange={(e) => {
                                setOverView(e.target.value)
                            }}
                            placeholder="Overview"
                        />
                    </Grid>

                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <TextField
                            label="Make"
                            type="text"
                            value={selectedCar.make}
                            fullWidth
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <TextField
                            label="Model"
                            type="text"
                            value={selectedCar.model}
                            fullWidth
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <TextField
                            label="Year"
                            value={selectedCar.year}
                            fullWidth
                            type="text"
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <TextField
                            label="Rego / Vin"
                            type="text"
                            value={selectedCar.region}
                            fullWidth
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <TextField
                            label="Engin Number"
                            type="text"
                            fullWidth
                            name="enginNumber"
                            onChange={handelFinalCostChange}
                            value={enginNumber}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <TextField
                            label="Millage"
                            type="text"
                            fullWidth
                            name="millage"
                            onChange={handelFinalCostChange}
                            value={millage}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                    </Grid>

                    {taskServiceData.map((item, index) => {
                        return (
                            <Grid item xs={12} key={index}>
                                <TaskServices
                                    data={item}
                                    servicesData={servicesData}
                                    partsData={partsData}
                                    number={index}
                                    handelAutoCompletServiceChange={(
                                        e,
                                        newValue,
                                        number
                                    ) => {
                                        handelAutoCompletServiceChange(
                                            e,
                                            newValue,
                                            number
                                        )
                                    }}
                                />
                            </Grid>
                        )
                    })}

                    <Grid
                        item
                        xs={12}
                        sx={{ position: 'relative', marginTop: '20px' }}
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
                            onClick={handelAddTaskServices}
                        >
                            <AddIcon />
                        </IconButton>
                    </Grid>

                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Autocomplete
                            multiple
                            id="tags-outlined"
                            options={partsData}
                            getOptionLabel={(option) => option.partNumber}
                            filterSelectedOptions
                            value={extraParts}
                            onChange={handelExtraPartsChange}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Extra Parts"
                                    placeholder="Extra Parts"
                                />
                            )}
                            ChipProps={{ color: 'primary' }}
                        />
                    </Grid>

                    <Grid
                        item
                        xs={12}
                        sx={{ display: 'flex', justifyContent: 'flex-end' }}
                    >
                        <TextField
                            label="Total Price"
                            type="number"
                            value={totalPrice}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sx={{ display: 'flex', justifyContent: 'flex-end' }}
                    >
                        <TextField
                            label="Extra Parts Cost"
                            type="number"
                            name="extraPartsCost"
                            value={extraPartsCost}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sx={{ display: 'flex', justifyContent: 'flex-end' }}
                    >
                        <TextField
                            label="Tax"
                            type="number"
                            name="tax"
                            value={tax}
                            onChange={handelFinalCostChange}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sx={{ display: 'flex', justifyContent: 'flex-end' }}
                    >
                        <TextField
                            label="Final Price"
                            type="number"
                            value={finalPrice}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                    </Grid>

                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Autocomplete
                            multiple
                            id="tags-outlined"
                            options={topEmployies}
                            getOptionLabel={(option) => option.title}
                            filterSelectedOptions
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Assign Employies"
                                    placeholder="Search Employies"
                                />
                            )}
                            ChipProps={{ color: 'primary' }}
                        />
                    </Grid>
                </Grid>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        marginTop: '30px',
                    }}
                >
                    <Button
                        variant="contained"
                        sx={{ minWidth: '300px' }}
                        type="submit"
                    >
                        Add Task
                    </Button>
                </Box>
            </ValidatorForm>

            {/* <Card sx={{ marginTop: '30px' }}>
                <CardContent>
                 
                </CardContent>
            </Card> */}
        </>
    )
}

export default AddNewTaskForm

const extraParts = [
    { title: 'Extra Parts 1' },
    { title: 'Extra Parts 2' },
    { title: 'Extra Parts 3' },
    { title: 'Extra Parts 4' },
    { title: 'Extra Parts 5' },
]

const topEmployies = [
    { title: 'Employies 1' },
    { title: 'Employies 2' },
    { title: 'Employies 3' },
    { title: 'Employies 4' },
    { title: 'Employies 5' },
]
