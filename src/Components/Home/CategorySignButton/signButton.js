import React, { useState } from "react";
import { Button, Stack, Typography } from "@mui/material";

const SignButton = (props) => {
  return (
    <Stack
      direction="column"
      sx={{
        width: "100%",
        height: "170px",
        border: "1px solid gray",
        padding: 1.5,
        justifyContent: "center",
        alignItems: "center",

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
        size="4"
        sx={{
          pt: 6,

          pl: 1,
          color: props.colorBtn,

          "& .MuiSvgIcon-root": { fontSize: "3.6rem" },
        }}
      ></Button>
      <div
        disableRipple
        style={{
          backgroundColor: props.iconBg,
          boxShadow: props.iconBoxSh,
          borderRadius: "50%",
          width: "70px",
          height: "60px",
        }}
      >
        <Button
          disableRipple
          startIcon={props.icon2}
          size="2"
          sx={{
            pt: 0.5,
            pb: 2.4,
            pl: 1.9,
            color: props.iconColor,

            "& .MuiSvgIcon-root": { fontSize: "3rem" },
          }}
        ></Button>
      </div>

      <Typography
        sx={{
          pr: 1.5,
          pl: 1.5,
          pb: 0.5,
          pt: 2,
          fontWeight: "700",
          fontSize: "25px",
          color: props.textColor,
        }}
      >
        {props.title}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          pr: 1.7,
          pl: 1,
          pb: 4,
          color: props.textColor,
          width: { xs: "100%", md: "70%", lg: "100%" },
          textAlign: "center",
          whiteSpace: { xs: "wrap", md: "wrap", lg: "nowrap" },
        }}
      >
        {props.text}
      </Typography>
    </Stack>
  );
};

export default SignButton;
