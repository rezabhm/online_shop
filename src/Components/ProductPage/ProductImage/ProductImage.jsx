import { Grid } from "@mui/material";
import { width } from "@mui/system";
import ProductImgList from "./ProductImgList";
import { imagelistData } from "./imgListData";
import React from "react";
import { useState } from "react";
import Modal1 from "./Modal";
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
import ImageViewer from "../../Home/ImageViewer/ImageViewer";
import {
  Avatar,
  Box,
  ButtonGroup,
  Fab,
  Modal,
  styled,
  TextField,
  Tooltip,
  Typography,
  Button,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  height: "50%",

  border: "none",
  boxShadow: 24,
  borderRadius: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  margin: "auto",
};


const Userbox =styled("box")(({theme})=>({

 
  [theme.breakpoints.down("sm")]:{
      display: "none"
  }   
  
  }))

  const IconBox=styled("box")(({theme})=>({
    [theme.breakpoints.up("sm")]:{
      display:"none"
    }
  }))

  const ImageBox=styled("box")(({theme})=>({
    [theme.breakpoints.down("sm")]:{
      width:"100%",
        marginLeft:"10%"
    }
  }))



const ProductImage = (props) => {
  const [imgData, setImgData] = useState(imagelistData);
  let [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if (open === true) {
    return (
      <Modal
        sx={{ backgroundColor: "#F5F5F5" }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ImageViewer images={imgData.map((item) => item.image)} />
        </Box>
      </Modal>
    );
  } else {
    return (
      <>
        <Grid container sx={{ display: "flex", flexDirection: "row-reverse" }}>
          <Grid
            item
            sx={{
              textAlign: "center",
              display: "flex",

              justifyContent: "center",
             
              alignItems: "center",
              margin: "auto",
              flexDirection:"column"
            }}
          >
            <ImageBox sx={{ width: "100%", height: "300px" }}>
              <img
                onClick={() => setOpen(true)}
                style={{ width: "100%", height: "100%" }}
                src={props.mainImg}
              />
            </ImageBox>
            <IconBox>
              <FiberManualRecordOutlinedIcon  onClick={() => setOpen(true)} />
              <FiberManualRecordOutlinedIcon onClick={() => setOpen(true)}/>
              <FiberManualRecordOutlinedIcon onClick={() => setOpen(true)}/>
            </IconBox>
          </Grid>

          <Grid item   >
          
            <Userbox>
              {imgData.map((item) => (
                <ProductImgList key={item.id} {...item} />
              ))}
            </Userbox>
          </Grid>
        </Grid>
      </>
    );
  }
};

export default ProductImage;
