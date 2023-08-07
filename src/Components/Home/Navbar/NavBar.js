import React from "react";
import {Grid} from "@material-ui/core";
import Logo from "./logo";
import NavButton from "./button";
import SearchBox from "./searchBox";
import FavoriteIcon from "./favoriteIcon";
import ShoppingIcon from "./shoppingIcon";

function NavBar(){

    const styled = {alignItems:'center', justifyContent:'center',display:'flex'}


    return(

        <Grid container spacing={3} style={{borderBottom:'1px solid rgba(0,0,0,0.5)'}} >

            <Grid item xs={1} style={styled}>

                <></>

            </Grid>


            <Grid item xs={1} style={styled}>

                <Logo title={'Adli Kara'}/>

            </Grid>

            <Grid item xs={1} style={styled}>

                <></>

            </Grid>



            <Grid item xs={3} style={styled}>

                <Grid item xs={3} style={styled}>

                    <NavButton status={true} pushLink={'/#Home'} text={'Home'} />

                </Grid>

                <Grid item xs={3} style={styled}>

                    <NavButton status={false} pushLink={'/#Contact'} text={'Contact'} />

                </Grid>

                <Grid item xs={3} style={styled}>

                    <NavButton status={false} pushLink={'/#About'} text={'About'} />

                </Grid>

                <Grid item xs={3} style={styled}>

                    <NavButton status={false} pushLink={'/#SignUp'} text={'Sign Up'} />

                </Grid>



            </Grid>


            <Grid item xs={1} style={styled}>

                <></>

            </Grid>

            <Grid item xs={3} style={styled}>

                <SearchBox />

            </Grid>


            <Grid item xs={1} style={styled}>

                <Grid item xs={6} style={styled}>

                    <FavoriteIcon content={2}/>

                </Grid>

                <Grid item xs={6} style={styled}>

                    <ShoppingIcon content={6}/>

                </Grid>



            </Grid>

            <Grid item xs={1} style={styled}>

                <></>

            </Grid>


        </Grid>



    )




}

export default NavBar;