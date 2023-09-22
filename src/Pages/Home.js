import React from "react";
import { Button, Drawer, Grid } from "@mui/material";
import NavBar from "../Components/Home/Navbar/NavBar";
import CategoryList from "../Components/Home/CategoryList/CategoryList";
import ImageViewer from "../Components/Home/ImageViewer/ImageViewer";
import Title from "../Components/Home/Title/Title";
import { Cdate } from "../Components/Home/CategoryList/CategoryData";
import DescriptionTitle from "../Components/Home/DescriptionTitle/DescriptionTitle";
import PageInatationButton from "../Components/Home/PageIantationButton/PageInatationButton";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import CategorySignButton from "../Components/Home/CategorySignButton/CategorySignButton";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import WatchOutlinedIcon from "@mui/icons-material/WatchOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import HeadsetOutlinedIcon from "@mui/icons-material/HeadsetOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Product from "../Components/Home/Product/Product";
import AdDescriptionImage from "../Components/Home/AdDescriptionImage/AdDescriptionImage";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import FeaturesIcons from "../Components/Home/FeaturesIcons/FeaturesIcons";
import Footer from "../Components/Home/Footer/Footer";
import AdImage from "../Components/Home/AdImage/AdImage";
import Container from "@mui/material/Container/Container";
import { styled } from "@mui/material";
import Box from "@mui/material/Box/Box";
import { useState } from "react";
import OurProducts from "../Components/Home/OurProducts/OurProducts";
import SidebarDrawer from "../Components/Home/SidebarDrawer/SidebarDrawer";
import Sliderimg1 from '../Assets/images/bhD2pA.jpg'
import Sliderimg2 from '../Assets/images/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png'
import Sliderimg3 from '../Assets/images/New Project (5).jpg'
import ProduvtImg1 from '../Assets/images/productimage1.jpg'
import ProduvtImg4 from '../Assets/images/productimage4.png'
import ProduvtImg2 from '../Assets/images/productimage2.webp'

// import WhishListHome from '../Components/Home/WhishListHome/WhishListHome'

const Maingrid = styled("grid")(({ theme }) => ({
  height: "50vh",
  width: "25%",
  marginBottom: "10%",

  [theme.breakpoints.down("sm")]: {
    height: "70vh",
    width: "100%",
    margin: " 3% 0 50% 0",
  },

  "@media (min-width:900px) and (max-width:1294px)": {
    marginBottom: "5%",
    width: "30%",
  },
  "@media (min-width:600px) and (max-width:900px)": {
    marginRight: "5%",
    marginBottom: "15%",
    width: "33%",
  },
  "@media(max-width:460px)": {
    marginBottom: "30%",
  },
  "@media (min-width:600px) and (max-width:715px)": {
    //  margin: "25% 15%",
  },
}));

function Home() {
  const [showlist, setShowlist] = useState(false);

  return (
    <>
      <NavBar />
      <Container
        maxWidth={"xl"}
        sx={{
          mt: 10,
          "@media (max-width:340px)": {
            marginBottom: "20%",
          },
        }}
      >
        <Grid container>
          <Grid sx={{ display: { sm: "block", xs: "block", md: "none" } }}>
            <SidebarDrawer />
          </Grid>
          <Grid sx={{ display: { sm: "none", md: "flex", xs: "none" } }}>
            <CategoryList data={Cdate} />
          </Grid>

          <Grid
            sm={12}
            md={8}
            item
            sx={{
              width: { sm: "100%", xs: "100%" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",
              mt: "10%",
              zIndex: "1",
            }}
          >
            <ImageViewer
              images={[
                {id:1 ,image:Sliderimg2},
                {id:2 ,image:Sliderimg3},
                {id:3,image:Sliderimg1}
               
              ]}
            />
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Title title={"Todays"} />
        </Grid>

        <Grid
          item
          sx={{ m: { xs: "10%", md: "3% 0 5% 1%" }, whiteSpace: "nowrap" }}
        >
          <DescriptionTitle title={"Flash Sales"} />
        </Grid>

        <Container maxWidth={"lg"}>
          <Grid
            container
            sx={{
              marginTop: "2%",
              marginBottom: "0",

              display: "flex",

              justifyContent: "space-between",
              width: "100%",

              height: { xs: "100%" },
            }}
          >
            <Maingrid xs={12} sm={12} md={3} xl={3}>
              <Product
                image={
                  ProduvtImg1
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
                  ProduvtImg2
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
                  ProduvtImg4
                }
                title={"chador"}
                price={75}
                star={1}
                rateNumber={10}
              />
            </Maingrid>
          </Grid>
        </Container>

        <Grid
          xs={12}
          sx={{
            mb: 6,
            mwidth: "100%",
            display: "flex",
            justifyContent: "center",
            "@media (min-width:600px) and (max-width:715px)": {
              marginTop: "35%",
            },
            "@media (max-width:547px)": { marginTop: "30%" },
          }}
        >
          <Button
            sx={{
              textAlign: "center",
              color: "#fff",
              backgroundColor: "#DB4444",
              padding: "10px",
              borderRadius: "7px",
              "&:hover": { backgroundColor: "red" },
            }}
          >
            view All Products
          </Button>
        </Grid>

        <Grid item xs={12} sx={{ mb: "3%" }}>
          <Title title={"Categories"} />
        </Grid>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Grid
            item
            sx={{
              m: { xs: "10%", md: "0" },
              textAlign: "center",
              whiteSpace: "nowrap",
            }}
          >
            <DescriptionTitle title={"Brows By Category"} />
          </Grid>

          <Grid item>
            <PageInatationButton
              data={[
                {
                  id: 1,
                  icon: <ArrowBackOutlinedIcon />,
                  onClick: () => {
                    console.log("left button click");
                  },
                },
                {
                  id: 2,
                  icon: <ArrowForwardOutlinedIcon />,
                  onClick: () => {
                    console.log("right button click");
                  },
                },
              ]}
            />
          </Grid>
        </Box>

        <Grid item sx={{ margin: "auto", width: "100%" }}>
          <CategorySignButton
            data={[
              {
                id: 0,
                icon: <PhoneAndroidOutlinedIcon />,
                text: "Phones",
                colors: "white",
                colorBtn: "#444",
                colorBtn2: "#fff",
                textColor2: "#fff",
              },
              {
                id: 1,
                icon: <ComputerOutlinedIcon />,
                text: "Computer",
                colors: "white",
                colorBtn: "#444",
                colorBtn2: "#fff",
                textColor2: "#fff",
              },
              {
                id: 2,
                icon: <WatchOutlinedIcon />,
                text: "SmartWatch",
                colors: "white",
                colorBtn: "#444",
                colorBtn2: "#fff",
                textColor2: "#fff",
              },
              {
                id: 3,
                icon: <CameraAltOutlinedIcon />,
                text: "Camera",
                colors: "white",
                colorBtn: "#444",
                colorBtn2: "#fff",
                textColor2: "#fff",
              },
              {
                id: 4,
                icon: <HeadsetOutlinedIcon />,
                text: "HeadPhones",
                colors: "white",
                colorBtn: "#444",
                colorBtn2: "#fff",
                textColor2: "#fff",
              },
              {
                id: 5,
                icon: <SportsEsportsOutlinedIcon />,
                text: "Gaming",
                colors: "white",
                colorBtn: "#444",
                colorBtn2: "#fff",
                textColor2: "#fff",
              },
            ]}
          />
        </Grid>

        <Container maxWidth={"lg"}>
          <Grid item xs={12} mt={"4%"} sx={{ width: "100%" }}>
            <AdImage
              img={
                "https://e0.pxfuel.com/wallpapers/3/947/desktop-wallpaper-headphones-audio-dark-dual-wide-display-2560-x-1080-dark.jpg"
              }
              title={"Enhance Your Music Experiance"}
              pushLinkShop={"/buy"}
              pushLinkCategory={"/pushlink"}
              day={"23"}
              hour={"05"}
              minute={"59"}
              second={"35"}
              texthours={"Hours"}
              textdays={"Days"}
              textminutes={"Min"}
              textsec={"Sec"}
            />
          </Grid>
        </Container>

        <Grid item xs={12} sx={{ mt: 9 }}>
          <Title title={"Our Products"} />
        </Grid>

        <Grid
          item
          sx={{ m: { xs: "10%", md: "3% 0 5% 1%" }, whiteSpace: "nowrap" }}
        >
          <DescriptionTitle title={"Explore Our Products"} />
        </Grid>

        <Container maxWidth={"lg"}>
          <Grid
            container
            sx={{
              marginTop: "5%",
              marginBottom: "10%",

              display: "flex",

              justifyContent: { xs: "center" },
              width: "100%",

              height: { xs: "100%" },
            }}
          >
            <OurProducts
              WhishlistItems2={[
                {
                  id: 1,
                  image:
                    "https://www.technolife.ir/image/color_image_TLP-24069_22a148_67f07ac9-7e8b-4fba-be60-92657a17a611.png",
                  title: "phone",
                  price: "123",
                  rateNumber: "",
                },
                {
                  id: 2,
                  image:
                    "https://www.technolife.ir/image/color_image_TLP-24069_22a148_67f07ac9-7e8b-4fba-be60-92657a17a611.png",
                  title: "laptop",
                  price: "123",
                  rateNumber: "",
                },
                {
                  id: 3,
                  image:
                    "https://www.technolife.ir/image/color_image_TLP-24069_22a148_67f07ac9-7e8b-4fba-be60-92657a17a611.png",
                  title: "mobile",
                  price: "123",
                  rateNumber: "",
                },
                {
                  id: 4,
                  image:
                    "https://www.technolife.ir/image/color_image_TLP-24069_22a148_67f07ac9-7e8b-4fba-be60-92657a17a611.png",
                  title: "Ipad",
                  price: "123",
                  rateNumber: "",
                },
                {
                  id: 5,
                  image:
                    "https://www.technolife.ir/image/color_image_TLP-24069_22a148_67f07ac9-7e8b-4fba-be60-92657a17a611.png",
                  title: "smartPhone",
                  price: "123",
                  rateNumber: "",
                },
                {
                  id: 6,
                  image:
                    "https://www.technolife.ir/image/color_image_TLP-24069_22a148_67f07ac9-7e8b-4fba-be60-92657a17a611.png",
                  title: "MacBook",
                  price: "123",
                  rateNumber: "",
                },
                {
                  id: 7,
                  image:
                    "https://www.technolife.ir/image/color_image_TLP-24069_22a148_67f07ac9-7e8b-4fba-be60-92657a17a611.png",
                  title: "Ultra Hd",
                  price: "123",
                  rateNumber: "",
                },
                {
                  id: 8,
                  image:
                    "https://www.technolife.ir/image/color_image_TLP-24069_22a148_67f07ac9-7e8b-4fba-be60-92657a17a611.png",
                  title: "television",
                  price: "123",
                  rateNumber: "",
                },
              ]}
            />

            <Grid
              xs={12}
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                "@media (min-width:600px) and (max-width:715px)": {
                  marginTop: "35%",
                },
                "@media (max-width:547px)": { marginTop: "30%" },
              }}
            >
              <Button
                sx={{
                  textAlign: "center",
                  color: "#fff",
                  backgroundColor: "#DB4444",
                  padding: "10px",
                  borderRadius: "7px",
                  "&:hover": { backgroundColor: "red" },
                }}
              >
                view All Products
              </Button>
            </Grid>
          </Grid>
        </Container>

        <Grid item xs={12} sx={{ mt: 9 }}>
          <Title title={"Featured"} />
        </Grid>

        <Grid
          item
          sx={{ m: { xs: "10%", md: "3% 0 5% 1%" }, whiteSpace: "nowrap" }}
        >
          <DescriptionTitle title={"New Arrival"} />
        </Grid>

         <Grid container xs={12} sx={{mb:10}}>

<AdDescriptionImage

    imageL={{

        url:'https://www.xgn.nl/images/articles/2020/202007/_970x545_crop_center-center_82_line/3136374/ps5_black.f1593781621.jpg',
        title:'PlayStation 5',
        description:'game for play station 5',
        pushLink:'/fck'

    }}


    imageRT={{

        url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQokKnoTXigwLdFu8JlKEM_tswdTNwJ9Hcbwg&usqp=CAU',
        title:'Laptop',
        description:'laptop for design shop',
        pushLink:'/laptop'

    }}



    imageRL={{

        url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzV1M0veKJliZd79O7qh6EkMbYOG7bM0ElLA&usqp=CAU',
        title:'Hamburger',
        description:'Hamburger for launch',
        pushLink:'/hamburger'

    }}



    imageRR={{

        url:'data:image/jpeg;base64,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',
        title:'Coca Cola',
        description:'Coca Cola for dinner and launch',
        pushLink:'/coca-cola'

    }}



/>

</Grid>

        <Grid xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <FeaturesIcons />
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
