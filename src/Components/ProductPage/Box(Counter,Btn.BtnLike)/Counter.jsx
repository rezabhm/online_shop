import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import BtnLike from "./BtnLike";
import Shopping from "./Shopping";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  if (counter < 0) {
    setCounter(0);
  }
  return (
    <section
      style={{
        width: "100%",
        display: "flex",

        alignItems: "center",
      }}
    >
      <Box>
        {" "}
        <Button
          variant="outlined"
          onClick={() => setCounter(counter - 1)}
          sx={{
            "&.MuiButtonBase-root": {
              borderColor: "#999",
              color: "gray",
              borderRadius: "0",
            },
          }}
        >
          <RemoveIcon />
        </Button>
        <Button
          disableRipple
          variant="outlined"
          sx={{
            "&.MuiButtonBase-root": {
              borderColor: "#999",
              color: "gray",
              borderRadius: "0",
            },
          }}
        >
          {counter}
        </Button>
        <Button
          variant="outlined"
          onClick={() => setCounter(counter + 1)}
          sx={{
            "&.MuiButtonBase-root": {
              borderColor: "#999",
              color: "white",
              borderRadius: "0",
              bgcolor: "#d32f2f",
            },
          }}
        >
          <AddIcon />
        </Button>
      </Box>
      {/* <Shopping />
      <BtnLike /> */}
    </section>
  );
};

export default Counter;
