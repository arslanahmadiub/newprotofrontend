import React from 'react'
import { Card } from '@mui/material'
import { styled } from '@mui/system'

const ServiceCard = (props) => {
    const { serviceImage, serviceName, laborCost, partsCost, totalCost } =
        props.data

    const StyledCard = styled(Card)(({ theme }) => ({
        display: 'flex',
        flexWrap: 'wrap',
        background: theme.palette.background.paper,
        [theme.breakpoints.down('sm')]: {
            padding: '16px !important',
        },
        ':hover': {
            cursor: 'pointer',
        },
    }))
    const ContentBox = styled('div')(({ theme }) => ({
        display: 'flex',
        flexDirection: 'column',
        '& small': {
            color: theme.palette.text.secondary,
        },
        '& .icon': {
            opacity: 0.6,
            fontSize: '44px',
            color: theme.palette.primary.main,
        },
    }))

    const Heading = styled('h6')(({ theme }) => ({
        margin: 0,
        marginTop: '4px',
        fontWeight: '500',
        marginLeft: '20px',
        fontSize: '24px',
        color: theme.palette.secondary.dark,
    }))
    const Content = styled('h6')(({ theme }) => ({
        margin: 0,
        marginTop: '4px',
        fontWeight: '500',
        marginLeft: '20px',
        fontSize: '17px',
        color: 'black',
    }))

    const ContentContainer = styled('div')(({ theme }) => ({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        '& small': {
            color: theme.palette.text.secondary,
        },
        '& .icon': {
            opacity: 0.6,
            fontSize: '44px',
            color: theme.palette.primary.main,
        },
    }))

    return (
        <StyledCard elevation={6}>
            <img
                src={serviceImage}
                alt="Oil Change"
                width="200px"
                height="150px"
            />
            <ContentBox>
                <Heading>{serviceName}</Heading>
                <ContentContainer>
                    <Content>Labor Cost:</Content>
                    <Content>
                        {laborCost?.min} - {laborCost?.max}
                    </Content>
                </ContentContainer>

                <ContentContainer>
                    <Content>Parts Cost:</Content>
                    <Content>
                        {partsCost?.min} - {partsCost?.max}
                    </Content>
                </ContentContainer>
                <ContentContainer>
                    <Content>Total Cost: </Content>

                    <Content>
                        {totalCost?.min} - {totalCost?.max}
                    </Content>
                </ContentContainer>
            </ContentBox>
        </StyledCard>
    )
}

export default ServiceCard
