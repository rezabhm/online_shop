import { Container } from '@mui/system'
import React from 'react'
import Product from '../Home/Product/Product'
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
  import Rating from "@mui/material/Rating";

export const WhishList = (props) => {

  return (
    <>
   
       
     <Grid container >
        {props.WhishlistItems.WhishlistItems.map((item)=>(
           
            
            <Grid  item xs={12} sm={4}  md={3}  > 
            <Card
     sx={{marginRight:"8%",marginBottom:"5%"}}
               >
         
                 <Box>
                   <img
                     style={{ height: "100%", width: "100%", marginBottom: "10px" }}
                     src={item.image}
                     alt=""
                   />
                 </Box>
                 <CardContent>
                   <Button
                     sx={{
                       backgroundColor: "black",
                       color: "#FFFFFF",
         
                       width: "100%",
                       "&:hover": { backgroundColor: "red" },
                       marginBottom: "10px",
                     }}
                   >
                     Add To Cart
                   </Button>
                   <Typography variant={"h5"}>{item.title}</Typography>
                 </CardContent>
         
                 <CardActions sx={{ width: "100%" }}>
                   
                     <Box>
                       <Typography
                         variant={"h6"}
                         sx={{
                           color: "red",
                         }}
                       >
                         ${item.price}
                       </Typography>
                     </Box>
         
                     <Box
                       sx={{
                         display: "flex",
                       }}
                     >
               
                       <Box>
                         {" "}
                         <Typography variant={"h6"} sx={{}}>
                           {item.rateNumber}
                         </Typography>
                       </Box>
                     </Box>
                   
                 </CardActions>
               </Card>
               </Grid>
              
        ))}
         </Grid> 
   
    </>
  )
}
