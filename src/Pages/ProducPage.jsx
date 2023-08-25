import { Grid } from "@mui/material";
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
export const ProducPage = () => {
  return (
    <>
      <NavBar />

      <Grid container sx={{ marginTop: "7%" }}>
        <Grid sx={{ display: "flex" }}>
          <Grid item xs={12} sm={12} md={7} xl={6}>
            <ProductImage
              mainImg={
                "https://gmedia.playstation.com/is/image/SIEPDC/dualsense-thumbnail-ps5-01-en-17jul20?$800px$"
              }
            />
          </Grid>

          <Grid xs={12} sm={12} md={5} xl={6}>
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
              Ficon={<CarCrash/>}
              Ftitle={'Free Delivery'}
              FDesc={'etetgregyryhrhyrhrhj  eteyey'}
              Sicon={<CatchingPokemon/>}
              Stitle={' Refresh Delivery'}
              SDesc={'gdhdhfhfd h srethyrthrhr'}
              />
            </Box>
          </Grid>
        </Grid>

        <Grid container sx={{ marginTop: "10%",marginBottom:"10%" }}>
          <Title title={"Related Item"} />

          <Grid  sx={{height:"50vh", display: "flex" ,marginTop:"6%",justifyContent:"space-around",width:"100%"}}>
            <Grid xs={12} sm={12} md={3} xl={4}>
              <Product
                image={
                  "https://dkstatics-public.digikala.com/digikala-products/8099c937b4123c121bb12e9b187a8e387ebba7c0_1630239758.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90"
                }
                title={"Abzar"}
                price={100}
                star={4}
                rateNumber={25}
              />
            </Grid>

            <Grid xs={12} sm={12} md={3} xl={4}>
              <Product
                 image={'https://dkstatics-public.digikala.com/digikala-products/2eecca1433de7975e17cb014f7fd52ea1fcb1391_1672484382.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90'}
                 title={'Mobile'}
                 price={250}
                 star={3.5}
                 rateNumber={50}

              />
            </Grid>



            <Grid xs={12} sm={12} md={3} xl={4}>
              <Product
                 image={'https://dkstatics-public.digikala.com/digikala-products/020e3fa8992d67c365e64db17c3558e20ada81c8_1635154901.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90'}
                 title={'Tala'}
                 price={1500}
                 star={5}
                 rateNumber={250}
              />
            </Grid>




            <Grid xs={12} sm={12} md={3} xl={4}>
              <Product
               image={'https://dkstatics-public.digikala.com/digikala-products/c34c67f153547c2a5e7092cb83a83f36b1e78794_1658835829.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90'}
               title={'chador'}
               price={75}
               star={1}
               rateNumber={10}
              />
            </Grid>
          </Grid>
        </Grid>
        
      </Grid>

      <Footer/>

      
    </>
  );
};
