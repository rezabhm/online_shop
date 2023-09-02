
import {Grid, Typography} from "@mui/material";
import {Box} from "@mui/system";

function CartTotal(props){
    return(
        <>
            <Box  sx={{border:"1px solid #000" , width:"470px",height:"324" , padding:"20px"}}>

                <Typography variant="h5" sx={{padding:"5px"}}>
                    Cart Total
                </Typography>

                    <Box  sx={{paddingTop:"20px", display:"flex",justifyContent:'space-between',}}>

                         <Typography >
                             Subtotal:
                         </Typography>
                         <Typography >
                             {props.number}
                         </Typography>

                    </Box>
                    <hr />
                    <Box sx={{paddingTop:"20px", display:"flex",justifyContent:'space-between',}} >
                        <Typography  >
                            Shipping:
                        </Typography>
                        <Typography>
                            {props.ship}
                        </Typography>
                    </Box>
                    <hr />
                    <Box sx={{paddingTop:"20px", display:"flex",justifyContent:'space-between'}} >
                        <Typography  >
                            Total:
                        </Typography>
                        <Typography>
                            {props.total}
                        </Typography>
                    </Box>

            </Box>
        </>
    )
}

export default CartTotal
