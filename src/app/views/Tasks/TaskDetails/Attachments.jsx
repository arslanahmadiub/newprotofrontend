import {
    Stack,
    Card,
    CardContent,
    CardHeader,
    IconButton,
    Typography,
    Box,
} from '@mui/material'

import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined'
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined'
import { updateTaskImages } from 'api-services/TaskApi'
import { isEmpty } from 'lodash'

const Attachments = ({ taskId, reload, data }) => {
    const handeFileUpload = async (e) => {
        let imageFile = e.target.files[0]
        let formData = new FormData()
        formData.append('taskImage', imageFile)
        formData.append('imageSize', imageFile.size / 1024)
        formData.append('type', imageFile.type)

        try {
            const { data } = await updateTaskImages(taskId, formData)
            if (data.success) {
                reload()
            }
        } catch (error) {
            console.log('Error', error)
        }
    }

    const handelDownload = (imageUrl) => {
        const link = document.createElement('a')
        link.href = imageUrl
        link.setAttribute('target', '_blank')

        link.download = 'image file name here'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <Card sx={{ marginTop: 1 }}>
            <CardHeader title="Attachments" />

            <CardContent>
                <Box
                    sx={{
                        border: '1px solid lightgrey',
                        padding: '10px',
                        borderRadius: '5px',
                        width: 'fit',
                        hight: '600px',
                        display: 'flex',
                        justifyContent: 'center',
                        width: '100%',
                        alignItems: 'center',
                        flexDirection: 'column',
                    }}
                >
                    <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="label"
                    >
                        <input
                            hidden
                            accept="image/*"
                            type="file"
                            onChange={handeFileUpload}
                        />
                        <CloudUploadOutlinedIcon />
                    </IconButton>

                    <Typography variant="h6">Click to upload</Typography>
                    {/* <Typography variant="body2">{`(This is just a demo dropzone. Selected files are not actually uploaded.)`}</Typography> */}
                </Box>

                {/* uploaded items */}
                <Stack direction="column" sx={{ width: '100%' }}>
                    {/* Item 1  */}

                    {!isEmpty(data) &&
                        data.taskImages.map((item, index) => {
                            return (
                                <Stack
                                    direction="row"
                                    sx={{
                                        border: '1px solid lightgrey',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        padding: '10px',
                                        borderRadius: '5px',
                                        width: '100%',
                                        marginBottom: '15px',
                                    }}
                                >
                                    <Stack
                                        direction="row"
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
                                                {item.name.substring(0, 9)}...
                                                {item.name.substring(
                                                    item.name.length - 4
                                                )}
                                            </Typography>
                                            <Typography variant="body2">
                                                {parseFloat(
                                                    item.imageSize
                                                ).toFixed(2)}{' '}
                                                KB
                                            </Typography>
                                        </Stack>
                                    </Stack>

                                    <IconButton aria-label="file download">
                                        <FileDownloadOutlinedIcon
                                            onClick={() =>
                                                handelDownload(item.url)
                                            }
                                        />
                                    </IconButton>
                                </Stack>
                            )
                        })}
                </Stack>
            </CardContent>
        </Card>
    )
}

export default Attachments
