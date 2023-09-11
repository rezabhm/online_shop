import { Grid } from "@mui/material";
import React, { useState } from "react";
import SignButton from "../Home/CategorySignButton/signButton";

const CategoryAbout = (props) => {
  const [colors, setColors] = useState(props.data);

  function changeBgColor(index) {
    const newColor = props.data.map((item) => {
      if (item.id === index) {
        return {
          id: item.id,
          icon: item.icon,
          icon2: item.icon2,
          text: item.text,
          colors: "#DB4444",
          colorBtn: item.colorBtn2,
          title: item.title,
          iconBg: item.iconBg2,
          iconColor: item.iconColor2,
          iconBoxSh: item.iconBoxSh2,
          textColor: item.textColor2,
        };
      } else {
        return {
          id: item.id,
          icon: item.icon,
          icon2: item.icon2,
          text: item.text,
          colors: "white",
          title: item.title,
          iconBg: item.iconBg,
          iconColor: item.iconColor,
          iconBoxSh: item.iconBoxSh,
          textColor: item.textColor,
          colorBtn: item.colorBtn,
        };
      }
    });

    setColors(newColor);
  }

  return (
    <>
      <Grid container>
        {colors.map((item) => {
          return (
            <Grid
              xs={12}
              sm={12}
              md={6}
              lg={3}
              sx={{ px: 3, py: { xs: "10px", lg: "0" } }}
            >
              <SignButton
                icon={item.icon}
                icon2={item.icon2}
                iconBg={item.iconBg}
                text={item.text}
                bgColor={item.colors}
                colorBtn={item.colorBtn}
                iconColor={item.iconColor}
                title={item.title}
                iconBoxSh={item.iconBoxSh}
                textColor={item.textColor}
                bgColorChange={() => {
                  changeBgColor(item.id);
                }}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default CategoryAbout;
