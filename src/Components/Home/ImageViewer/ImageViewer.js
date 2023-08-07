import React, {useState} from "react";
import Carousel from "react-material-ui-carousel";
import Item from "./Item";
import {Box} from '@material-ui/core'
const ImageViewer = (props) => {


  return (
   <Box sx={{width:'95%', height:'95%', border:'0px solid black'}}>

       <Carousel
           navButtonsProps={{
               // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
               style: {
                   backgroundColor: "cornflowerblue",
                   borderRadius: 0,
               },
           }}
           indicatorIconButtonProps={{
               style: {
                   zIndex: "3",
                   bottom: "50px",
                   color: "gray",
               },
           }}
           activeIndicatorIconButtonProps={{
               style: {
                   color: "#DB4444",
                   backgroundColor: "white", // 2
               },
           }}
           sx={{
               width: "100%",
               height:'100%',

               "MuiButtonBase-root": {
                   color: "red",
               },
           }}
       >
           {props.images.map((item, i) => {

               return(

                   <Item key={i} item={item}  />

               )
           })

           }
       </Carousel>
   </Box>
  );
};

export default ImageViewer;
