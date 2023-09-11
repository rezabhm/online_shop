import { Box, Drawer, IconButton } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { Cdate } from '../CategoryList/CategoryData'
import { Menu } from '@mui/icons-material'
import CategoryList from '../CategoryList/CategoryList'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
const SidebarDrawer = () => {
    const [isDraweropen,setIsDraweropen]=useState(false)
  return (
    <>

    <IconButton size='large' edge='start' color='inherit' sx={{bgcolor:'black',position:"fixed",color:'#fff',borderRadius:"15",left:"-1px",zIndex:"100",height:"35px", boxShadow: "0 0 2px 10px #C1C1C1",top:"10%"}} onClick={()=>setIsDraweropen(true)}>
    <KeyboardDoubleArrowRightIcon />
    </IconButton>
   
    <Drawer anchor='left' open={isDraweropen} onClose={()=>setIsDraweropen(false)}>
    <CategoryList data={Cdate}/>
    </Drawer>
    
    </>
  )
}

export default SidebarDrawer