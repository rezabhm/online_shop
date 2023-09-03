import { Box, Container } from '@mui/system'
import React from 'react'
import NavBar from '../Components/Home/Navbar/NavBar'
import { WhishList } from '../Components/whishlist/WhishList'
import  Grid  from '@mui/material/Grid'
import { Typography } from '@mui/material'
import Button from '@mui/material/Button';
import Footer from '../Components/Home/Footer/Footer'

export const WhishList1 = (props) => {

  return (
   <>
   <NavBar/>
   <Container>
    <Box sx={{display:"flex",justifyContent:"space-between",mt:"5%"}}>
    <Typography>WhishList(4)</Typography>
    <Button sx={{padding:"15px",width:"150px",whiteSpace:"nowrap",border:'1px solid black',color:"#000"}} variant="outlined">Move All To Bag</Button>
    
    </Box>
    <Grid mt="7%" mb="10%">
    <WhishList WhishlistItems={props}/>
    </Grid>
   </Container>

   <Footer/>
   </>
  )
}
