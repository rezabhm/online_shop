import { Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import WatchOutlinedIcon from "@mui/icons-material/WatchOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import HeadsetOutlinedIcon from "@mui/icons-material/HeadsetOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SignButton from "./signButton";
let category = [
  {
    id: 0,
    icon: <PhoneAndroidOutlinedIcon />,
    text: "Phones",
    colors: "white",
  },
  { id: 1, icon: <ComputerOutlinedIcon />, text: "Computer", colors: "white" },
  { id: 2, icon: <WatchOutlinedIcon />, text: "SmartWatch", colors: "white" },
  { id: 3, icon: <CameraAltOutlinedIcon />, text: "Camera", colors: "white" },
  { id: 4, icon: <HeadsetOutlinedIcon />, text: "HeadPhones", colors: "white" },
  {
    id: 5,
    icon: <SportsEsportsOutlinedIcon />,
    text: "Gaming",
    colors: "white",
  },
];

const CategorySignButton = () => {
  const [colors, setColors] = useState(category);

  function changeBgColor(index) {
    const newColor = colors.map((item) => {
      if (item.id === index) {
        return { id: item.id, icon: item.icon, text: item.text, colors: "red" };
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
      <Stack direction="row" spacing={2}>
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
