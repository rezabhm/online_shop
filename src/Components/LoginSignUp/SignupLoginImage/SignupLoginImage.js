import { Grid } from '@mui/material'
import React from 'react'
import Footer from '../../Home/Footer/Footer'


const SignupLoginImage = (props) => {
  return (
    <>
    <Grid container>
        <Grid item xs={6}>
    <img style={{width:"805px" ,height:"781px"}} src={props.img} />
    </Grid>
    </Grid>

    <Footer/>

    </>
  )
}

export default SignupLoginImage
