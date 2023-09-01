import { FormControl, Grid, InputBase, Box } from "@mui/material";
import React from "react";
import NavBar from "../Components/Home/Navbar/NavBar";
import Footer from "../Components/Home/Footer/Footer";
import AccountList from "../Components/AccountList/AccountList";
import { Container, Typography, styled } from "@material-ui/core";
import IconButton from "@mui/material/IconButton";

import EditProfile from "../Components/EditProfile/EditProfile";
function Account() {
  return (
    <>
      <NavBar />

      <Container maxWidth="lg">
        <Grid container>
          <Grid
            sx={{ display: { xs: "none", md: "inline-flex" } }}
            item
            md={4}
            lg={4}
          >
            <AccountList />
          </Grid>
          <Grid
            sx={{
              marginTop: "12.5%",
            }}
            item
            xs={12}
            sm={12}
            md={8}
            lg={8}
          >
            <EditProfile />
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </>
  );
}

export default Account;
