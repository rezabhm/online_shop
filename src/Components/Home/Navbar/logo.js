import { Typography } from "@material-ui/core";
import React from "react";

function Logo(props) {
  return (
    <>
      <Typography
        variant="h3"
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          whiteSpace: "nowrap",
        }}
      >
        {props.title}
      </Typography>
    </>
  );
}

export default Logo;
