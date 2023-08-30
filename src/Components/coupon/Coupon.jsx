import {Button, Grid, TextField, Typography} from "@mui/material";
import CartTotal from "../Home/card total/CartTotal";

function Coupon(){

    return(
        <>
            <Grid container xs={12}>

                <Grid container xs={5} sx={{padding:"30px"}}>


                        <TextField  id="outlined-basic" label="Coupon Code" variant="outlined" />



                        <Button  variant="contained" color="warning" sx={{height:"55px", marginLeft:"15px"}}>Contained</Button>

                </Grid>

                <Grid container xs={2}>

                </Grid>

                <Grid item xs={5} sx={{padding:"30px"}}>
                    <CartTotal/>
                </Grid>
            </Grid>
        </>
    )
}

export default Coupon