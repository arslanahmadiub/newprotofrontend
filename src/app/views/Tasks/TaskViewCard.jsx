import { Card, CardContent, Box, Typography, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const TaskViewCard = ({ data }) => {
    const { taskCar, service, _id } = data

    const dataObject = {
        complete: 'red',
        inprogress: 'gold',
        notstart: 'green',
    }

    return (
        <Card sx={{ maxWidth: 345 }}>
            <Box
                sx={{
                    width: '100%',
                    height: 150,
                    backgroundColor: 'primary.dark',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    flexDirection: 'column',
                    position: 'relative',
                }}
            >
                <Typography variant="h6">{taskCar.make}</Typography>
                <Typography variant="subtitle2">{taskCar.model}</Typography>
                <Box
                    sx={{
                        width: '10px',
                        height: '10px',
                        background: dataObject.complete,
                        borderRadius: '50%',
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                    }}
                />
            </Box>
            <CardContent>
                {service.map((item, index) => {
                    return (
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                borderBottom: `${
                                    index === service.length - 1
                                        ? '0px solid lightGray'
                                        : '1px solid lightGray'
                                }`,
                                paddingBottom: '5px',
                                marginBottom: '15px',
                            }}
                            key={index}
                        >
                            <Typography variant="body2">
                                {item.serviceName}
                            </Typography>
                        </Box>
                    )
                })}

                <Box
                    sx={{
                        display: 'flex',
                        marginTop: '30px',
                        justifyContent: 'center',
                    }}
                >
                    <Link to={`/task/details/${_id}`}>
                        <Button variant="contained" sx={{ minWidth: '200px' }}>
                            See Details
                        </Button>
                    </Link>
                </Box>
            </CardContent>
        </Card>
    )
}

export default TaskViewCard
