import Rating from "@mui/material/Rating";
import React from "react";
import {Typography} from "@mui/material";
import {Grid} from "@material-ui/core";

function ProductReview(props){

    return(
        <>
            <Grid container xs={12}>
                <Grid item xs={4}>
                    <Rating  name={'half-rating'} defaultValue={props.star} precision={0.5} readOnly  />
                </Grid>

                <Grid item xs={4}>
                    <Typography>
                        ({(props.Reviews)} Reviews)  |
                    </Typography>
                </Grid>

                <Grid item xs={4}>
                    <Typography color="#00FF66">
                        in stock
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default ProductReview