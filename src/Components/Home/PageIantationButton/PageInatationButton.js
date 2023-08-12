import React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
const PageInatationButton = () => {
  return (
    <>
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <Fab onClick={()=>{"previus page"}} color="##e8eaf6" aria-label="add">
          <ArrowBackOutlinedIcon />
        </Fab>
        <Fab onClick={()=>{"next page"}} color="##e8eaf6" aria-label="edit">
          <ArrowForwardOutlinedIcon />
        </Fab>
      </Box>
    </>
  );
};


export default PageInatationButton;
