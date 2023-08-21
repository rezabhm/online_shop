import React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
const PageInatationButton = (props) => {
    return (
        <>
            <Box sx={{ "& > :not(style)": { m: 1,


                },

                alignItems:'right',
                justifyContent:'right',
                display:'flex',
                right:'0px',
                mr:'0px'

            }}>
                <Fab onClick={props.NextClick} color="##e8eaf6" aria-label="add">
                    <ArrowBackOutlinedIcon />
                </Fab>
                <Fab onClick={props.prevClick} color="##e8eaf6" aria-label="edit">
                    <ArrowForwardOutlinedIcon />
                </Fab>
            </Box>
        </>
    );
};

export default PageInatationButton;