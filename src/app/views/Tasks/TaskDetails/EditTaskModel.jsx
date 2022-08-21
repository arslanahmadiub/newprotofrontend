import React, { useState, useEffect } from 'react'
import {
    Button,
    Grid,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    LinearProgress,
    IconButton,
} from '@mui/material'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { styled } from '@mui/system'
import TaskServices from '../TaskServices'
import { head, sum, compact } from 'lodash'
import { getServiceForSelector } from 'api-services/ServicesApi'
import AddIcon from '@mui/icons-material/Add'
import { updateTask } from 'api-services/TaskApi'

const TextField = styled(TextValidator)(() => ({
    width: '100%',
    marginBottom: '16px',
}))

const EditTaskModel = ({
    enginNumber,
    millage,
    handleClose,
    reload,
    handelChange,
    open,
    selectedCar,
    taskId,
}) => {
    const [loading, setLoading] = useState(false)
    const [servicesData, setServicesData] = useState([])
    const [partsData, setPartsData] = useState([])

    const handelUpdate = async () => {
        const taskData = {
            taskServiceData,
            enginNumber,
            millage,
        }
        setLoading(true)
        try {
            const { data } = await updateTask(taskId, taskData)
            if (data.success) {
                reload()
                handleClose()
            }
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log('Error', error)
        }
    }
    const getSelectorService = async () => {
        try {
            const { data } = await getServiceForSelector(selectedCar)
            if (data.success) {
                setServicesData(data.data)
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
            }
        } catch (error) {
            console.log('Error', error)
        }
    }

    useEffect(() => {
        getSelectorService()
    }, [selectedCar])

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

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
                fullWidth={true}
                maxWidth="lg"
            >
                <ValidatorForm onSubmit={handelUpdate} onError={() => null}>
                    <DialogTitle id="form-dialog-title">Edit Task</DialogTitle>
                    <DialogContent>
                        <Grid
                            container
                            spacing={2}
                            sx={{ marginTop: '10px', overflow: 'hidden' }}
                        >
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <TextField
                                    label="Engin Number"
                                    type="text"
                                    fullWidth
                                    name="enginNumber"
                                    onChange={handelChange}
                                    value={enginNumber}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <TextField
                                    label="Millage"
                                    type="text"
                                    fullWidth
                                    name="millage"
                                    onChange={handelChange}
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
                                            fieldRequired={false}
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
                                sx={{
                                    position: 'relative',
                                    marginTop: '20px',
                                    marginBottom: '40px',
                                }}
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
                                        top: '-20%',
                                        left: '50%',
                                        background: 'white',
                                    }}
                                    onClick={handelAddTaskServices}
                                >
                                    <AddIcon />
                                </IconButton>
                            </Grid>
                        </Grid>

                        <LinearProgress
                            color="success"
                            sx={{ mt: 2, display: loading ? '' : 'none' }}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button
                            variant="outlined"
                            color="secondary"
                            onClick={handleClose}
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            color="primary"
                            variant="contained"
                        >
                            Submit
                        </Button>
                    </DialogActions>
                </ValidatorForm>
            </Dialog>
        </div>
    )
}

export default EditTaskModel
