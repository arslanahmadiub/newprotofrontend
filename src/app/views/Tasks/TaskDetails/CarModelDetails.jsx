import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Checkbox,
    IconButton,
    Typography,
    Box,
} from '@mui/material'

import Grid from '@mui/material/Grid'
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined'
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined'
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined'

const CarModelDetails = () => {
    return (
        <Card sx={{ margin: 1 }}>
            <CardHeader title="HNH-1234" />
            <CardContent>
                <Grid container direction={'row'} spacing={2}>
                    <Grid item direction={'row'} xs={4}>
                        <DirectionsCarOutlinedIcon
                            spacing={3}
                            color={'primary'}
                        />
                        Audi A8 2022
                    </Grid>
                    <Grid item xs={4}>
                        <ConstructionOutlinedIcon
                            spacing={3}
                            color={'primary'}
                        />
                        Eng-12345
                    </Grid>
                    <Grid item xs={4}>
                        <SpeedOutlinedIcon spacing={3} color={'primary'} />
                        10,000
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default CarModelDetails
