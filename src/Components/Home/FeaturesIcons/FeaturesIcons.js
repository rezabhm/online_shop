import {Grid, Typography} from "@mui/material";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
function FeaturesIcons(){
    return(

            <Grid container xs={12} sx={{padding:"100px" , textAlign:"center"}}>

                <Grid item xs={4}>
                    <Grid item xs={12} sx={{}}>
                       <LocalShippingIcon sx={{bgcolor:"#000" , color:"#fff" , borderRadius:"50%",width:"100px"  , fontSize:"90px" , border:"5px solid #2F2E30"}} />
                    </Grid>

                    <Grid item xs={12} >
                        <Typography variant="h5">
                            FREE AND FAST DELIVERY
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography >
                            Free delivery for all orders over $140
                        </Typography>
                    </Grid>

            </Grid>

                <Grid item xs={4}>
                    <Grid item xs={12} >
                        <HeadsetMicIcon sx={{bgcolor:"#000" , color:"#fff" , borderRadius:"50%",width:"100px"  , fontSize:"90px" , border:"5px solid #2F2E30"}} />
                    </Grid>

                    <Grid item xs={12} >
                        <Typography variant="h5">
                            FREE AND FAST DELIVERY
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography >
                            Free delivery for all orders over $140
                        </Typography>
                    </Grid>

                </Grid>

                <Grid item xs={4}>
                    <Grid item xs={12}>
                        <VerifiedUserIcon sx={{bgcolor:"#000" , color:"#fff" , borderRadius:"50%",width:"100px"  , fontSize:"90px" , border:"5px solid #2F2E30"}} />
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="h5">
                            FREE AND FAST DELIVERY
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography >
                            Free delivery for all orders over $140
                        </Typography>
                    </Grid>

                </Grid>

            </Grid>

    )
}
export default FeaturesIcons