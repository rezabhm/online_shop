import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Box } from "@mui/material";
import items from "./imageViewerData";
import Item from "./Item";

const ImageViewer = () => {
  return (
    <Carousel sx={{ width: "40rem" }}>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

export default ImageViewer;
