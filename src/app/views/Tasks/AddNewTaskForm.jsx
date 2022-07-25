import React, { useState, useEffect } from 'react'
import { Grid, TextField, IconButton, Autocomplete } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

import TaskServices from './TaskServices'
import { getServiceForSelector } from 'api-services/ServicesApi'
import { getPartsApi } from 'api-services/PartsApi'

const AddNewTaskForm = ({ data }) => {
    const { customerPhone, selectedCar } = data
    const [servicesData, setServicesData] = useState([])
    const [partsData, setPartsData] = useState([])

    const [taskServiceData, setTaskServiceData] = useState([
        {
            serviceName: '',
            partsData: ['Part-123', 'Part-243', 'Part-422'],
            partsCost: '234',
            laborCost: '244',
            discount: '56',
            estimationPrice: '5656',
        },
    ])

    const handelAddTaskServices = () => {
        setTaskServiceData([
            ...taskServiceData,
            {
                serviceName: '',
                partsData: ['Part-123', 'Part-243', 'Part-422'],
                partsCost: '234',
                laborCost: '244',
                discount: '56',
                estimationPrice: '5656',
            },
        ])
    }

    const handelTaskPartChange = (event, numser) => {}
    const handelAutoCompletPartsChange = (event, newValue, number) => {}
    const handelAutoCompletServiceChange = (event, newValue, number) => {}

    const getSelectorService = async () => {
        try {
            const { data } = await getServiceForSelector()
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

    return (
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
                />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
                <TextField
                    label="Make"
                    type="text"
                    value={selectedCar.make}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
                <TextField
                    label="Model"
                    type="text"
                    value={selectedCar.model}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
                <TextField
                    label="Year"
                    value={selectedCar.year}
                    fullWidth
                    type="text"
                />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
                <TextField
                    label="Rego / Vin"
                    type="text"
                    value={selectedCar.region}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
                <TextField label="Engin Number" type="text" fullWidth />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
                <TextField label="Millage" type="text" fullWidth />
            </Grid>

            {taskServiceData.map((item, index) => {
                return (
                    <Grid item xs={12} key={index}>
                        <TaskServices
                            data={item}
                            servicesData={servicesData}
                            partsData={partsData}
                            number={index}
                            onChange={(event, number) =>
                                handelTaskPartChange(event, number)
                            }
                            handelAutoCompletPartsChange={(
                                e,
                                newValue,
                                number
                            ) => {
                                handelAutoCompletPartsChange(
                                    e,
                                    newValue,
                                    number
                                )
                            }}
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

            <Grid item xs={12} sx={{ position: 'relative', marginTop: '20px' }}>
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
                    options={extraParts}
                    getOptionLabel={(option) => option.title}
                    filterSelectedOptions
                    defaultValue={[extraParts[1], extraParts[0]]}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Parts"
                            placeholder="Parts"
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
                <TextField label="Total Price" type="number" />
            </Grid>
            <Grid
                item
                xs={12}
                sx={{ display: 'flex', justifyContent: 'flex-end' }}
            >
                <TextField label="Extra Parts Cost" type="number" />
            </Grid>
            <Grid
                item
                xs={12}
                sx={{ display: 'flex', justifyContent: 'flex-end' }}
            >
                <TextField label="Tax" type="number" />
            </Grid>
            <Grid
                item
                xs={12}
                sx={{ display: 'flex', justifyContent: 'flex-end' }}
            >
                <TextField label="Final Price" type="number" />
            </Grid>
        </Grid>
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
