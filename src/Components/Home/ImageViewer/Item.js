import React from "react";
import { Paper, Box } from "@mui/material";

const Item = (props) => {


  return (
      <Box sx={{height:'100%', position:'relative'}}>
        <img
          src={props.item}
          alt=""
          style={{ width: "100%", height:'100%' }}
        />

      </Box>

  );
};

export default Item;
