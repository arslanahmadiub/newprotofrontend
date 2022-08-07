import { MoreVert } from '@mui/icons-material'
import {
    Avatar,
    Stack,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Checkbox,
    IconButton,
    Typography,
} from '@mui/material'

import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined'
import MiscellaneousServicesOutlinedIcon from '@mui/icons-material/MiscellaneousServicesOutlined'
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined'

const TaskStatus = () => {
    return (
        <Card sx={{ margin: 1 }}>
            <CardHeader
                avatar={<Checkbox defaultunChecked />}
                action={
                    <IconButton aria-label="settings">
                        <MoreVert />
                    </IconButton>
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

                    <Stack direction={'row'}>
                        <Stack direction={'column'} xs={4}>
                            <Stack xs={4}>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    ASSIGNED TO
                                </Typography>
                            </Stack>
                            <Stack direction={'row'} xs={4}>
                                <Stack direction="row" spacing={2}>
                                    <Avatar
                                        alt="Cindy Baker"
                                        src="https://images.unsplash.com/photo-1516195851888-6f1a981a862e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=405&q=80"
                                    />
                                    <Typography variant="body">
                                        Arya Stark
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Stack>

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
                                Tuesday 10am
                            </Stack>
                        </Stack>
                    </Stack>

                    <Stack
                        direction={'row'}
                        alignItems="center"
                        justifyContent = 'space-between'
                        spacing={1}
                        lg={8}
                        md={8}
                        sm={12}
                        xs={12}
                    >
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
                                    Arya Stark
                                </Typography>
                            </Stack>
                        </Stack>

                        <Stack direction={'column'} lg={4} md={4} sm={4} xs={4}>
                            <Stack xs={4}>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    STATUS
                                </Typography>
                                <Typography variant="body1" color="gray">
                                    In progress
                                </Typography>
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
                        <Typography>Service Name</Typography>
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
                        <Typography>Extra Parts</Typography>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default TaskStatus
