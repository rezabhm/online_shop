import { Typography } from '@mui/material'
import React from 'react'

const AddImgTitle = (props) => {
if(props.type==="title"){
    return(
        <Typography sx={{color:"#FAFAFA"}} variant='h4'>{props.text}</Typography>
    )
}
}

export default AddImgTitle