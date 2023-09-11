import { styled } from "@material-ui/styles";
import React from "react";
import { Box, margin } from "@mui/system";

import { Button, Grid, Link, Typography } from "@mui/material";

import AddImgCounter from "./AddImgCounter";
import { useState } from "react";
import { LocalHospital } from "@mui/icons-material";
{
  /* <DescriptionTitle 
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
/> */
}

const AdImage = (props) => {
  return (
    <Grid
      xs={12}
      md={12}
      container
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        margin: "auto",
        alignItems: "center",
      }}
    >
      <img src={props.img} style={{ width: "100%", height: "100%" }} />

      <Grid
        container
        sx={{
          position: "absolute",
          left: "5%",
          top: "5%",
          display: "flex",
          flexDirection: "column",
          maxWidth: "40%",
        }}
      >
        <Grid>
          <Link href={props.pushLinkCategory}>
            <Button
              sx={{
                color: "#00FF66",
                marginBottom: "17%",
                fontSize: { xs: "10px", sm: "15px", md: "17px" },
              }}
              variant="text"
            >
              Categories
            </Button>
          </Link>
        </Grid>

        <Grid item>
          <Typography
            sx={{
              color: "#FAFAFA",
              marginBottom: "12%",
              fontSize: { sm: "15px", md: "20px", lg: "45px", xs: "12px" },
              whiteSpace: { xs: "nowrap", md: "wrap" },
            }}
            variant="h4"
          >
            {props.title}
          </Typography>
        </Grid>

        <Grid sx={{ mb: 9, display: { xs: "none", lg: "flex" } }}>
          <AddImgCounter data={props} />
        </Grid>

        <Grid
          xs={12}
          item
          sx={{ "@media (max-width:340px)": { display: "none" } }}
        >
          <Button
            sx={{
              backgroundColor: "#00FF66",
              textAlign: "center",
              width: { xs: "80%", sm: "70%", md: "50%" },
              p: { xs: "1px", sm: 1, md: 2 },
              borderRadius: "7px",
              fontSize: { xs: "10px", sm: "15px", md: "17px" },
            }}
            variant="contained"
            href={props.pushLinkShop}
          >
            Buy Now!
          </Button>
        </Grid>
      </Grid>

      <Grid
        xs={12}
        sx={{
          "@media (max-width:340px)": { display: "flex" },
          "@media (min-width:341px)": { display: "none" },
        }}
      >
        <Button
          sx={{
            mt: "5%",
            backgroundColor: "#00FF66",
            textAlign: "center",
            width: { xs: "100%" },
            p: 1,
            borderRadius: "7px",
            fontSize: "10px",
          }}
          variant="contained"
          href={props.pushLinkShop}
        >
          Buy Now!
        </Button>
      </Grid>
    </Grid>
  );
};

export default AdImage;
