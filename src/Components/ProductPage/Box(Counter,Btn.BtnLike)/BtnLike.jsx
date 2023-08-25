import React, { useRef, useState } from "react";
import { Button } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const BtnLike = () => {
  const [clickBtn, setClickBtn] = useState(null);
  const [likeBtn, setLikeBtn] = useState(null);
  

  const clickHanddler = () => {
    setClickBtn(true);
    if (clickBtn == true) {
      setClickBtn(false);
    } else {
      setClickBtn(true);
    }
    setLikeBtn(true);
  };

  return (
    <Button
      disableRipple
      onClick={clickHanddler}
      variant="outlined"
      sx={{
        "&.MuiButtonBase-root": {
          borderColor: "gray",
          color: "gray",
          borderRadius: "0",
          width:'100px'
          
        },
      }}
    >
      <FavoriteIcon
        sx={{
          color: clickBtn ? "red" : "gray",
          display: clickBtn ? "block" : "none",
        }}
      />
      <FavoriteBorderIcon sx={{ display: clickBtn ? "none" : "block" }} />
    </Button>
  );
};

export default BtnLike;
