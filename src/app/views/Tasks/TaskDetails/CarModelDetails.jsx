
import {
    Card,
    CardContent,
    CardHeader,
} from '@mui/material'

import Stack from '@mui/material/Stack'
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined'
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined'
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined'

const CarModelDetails = () => {
    return (
        <Card sx={{ margin: 1 }}>
            <CardHeader title="HNH-1234" />
            <CardContent>
                <Stack
                    direction={'row'}
                    justifyContent='space-between'
                    alignItems="center"
                    marginRight={'70px'}
                >
                    <Stack
                        direction={'row'}
                        alignItems="center"
                        spacing={2}
                        lg={4}
                        md={4}
                        sm={4}
                        xs={4}
                    >
                        <DirectionsCarOutlinedIcon
                            spacing={3}
                            color={'primary'}
                        />
                        <Stack>Audi A8 2022</Stack>
                    </Stack>
                    <Stack
                        direction={'row'}
                        alignItems="center"
                        spacing={2}
                        lg={4}
                        md={4}
                        sm={4}
                        xs={4}
                    >
                        <ConstructionOutlinedIcon
                            spacing={3}
                            color={'primary'}
                        />
                        <Stack>Eng-12345</Stack>
                    </Stack>
                    <Stack
                        direction={'row'}
                        alignItems="center"
                        spacing={2}
                        lg={4}
                        md={4}
                        sm={4}
                        xs={4}
                    >
                        <SpeedOutlinedIcon spacing={3} color={'primary'} />
                        <Stack>10,000</Stack>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default CarModelDetails
