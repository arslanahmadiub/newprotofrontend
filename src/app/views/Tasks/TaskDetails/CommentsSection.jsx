import React, { useState } from 'react'

import { styled } from '@mui/system'
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
import moment from 'moment'
import SendIcon from '@mui/icons-material/Send'
import LoadingButton from '@mui/lab/LoadingButton'
import SaveIcon from '@mui/icons-material/Save'
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined'
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined'
import { isEmpty } from 'lodash'
import { addComment } from 'api-services/CommentsService'

const CommentsSection = ({ taskId, reCallApi, data }) => {
    const SubmitButton = styled(Button)(() => ({
        backgroundColor: '#00BC6B',
    }))

    const [comment, setComment] = useState('')

    const handelSubmit = async () => {
        if (!isEmpty(comment)) {
            const { data } = await addComment(taskId, { commentText: comment })
            if (data.success) {
                setComment('')
                reCallApi()
            }
        }
    }

    return (
        <Card sx={{ margin: 1 }}>
            <CardHeader
                title={`
                    Comments (${
                        data &&
                        data.hasOwnProperty('comments') &&
                        data.comments.length
                    })`}
            />

            <CardContent spacing={2}>
                {/* Show Comments */}
                <Stack spacing={2}>
                    {/* comment 1 */}

                    {data &&
                        data.hasOwnProperty('comments') &&
                        data.comments.map((item, index) => {
                            return (
                                <Stack
                                    direction={{
                                        lg: 'row',
                                        md: 'row',
                                        sm: 'row',
                                        xs: 'column',
                                    }}
                                    key={index}
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
                                                {item.commentText}
                                            </Typography>
                                        </Stack>
                                    </Stack>

                                    <Stack direction={'column'} xs={2}>
                                        {moment(item.createdAt).fromNow()}
                                    </Stack>
                                </Stack>
                            )
                        })}
                    {/* comment 2 */}

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
                        {/* <LoadingButton
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
                        </LoadingButton> */}
                    </Stack>
                </Stack>

                {/* Input Form Comments */}
                <Stack>
                    <TextareaAutosize
                        aria-label="minimum height"
                        minRows={4}
                        placeholder="Your comment..."
                        style={{
                            width: '100%',
                            borderBottom: 'none',
                            borderTopLeftRadius: '5px',
                            borderTopRightRadius: '5px',
                            padding: '5px',
                            resize: 'vertical',
                        }}
                        value={comment}
                        onChange={(e) => {
                            setComment(e.target.value)
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
                            onClick={handelSubmit}
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
