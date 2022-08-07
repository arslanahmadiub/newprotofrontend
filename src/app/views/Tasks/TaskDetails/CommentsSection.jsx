
import {  styled } from '@mui/system'
import {
    Avatar,
    Stack,
    Button,
    Card,
    CardContent,
    CardHeader,
    IconButton,
    Typography,
    TextareaAutosize,
} from '@mui/material'

import SendIcon from '@mui/icons-material/Send'
import LoadingButton from '@mui/lab/LoadingButton'
import SaveIcon from '@mui/icons-material/Save'
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined'
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined'

const CommentsSection = () => {
    const SubmitButton = styled(Button)(() => ({
        backgroundColor: '#00BC6B',
    }))

    return (
        <Card sx={{ margin: 1 }}>
            <CardHeader title="Comments (51)" />

            <CardContent spacing={2}>
                {/* Show Comments */}
                <Stack spacing={2}>
                    {/* comment 1 */}
                    <Stack
                        direction={{
                            lg: 'row',
                            md: 'row',
                            sm: 'row',
                            xs: 'column',
                        }}
                        justifyContent="space-between"
                        alignItems="center"
                        // spacing={12}
                        lg={10}
                        md={10}
                        sm={12}
                        xs={12}
                    >
                        <Stack
                            direction={'row'}
                            lg={10}
                            md={10}
                            sm={12}
                            xs={12}
                            justifyContent="space-between"
                            alignItems={'center'}
                            spacing={2}
                        >
                            <Avatar
                                alt="Cindy Baker"
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80s"
                            />
                            <Stack direction="column" spacing={0}>
                                <Typography variant="body1">
                                    Jeremy Tomlinson
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    Nice work, makes me think of the Money Pit.
                                </Typography>
                            </Stack>
                        </Stack>

                        <Stack direction={'column'} xs={2}>
                            5 hours ago
                        </Stack>
                    </Stack>

                    {/* comment 2 */}
                    <Stack
                        direction={{
                            lg: 'row',
                            md: 'row',
                            sm: 'row',
                            xs: 'column',
                        }}
                        justifyContent="space-between"
                        alignItems="center"
                        // spacing={12}
                        lg={10}
                        md={10}
                        sm={12}
                        xs={12}
                    >
                        <Stack
                            direction={'row'}
                            lg={10}
                            md={10}
                            sm={12}
                            xs={12}
                            justifyContent="space-between"
                            alignItems={'center'}
                            spacing={2}
                        >
                            <Avatar
                                alt="Cindy Baker"
                                src="https://images.unsplash.com/photo-1551024739-78e9d60c45ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                            />
                            <Stack direction="column" spacing={0}>
                                <Typography variant="body1">
                                    Jeremy Tomlinson
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    Nice work, makes me think of the Money Pit.
                                </Typography>
                            </Stack>
                        </Stack>

                        <Stack direction={'column'} xs={2}>
                            5 hours ago
                        </Stack>
                    </Stack>

                    {/* load more comments button  */}
                    <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={12}
                        sx={{
                            color: 'red',
                            // backgroundColor: 'red',
                        }}
                    >
                        <LoadingButton
                            loading
                            loadingPosition="start"
                            startIcon={<SaveIcon />}
                            // variant="outlined"
                            // color="error"
                            sx={{
                                color: 'red',
                                // backgroundColor: 'red',
                            }}
                        >
                            Load More
                        </LoadingButton>
                    </Stack>
                </Stack>

                {/* Input Form Comments */}
                <Stack>
                    <TextareaAutosize
                        aria-label="minimum height"
                        minRows={4}
                        fullwidth
                        placeholder="Your comment..."
                        style={{
                            width: '100%',
                            borderBottom: 'none',
                            borderTopLeftRadius: '5px',
                            borderTopRightRadius: '5px',
                            padding: '5px',
                            resize: 'vertical',
                        }}
                    />
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={12}
                        sx={{
                            backgroundColor: 'lightgrey',
                            padding: '10px',
                            border: '1px solid darkgray',
                            borderRadius: '5px',
                            borderTopLeftRadius: '0px',
                            borderTopRightRadius: '0px',
                        }}
                    >
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="flex-start"
                            sx={{
                                color: 'darkgray',
                            }}
                        >
                            <IconButton aria-label="add an alarm">
                                <CloudUploadOutlinedIcon />
                            </IconButton>
                            <IconButton aria-label="add an alarm">
                                <AlternateEmailOutlinedIcon />
                            </IconButton>
                        </Stack>
                        <SubmitButton
                            variant="contained"
                            startIcon={<SendIcon />}
                        >
                            Submit
                        </SubmitButton>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default CommentsSection
