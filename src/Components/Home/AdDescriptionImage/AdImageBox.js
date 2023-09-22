import React from "react";
import {Box} from "@material-ui/core";
import {Button, Grid, Link, Typography} from "@mui/material";
import './AdDescriptionImage.css';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';


function AdImageBox(props){


    if (props.size === 'big') {


        return (

            <Box sx={{

                width: '100%',
                height: '100%',
                position: 'relative',


            }}>
                <img

                    src={props.img}
                    className='ad-image-description-image'

                />


                <Grid container spacing={0} sx={{

                    position: 'absolute',
                    bottom: '5%',
                    left: '5%',
                    width: '100%',


                }}>

                    <Grid item xs={12}>

                        <Typography variant='h4' sx={{

                            color: 'white',

                        }}>

                            {props.title}

                        </Typography>


                    </Grid>


                    <Grid item xs={12}>


                        <Typography variant='h6' sx={{

                            color: 'rgba(255,255,255,0.75)',

                        }}>

                            {props.text}

                        </Typography>

                    </Grid>

                    <Grid item xs={12}>

                        <Link href={props.pushLink}>

                            <Button endIcon={<ArrowForwardIcon/>}>

                                Shop Now


                            </Button>

                        </Link>


                    </Grid>


                </Grid>


            </Box>


        )
    }else{

        return(

            <Box sx={{

                width:'100%',
                height:'100%',
                position:'relative'


            }}>

                <img

                    src={props.img}
                    className='ad-image-description-image'

                />


                <Grid container spacing={0}  sx={{

                    position:'absolute',
                    bottom:'5%',
                    left:'5%',
                    width:'100%',


                }}>

                    <Grid item xs={12}>

                        <Typography variant='h5' sx={{

                            color:'white',

                        }}>

                            {props.title}

                        </Typography>



                    </Grid>



                    <Grid item xs={12} sm={12} md={12} sx={{md:{mb:"-70px"}}}>


                        <Typography variant='h6' sx={{

                            color: 'rgba(255,255,255,0.75)',
                            whiteSpace:'nowrap',
                            fontSize:'14px',


                        }}>

                            {props.text}

                        </Typography>

                    </Grid>

                    <Grid item xs={12} >

                        <Link href={props.pushLink}>
                            <Button endIcon={<ArrowForwardIcon />}>
                                Shop Now
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </Box>

        )
    }

}

export default AdImageBox;