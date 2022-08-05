import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import { TabPanel } from '@mui/lab'
import {
    Avatar,
    Stack,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Checkbox,
    IconButton,
    Typography,
    TextareaAutosize,
} from '@mui/material'

import Grid from '@mui/material/Grid'
import SendIcon from '@mui/icons-material/Send'
import LoadingButton from '@mui/lab/LoadingButton'
import SaveIcon from '@mui/icons-material/Save'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined'
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined'
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined'

const Attachments = () => {
    return (
        <Card sx={{ margin: 1 }}>
            <CardHeader title="Attachments" />

            <CardContent spacing={2}>
                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={12}
                >
                    <Stack
                        direction="column"
                        // justifyContent="space-between"
                        alignItems="center"
                        spacing={12}
                        sx={{
                            paddingY: '10px',
                            border: '1px solid lightgrey',
                            padding: '10px',
                            borderRadius: '5px',
                            marginRight: '10px',
                        }}
                    >
                        <IconButton aria-label="add an alarm">
                            <CloudUploadOutlinedIcon />
                        </IconButton>

                        <Typography variant="h6">
                            Drop files here or Click to upload
                        </Typography>
                        <Typography variant="body2">{`(This is just a demo dropzone. Selected files are not actually uploaded.)`}</Typography>
                    </Stack>
                </Stack>

                {/* Input Form Comments */}
                <Stack
                    direction="column"
                    // justifyContent="space-between"
                    alignItems="center"
                    spacing={12}
                    // sx={{ width: "100%"}}
                >
                    {/* Item 1  */}
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={12}
                        sx={{
                            border: '1px solid lightgrey',
                            padding: '10px',
                            borderRadius: '5px',
                            width: 'fullwidth',
                        }}
                    >
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="flex-start"
                        >
                            <Typography
                                variant="body1"
                                sx={{
                                    backgroundColor: 'lightcyan',
                                    padding: '10px',
                                    border: '1px solid lightcyan',
                                    borderRadius: '5px',
                                    marginRight: '10px',
                                }}
                            >
                                .JPG
                            </Typography>
                            <Stack direction="column">
                                <Typography variant="body1">
                                    Car Pics.jpg
                                </Typography>
                                <Typography variant="body2">2.3 MB</Typography>
                            </Stack>
                        </Stack>

                        <IconButton aria-label="add an alarm">
                            <FileDownloadOutlinedIcon />
                        </IconButton>
                    </Stack>

                    {/* Item 2  */}
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={12}
                        sx={{
                            border: '1px solid lightgrey',
                            padding: '10px',
                            borderRadius: '5px',
                            width: 'fullwidth',
                        }}
                    >
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="flex-start"
                        >
                            <Typography
                                variant="body1"
                                sx={{
                                    backgroundColor: 'lightcyan',
                                    padding: '10px',
                                    border: '1px solid lightcyan',
                                    borderRadius: '5px',
                                    marginRight: '10px',
                                }}
                            >
                                .JPG
                            </Typography>
                            <Stack direction="column">
                                <Typography variant="body1">
                                    Car Pics.jpg
                                </Typography>
                                <Typography variant="body2">2.3 MB</Typography>
                            </Stack>
                        </Stack>

                        <IconButton aria-label="add an alarm">
                            <FileDownloadOutlinedIcon />
                        </IconButton>
                    </Stack>

                    {/* item 3  */}
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={12}
                        sx={{
                            border: '1px solid lightgrey',
                            padding: '10px',
                            borderRadius: '5px',
                            width: 'fullwidth',
                        }}
                    >
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="flex-start"
                        >
                            <Typography
                                variant="body1"
                                sx={{
                                    backgroundColor: 'lightcyan',
                                    padding: '10px',
                                    border: '1px solid lightcyan',
                                    borderRadius: '5px',
                                    marginRight: '10px',
                                }}
                            >
                                .JPG
                            </Typography>
                            <Stack direction="column">
                                <Typography variant="body1">
                                    Car Pics.jpg
                                </Typography>
                                <Typography variant="body2">2.3 MB</Typography>
                            </Stack>
                        </Stack>

                        <IconButton aria-label="add an alarm">
                            <FileDownloadOutlinedIcon />
                        </IconButton>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default Attachments
