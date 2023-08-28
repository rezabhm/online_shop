import LoginForm from "../Components/LoginSignUp/LoginForm/LoginForm";
import SignupLoginImage from "../Components/LoginSignUp/SignupLoginImage/SignupLoginImage";
import {Container, Grid} from "@mui/material";
import SignupForm from "../Components/LoginSignUp/SignupForm/SignupForm";
import Header from "../Components/LoginSignUp/Header/Header";
import NavBar from "../Components/Home/Navbar/NavBar";
import Footer from "../Components/Home/Footer/Footer";
import LoginImage from "../Components/LoginSignUp/LoginImage/LoginImage";
import React from "react";

function Login() {
  const ss1 = {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    padding: "10%",
  };

  return (
    <>

      <NavBar />

      <Container maxWidth={"xl"} sx={{marginBottom:"20px"}}>
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
            <LoginImage />

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

            <LoginForm />
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </>
  );
}

export default Login;
