import { styled } from "@material-ui/styles";
import React from "react";
import { Box, margin } from "@mui/system";

import Imgcomponent from "./Imgcomponent";
import Adimgdata from "./AdimgData";
import { Button, Grid, Link, Typography } from "@mui/material";
import AddImgTitle from "./AddImgTitle";
import AddImgCounter from "./AddImgCounter";
import { useState } from "react";
import { LocalHospital } from "@mui/icons-material";
{/* <DescriptionTitle 
title={"Browse By Category"}/>
<AdImage
img={"https://wallpaper.dog/large/10930672.jpg"}
title={'Enhance Your Music Experiance'}
pushLinkShop={'/buy'}
pushLinkCategory={'/pushlink'}
day={'23'}
hour={'05'}
minute={'59'}
second={'35'}
texthours={"Hours"}
textdays={"Days"}
textminutes={"Min"}
textsec={"Sec"}
/> */}

const AdImage = (props) => {


 



  return (
   
      <Box container sx={{ position:"relative",  width: "1170px",height: "500px", display:"flex",justifyContent:'center',margin:"auto", }}>
   
<img src={props.img} style={{width:"100%" , height:"100%"}} />

<Grid container sx={{position:"absolute", left:"60px" , top:"50px",display:"flex" , flexDirection:"column" ,maxWidth:"443px"}}>

<Grid item>
  
  <Link href={props.pushLinkCategory}><Button sx={{color:"#00FF66" ,marginBottom:"20px"}} variant="text">Categories</Button></Link>
  </Grid>


  <Grid item>
<Typography sx={{color:"#FAFAFA",marginBottom:"20px"}} variant="h4">{props.title}</Typography>
  </Grid>

  <Grid>
    <AddImgCounter data={props}/>
  </Grid>

  <Grid item>
<Button sx={{backgroundColor:"#00FF66" ,textAlign:"center",marginTop:"50px" ,width:"234px" , height:"56px",borderRadius:"7px"}} variant="contained" href={props.pushLinkShop}>Buy Now!</Button>
  </Grid>

</Grid>
    




















      
      </Box>
   
  );
};

export default AdImage;
