import { Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import WatchOutlinedIcon from "@mui/icons-material/WatchOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import HeadsetOutlinedIcon from "@mui/icons-material/HeadsetOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SignButton from "./signButton";

const CategorySignButton = (props) => {
  const [colors, setColors] = useState(props.data);

  function changeBgColor(index) {
    const newColor = props.data.map((item) => {
      if (item.id === index) {
        return { id: item.id, icon: item.icon, text: item.text, colors: "#DB4444" };
      } else {
        return {
          id: item.id,
          icon: item.icon,
          text: item.text,
          colors: "white",
        };
      }
    });

    setColors(newColor);
  }

  return (
    <>
      <Stack direction="row" spacing={2}
             sx={{

               width:'103%',
               height:'100%',


             }}

      >
        {colors.map((item) => {
          return (
            <SignButton
              icon={item.icon}
              text={item.text}
              bgColor={item.colors}
              bgColorChange={() => {
                changeBgColor(item.id);
              }}
            />
          );
        })}
      </Stack>
    </>
  );
};

export default CategorySignButton;
