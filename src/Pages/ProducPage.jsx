import { Grid, styled } from "@mui/material";
import React from "react";
import NavBar from "../Components/Home/Navbar/NavBar";
import ProductImage from "../Components/ProductPage/ProductImage/ProductImage";
import ProductHeader from "../Components/ProductPage/Product Header/ProductHeader";
import ProductReview from "../Components/ProductPage/product review/Product Review";
import ProductDescription from "../Components/ProductPage/Product description/ProductDescription";
import Colours from "../Components/ProductPage/Colours/Colours";
import Size from "../Components/ProductPage/Size/size";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import Counter from "../Components/ProductPage/Box(Counter,Btn.BtnLike)/Counter";
import Shopping from "../Components/ProductPage/Box(Counter,Btn.BtnLike)/Shopping";
import BtnLike from "../Components/ProductPage/Box(Counter,Btn.BtnLike)/BtnLike";
import Feature from "../Components/ProductPage/features/Feature";
import Title from "../Components/Home/Title/Title";
import Product from "../Components/Home/Product/Product";
import Footer from "../Components/Home/Footer/Footer";
import { CarCrash, CatchingPokemon } from "@mui/icons-material";
const Maingrid = styled("grid")(({ theme }) => ({
  height: "50vh",
  width: "25%",

  [theme.breakpoints.down("sm")]: {
    height: "70vh",
    width: "100vh",
    marginBottom: "15%",
  },

  "@media (min-width:900px) and (max-width:1287px)": {
    marginRight: "3%",
    marginBottom: "15%",
  },
  "@media (min-width:600px) and (max-width:900px)": {

    marginBottom: "30%",
  },
  "@media(max-width:460px)": {
    marginBottom: "30%",
  },
  "@media (min-width:600px) and (max-width:715px)": {
    margin: "20%",
  },
}));
export const ProducPage = () => {
  return (
    <Box >
      <NavBar />

      <Container
        maxWidth={"xl"}
        sx={{
          "@media (max-width:340px)": {
            marginBottom: "20%",
          },
        }}
      >
        <Grid container sx={{ marginTop: "7%" }}>
          <Grid item xs={12} sm={12} md={7}>
            <ProductImage
              mainImg={
                "https://gmedia.playstation.com/is/image/SIEPDC/dualsense-thumbnail-ps5-01-en-17jul20?$800px$"
              }
            />
          </Grid>

          <Grid xs={12} sm={12} md={5} sx={{}}>
            <Box sx={{ marginBottom: "10px" }}>
              <ProductHeader />
            </Box>
            <Box sx={{ marginBottom: "15px" }}>
              <ProductReview />
            </Box>
            <Box>
              <ProductDescription />
            </Box>

            <hr />
            <Box>
              <Colours />
            </Box>
            <Box sx={{ marginBottom: "7%" }}>
              <Size />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "500px",
                marginBottom: "10%",
              }}
            >
              <Counter />
              <Shopping />
              <BtnLike />
            </Box>
            <Box>
              <Feature
                Ficon={<CarCrash />}
                Ftitle={"Free Delivery"}
                FDesc={"etetgregyryhrhyrhrhj  eteyey"}
                Sicon={<CatchingPokemon />}
                Stitle={" Refresh Delivery"}
                SDesc={"gdhdhfhfd h srethyrthrhr"}
              />
            </Box>
          </Grid>
        </Grid>

        <Grid
          container
          sx={{
            marginTop: "10%",
            marginBottom: "10%",

            display: "flex",
            marginTop: "6%",
            justifyContent: "space-between",
            width: "100%",

            height: { xs: "100%" },
          }}
        >
          {/* <Title title={"Related Item"} /> */}

          <Maingrid xs={12} sm={12} md={3} xl={3}>
            <Product
              image={
                "https://www.technolife.ir/image/color_image_TLP-24069_22a148_67f07ac9-7e8b-4fba-be60-92657a17a611.png"
              }
              title={"Abzar"}
              price={100}
              star={4}
              rateNumber={25}
            />
          </Maingrid>

          <Maingrid xs={12} sm={12} md={3} xl={3}>
            <Product
              image={
                "https://www.technolife.ir/image/color_image_TLP-24069_22a148_67f07ac9-7e8b-4fba-be60-92657a17a611.png"
              }
              title={"Mobile"}
              price={250}
              star={3.5}
              rateNumber={50}
            />
          </Maingrid>

          <Maingrid xs={12} sm={12} md={3} xl={3}>
            <Product
              image={
                "https://www.technolife.ir/image/color_image_TLP-24069_22a148_67f07ac9-7e8b-4fba-be60-92657a17a611.png"
              }
              title={"Tala"}
              price={1500}
              star={5}
              rateNumber={250}
            />
          </Maingrid>

          <Maingrid xs={12} sm={12} md={3} xl={3}>
            <Product
              image={
                "https://www.technolife.ir/image/color_image_TLP-24069_22a148_67f07ac9-7e8b-4fba-be60-92657a17a611.png"
              }
              title={"chador"}
              price={75}
              star={1}
              rateNumber={10}
            />
          </Maingrid>
        </Grid>
      </Container>

       <Footer /> 
    </Box>
  );
};
