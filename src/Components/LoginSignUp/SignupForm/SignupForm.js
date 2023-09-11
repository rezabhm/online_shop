import { Place } from "@mui/icons-material";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import SignupWithGoogle from "../SignupWithGoogle/SignupWithGoogle";
import Header from "../Header/Header";
const SignupForm = (style) => {
  const texFiled = [
    { id: 1, label: "Name", onchange: () => console.log("okay1") },
    { id: 2, label: "Last-Name", onchange: () => console.log("okay2") },
    { id: 3, label: "Email", onchange: () => console.log("okay3") },
    { id: 4, label: "Password", onchange: () => console.log("okay4") },
  ];
  return (
    <>
      <Box
        sx={{
          style,
          "& .MuiTextField-root": {
            my: 2.6,

            display: "flex",
            width: "100%",
          },
          mt: 10,
          width: "27rem",
        }}
        noValidate
        autoComplete="off"
      >
        <Header
          title={"Create an account"}
          title1={"Enter youre details below"}
        />

        {texFiled.map((item) => {
          return (
            <TextField
              sx={{ style, pb: 2 }}
              color="grey"
              label={item.label}
              variant="standard"
              onChange={item.onchange}
            />
          );
        })}
        <Grid sx={{ display: "flex", justifyContent: "center" }}>
          <SignupWithGoogle />
        </Grid>

        <Button
          variant="contained"
          color="error"
          sx={{
            width: "100%",
            marginTop: "15px",
            mb: 2,
          }}
          onClick={console.log("click")}
        >
          <Typography sx={{ px: 2 }}>Creat Account </Typography>
        </Button>
        <Typography sx={{ textAlign: "center", mb: 8 }}>
          Already have account?{" "}
          <span style={{ borderBottom: "1px solid black", marginLeft: "7px" }}>
            Log in
          </span>
        </Typography>
      </Box>
    </>
  );
};

export default SignupForm;
