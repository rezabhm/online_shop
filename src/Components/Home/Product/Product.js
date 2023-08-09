import React from "react";
import {Card, CardActions, CardContent, CardMedia, Stack, Typography} from "@mui/material";
import Rating from '@mui/material/Rating';

function Product(props){


    return(

        <>

            <Card sx={{

                width:'100%',
                height:'100%',
                backgroundColor:'rgba(255,255,255,0.2)'

            }}>

                <CardMedia

                    image={props.image}
                    title={'product '}
                    sx={{

                        height:'75%',
                        width:'100%',

                    }}
                />

                <CardContent>

                    <Typography variant={'h5'} >

                        {props.title}

                    </Typography>

                </CardContent>

                <CardActions sx={{

                    width:'100%',
                    height:'10%',

                }}>

                    <Typography variant={'h6'} sx={{

                        color:'red',
                        width:'25%',

                    }} >${props.price}</Typography>


                    <Stack sx={{

                        width:'50%',

                    }}>

                        <Rating  name={'half-rating'} defaultValue={props.stars} precision={0.5} readOnly />

                    </Stack>

                    <Typography variant={'h6'} sx={{

                        width:'25%'

                    }}>

                        {props.rateNumber}

                    </Typography>


                </CardActions>


            </Card>



        </>



    )


}
export default Product;