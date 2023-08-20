import React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Grid, Typography } from '@mui/material';
import { Stack } from '@mui/system';

const Size = () => {

    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
      setValue(newValue)
    }
  return (
    <> 
    <Grid container sx={{maxWidth:"300px" ,display:"flex" , alignItems:'center' ,justifyContent:"space-between"}}>
    <Typography sx={{fontSize:"25px"}} variant='h5'>Size:</Typography>

    <Grid item sx={{cursor:"pointer",border:"1px solid black",textAlign:"center" ,borderRadius:"5px",width:"30px",padding:"4px",height:"30px","&:hover":{backgroundColor:"#DB4444"} }}>
        <Typography>XS</Typography>
    </Grid> 

    <Grid item  sx={{cursor:"pointer",border:"1px solid black",textAlign:"center" ,borderRadius:"5px",width:"30px",padding:"4px",height:"30px","&:hover":{backgroundColor:"#DB4444"} }}>
        <Typography>S</Typography>
    </Grid>

    <Grid item  sx={{cursor:"pointer",border:"1px solid black",textAlign:"center" ,borderRadius:"5px",width:"30px",padding:"4px",height:"30px","&:hover":{backgroundColor:"#DB4444"} }}>
        <Typography>M</Typography>
    </Grid>

    <Grid item  sx={{cursor:"pointer",border:"1px solid black",textAlign:"center" ,borderRadius:"5px",width:"30px",padding:"4px",height:"30px","&:hover":{backgroundColor:"#DB4444"} }}>
        <Typography>L</Typography>
    </Grid>
    
  </Grid>
  </>
  )
}

export default Size
