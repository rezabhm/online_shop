import React from "react";
import { IconButton} from "@mui/material";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Badge from '@mui/material/Badge';

function FavoriteIcon(props){


    return(

        <IconButton aria-label='cart'>

            <Badge  badgeContent={props.content} color='secondary'>

                <FavoriteBorderIcon />

            </Badge>

        </IconButton>


    )



}

export default FavoriteIcon;