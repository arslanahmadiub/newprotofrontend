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

const AddNewClientCar = ({
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
                                name="year"
                                type="text"
                                fullWidth
                                value={formData && formData.year}
                                margin="dense"
                                onChange={handelChange}
                            />
                        </Grid>

                        <Grid item xs={12} sm={12} md={6}>
                            <TextField
                                label="Region / Vin"
                                name="region"
                                type="text"
                                fullWidth
                                value={formData && formData.region}
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

export default AddNewClientCar
