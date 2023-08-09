import React from "react";

import { Button, Stack } from "@mui/material";
const PageInatationButton = (props) => {
  // const iconBtn = [
  //   { id: 1, icon: <ArrowBackOutlinedIcon /> },
  //   { id: 2, icon: <ArrowForwardOutlinedIcon /> },
  // ];
  return (
    <>
      <Stack direction="row" sx={{ mr: 5 }}>
        {props.data.map((item) => {
          return (
            <Button
              onClick={item.onClick}
              sx={{
                borderRadius: "50%",
                p: 1.7,
                pl: 3,
                mr: 2.5,
                bgcolor: "#efefef",
                color: "#555",
                "&:hover": {
                  bgcolor: "#efefef",
                },
              }}
              variant="contained"
              startIcon={item.icon}
              {...item}
            ></Button>
          );
        })}
      </Stack>
    </>
  );
};

export default PageInatationButton;
