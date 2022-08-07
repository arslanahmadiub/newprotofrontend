
import {
    Stack,
    Card,
    CardContent,
    CardHeader,
    IconButton,
    Typography,
} from '@mui/material'

import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined'
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined'

const Attachments = () => {
    return (
        <Card sx={{ marginTop: 1 }}>
            <CardHeader title="Attachments" />

            <CardContent>
                <Stack
                    direction="column"
                    sx={{
                        border: '1px solid lightgrey',
                        padding: '10px',
                        borderRadius: '5px',
                        width: 'fit',
                        hight: '600px',
                    }}
                >
                    <IconButton aria-label="file upload">
                        <CloudUploadOutlinedIcon />
                    </IconButton>

                    <Typography variant="h6">
                        Drop files here or Click to upload
                    </Typography>
                    <Typography variant="body2">{`(This is just a demo dropzone. Selected files are not actually uploaded.)`}</Typography>
                </Stack>

                {/* uploaded items */}
                <Stack
                    direction="column"
                    sx={{ width: '100%' }}
                >
                    {/* Item 1  */}
                    <Stack
                        direction="row"
                        spacing={12}
                        sx={{
                            border: '1px solid lightgrey',
                            justifyContent: 'space-between',
                            alignItems: 'center',
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

                        <IconButton aria-label="file download">
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

                        <IconButton aria-label="file download">
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

                        <IconButton aria-label="file download">
                            <FileDownloadOutlinedIcon />
                        </IconButton>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default Attachments
