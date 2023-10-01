import { Place } from "@mui/icons-material";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import SignupWithGoogle from "../SignupWithGoogle/SignupWithGoogle";
import Header from "../Header/Header";
import { Link, useNavigate } from "react-router-dom";
const SignupForm = (style) => {
  const navigate = useNavigate();
  const texFiled = [
    { id: 1, label: "Name", onchange: () => console.log("okay1") },
    { id: 2, label: "Last-Name", onchange: () => console.log("okay2") },
    { id: 3, label: "UserName", onchange: () => console.log("okay3") },
    { id: 4, label: "Email", onchange: () => console.log("okay4") },
    { id: 5, label: "Password", onchange: () => console.log("okay5") },
    { id: 6, label: "Confirm-Password", onchange: () => console.log("okay6") },
  ];
  return (
    <>
      <Box
        sx={{
          style,
          "& .MuiTextField-root": {


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
          title={"ساخت اکانت جدید"}
          title1={"وارد کردن اطلاعات خود"}
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
          <span
            style={{
              borderBottom: "1px solid black",
              marginLeft: "7px",
              cursor: "pointer",
            }}
          >
            <Link
              style={{
                textDecoration: "none",
                color: "#444",
              }}
              to={"/Login"}
            >
              Log in
            </Link>
          </span>
        </Typography>
      </Box>
    </>
  );
};

export default SignupForm;
