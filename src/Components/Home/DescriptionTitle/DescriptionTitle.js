import { Typography } from '@mui/material'
import React from 'react'

const DescriptionTitle = (props) => {
  return (
    <div>
      <Typography sx={{fontWeight:"bold"}} variant='h5'>{props.title}</Typography>
    </div>
  )
}

export default DescriptionTitle
