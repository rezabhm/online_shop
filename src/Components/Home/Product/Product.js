import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
  Box
} from "@mui/material";
import Rating from "@mui/material/Rating";

function Product(props) {
  return (
    <>
      <Card
        sx={{
          width: "90%",
          height: {xs:"80vh" , md:"60vh"},
          
          backgroundColor: "",
        }}
      >
        <CardMedia
          image={props.image}
          title={"product "}
          sx={{
          
            height: {xs:"65%",md:"65%"},
            width: "100%",
            marginBottom: "10px",
            // border:'1px solid black'
      
          }}
        />

        <CardContent>
          <Button
            sx={{
              backgroundColor: "black",
              color: "#FFFFFF",
              
              width: "100%",
              "&:hover": { backgroundColor: "red" },
              marginBottom: "10px",
            }}
          >
            Add To Cart
          </Button>
          <Typography variant={"h5"}>{props.title}</Typography>
        </CardContent>

        <CardActions sx={{width:"100%"}}>
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
              
              display:"flex"
            }}
          >
          <Box sx={{marginRight:"8px"}}>
            <Rating
              name={"half-rating"}
              defaultValue={props.stars}
              precision={0.5}
              readOnly
            />
            </Box>
            <Box> <Typography
            variant={"h6"}
            sx={{
            
            }}
          >
            {props.rateNumber}
          </Typography></Box>
          </Box>
          </Stack>
        </CardActions>
      
      </Card>
    </>
  );
}
export default Product;
