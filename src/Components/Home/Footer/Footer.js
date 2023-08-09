import * as React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import {Button, Grid, styled, TextField, Typography} from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import badge1 from "../../../Assets/images/google-play-badge.png"
import badge2 from "../../../Assets/images/app-store-badge.png"

function Footer(){
    return(


                    <Grid container sx={{ bgcolor:"black", padding:"100px"}} spacing={1}>
                            <Grid item xs={2}>

                                <Grid item xs={12}>
                                    <Typography variant="h3" component="h2" sx={{color:"#fff"}}>
                                        Exclusive
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Button sx={{color:"#fff"}}>subscribe</Button>
                                </Grid>

                                <Grid item xs={12}>
                                    <Button sx={{color:"#fff"}}>Get 10% off your first </Button>
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField id="outlined-basic" label="Enter your email" variant="outlined" bgcolor="red" style={{

                                        color:'white',



                                    }} />
                                </Grid>
                            </Grid>



                        <Grid item xs={2}>

                            <Grid item xs={12}>
                                <Typography variant="h3" component="h2" sx={{color:"#fff"}}>
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


                        <Grid item xs={2}>

                            <Grid item xs={12}>
                                <Typography variant="h3" component="h2" sx={{color:"#fff"}}>
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


                        <Grid item xs={2}>

                            <Grid item xs={12}>
                                <Typography variant="h3" component="h2" sx={{color:"#fff"}}>
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


                        <Grid item xs={4}>

                            <Grid item xs={12}>
                                <Typography variant="h3" component="h2" sx={{color:"#fff"}}>
                                    Download App
                                </Typography>
                            </Grid>

                            <Grid item xs={12}>
                                <Button sx={{color:"#fff"}}>Save $3 With App New User Only</Button>
                            </Grid>

                            <Grid container xs={12}>

                                <Grid item xs={6}>
                                    <QrCode2Icon sx={{fontSize: 100, width:'100%', height:'100%'}} color="warning" />
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

                        <Grid container xs={12}>

                            <Grid item xs={3}>
                                <InstagramIcon fontSize="large" color="warning"/>
                            </Grid>

                            <Grid item xs={3}>
                                <TwitterIcon fontSize="large" color="warning"/>
                            </Grid>

                            <Grid item xs={3}>
                                <FacebookIcon fontSize="large" color="warning"/>
                            </Grid>

                            <Grid item xs={3}>
                                <LinkedInIcon fontSize="large" color="warning"/>
                            </Grid>

                        </Grid>

                            </Grid>
                    </Grid>

    )
}

export default Footer