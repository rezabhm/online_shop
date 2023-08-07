import React from "react";
import {Grid} from "@mui/material";
import NavBar from "../Components/Home/Navbar/NavBar";
import CategoryList from "../Components/Home/CategoryList/CategoryList";
import ImageViewer from "../Components/Home/ImageViewer/ImageViewer";
import Title from "../Components/Home/Title/Title";
import {Cdate} from "../Components/Home/CategoryList/CategoryData";


function Home(){

    const styled = {alignItems:'center', justifyContent:'center',display:'flex'}

    return(

        <>

            <Grid container spacing={3} >

                <Grid item xs={12}>

                    <NavBar />

                </Grid>

                <Grid item xs={1} >

                    <></>

                </Grid>


                <Grid item xs={2} >

                    <CategoryList data={Cdate} />

                </Grid>

                <Grid item xs={8} style={{alignItems:'center', justifyContent:'center',display:'flex'}} >

                    <ImageViewer images={[

                        'https://www.thoughtco.com/thmb/FU4GwHf9m__TD0tsOKJPcX6Ru_Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/wave-pattern-desert-landscape--oman-886145780-5c45542046e0fb00012ebabf.jpg',
                        'data:image/jpeg;base64,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'

                    ]} />

                </Grid>

                <Grid item xs={1} >

                    <></>

                </Grid>


                <Grid item xs={12} >

                    <></>

                </Grid>

                <Grid item xs={12} >

                    <></>

                </Grid>

                <Grid item xs={1} >

                    <></>

                </Grid>

                <Grid item xs={10} >

                    <Title title={"Today's"} />

                </Grid>

                <Grid item xs={1} >

                    <></>

                </Grid>

            </Grid>



        </>



    )




}

export default Home;