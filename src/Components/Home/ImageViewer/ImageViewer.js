import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import Item from "./Item";
import { Box } from "@material-ui/core";
const ImageViewer = (props) => {
  return (
    <Box sx={{ width: "95%", height: "95%" }}>
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
            bottom: "150px",
            color: "gray",
            " @media(max-width:1400px)": {
              bottom: "100px",
            },
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
          height: "87%",

          // Change the display size of the dotted buttons
          "& .MuiButtonBase-root": {
            "@media (max-width:1402px)": {
              marginTop: "80px",
            },
            "@media (max-width:400px)": {
              display: "none",
            },
          },
        }}
      >
        {props.images.map((item, i) => {
          return <Item key={i} item={item} />;
        })}
      </Carousel>
    </Box>
  );
};

export default ImageViewer;
