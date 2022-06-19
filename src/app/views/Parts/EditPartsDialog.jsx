import React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import LinearProgress from '@mui/material/LinearProgress'

const EditPartsDialog = ({
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
            >
                <DialogTitle id="form-dialog-title">Edit Parts</DialogTitle>
                <DialogContent>
                    <TextField
                        label="Number"
                        name="number"
                        type="text"
                        fullWidth
                        value={formData && formData.number}
                        margin="dense"
                        onChange={handelChange}
                    />
                    <TextField
                        margin="dense"
                        label="Quantity"
                        name="quantity"
                        type="number"
                        fullWidth
                        value={formData && formData.quantity}
                        onChange={handelChange}
                    />
                    <TextField
                        margin="dense"
                        label="Price"
                        name="price"
                        type="number"
                        fullWidth
                        value={formData && formData.price}
                        onChange={handelChange}
                    />
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
                        Update
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default EditPartsDialog
