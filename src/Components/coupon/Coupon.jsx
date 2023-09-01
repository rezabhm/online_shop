import { Box } from "@material-ui/core";
import {Button, Grid, TextField, Typography} from "@mui/material";
import CartTotal from "../Home/card total/CartTotal";

function Coupon(){

    return(
        <>
          

                <Grid container  >

                    <Box sx={{display:"flex",}}>

                        <TextField  sx={{width:"300px"}} id="outlined-basic" label="Coupon Code" variant="outlined" />



                        <Button  variant="contained" color="warning" sx={{height:"55px", marginLeft:"15px"}}>Contained</Button>
                        </Box>
                </Grid>

            

                {/* <Grid item xs={5} sx={{padding:"30px"}}>
                    <CartTotal/>
                </Grid> */}
           
        </>
    )
}

export default Coupon