import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import AboutHeaderDesc from '../Components/about/AboutHeaderDesc'
import AboutImg from '../Components/about/AboutImg'
import NavBar from '../Components/Home/Navbar/NavBar'
const About = () => {
  return (
    <>
    <NavBar/>
    <Container>
        <Grid container sx={{mt:"10%"}}>
            <Grid item>
        <AboutHeaderDesc 
        title={'Our story'}
        text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur maxime consequuntur recusandae vero porro reiciendis officiis libero commodi officia beatae doloribus maiores nulla, enim, voluptatem pariatur nesciunt provident veritatis ipsum rerum quasi incidunt at cupiditate aspernatur unde. Odit id sint officiis! Ratione culpa maxime, voluptate perspiciatis perferendis soluta doloremque! Ratione excepturi cum quos velit pariatur, at sequi aspernatur aliquam hic sunt ipsam laudantium molestias non magnam delectus, culpa a expedita inventore dolorem. Distinctio obcaecati, earum quos fugiat vitae modi est voluptate quidem hic, quisquam deserunt harum inventore. Commodi provident sequi, odio blanditiis minus nihil quos nisi fugiat autem suscipit eum?"}
        />
            </Grid>

            <Grid item>
            <AboutImg img={"https://www.technolife.ir/image/color_image_TLP-24069_22a148_67f07ac9-7e8b-4fba-be60-92657a17a611.png"}/>
            </Grid>
        </Grid>
        </Container>
        </>
    
  )
}

export default About