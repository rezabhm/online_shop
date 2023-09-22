import React from "react";
import { Paper, Box } from "@mui/material";

const Item = (props) => {


  return (
     <Box sx={{"@media (max-width:900px)":{width:"100%"}}}>
        <img
          src={props.item.image}
          alt=""
          style={{ width: "100%", height:'20%', }}
        />
</Box>
   

  );
};

export default Item;
