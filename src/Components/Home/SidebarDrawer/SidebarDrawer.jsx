import { Box, Drawer, IconButton } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { Cdate } from '../CategoryList/CategoryData'
import { Menu } from '@mui/icons-material'
import CategoryList from '../CategoryList/CategoryList'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
const SidebarDrawer = () => {
    const [isDraweropen,setIsDraweropen]=useState(false)
  return (
    <>

    <IconButton size='large' edge='start' color='inherit' sx={{bgcolor:'gray',position:"fixed",left:'-13px',color:'#fff',borderRadius:"15",zIndex:"100",height:"35px"}} onClick={()=>setIsDraweropen(true)}>
    <PlaylistPlayIcon sx={{pl:3}}/>
    </IconButton>
   
    <Drawer anchor='left' open={isDraweropen} onClose={()=>setIsDraweropen(false)}>
    <CategoryList data={Cdate}/>
    </Drawer>
    
    </>
  )
}

export default SidebarDrawer