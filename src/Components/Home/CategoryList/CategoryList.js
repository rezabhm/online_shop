import {
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

import  { useState } from "react";
import CategoryItem from "./CategoryItem";
import { Cdate } from "./CategoryData";
import { Padding } from "@mui/icons-material";

const CategoryList = () => {


  

  const [categoryData , setCategoryData] = useState(Cdate)
  return (
    <div>
      <Box p={1} >
        <List  sx={{maxWidth:"300px" , alignItems:"center" ,Padding:"0 0"}}>

      {categoryData.map(item=> <CategoryItem key={item.id} {...item}/>)}
      </List>
      </Box>
    </div>
  );
};

export default CategoryList;
