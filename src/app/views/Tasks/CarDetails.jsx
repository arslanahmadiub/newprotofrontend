import React from 'react'
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

const CarDetails = () => {
    return (
        <div>
            <FormControlLabel
                value="existing"
                control={<Radio />}
                sx={{ fontSize: '40px' }}
            />
        </div>
    )
}

export default CarDetails
