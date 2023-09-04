import React from "react";
import { Typography } from "@material-ui/core";
const ProductDescription = (props) => {
  return (
    <Typography >
      {props.text}
    </Typography>
  );
};

export default ProductDescription;
