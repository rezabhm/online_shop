import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useState } from "react";
import { ListItemIcon, Menu, MenuItem, Typography } from "@mui/material";

const CategoryItem = ({ title, type }) => {
  const [anchorEl, setAnchorEl] = useState();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  if (type === "text") {
    return (
      <div>
        <ListItem>
          <ListItemButton>
            <ListItemText primary={title} />
          </ListItemButton>
        </ListItem>
      </div>
    );
  } else if (type === "button") {
    return (
      <div>
        <ListItem>
          <ListItemButton>
            <ListItemText primary={title} />
            <ListItemIcon onClick={handleClick}>
              <KeyboardArrowRightIcon />
            </ListItemIcon>
          </ListItemButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </ListItem>


      </div>
    );
  }
};

export default CategoryItem;
