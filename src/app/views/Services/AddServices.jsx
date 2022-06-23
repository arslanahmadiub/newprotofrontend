import React, { useState } from 'react'

import { Button, IconButton, Card, CardContent, Grid } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { styled } from '@mui/system'
import ImagePreview from 'app/components/ImagePreview/ImagePreview'
import CarsModel from './CarsModel'

const TextField = styled(TextValidator)(() => ({
    width: '100%',
    marginBottom: '16px',
}))

const AddServices = () => {
    const [serviceImage, setServiceImage] = useState({
        serviceImageFile: null,
        serviceImageUrl: '',
    })
    const handleSubmit = () => {}

    const selectImage = (e) => {
        let imageFile = e.target.files[0]
        let imageUrl = URL.createObjectURL(imageFile)
        setServiceImage({
            serviceImageFile: imageFile,
            serviceImageUrl: imageUrl,
        })
    }

    const [carModelObj, setCarModelObj] = useState([
        {
            carMake: '',
            carModel: '',
            startYear: '',
            endYear: '',
        },
    ])

    const handelAddCarModel = () => {
        let newCarModelObj = [
            ...carModelObj,
            {
                carMake: '',
                carModel: '',
                startYear: '',
                endYear: '',
            },
        ]
        setCarModelObj(newCarModelObj)
    }
    return (
        <Card>
            <CardContent>
                <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
                    <Grid container spacing={3} sx={{ mt: 1 }}>
                        <Grid item lg={4} md={4} sm={12} xs={12}>
                            <TextField
                                label="Service Name"
                                type="text"
                                name="serviceName"
                                // value={serviceName || ''}
                            />
                        </Grid>
                        <Grid
                            item
                            lg={8}
                            md={8}
                            sm={12}
                            xs={12}
                            sx={{
                                display: 'flex',
                                height: '200px',
                                justifyContent: 'space-between',
                            }}
                        >
                            <ImagePreview
                                onChange={selectImage}
                                imageUrl={serviceImage.serviceImageUrl}
                            />
                        </Grid>
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            <h3>Cars</h3>
                        </Grid>
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            {carModelObj.map((item, index) => {
                                return (
                                    <CarsModel
                                        value={item}
                                        key={index}
                                        number={index}
                                    />
                                )
                            })}
                        </Grid>
                        <Grid
                            item
                            lg={12}
                            md={12}
                            sm={12}
                            xs={12}
                            sx={{ position: 'relative' }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    width: '100%',
                                    height: '1px',
                                    background: 'rgba(0, 0, 0, 0.23)',
                                    position: 'relative',
                                }}
                            ></div>
                            <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                                style={{
                                    position: 'absolute',
                                    top: '20%',
                                    left: '50%',
                                    background: 'white',
                                }}
                                onClick={handelAddCarModel}
                            >
                                <AddIcon />
                            </IconButton>
                        </Grid>
                        <Grid
                            item
                            lg={12}
                            md={12}
                            sm={12}
                            xs={12}
                            sx={{ marginTop: '15px' }}
                        >
                            <Button variant="contained" fullWidth>
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </ValidatorForm>
            </CardContent>
        </Card>
    )
}

export default AddServices
