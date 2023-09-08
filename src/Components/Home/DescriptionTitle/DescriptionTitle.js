import { Typography } from '@mui/material'
import React from 'react'

const DescriptionTitle = (props) => {
  return (
    <div>
      <Typography sx={{fontWeight:"400"}} variant='h4'>{props.title}</Typography>
    </div>
  )
}

export default DescriptionTitle
