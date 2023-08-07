import React from "react";
import Carousel from "react-material-ui-carousel";
import Item from "./Item";

const ImageViewer = (props) => {
  return (
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
          top: "-35px",
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
        width: "40rem",
        "MuiButtonBase-root": {
          color: "red",
          position: "relative",
        },
      }}
    >
      {props.images.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

export default ImageViewer;
