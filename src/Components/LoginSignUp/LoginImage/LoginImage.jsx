import { Grid } from "@mui/material";
import React from "react";

const LoginImage = (props) => {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <img style={{ width: "805px", height: "781px" }} src={props.img} />
        </Grid>
      </Grid>
    </>
  );
};

export default LoginImage;
