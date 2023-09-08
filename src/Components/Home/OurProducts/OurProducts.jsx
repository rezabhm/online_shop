import React from 'react'
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Stack,
    Typography,
    Box,
    Grid
  } from "@mui/material";
  import {styled} from "@mui/material";
  import Product from '../Product/Product'
  import Rating from "@mui/material/Rating";

  const Maingrid = styled("grid")(({ theme }) => ({
    height: "50vh",
    width: "25%",
    marginBottom:"10%",
 
  
    [theme.breakpoints.down("sm")]: {
      height: "70vh",
      width: "100vh",
      margin: " 25% 0",
    },
  
    "@media (min-width:900px) and (max-width:1294px)": {
      marginRight: "12%",
      marginBottom: "20%",
    },
    "@media (min-width:600px) and (max-width:900px)": {
      marginRight: "25%",
      marginBottom: "30%",
    },
    "@media(max-width:460px)": {
      marginBottom: "30%",
    },
    "@media (min-width:600px) and (max-width:715px)": {
      margin: "25% 15%",
    },
  }));
const OurProducts = (props) => {
  return (
    <>
     <Grid container >
             {props.WhishlistItems2.map((item)=>(
               
                
               <Maingrid xs={12} sm={12} md={3} xl={3}>
               <Product
                 image={
                  item.image
                 }
                 title={item.title}
                 price={item.price}
                 star={3.5}
                 rateNumber={item.rateNumber}
               />
             </Maingrid>
                  
            ))}
             </Grid> 
    
    </>
  )
}

export default OurProducts
