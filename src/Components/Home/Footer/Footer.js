import * as React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import {Button, createTheme, CssBaseline, Grid, styled, TextField, ThemeProvider, Typography} from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import badge1 from "../../../Assets/images/google-play-badge.png";
import badge2 from "../../../Assets/images/app-store-badge.png";

function Footer(){


     const theme = createTheme({
        palette: {
            warning: {
                main: '#efefef',
            },
            secondary: {
                main: '#edf2ff',
            },
        },
    });
    return(


                    <Grid container sx={{bgcolor:"#3c3b3b",padding:"100px", height:"auto"

                    }} spacing={1.5}>
                        <Grid container xs={12} sm={6} md={6} lg={6} xl={2} mb="20px" >

                            <Grid item xs={12}>
                                <Typography variant="h3" sx={{color:"#fff"}}>
                                    Exclusive
                                </Typography>
                            </Grid>

                            <Grid item xs={12}>
                                <Button sx={{color:"#fff"}}>subscribe</Button>
                            </Grid>

                            <Grid item xs={12}>
                                <Button sx={{color:"#fff"}}>Get 10% off your first </Button>
                            </Grid>
                                <ThemeProvider theme={theme}>
                            <Grid item xs={12} >
                                <TextField  id="outlined-basic" label="Enter your email"
                                            color="warning"
                                   sx={{
                                       input:{   color:'#efefef'},
                                        label:{color:"#efefef"},
                                       '& label.Mui-focused': {
                                           color: 'white',
                                       },
                                       '& .MuiInput-underline:after': {
                                           borderBottomColor: 'white',
                                       },
                                       '& .MuiOutlinedInput-root': {
                                           '& fieldset': {

                                               borderColor: 'white',
                                           },
                                           '&:hover fieldset': {
                                               borderColor: 'white',
                                           },
                                           '&.Mui-focused fieldset': {
                                               borderColor: 'white',
                                           },
                                       },

                                }} />
                            </Grid>
                                </ThemeProvider>
                        </Grid>



                        <Grid container xs={12} sm={6} md={6} lg={6} xl={2}>

                            <Grid item xs={12}>
                                <Typography variant="h4" component="h2" sx={{color:"#fff" , marginLeft:{sx:"5px"}}}>
                                    Support
                                </Typography>
                            </Grid>

                            <Grid item xs={12}>
                                <Button sx={{color:"#fff"}}>Iran,Zanjan street 11</Button>
                            </Grid>

                            <Grid item xs={12}>
                                <Button sx={{color:"#fff"}}>Adlikara@gmail.com</Button>
                            </Grid>

                            <Grid item xs={12}>
                                <Button sx={{color:"#fff"}}>+98-65489-646 </Button>
                            </Grid>

                        </Grid>


                        <Grid container xs={12} sm={6} md={6} lg={6} xl={2} spacing={0}>

                            <Grid item xs={12} >
                                <Typography variant="h4" component="h2" sx={{color:"#fff"}}>
                                    Account
                                </Typography>
                            </Grid>

                            <Grid item xs={12}>
                                <Button sx={{color:"#fff"}}>My Account</Button>
                            </Grid>

                            <Grid item xs={12}>
                                <Button sx={{color:"#fff"}}>Login/ Register </Button>
                            </Grid>

                            <Grid item xs={12}>
                                <Button sx={{color:"#fff"}}>Cart </Button>
                            </Grid>

                            <Grid item xs={12}>
                                <Button sx={{color:"#fff"}}>Wishlist </Button>
                            </Grid>

                            <Grid item xs={12}>
                                <Button sx={{color:"#fff"}}>Shop </Button>
                            </Grid>
                        </Grid>


                        <Grid container xs={12} sm={6} md={6} lg={6} xl={2}>

                            <Grid item xs={12} sx={{ml:{xs:"5%"}}}>
                                <Typography variant="h4" component="h2" sx={{color:"#fff"}}>
                                    Quick Link
                                </Typography>
                            </Grid>

                            <Grid item xs={12}>
                                <Button sx={{color:"#fff"}}>Privacy Policy</Button>
                            </Grid>

                            <Grid item xs={12}>
                                <Button sx={{color:"#fff"}}>Terms Of Use</Button>
                            </Grid>

                            <Grid item xs={12}>
                                <Button sx={{color:"#fff"}}>FaQ</Button>
                            </Grid>

                            <Grid item xs={12}>
                                <Button sx={{color:"#fff"}}>Contact</Button>
                            </Grid>
                        </Grid>


                        <Grid container xs={12} sm={12} md={12} lg={12} xl={4} sx={{width:{md:"100%" , lg:"100%" , xl:"100%"}}}   spacing={2}>

                            <Grid item xs={12}>
                                <Typography variant="h4" component="h2" sx={{color:"#fff"}}>
                                    Download App
                                </Typography>
                            </Grid>

                            <Grid item xs={12}>
                                <Button sx={{color:"#fff"}}>Save $3 With App New User Only</Button>
                            </Grid>

                            <Grid container xs={12}>

                                <Grid item xs={6}>
                                    <QrCode2Icon sx={{fontSize: 100, width:'100%', height:'100%' ,}} color="action" />
                                </Grid>

                                <Grid item xs={6}>

                                    <Grid item xs={12}>
                                        <img src={badge1} style={{width:'100%', height:'100%'}} alt="" />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <img src={badge2} style={{width:'100%', height:'100%'}} alt="" />
                                    </Grid>


                                </Grid>

                            </Grid>

                            <Grid container xs={12} sm={5} md={4} lg={4} xl={8}>

                                <Grid item xs={3} sx={{m:"1px"}}>
                                    <InstagramIcon fontSize="large" color="action" />
                                </Grid>

                                <Grid item xs={3}>
                                    <TwitterIcon fontSize="large" color="action"/>
                                </Grid>

                                <Grid item xs={3}>
                                    <FacebookIcon fontSize="large" color="action"/>
                                </Grid>

                                <Grid item xs={3}>
                                    <LinkedInIcon fontSize="large" color="action"/>
                                </Grid>

                            </Grid>

                        </Grid>
                    </Grid>


    )
}

export default Footer