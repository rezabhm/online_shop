import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const Feature = (props) => {
    console.log(props);
  return (
<>
<Grid container sx={{width:'400px' , height:"180px" ,border:"1px solid #828282",borderRadius:"6px"}}>
    <Grid sx={{display:"flex" ,justifyContent:"space-around" ,width:"100%",alignItems:"center",borderBottom:"1px solid #828282"}}>
      <Box>{props.Ficon}</Box>
      <Box>
        <Typography sx={{fontWeight:"bold"}} variant='h6'>{props.Ftitle}</Typography>
        <Typography variant='text'>{props.FDesc}</Typography>
      </Box>
    </Grid>



    <Grid sx={{display:"flex" ,justifyContent:"space-around" ,width:"100%",alignItems:"center"}}>
      <Box>{props.Sicon}</Box>
      <Box sx={{marginRight:"10px"}}>
        <Typography sx={{fontWeight:"bold"}} variant='h6'>{props.Stitle}</Typography>
        <Typography variant='text'>{props.SDesc}</Typography>
      </Box>
    </Grid>
</Grid>
</>
  )
}

export default Feature
