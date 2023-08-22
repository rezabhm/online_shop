import { Button } from "@mui/material";
import React from "react";

const Shopping = () => {
  return (
    <Button
      variant="contained"
      color="error"
      sx={{
        "&.MuiButtonBase-root": {
          borderRadius: "0",
          width: "100%",
        },
      }}
    >
      Buy now
    </Button>
  );
};

export default Shopping;
