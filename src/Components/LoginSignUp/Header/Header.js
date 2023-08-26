import { Box, Typography } from "@mui/material";
import React from "react";
import SignupForm from "../SignupForm/SignupForm";

const Header = (props) => {
  return (
    <Box>
      <Box sx={{  }}>
        {" "}
        <Typography variant="h4" sx={{ pb: 1 }}>
          {props.title}
        </Typography>
        <Typography variant="body2" sx={{ pt: 1 }}>
          {props.title1}
        </Typography>
        <Typography sx={{ color: props.status ? "black" : "red" }}>
          {props.errorText}
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
