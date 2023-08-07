import React from "react";
import { Paper, Box } from "@mui/material";

const Item = (props) => {
  return (
    <Paper>
      <Box>
        <img
          src={props.item.img}
          alt=""
          style={{ width: "100%", height: "400px" }}
        />
      </Box>
    </Paper>
  );
};

export default Item;
