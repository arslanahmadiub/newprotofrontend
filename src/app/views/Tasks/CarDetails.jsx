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
    Chip,
} from '@mui/material'

const CarDetails = ({ checked, data, onChange }) => {
    console.log('Checked', checked)

    return (
        <div style={{ display: 'flex', marginBottom: '30px' }}>
            <FormControlLabel
                checked={checked}
                control={<Radio />}
                sx={{ fontSize: '40px' }}
                onChange={onChange}
                value={data.id}
            />
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    width: '100%',
                }}
            >
                <CustomChipLable label="Make" value={data?.make} />
                <CustomChipLable label="Model" value={data?.model} />
                <CustomChipLable label="Year" value={data?.year} />
                <CustomChipLable label="Region/VIN" value={data?.region} />
            </div>
        </div>
    )
}

export default CarDetails

const CustomChipLable = ({ label, value }) => {
    return (
        <div style={CustomChipContainer}>
            <p style={CustomChipLabel}>{label}</p>
            <Chip
                color="primary"
                label={value}
                size="medium"
                sx={customChipStyle}
            />
        </div>
    )
}

const CustomChipContainer = {
    position: 'relative',
    marginTop: '3px',
}

const CustomChipLabel = {
    position: 'absolute',
    top: '-35px',
    left: '10px',
    fontWeight: '500',
    color: '#C1C1C1',
}

const customChipStyle = {
    padding: '0 10px',
    minWidth: '130px',
}
