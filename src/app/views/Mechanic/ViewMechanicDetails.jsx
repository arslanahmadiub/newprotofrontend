import {
    Grid,
    Box,
    Avatar,
    Typography,
    Button,
    IconButton,
    Chip,
    AvatarGroup,
} from '@mui/material'
import { deepOrange, deepPurple } from '@mui/material/colors'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import React from 'react'
import EmailIcon from '@mui/icons-material/Email'
import PinIcon from '@mui/icons-material/Pin'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import MaterialTable from 'material-table'

const ViewMechanicDetails = () => {
    const columns = [
        { title: 'Id', field: 'orderId' },
        { title: 'Services', field: 'services' },
        { title: 'Customer', field: 'customer' },
        {
            title: 'Assign To',
            field: 'assignTo',

            render: (rowData) => (
                <AvatarGroup max={3}>
                    <Avatar
                        alt="Remy Sharp"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
                    />
                    <Avatar
                        alt="Travis Howard"
                        src="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-male-employee-in-office-picture-id1309328823?k=20&m=1309328823&s=170667a&w=0&h=oMsI5ZENn4zVrZAjO1g36r7c_enSMkuw11cdBd4jrls="
                    />
                    <Avatar
                        alt="Cindy Baker"
                        src="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg"
                    />
                    <Avatar
                        alt="Cindy Baker"
                        src="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg"
                    />
                </AvatarGroup>
            ),
        },
        {
            title: 'Status',
            field: 'status',
            render: (rowData) => (
                <Chip label={rowData.status} color="primary" />
            ),
        },
        { title: 'Date', field: 'date' },
        { title: 'Millage', field: 'millage' },
    ]
    return (
        <Grid container>
            <Grid item xs={12}>
                <Box
                    sx={{
                        width: '100%',
                        height: '130px',
                        display: 'flex',
                        justifyContent: 'flex-end',
                    }}
                >
                    <Avatar
                        sx={{
                            width: 156,
                            height: 156,
                            bgcolor: deepPurple[500],
                            position: 'absolute',
                            top: '5px',
                            left: '5px',
                        }}
                    >
                        AR
                    </Avatar>
                    <Box
                        sx={{
                            bgcolor: deepOrange[500],
                            height: '130px',
                            width: 'calc(100% - 30px)',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-around',
                                height: '100%',
                                width: '100%',
                                alignItems: 'center',
                                color: 'white',
                                paddingLeft: '100px',
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        height: '60px',
                                    }}
                                >
                                    <Typography variant="subtitle2">
                                        Arslan Ahmad
                                    </Typography>
                                </Box>

                                <Button variant="contained">
                                    Edit Profile
                                </Button>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        height: '60px',
                                    }}
                                >
                                    <IconButton>
                                        <LocalPhoneIcon
                                            sx={{ color: 'white' }}
                                        />
                                    </IconButton>
                                    <Typography variant="subtitle2">
                                        03023338991
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <IconButton>
                                        <PinIcon sx={{ color: 'white' }} />
                                    </IconButton>
                                    <Typography variant="subtitle2">
                                        000-000-0000
                                    </Typography>
                                </Box>
                            </Box>

                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        height: '60px',
                                    }}
                                >
                                    <IconButton>
                                        <EmailIcon sx={{ color: 'white' }} />
                                    </IconButton>
                                    <Typography variant="subtitle2">
                                        arslanahmadiub@gmail.com
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <IconButton>
                                        <LocationOnIcon
                                            sx={{ color: 'white' }}
                                        />
                                    </IconButton>
                                    <Typography variant="subtitle2">
                                        12 DownTown New York
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Grid>

            <Grid item xs={12} sx={{ marginTop: '50px' }}>
                <MaterialTable
                    columns={columns}
                    style={{ paddingLeft: '15px', paddingRight: '15px' }}
                    data={[
                        {
                            orderId: '45689',
                            services: 'Oil Change',
                            customer: 'Abrar',
                            assignTo: 'dafsd',
                            status: 'complete',
                            date: '25-08-2012',
                            millage: '55618',
                        },
                    ]}
                    actions={[
                        {
                            icon: 'delete',
                            tooltip: 'Delete User',
                            onClick: (event, rowData) =>
                                alert('You want to delete ' + rowData.name),
                        },
                    ]}
                    options={{
                        actionsColumnIndex: -1,
                    }}
                    title="Recent Orders"
                />
            </Grid>
        </Grid>
    )
}

export default ViewMechanicDetails
