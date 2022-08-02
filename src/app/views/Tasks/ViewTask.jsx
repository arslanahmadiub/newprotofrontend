import { Grid } from '@mui/material'
import React from 'react'
import TaskViewCard from './TaskViewCard'

const ViewTask = () => {
    return (
        <Grid
            container
            spacing={5}
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            {dummyData.map((item, index) => {
                return (
                    <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                        <TaskViewCard data={item} />
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default ViewTask

const dummyData = [
    {
        numberPlate: 'AFM 8844',
        carModel: 'Honda 2022',
        services: [
            {
                serviceName: 'Oil Change',
                servicePart: 'Shell Oil',
            },
            {
                serviceName: 'Filter',
                servicePart: 'Honda Filter',
            },
        ],
        status: 'complete',
    },
    {
        numberPlate: 'LHR 8554',
        carModel: 'Suzuki 2022',
        services: [
            {
                serviceName: 'Oil Change',
                servicePart: 'Suzuki Oil',
            },
            {
                serviceName: 'Filter',
                servicePart: 'Suzuki Filter',
            },
        ],
        status: 'inprogress',
    },
    {
        numberPlate: 'LHR 8654',
        carModel: 'Toyota 2022',
        services: [
            {
                serviceName: 'Oil Change',
                servicePart: 'Toyota Oil',
            },
            {
                serviceName: 'Filter',
                servicePart: 'Toyota Filter',
            },
        ],
        status: 'notstart',
    },
    {
        numberPlate: 'AFM 8844',
        carModel: 'Honda 2022',
        services: [
            {
                serviceName: 'Oil Change',
                servicePart: 'Shell Oil',
            },
            {
                serviceName: 'Filter',
                servicePart: 'Honda Filter',
            },
        ],
        status: 'complete',
    },
    {
        numberPlate: 'LHR 8554',
        carModel: 'Suzuki 2022',
        services: [
            {
                serviceName: 'Oil Change',
                servicePart: 'Suzuki Oil',
            },
            {
                serviceName: 'Filter',
                servicePart: 'Suzuki Filter',
            },
        ],
        status: 'inprogress',
    },
    {
        numberPlate: 'LHR 8654',
        carModel: 'Toyota 2022',
        services: [
            {
                serviceName: 'Oil Change',
                servicePart: 'Toyota Oil',
            },
            {
                serviceName: 'Filter',
                servicePart: 'Toyota Filter',
            },
        ],
        status: 'notstart',
    },
]
