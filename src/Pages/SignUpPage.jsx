import React from "react";
import NavBar from "../Components/Home/Navbar/NavBar";
import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import SignupLoginImage from "../Components/LoginSignUp/SignupLoginImage/SignupLoginImage";
import Footer from "../Components/Home/Footer/Footer";
import SignupForm from "../Components/LoginSignUp/SignupForm/SignupForm";
import LoginForm from "../Components/LoginSignUp/LoginForm/LoginForm";

const signupPAge = () => {
  return (
    <>
      <NavBar />

      <Container maxWidth={"xl"}>
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid item xs={12} sm={12} md={7} xl={6}>
            <SignupLoginImage />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={5}
            xl={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SignupForm />
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </>
  );
};

export default signupPAge;
