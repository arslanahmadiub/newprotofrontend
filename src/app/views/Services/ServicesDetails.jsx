import React, { useState } from 'react'
import { Button, Card, CardContent, Grid } from '@mui/material'
import AddNewCars from './AddNewCars'

const ServicesDetails = () => {
    const [showCarModel, setShowCarModel] = useState(false)

    const handleClose = () => {
        setShowCarModel(false)
    }

    return (
        <Grid container>
            <Grid
                item
                xs={12}
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <h2>Service Name Here</h2>
                <Button
                    variant="contained"
                    onClick={() => setShowCarModel(true)}
                >
                    {' '}
                    Add New Car
                </Button>
            </Grid>
            <Grid item xs={12}>
                <Card style={{ border: '1px solid gray' }}>
                    <CardContent style={{ padding: '0px' }}>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                color: 'gray',
                                fontWeight: '500',
                                fontSize: '16px',
                                borderBottom: '1px solid gray',
                                padding: '0 20px',
                            }}
                        >
                            <p>Car Name</p>
                            <p>Car Model</p>
                            <p>2014 - 2018</p>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: 'gray',
                                fontWeight: '500',
                                fontSize: '16px',
                                borderBottom: '1px solid gray',
                                padding: '0 20px',
                                height: '150px',
                            }}
                        >
                            <h1>Parts Section Here</h1>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                width: '100%',
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    color: 'gray',
                                    fontWeight: '500',
                                    fontSize: '16px',
                                    padding: '0 20px',
                                }}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                    }}
                                >
                                    <p>Car Name</p>
                                    <p style={{ marginLeft: '10px' }}>$300</p>
                                </div>

                                <div
                                    style={{
                                        display: 'flex',
                                        marginLeft: '20px',
                                    }}
                                >
                                    <p>Labor Cost</p>
                                    <p style={{ marginLeft: '10px' }}>$300</p>
                                </div>
                                <div
                                    style={{
                                        display: 'flex',
                                        marginLeft: '20px',
                                    }}
                                >
                                    <p>Discount</p>
                                    <p style={{ marginLeft: '10px' }}>$300</p>
                                </div>
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    color: 'gray',
                                    fontWeight: '500',
                                    fontSize: '16px',
                                    padding: '0 20px',
                                }}
                            >
                                <div style={{ display: 'flex' }}>
                                    <p>Total Estimated Cost</p>
                                    <p style={{ marginLeft: '10px' }}>$300</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </Grid>
            <AddNewCars
                open={showCarModel}
                handleClose={handleClose}
                loading={true}
            />
        </Grid>
    )
}

export default ServicesDetails
