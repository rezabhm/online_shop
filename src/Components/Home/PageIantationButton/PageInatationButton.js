import React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { Grid } from "@mui/material";
const PageInatationButton = (props) => {
  return (
    <>
      <Grid
        container
        sx={{ mr: 8, mb: 3, display: { xs: "none", md: "flex" } }}
      >
        <Grid xs={12} md={6} sx={{ width: "100%" }}>
          <Fab
            onClick={props.NextClick}
            sx={{}}
            color="##e8eaf6"
            aria-label="add"
          >
            <ArrowBackOutlinedIcon />
          </Fab>
        </Grid>
        <Grid xs={12} md={6} sx={{ width: "100%" }}>
          <Fab
            onClick={props.prevClick}
            sx={{}}
            color="##e8eaf6"
            aria-label="edit"
          >
            <ArrowForwardOutlinedIcon />
          </Fab>
        </Grid>
      </Grid>
    </>
  );
};

export default PageInatationButton;
