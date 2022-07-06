import React from 'react'
import {
    Button,
    Grid,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    LinearProgress,
    MenuItem,
    FormControl,
    InputLabel,
} from '@mui/material'
import Select, { SelectChangeEvent } from '@mui/material/Select'

const AddNewCars = ({
    open,
    handleClose,
    formData,
    handelChange,
    handelUpdate,
    loading,
}) => {
    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
                fullWidth={true}
                maxWidth="md"
            >
                <DialogTitle id="form-dialog-title">Add New Car</DialogTitle>
                <DialogContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={6}>
                            <TextField
                                label="Manufacturer"
                                name="manufacturer"
                                type="text"
                                fullWidth
                                value={formData && formData.manufacturer}
                                margin="dense"
                                onChange={handelChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <TextField
                                label="Model No"
                                name="modelNo"
                                type="text"
                                fullWidth
                                value={formData && formData.modelNo}
                                margin="dense"
                                onChange={handelChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <TextField
                                label="From Year"
                                name="fromYear"
                                type="text"
                                fullWidth
                                value={formData && formData.fromYear}
                                margin="dense"
                                onChange={handelChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <TextField
                                label="To Year"
                                name="toYear"
                                type="text"
                                fullWidth
                                value={formData && formData.toYear}
                                margin="dense"
                                onChange={handelChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <TextField
                                label="Parts Cost"
                                name="partsCost"
                                type="text"
                                fullWidth
                                value={formData && formData.partsCost}
                                margin="dense"
                                onChange={handelChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <TextField
                                label="Labout Cost"
                                name="laboutCost"
                                type="text"
                                fullWidth
                                value={formData && formData.laboutCost}
                                margin="dense"
                                onChange={handelChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">
                                    Parts
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={formData && formData.laboutCost}
                                    label="Parts"
                                    onChange={handelChange}
                                >
                                    <MenuItem value={10}>Dummy Part 1</MenuItem>
                                    <MenuItem value={20}>Dummy Part 2</MenuItem>
                                    <MenuItem value={30}>Dummy Part 3</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <TextField
                                label="Discount"
                                name="discount"
                                type="text"
                                fullWidth
                                value={formData && formData.discount}
                                margin="dense"
                                onChange={handelChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <TextField
                                label="Estimate"
                                name="estimate"
                                type="text"
                                fullWidth
                                value={formData && formData.estimate}
                                margin="dense"
                                onChange={handelChange}
                            />
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
                        onClick={handelUpdate}
                        color="primary"
                        variant="contained"
                    >
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default AddNewCars
