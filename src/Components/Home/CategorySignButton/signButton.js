import React, { useState } from "react";
import { Button, Stack, Typography } from "@mui/material";

const SignButton = (props) => {
  return (
    <Stack
      direction="column"
      sx={{
        width: "170px",
        height: "145px",
        border: "2px solid gray",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
        cursor: "pointer",
        backgroundColor: props.bgColor,
      }}
      onClick={() => {
        props.bgColorChange();
      }}
    >
      <Button
        disableRipple
        startIcon={props.icon}
        size="5"
        sx={{
          pb: 3,

          color: "#555",
          "& .MuiSvgIcon-root": { fontSize: "3.6rem" },
        }}
      ></Button>
      <Typography sx={{ pr: 1.5 }}>{props.text}</Typography>
    </Stack>
  );
};

export default SignButton;
