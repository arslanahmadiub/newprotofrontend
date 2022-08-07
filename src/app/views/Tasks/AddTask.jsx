import React, { useState, useEffect } from 'react'
import {
    Button,
    Card,
    CardContent,
    Grid,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    Box,
} from '@mui/material'

import ExistingCustomer from './ExistingCustomer'
import NewCustomer from './NewCustomer'
import CarDetails from './CarDetails'

import AddNewTaskForm from './AddNewTaskForm'
import AddNewClientCar from './AddNewClientCar'
import { getCarApi } from 'api-services/CarsApi'
import { isEmpty } from 'lodash'

const AddTask = () => {
    const titleList = ['Add New Task', 'Car Details']

    const [stage, setStage] = useState(0)
    const [showCarModel, setShowCarModel] = useState(false)

    const [newTaskData, setNewTaskData] = useState({
        customerPhone: '',
        selectedCar: null,
    })

    const [radioValue, setRadioValue] = useState('existing')
    const [carDetailsData, setCarDetailsData] = useState([])

    const handelRadioValueChange = (e) => {
        setRadioValue(e.target.value)
    }

    const getCars = async () => {
        try {
            const { data } = await getCarApi()
            if (data.success) {
                data.data.forEach((item) => {
                    item.selected = false
                })
                setCarDetailsData(data.data)
            }
        } catch (error) {
            console.log('Error', error)
        }
    }

    useEffect(() => {
        getCars()
    }, [])

    const handelNext = () => {
        if (stage === 1 && newTaskData.selectedCar !== null) {
            setStage(stage + 1)
        }
    }

    const handelAddTask = () => {}

    const handelCarDetailChange = (e) => {
        let selectedCarId = e.target.value
        let selectedData = carDetailsData.map((item) => {
            return item._id === selectedCarId
                ? { ...item, selected: true }
                : { ...item, selected: false }
        })
        setCarDetailsData(selectedData)
        setNewTaskData({
            ...newTaskData,
            ['selectedCar']: carDetailsData.find(
                (item) => item._id === selectedCarId
            ),
        })
    }

    const handelAddNew = () => {
        setShowCarModel(true)
    }
    const handleClose = () => {
        setShowCarModel(false)
    }

    return (
        <Box>
            <Card>
                <CardContent>
                    <h2>{titleList[stage]}</h2>

                    {stage === 0 ? (
                        <>
                            <Grid container>
                                <Grid
                                    item
                                    xs={12}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <FormControl>
                                        <RadioGroup
                                            row
                                            value={radioValue}
                                            onChange={handelRadioValueChange}
                                        >
                                            <FormControlLabel
                                                value="existing"
                                                control={<Radio />}
                                                label="Existing Customer"
                                                sx={{ fontSize: '40px' }}
                                            />
                                            <FormControlLabel
                                                value="new"
                                                control={<Radio />}
                                                label="New Customer"
                                            />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12} sx={{ mt: 3 }}>
                                    {radioValue === 'existing' ? (
                                        <ExistingCustomer
                                            handelNext={(data) => {
                                                setNewTaskData({
                                                    ...newTaskData,
                                                    ['customerPhone']: data,
                                                })
                                                setStage(stage + 1)
                                            }}
                                        />
                                    ) : (
                                        <NewCustomer
                                            handelNext={(data) => {
                                                setNewTaskData({
                                                    ...newTaskData,
                                                    ['customerPhone']: data,
                                                })
                                                setStage(stage + 1)
                                            }}
                                        />
                                    )}
                                </Grid>
                            </Grid>
                        </>
                    ) : stage === 1 ? (
                        !isEmpty(carDetailsData) &&
                        carDetailsData.map((item) => {
                            return (
                                <CarDetails
                                    checked={item.selected}
                                    data={item}
                                    key={item._id}
                                    onChange={handelCarDetailChange}
                                />
                            )
                        })
                    ) : (
                        <AddNewTaskForm
                            data={newTaskData}
                            reset={() => setStage(0)}
                        />
                    )}
                    <Grid
                        item
                        xs={12}
                        sx={{
                            mt: 5,
                            display: 'flex',
                            justifyContent: 'space-evenly',
                            width: '100%',
                        }}
                    >
                        {stage === 1 ? (
                            <Button
                                variant="contained"
                                sx={{ minWidth: '300px' }}
                                onClick={handelNext}
                            >
                                Next
                            </Button>
                        ) : null}

                        {stage === 1 && (
                            <Button
                                variant="contained"
                                sx={{ minWidth: '300px' }}
                                onClick={handelAddNew}
                            >
                                Add New
                            </Button>
                        )}
                    </Grid>

                    <AddNewClientCar
                        open={showCarModel}
                        handleClose={handleClose}
                        loading={true}
                        handelUpdate={() => {
                            getCars()
                        }}
                    />
                </CardContent>
            </Card>
        </Box>
    )
}

export default AddTask
