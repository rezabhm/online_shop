import React from "react";
import Routing from "../ProductPage/Routing/Routing";
import NavBar from "../Home/Navbar/NavBar";
import Footer from "../Home/Footer/Footer";
import InformationUs from "./InformationUs";
import { Container, Grid } from "@mui/material";
import ContactForm from "./ContactForm";
const ContactUs = () => {
  return (
    <>
      <NavBar />
      <Container maxWidth="xl" sx={{ mt: 20 }}>
        <Grid sx={{ my: 10 }}>
          <Routing />
        </Grid>
        <Grid container sx={{ justifyContent: "space-around" }}>
          <Grid xs={12} sm={12} md={3} sx={{ mb: { xs: 20 } }} spacing={4}>
            <InformationUs />
          </Grid>
          <Grid xs={12} sm={12} md={6} sx={{ mb: 40 }}>
            <ContactForm />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default ContactUs;
