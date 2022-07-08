import React, { useState } from 'react'
import {
    Button,
    Card,
    CardContent,
    Grid,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    Autocomplete,
    Box,
    TextField,
} from '@mui/material'

import ExistingCustomer from './ExistingCustomer'
import NewCustomer from './NewCustomer'
import CarDetails from './CarDetails'

import AddNewTaskForm from './AddNewTaskForm'
import AddNewClientCar from './AddNewClientCar'

const AddTask = () => {
    const titleList = ['Add New Task', 'Car Details']

    const [stage, setStage] = useState(0)
    const [showCarModel, setShowCarModel] = useState(false)

    const [phone, setPhone] = useState('')
    const [radioValue, setRadioValue] = useState('existing')
    const [carDetailsData, setCarDetailsData] = useState([
        {
            id: 1,
            make: 'Dummy',
            model: 'Dummy',
            year: '2020',
            region: 'Th-1234',
            selected: false,
        },
        {
            id: 2,
            make: 'Dummy2',
            model: 'Dummy2',
            year: '2022',
            region: 'Th-3423',
            selected: false,
        },
    ])

    const handelRadioValueChange = (e) => {
        setRadioValue(e.target.value)
    }

    const handelPhoneChange = (e) => {
        setPhone(e.target.value)
    }

    const handelNext = () => {
        setStage(stage + 1)
    }

    const handelAddTask = () => {}

    const handelCarDetailChange = (e) => {
        let selectedCarId = e.target.value
        let selectedData = carDetailsData.map((item) => {
            return item.id == selectedCarId
                ? { ...item, selected: true }
                : { ...item, selected: false }
        })
        setCarDetailsData(selectedData)
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
                                            onChange={handelPhoneChange}
                                            value={phone}
                                        />
                                    ) : (
                                        <NewCustomer />
                                    )}
                                </Grid>
                            </Grid>
                        </>
                    ) : stage === 1 ? (
                        carDetailsData.map((item, index) => {
                            return (
                                <CarDetails
                                    checked={item.selected}
                                    data={item}
                                    key={item.id}
                                    onChange={handelCarDetailChange}
                                />
                            )
                        })
                    ) : (
                        <AddNewTaskForm />
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
                        {stage === 0 || stage === 1 ? (
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
                    />
                </CardContent>
            </Card>
            {stage === 2 && (
                <Card sx={{ marginTop: '30px' }}>
                    <CardContent>
                        <Grid container>
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
                    </CardContent>
                </Card>
            )}
            {stage === 2 && (
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
                        onClick={handelAddTask}
                    >
                        Add Task
                    </Button>
                </Box>
            )}
        </Box>
    )
}

export default AddTask

const topEmployies = [
    { title: 'Employies 1' },
    { title: 'Employies 2' },
    { title: 'Employies 3' },
    { title: 'Employies 4' },
    { title: 'Employies 5' },
]
