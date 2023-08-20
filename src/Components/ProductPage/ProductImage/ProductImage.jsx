import { Grid } from '@mui/material'
import { width } from '@mui/system'
import ProductImgList from './ProductImgList'
import { imagelistData } from './imgListData'
import React from 'react'
import { useState } from 'react'
import Modal1 from './Modal'
import ImageViewer from '../../Home/ImageViewer/ImageViewer'
import {Avatar, Box, ButtonGroup, Fab, Modal, styled, TextField, Tooltip, Typography,Button} from '@mui/material'



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
width:"50%",
height:"50%",
 
  border: 'none',
  boxShadow: 24,
  borderRadius:'20px',
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  textAlign:"center",
  margin:"auto"
};

const ProductImage = (props) => {
  const [imgData,setImgData] = useState(imagelistData)
  let [open  , setOpen ] =useState(false)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if(open===true){
    return   <Modal
    sx={{backgroundColor:"#F5F5F5"}}
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
    <ImageViewer  images={imgData.map((item)=>item.image)} /> 
    </Box>
  </Modal>
  }else{

  
  return (
    <>
    <Grid container sx={{width:'700px' , direction:"rtl" , height:"600px"}}>

        <Grid item sx={{height:"660px", width:"500px",position:"relative" , textAlign:"center",display:'flex',justifyContent:"center",alignItems:"center",margin:"auto"}}>
        
            <img onClick={()=> setOpen(true)} style={{width:"90%" , position:"absolute",height:"50%"}} src={props.mainImg} />
           
        </Grid>

        <Grid item sx={{ width:"20%"}}>
        {imgData.map((item)=>(
          <ProductImgList key={item.id} {...item}/>
        ))}
        </Grid>

  
           
        </Grid>
        </>
  )
        }
}

export default ProductImage