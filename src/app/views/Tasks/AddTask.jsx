import React, { useState } from 'react'
import {
    Button,
    IconButton,
    Card,
    CardContent,
    Grid,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
} from '@mui/material'
import { styled } from '@mui/system'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import ExistingCustomer from './ExistingCustomer'
import NewCustomer from './NewCustomer'

const AddTask = () => {
    const [stage, setStage] = useState(0)
    const [phone, setPhone] = useState('')
    const [radioValue, setRadioValue] = useState('existing')

    const handelRadioValueChange = (e) => {
        setRadioValue(e.target.value)
    }

    const handelPhoneChange = (e) => {
        setPhone(e.target.value)
    }

    const handelNext = () => {
        setStage(stage + 1)
    }

    console.log('stage', stage)
    return (
        <Card>
            <CardContent>
                <h2>Add New Task</h2>
                <Grid container>
                    <Grid
                        item
                        xs={12}
                        sx={{ display: 'flex', justifyContent: 'center' }}
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

                    <Grid
                        item
                        xs={12}
                        sx={{
                            mt: 5,
                            display: 'flex',
                            justifyContent: 'center',
                            width: '100%',
                        }}
                    >
                        <Button
                            variant="contained"
                            sx={{ width: '300px' }}
                            onClick={handelNext}
                        >
                            Next
                        </Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default AddTask
