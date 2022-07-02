import React from 'react'
import { IMaskInput } from 'react-imask'
import Box from '@mui/material/Box'
import Input from '@mui/material/Input'
import InputLabel from '@mui/material/InputLabel'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import { Grid } from '@mui/material'
const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props
    return (
        <IMaskInput
            {...other}
            mask="(#0) 000-0000000"
            definitions={{
                '#': /[1-9]/,
            }}
            inputRef={ref}
            onAccept={(value) =>
                onChange({ target: { name: props.name, value } })
            }
            overwrite
        />
    )
})

const ExistingCustomer = ({ value, onChange }) => {
    return (
        <FormControl style={{ display: 'flex', width: '100%' }}>
            <InputLabel htmlFor="phone-input">Phone Number</InputLabel>
            <OutlinedInput
                value={value}
                onChange={onChange}
                name="phone"
                id="phone-input"
                inputComponent={TextMaskCustom}
                fullWidth={true}
                placeholder="Phone Number"
                label="Phone Number"
            />
        </FormControl>
    )
}

export default ExistingCustomer
