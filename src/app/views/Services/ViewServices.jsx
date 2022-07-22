import React, { useState, useEffect } from 'react'
import ServiceCard from './ServiceCard'
import { Grid } from '@mui/material'
import data from './DummyData'
import { viewServiceApi } from 'api-services/ServicesApi'

const ViewServices = () => {
    const [servicesData, setServicesData] = useState([])

    const getServicesList = async () => {
        try {
            const { data } = await viewServiceApi()
            setServicesData(data.data)
        } catch (error) {
            console.log('Error', error)
        }
    }

    useEffect(() => {
        getServicesList()
    }, [])

    return (
        <Grid container spacing={3}>
            {servicesData.map((item, index) => {
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
