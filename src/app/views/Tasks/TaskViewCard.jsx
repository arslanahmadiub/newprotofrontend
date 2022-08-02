import { Card, CardContent, Box, Typography, Button } from '@mui/material'
import React from 'react'

const TaskViewCard = ({ data }) => {
    const { numberPlate, carModel, services, status } = data

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
                <Typography variant="h6">{numberPlate}</Typography>
                <Typography variant="subtitle2">{carModel}</Typography>
                <Box
                    sx={{
                        width: '10px',
                        height: '10px',
                        background: dataObject[status],
                        borderRadius: '50%',
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                    }}
                />
            </Box>
            <CardContent>
                {services.map((item, index) => {
                    return (
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                borderBottom: `${
                                    index === services.length - 1
                                        ? '0px solid lightGray'
                                        : '1px solid lightGray'
                                }`,
                                paddingBottom: '5px',
                                marginBottom: '15px',
                            }}
                        >
                            <Typography variant="body2">
                                {item.serviceName}
                            </Typography>
                            <Typography variant="body2">
                                {item.servicePart}
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
                    <Button variant="contained" sx={{ minWidth: '200px' }}>
                        See Details
                    </Button>
                </Box>
            </CardContent>
        </Card>
    )
}

export default TaskViewCard
