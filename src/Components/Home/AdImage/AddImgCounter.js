import { styled } from "@material-ui/styles";
import { Padding } from "@mui/icons-material";
import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const AddImgCounter = (props) => {
  console.log(props.data.minute);
  const CircleBox = styled(Box)({
    borderRadius: "50%",
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: "100%",

    border: "5px dotted white",
  });

  // if (props.type === "counter") {
  return (
    <>
      <Grid container>
        <Grid
          item
          xs={2}
          sx={{
            textAlign: "center",
            lineHeight:"70px",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            display: "flex",
            borderRadius: "50%",
            backgroundColor: "#FFFFFF",
            margin: "10px",
            border: "5px solid black",
            width:"40px",
            height:"70px",
            position:"relative"
          }}
        >
          <Grid item xs={12}sx={{  display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}} >
            <Typography sx={{ fontWeight: "bold" }}>{props.data.day}</Typography>
            <Typography>{props.data.textdays}</Typography>
          </Grid>
        </Grid>

        <Grid
          item
          xs={2}
          sx={{
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            display: "flex",
            borderRadius: "50%",
            backgroundColor: "#FFFFFF",
            margin: "10px",
            border: "5px solid black",
            width:"40px",
            height:"70px",
            position:"relative"
          }}
        >
          <Grid item xs={12} sx={{  display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}} >
          <Typography sx={{ fontWeight: "bold" }}>{props.data.hour}</Typography>
            <Typography>{props.data.texthours}</Typography>
          </Grid>
        </Grid>

        <Grid
          item
          xs={2}
          sx={{
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            display: "flex",
            borderRadius: "50%",
            backgroundColor: "#FFFFFF",
            margin: "10px",
            border: "5px solid black",
            width:"40px",
            height:"70px",
            position:"relative"
          }}
        >
          <Grid item xs={12} sx={{  display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}} >
          <Typography sx={{ fontWeight: "bold" }}>{props.data.minute}</Typography>
            <Typography>{props.data.textminutes}</Typography>
          </Grid>
        </Grid>

        <Grid
          item
          xs={2}
          sx={{
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            display: "flex",
            borderRadius: "50%",
            backgroundColor: "#FFFFFF",
            margin: "10px",
            border: "5px solid black",
            width:"40px",
            height:"70px",
            Padding:"10px",
            position:"relative"
          }}
        >
          <Grid item xs={12} sx={{  display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}} >
          <Typography sx={{ fontWeight: "bold" }}>{props.data.second}</Typography>
            <Typography>{props.data.textsec}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default AddImgCounter;
