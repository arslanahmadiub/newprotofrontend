import React from 'react'
import { IconButton } from '@mui/material'
import PhotoCamera from '@mui/icons-material/PhotoCamera'
import { styled } from '@mui/system'
import './imagePreview.css'
const Input = styled('input')({
    display: 'none',
})

const ImagePreview = ({ onChange, imageUrl, notSelected = false }) => {
    return (
        <>
            <div className="container_style">
                {imageUrl ? (
                    <img
                        src={imageUrl}
                        alt="service image"
                        loading="lazy"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'stretch',
                            cursor: 'pointer',
                        }}
                    />
                ) : (
                    <label htmlFor="icon-button-file">
                        <Input
                            accept="image/*"
                            id="icon-button-file"
                            type="file"
                            onChange={onChange}
                        />
                        <IconButton
                            color="primary"
                            aria-label="upload picture"
                            component="span"
                        >
                            <PhotoCamera
                                sx={{ width: '80px', height: '80px' }}
                            />
                        </IconButton>
                    </label>
                )}
                {imageUrl && (
                    <label
                        htmlFor="icon-button-file"
                        className="sub_selector_style"
                    >
                        <Input
                            accept="image/*"
                            id="icon-button-file"
                            type="file"
                            onChange={onChange}
                        />
                        <IconButton
                            color="primary"
                            aria-label="upload picture"
                            component="span"
                        >
                            <PhotoCamera
                                sx={{ width: '30px', height: '30px' }}
                            />
                        </IconButton>
                    </label>
                )}
                {notSelected && (
                    <p style={{ color: 'red', fontSize: '20px' }}>
                        Select Image First
                    </p>
                )}
            </div>
        </>
    )
}

export default ImagePreview
