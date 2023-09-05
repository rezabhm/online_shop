import { Grid, Stack } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import AboutHeaderDesc from "../Components/about/AboutHeaderDesc";
import AboutImg from "../Components/about/AboutImg";
import NavBar from "../Components/Home/Navbar/NavBar";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { TbMoneybag } from "react-icons/tb";
import CategorySignButton from "../Components/Home/CategorySignButton/CategorySignButton";
import AboutSlider from "../Components/AboutSlideManager/AboutSlider";
import Footer from "../Components/Home/Footer/Footer";
import FeaturesIcons from "../Components/Home/FeaturesIcons/FeaturesIcons";
import { Category } from "@mui/icons-material";
import CategoryAbout from "../Components/AboutSlideManager/Caategory";
const About = () => {
  const [imgData, setImgData] = React.useState([
    {
      id: 0,
      img: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      name: "Tom",
      desc: "Founder & Chairman",
    },
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      name: "Emma",
      desc: "Managing Director",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      name: "Will",
      desc: "Product Designer",
    },
  ]);
  return (
    <>
      <NavBar />
      <Container>
        <Grid container sx={{ mt: "10%" }}>
          <Grid item xs={12} md={6} sx={{ mb: 15 }}>
            <AboutHeaderDesc
              title={"Our story"}
              text={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur maxime consequuntur recusandae vero porro reiciendis officiis libero commodi officia beatae doloribus maiores nulla, enim, voluptatem pariatur nesciunt provident veritatis ipsum rerum quasi incidunt at cupiditate aspernatur unde. Odit id sint officiis! Ratione culpa maxime, voluptate perspiciatis perferendis soluta doloremque! Ratione excepturi cum quos velit pariatur, at sequi aspernatur aliquam hic sunt ipsam laudantium molestias non magnam delectus, culpa a expedita inventore dolorem. Distinctio obcaecati, earum quos fugiat vitae modi est voluptate quidem hic, quisquam deserunt harum inventore. Commodi provident sequi, odio blanditiis minus nihil quos nisi fugiat autem suscipit eum?"
              }
            />
          </Grid>

          <Grid item xs={12} md={6} sx={{ mb: 15 }}>
            <AboutImg
              img={
                "https://www.technolife.ir/image/color_image_TLP-24069_22a148_67f07ac9-7e8b-4fba-be60-92657a17a611.png"
              }
            />
          </Grid>
          <Grid
            sx={{
              margin: "0px",
            }}
          >
            <CategoryAbout
              data={[
                {
                  id: 0,
                  icon2: <StorefrontOutlinedIcon />,
                  text: "Sallers active our site",
                  colors: "white",
                  title: "10.5K",
                  iconBoxSh: "0 0 2px 10px #C1C1C1",
                  iconBoxSh2: "0 0 2px 10px rgba(255,255,255,.4)",
                  iconBg2: "#ffff",
                  iconBg: "#111",
                  iconColor: "#fff",
                  iconColor2: "#111",
                  textColor: "#111",
                  textColor2: "#fff",
                },
                {
                  id: 1,
                  icon2: <MonetizationOnOutlinedIcon />,
                  text: "Mopnthly product sale",
                  colors: "white",
                  title: "33K",
                  iconBoxSh: "0 0 2px 10px #C1C1C1",
                  iconBoxSh2: "0 0 2px 10px rgba(255,255,255,.4)",
                  iconBg2: "#ffff",
                  iconBg: "#111",
                  iconColor: "#fff",
                  iconColor2: "#111",
                  textColor: "#111",
                  textColor2: "#fff",
                },
                {
                  id: 2,
                  icon2: <ShoppingBagOutlinedIcon />,
                  text: "Customer active in our site",
                  colors: "white",
                  title: "45.5K",
                  iconBoxSh: "0 0 2px 10px #C1C1C1",
                  iconBoxSh2: "0 0 2px 10px rgba(255,255,255,.4)",
                  iconBg2: "#ffff",
                  iconBg: "#111",
                  iconColor: "#fff",
                  iconColor2: "#111",
                  textColor: "#111",
                  textColor2: "#fff",
                },
                {
                  id: 3,
                  icon2: <TbMoneybag size={45} />,
                  text: "Anual gross sale in our site",
                  colors: "white",
                  title: "25K",
                  iconBoxSh: "0 0 2px 10px #C1C1C1",
                  iconBoxSh2: "0 0 2px 10px rgba(255,255,255,.4)",
                  iconBg2: "#ffff",
                  iconBg: "#111",
                  iconColor: "#fff",
                  iconColor2: "#111",
                  textColor: "#111",
                  textColor2: "#fff",
                },
              ]}
            />
          </Grid>
          <Grid container sx={{ my: 20 }}>
            {imgData.map((item) => {
              return (
                <Grid xs={12} sm={12} md={4}>
                  <AboutSlider
                    img={item.img}
                    name={item.name}
                    desc={item.desc}
                  />
                </Grid>
              );
            })}
          </Grid>
          <Grid>
            <FeaturesIcons />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default About;
