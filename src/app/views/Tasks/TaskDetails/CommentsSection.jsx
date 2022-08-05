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
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined'
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined'

const CommentsSection = () => {
    return (
        <Card sx={{ margin: 1 }}>
            <CardHeader title="Comments (51)" />

            <CardContent spacing={2}>
                <Stack>
                    <Grid container direction={'row'}>
                        <Grid item direction={'column'} xs={10}>
                            <Stack direction="row" spacing={2}>
                                <Avatar
                                    alt="Cindy Baker"
                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                                />
                                <Typography variant="h6">
                                    Jeremy Tomlinson
                                </Typography>
                            </Stack>
                            <Typography variant="body2" color="text.secondary">
                                Nice work, makes me think of the Money Pit.
                            </Typography>
                        </Grid>

                        <Grid container direction={'column'} xs={2}>
                            5 hours ago
                        </Grid>
                    </Grid>

                    <Grid container direction={'row'}>
                        <Grid item direction={'column'} xs={10}>
                            <Stack direction="row" spacing={2}>
                                <Avatar
                                    alt="Cindy Baker"
                                    src="https://images.unsplash.com/photo-1551024739-78e9d60c45ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                                />
                                <Typography variant="h6">
                                    Jeremy Tomlinson
                                </Typography>
                            </Stack>
                            <Typography variant="body2" color="text.secondary">
                                Nice work, makes me think of the Money Pit.
                            </Typography>
                        </Grid>

                        <Grid container direction={'column'} xs={2}>
                            5 hours ago
                        </Grid>
                    </Grid>
                </Stack>

                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={12}
                >
                    <LoadingButton
                        loading
                        loadingPosition="start"
                        startIcon={<SaveIcon />}
                        // variant="outlined"
                        color="error"
                    >
                        Load More
                    </LoadingButton>
                </Stack>

                {/* Input Form Comments */}
                <Stack>
                    <TextareaAutosize
                        aria-label="minimum height"
                        minRows={3}
                        fullwidth
                        placeholder="Your comment..."
                        style={{
                            width: 200,
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
                            padding: '10px',
                            borderRadius: '5px',
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
                        <Button
                            variant="contained"
                            color="success"
                            startIcon={<SendIcon />}
                        >
                            Submit
                        </Button>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default CommentsSection
