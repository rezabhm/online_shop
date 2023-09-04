import { Typography } from "@material-ui/core";
import React from "react";

const ProductHeader = (props) => {
  return <Typography variant="h4" style={{fontWeight:"bold"}}>{props.title}</Typography>;
};

export default ProductHeader;
