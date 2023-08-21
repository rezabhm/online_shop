import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";

const SignupForm = () => {
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
          "& .MuiTextField-root": {
            my: 2,
            width: "24rem",
          },
          width: "24rem",

          margin: "auto",
        }}
        noValidate
        autoComplete="off"
      >
        {texFiled.map((item) => {
          return (
            <TextField
              color="grey"
              label={item.label}
              variant="standard"
              onChange={item.onchange}
            />
          );
        })}

        <Button
          variant="contained"
          color="error"
          sx={{
            width: "100%",
            marginTop: "15px",
          }}
          onClick={console.log("click")}
        >
          <Typography sx={{ px: 2 }}>Creat Account </Typography>
        </Button>
      </Box>
    </>
  );
};

export default SignupForm;
