import { Container } from '@mui/system'
import React from 'react'
import NavBar from '../Components/Home/Navbar/NavBar'
import { CartTable } from '../Components/Cart/CartTable/Table'
import { Grid } from '@mui/material'
import {Box} from '@mui/material'
import CartButton from '../Components/Cart/CartButton/CartButton'
import Coupon from '../Components/coupon/Coupon'
import CartTotal from '../Components/Home/card total/CartTotal'



 



const Cart = () => {
  return (
    <>
    <NavBar/>

    <Container >

      <Grid container>
        <Grid xs={12} sx={{display:"felx",justifyContent:'center',alignItems:"center",marginTop:'10%'}}>
        <CartTable/>
        </Grid>

        <Grid container sx={{"@media(min-width:600px)":{display:"flex",width:'100%',justifyContent:"space-between"},"@media (max-width:600px)":{margin:"auto",textAlign:"center"}}} >
          
          <Grid item xs={12} sm={6} md={6}>
                <CartButton  text={"Return  Shop"}/>
                </Grid>

               <Grid item xs={12} sm={6}  md={6}> 
                <CartButton text={"Update Cart"}/>
                </Grid>
        </Grid>


        <Grid container sx={{marginTop:"15%","@media (max-width:600px)":{textAlign:"center"}}} >
        <Grid item xs={12}     md={6}>
          
           
        <Coupon />
        </Grid>

     <Grid  xs={12} md={6} sx={{"@media (min-width:900px) and (max-width:940px)":{marginLeft:'15px',mt:"20%"},marginTop:{xs:"20%",md:"0"}}}>
        <CartTotal
        
        ship={"123"}
        number={"1100$"}
        />
</Grid>
       
       
        </Grid>
        </Grid>
    </Container>
    </>
  )
}

export default Cart