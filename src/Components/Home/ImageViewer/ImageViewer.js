import React from "react";
import Carousel from "react-material-ui-carousel";
import Item from "./Item";
import { Box } from "@material-ui/core";
const ImageViewer = (props) => {
  return (
    <Box sx={{ width:"892px", height: "490px" , border:"1px"}}>
      <Carousel
        navButtonsProps={{
          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
          style: {
            backgroundColor: "gray",
            borderRadius: 0,
            display:"block"
          },
        }}
        indicatorIconButtonProps={{
          style: {
            zIndex: "900",
            bottom: "50px",
            color: "gray",
           
          },
        }}
        activeIndicatorIconButtonProps={{
          style: {
            color: "red",
            backgroundColor: "white", // 2
          },
        }}
        sx={{
          width: "100%",
          height: "100%",

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
