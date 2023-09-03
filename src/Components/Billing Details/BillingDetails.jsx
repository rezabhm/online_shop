import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';



const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const BillingDetails = (props) => {
    console.log(props);
  return (
    <>
    <Container>
    <Typography variant='h4'>{props.title}</Typography>
    <Grid sx={{width:'470px' ,height:"814px",mt:"5%"}}>
        <Stack>
{props.InputData.map((item)=>{
     return <TextField sx={{marginBottom:"5%"}} id="outlined-basic" label={item.label} variant="outlined" />
})}
<Box sx={{display:"flex",alignItems:"center"}}>
<Checkbox {...label}  />
<Typography>Save this information for faster check-out next time</Typography>
</Box>
</Stack>
    </Grid>
    </Container>
    </>
  )
}

export default BillingDetails


{/* <BillingDetails
title={"Billing Details"}
InputData= 

{
    [
        {id:'1',label:"Firs Name"},
        {id:'2',label:"Company Name"},
        {id:'3',label:"Street Adress"},
        {id:'4',label:"Apartment"},
        {id:'5',label:"Town/City"},
        {id:'6',label:"Phone Number"},
        {id:'7',label:"Email Address"},
        
    ]
} */}