import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";

const ContactForm = () => {
  return (
    <Grid container >
      {" "}
      <Grid xs={12} sm={12} md={4} sx={{ p: 1 }}>
        <TextField
          placeholder="Your Name *"
          variant="filled"
          sx={{
            width: { sm: "100%", xs: "100%" },
          }}
        />
      </Grid>
      <Grid xs={12} sm={12} md={4} sx={{ p: 1 }}>
        <TextField
          placeholder="Your Email *"
          variant="filled"
          sx={{
            width: { sm: "100%", xs: "100%" },
          }}
        />
      </Grid>
      <Grid xs={12} sm={12} md={4} sx={{ p: 1 }}>
        <TextField
          placeholder="Your Phone *"
          variant="filled"
          sx={{
            width: { sm: "100%", xs: "100%" },
          }}
        />
      </Grid>
      <Grid xs={12} sm={12} md={12}>
        <TextField
          placeholder="Your Massage *"
          variant="filled"
          sx={{
            width: "97.7%",
            mt: 2,
            ml: 1,
            "& .MuiInputBase-root": {
              height: 200,
            },
            "& .MuiInputBase-input": {
              position: "absolute",
              top: "0",
            },
          }}
        />
        <Button
          variant="contained"
          color="error"
          sx={{ float: "right", mr: 1, mt: 2, p: 2 }}
        >
          Send Massage
        </Button>
      </Grid>
    </Grid>
  );
};

export default ContactForm;
