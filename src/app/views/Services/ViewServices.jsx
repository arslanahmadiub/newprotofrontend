import React from 'react'
import ServiceCard from './ServiceCard'
import { styled } from '@mui/system'
import { Grid } from '@mui/material'
import data from './DummyData'

const ViewServices = () => {
    return (
        <Grid container spacing={3}>
            {data.map((item, index) => {
                return (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={3}
                        lg={3}
                        xl={3}
                        key={index}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            width: '100%',
                        }}
                    >
                        <ServiceCard data={item} />
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default ViewServices
