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

import Grid from '@mui/material/Grid'
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
                <Grid container direction={'column'} spacing={2}>
                    <Grid item xs={2}>
                        <Typography variant="h5" component="h2">
                            Order # 78900
                        </Typography>
                    </Grid>

                    <Grid item direction={'row'}>
                        <Grid container direction={'column'} xs={4}>
                            <Grid item xs={4}>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    ASSIGNED TO
                                </Typography>
                            </Grid>
                            <Grid item direction={'row'} xs={4}>
                                <Stack direction="row" spacing={2}>
                                    <Avatar
                                        alt="Cindy Baker"
                                        src="https://images.unsplash.com/photo-1516195851888-6f1a981a862e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=405&q=80"
                                    />
                                    <Typography variant="body">
                                        Arya Stark
                                    </Typography>
                                </Stack>
                            </Grid>
                        </Grid>

                        <Grid container direction={'column'} xs={4}>
                            <Grid item xs={4}>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    DATE
                                </Typography>
                            </Grid>
                            <Grid item direction={'row'} xs={4}>
                                <CalendarMonthOutlinedIcon
                                    spacing={1}
                                    color={'primary'}
                                />
                                Tuesday 10am
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item direction={'row'}>
                        <Stack direction={'column'} xs={4} spacing={3}>
                            <Stack xs={4}>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    CUSTOMER
                                </Typography>
                            </Stack>
                            <Stack direction={'row'} xs={4}>
                                <Avatar
                                    alt="Cindy Baker"
                                    src="https://images.unsplash.com/photo-1516195851888-6f1a981a862e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=405&q=80"
                                />
                                <Typography variant="body">
                                    Arya Stark
                                </Typography>
                            </Stack>
                        </Stack>

                        <Grid container direction={'column'} xs={4}>
                            <Grid item xs={4}>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    STATUS
                                </Typography>
                                In progress
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item>
                        <Typography variant="h6" component="h2">
                            Overview:
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            This impressive paella is a perfect party dish and a
                            fun meal to cook together with your guests. Add 1
                            cup of frozen peas along with the mussels, if you
                            like.
                        </Typography>
                    </Grid>

                    <Grid item xs={8}>
                        <SettingsSuggestOutlinedIcon
                            spacing={1}
                            color={'primary'}
                        />
                        Service Name
                    </Grid>
                    <Grid item xs={8}>
                        <MiscellaneousServicesOutlinedIcon
                            spacing={1}
                            color={'primary'}
                        />
                        Extra Parts
                    </Grid>
                </Grid>
            </CardContent>

        </Card>
    )
}

export default TaskStatus
