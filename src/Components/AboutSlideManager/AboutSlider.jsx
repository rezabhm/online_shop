import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";

import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiLinkedinLine } from "react-icons/ri";
import { Box, Grid } from "@mui/material";

const AboutSlider = (props) => {
  return (
    <>
      <Grid>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="194px"
            image={props.img}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {props.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.desc}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton
              sx={{
                "& :hover": {
                  color: "skyblue",
                },
              }}
              aria-label="add to favorites"
            >
              <FiTwitter />
            </IconButton>
            <IconButton
              aria-label="share"
              sx={{
                "& :hover": {
                  color: "red",
                },
              }}
            >
              <AiOutlineInstagram />
            </IconButton>
            <IconButton
              aria-label="share"
              sx={{
                "& :hover": {
                  color: "darkblue",
                },
              }}
            >
              <RiLinkedinLine />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

export default AboutSlider;
