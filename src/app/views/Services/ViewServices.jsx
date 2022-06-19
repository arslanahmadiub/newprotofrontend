import React from 'react'
import ServiceCard from './ServiceCard'
import { styled } from '@mui/system'
import { Grid } from '@mui/material'
import data from './DummyData'

const Container = styled('div')(({ theme }) => ({
    margin: '20px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '16px',
        },
    },
}))

const ViewServices = () => {
    return (
        <Container>
            <Grid container spacing={2}>
                {data.map((item, index) => {
                    return (
                        <Grid
                            item
                            xs={12}
                            sm={12}
                            md={6}
                            lg={6}
                            xl={6}
                            key={index}
                        >
                            <ServiceCard data={item} />
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
    )
}

export default ViewServices
