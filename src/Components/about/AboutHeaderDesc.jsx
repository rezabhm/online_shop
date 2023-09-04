import React from 'react'
import ProductDescription from '../ProductPage/Product description/ProductDescription'
import ProductHeader from '../ProductPage/Product Header/ProductHeader'
import { Box } from '@mui/material'
const AboutHeaderDesc = (props) => {

  return (
    <>
    <Box sx={{width:"525px" , height:'373px'}}>
     <Box sx={{mb:"5%"}}>
    <ProductHeader 
    title={props.title}
    />
    </Box>
    <ProductDescription 
    text={props.text}
    />
    </Box>
    </>
  )
}

export default AboutHeaderDesc
