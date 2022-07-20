import React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import LinearProgress from '@mui/material/LinearProgress'
import { Typography } from '@mui/material'

const DeletePartsDialog = ({ open, handleClose, handelDelete, loading }) => {
    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Delete Part</DialogTitle>
                <DialogContent>
                    <Typography variant="h6" sx={{ color: 'gray' }}>
                        Are you sure you want to delete this part?
                    </Typography>
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
                        onClick={handelDelete}
                        color="error"
                        variant="contained"
                    >
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default DeletePartsDialog
