import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom'

const ServiceCard = (props) => {
    const {
        serviceImage,
        serviceName,
        rangeTotal,
        rangeLabor,
        rangeParts,
        _id,
    } = props.data

    const style = {
        paddingTop: '4px',
        paddingBottom: '4px',
        display: 'flex',
        justifyContent: 'space-between',
    }

    let navigate = useNavigate()

    const handelSeeDetails = () => {
        navigate(`/services/details/${_id}`)
    }

    return (
        <Card sx={{ maxWidth: 280 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="200"
                image={serviceImage}
                sx={{ width: '280px', objectFit: 'cover' }}
            />
            <CardContent
                sx={{
                    paddingBottom: '4px',
                    paddingTop: '4px',
                }}
            >
                <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        fontWeight: '400',
                    }}
                >
                    {serviceName}
                </Typography>
            </CardContent>
            <CardContent sx={style}>
                <Typography variant="body1" color="text.secondary">
                    Total Cost
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    {rangeTotal.min}$ - {rangeTotal.max}$
                </Typography>
            </CardContent>
            <CardContent sx={style}>
                <Typography variant="body1" color="text.secondary">
                    Labour Cost
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    {rangeLabor.min}$ - {rangeLabor.max}$
                </Typography>
            </CardContent>

            <CardContent sx={style}>
                <Typography variant="body1" color="text.secondary">
                    Parts Cost
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    {rangeParts.min}$ - {rangeParts.max}$
                </Typography>
            </CardContent>

            <CardActions
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: '8px',
                }}
            >
                <Button
                    size="small"
                    variant="contained"
                    onClick={handelSeeDetails}
                >
                    See Details
                </Button>
            </CardActions>
        </Card>
    )
}

export default ServiceCard
