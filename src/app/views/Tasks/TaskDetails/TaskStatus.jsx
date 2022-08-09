import React, { useState } from 'react'
import { MoreVert } from '@mui/icons-material'
import {
    Avatar,
    Stack,
    Menu,
    MenuItem,
    Card,
    CardContent,
    CardHeader,
    Checkbox,
    IconButton,
    Typography,
} from '@mui/material'

import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined'
import MiscellaneousServicesOutlinedIcon from '@mui/icons-material/MiscellaneousServicesOutlined'
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined'
import { isEmpty } from 'lodash'
import Chip from '@mui/material/Chip'
import moment from 'moment'

const TaskStatus = ({ data }) => {
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <Card sx={{ margin: 1 }}>
            <CardHeader
                avatar={<Checkbox defaultunChecked />}
                action={
                    <Stack>
                        <IconButton
                            aria-label="settings"
                            aria-controls={
                                open ? 'demo-positioned-menu' : undefined
                            }
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <MoreVert />
                        </IconButton>
                        <Menu
                            id="demo-positioned-menu"
                            aria-labelledby="demo-positioned-button"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                        >
                            <MenuItem onClick={handleClose}>On Hold</MenuItem>
                            <MenuItem onClick={handleClose}>
                                In Progress
                            </MenuItem>
                            <MenuItem onClick={handleClose}>Assign to</MenuItem>
                            <MenuItem onClick={handleClose}>Edit</MenuItem>
                            <MenuItem onClick={handleClose}>Delete</MenuItem>
                        </Menu>
                    </Stack>
                }
                title="Mark as completed"
            />

            <CardContent>
                <Stack direction={'column'} spacing={2}>
                    <Stack xs={2}>
                        <Typography variant="h5" component="h2">
                            Order # 78900
                        </Typography>
                    </Stack>

                    <Stack
                        direction={'row'}
                        // justifyContent="space-between"
                        spacing={12}
                        lg={12}
                        md={12}
                        sm={12}
                        xs={12}
                    >
                        {/* assigned to customer */}
                        <Stack
                            direction={'column'}
                            spacing={2}
                            lg={6}
                            md={6}
                            sm={6}
                            xs={6}
                        >
                            {/* Assigned to  */}
                            <Stack
                                direction={'column'}
                                spacing={1}
                                lg={4}
                                md={4}
                                sm={4}
                                xs={4}
                            >
                                <Stack xs={4}>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        ASSIGNED TO
                                    </Typography>
                                </Stack>
                                <Stack
                                    direction={'row'}
                                    alignItems="center"
                                    spacing={2}
                                    lg={4}
                                    md={4}
                                    sm={4}
                                    xs={4}
                                >
                                    <Avatar
                                        alt="Cindy Baker"
                                        src="https://images.unsplash.com/photo-1516195851888-6f1a981a862e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=405&q=80"
                                    />
                                    <Typography variant="body">
                                        Arya Stark
                                    </Typography>
                                </Stack>
                            </Stack>

                            {/* costumer  */}
                            <Stack
                                direction={'column'}
                                spacing={1}
                                lg={4}
                                md={4}
                                sm={4}
                                xs={4}
                            >
                                <Stack xs={4}>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        CUSTOMER
                                    </Typography>
                                </Stack>
                                <Stack
                                    direction={'row'}
                                    alignItems="center"
                                    spacing={2}
                                    lg={4}
                                    md={4}
                                    sm={4}
                                    xs={4}
                                >
                                    <Avatar
                                        alt="Cindy Baker"
                                        src="https://images.unsplash.com/photo-1516195851888-6f1a981a862e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=405&q=80"
                                    />
                                    <Typography variant="body1">
                                        {!isEmpty(data) &&
                                            `${data.customer.firstName}  ${data.customer.lastName}`}
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Stack>

                        {/* date and status  */}
                        <Stack
                            direction={'column'}
                            justifyContent="start"
                            spacing={3}
                            lg={6}
                            md={6}
                            sm={6}
                            xs={6}
                        >
                            <Stack direction={'column'} spacing={6}>
                                {/* date  */}
                                <Stack direction={'column'} xs={4}>
                                    <Stack xs={4}>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                        >
                                            DATE
                                        </Typography>
                                    </Stack>
                                    <Stack direction={'row'} xs={4}>
                                        <CalendarMonthOutlinedIcon
                                            spacing={1}
                                            color={'primary'}
                                        />
                                        {moment().format('DD-MM-YYYY')}
                                    </Stack>
                                </Stack>

                                {/* status */}
                                <Stack
                                    direction={'column'}
                                    lg={4}
                                    md={4}
                                    sm={4}
                                    xs={4}
                                >
                                    <Stack xs={4}>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                        >
                                            STATUS
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            color="gray"
                                        >
                                            In progress
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>

                    {/* overview section  */}
                    <Stack>
                        <Typography variant="h6" component="h2">
                            Overview:
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            This impressive paella is a perfect party dish and a
                            fun meal to cook together with your guests. Add 1
                            cup of frozen peas along with the mussels, if you
                            like.
                        </Typography>
                    </Stack>

                    {/* bottom menu */}
                    <Stack
                        direction={'row'}
                        spacing={2}
                        lg={12}
                        md={12}
                        sm={12}
                        xs={12}
                    >
                        <SettingsSuggestOutlinedIcon
                            spacing={1}
                            color={'primary'}
                        />
                        {!isEmpty(data) &&
                            data.service.map((item, index) => {
                                return (
                                    <Chip
                                        label={item.serviceName}
                                        color="primary"
                                        key={index}
                                    />
                                )
                            })}
                    </Stack>
                    <Stack
                        direction={'row'}
                        spacing={2}
                        lg={12}
                        md={12}
                        sm={12}
                        xs={12}
                    >
                        <MiscellaneousServicesOutlinedIcon
                            spacing={1}
                            color={'primary'}
                        />
                        {!isEmpty(data) &&
                            data.extraPart.map((item, index) => {
                                return (
                                    <Chip
                                        label={item.partBrand}
                                        color="primary"
                                        key={index}
                                    />
                                )
                            })}
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default TaskStatus
