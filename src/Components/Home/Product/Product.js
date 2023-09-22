import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
  Box,
} from "@mui/material";
import Rating from "@mui/material/Rating";
import {Link} from "react-router-dom";

function Product(props) {
  return (

    <Box>

      <Card
        sx={{
          width: "75%",
          height: "100%",

          backgroundColor: "",
          "@media (max-width:845px)": {
            width: "100%",
            height: "100%",
          },
          cursor: "pointer",
        }}

      >

        <Box>
            <Link to="/ProducPage.jsx" style={{textDecoration:"none"}} >
          <img
            style={{ height: "100%", width: "100%", marginBottom: "10px" }}
            src={props.image}
            alt=""

          />
            </Link>
        </Box>
        <CardContent>
          <Typography variant={"h5"}>{props.title}</Typography>
        </CardContent>

        <CardActions sx={{ width: "100%" }}>
          <Stack>
            <Box>
              <Typography
                variant={"h6"}
                sx={{
                  color: "red",
                }}
              >
                ${props.price}
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
              }}
            >
              <Box sx={{ marginRight: "8px" }}>
                <Rating
                  name={"half-rating"}
                  defaultValue={props.stars}
                  precision={0.5}
                  readOnly
                />
              </Box>
              <Box>
                {" "}
                <Typography variant={"h6"} sx={{}}>
                  {props.rateNumber}
                </Typography>
              </Box>
            </Box>
          </Stack>
        </CardActions>
      </Card>
    </Box>
  );
}
export default Product;
