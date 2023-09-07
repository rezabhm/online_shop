// import React from "react";
// import { Grid } from "@material-ui/core";
// import Logo from "./logo";
// import NavButton from "./button";
// import SearchBox from "./searchBox";
// import FavoriteIcon from "./favoriteIcon";
// import ShoppingIcon from "./shoppingIcon";
// import { Box, IconButton, Menu } from "@mui/material";

// function NavBar() {
//   const styled = {
//     display: "flex",
//   };
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <Grid
//       container
//       spacing={2}
//       style={{
//         borderBottom: "1px solid rgba(0,0,0,0.5)",
//         marginTop: "1px",
//         padding: "5px 0",
//         mx: 4,
//       }}
//     >
//       {" "}
//       <Grid container item style={styled}>
//         <Grid
//           item
//           xs={12}
//           md={2}
//           lg={2}
//           sx={{  display: { xs: "none", md: "flex" } }}
//         >
//           <Logo title={"Adli Kara"} />
//         </Grid>

//         <Grid container xs={12} sx={12} md={4} lg={4}>
//           <Grid item xs={3} style={styled}>
//             <NavButton status={true} pushLink={"/#Home"} text={"Home"} />
//           </Grid>
//           <Grid item xs={3} style={styled}>
//             <NavButton status={false} pushLink={"/#Contact"} text={"Contact"} />
//           </Grid>
//           <Grid item xs={3} style={styled}>
//             <NavButton status={false} pushLink={"/#About"} text={"About"} />
//           </Grid>
//           <Grid item xs={3} style={styled}>
//             <NavButton status={false} pushLink={"/#SignUp"} text={"Sign Up"} />
//           </Grid>
//           <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             ></IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: "bottom",
//                 horizontal: "left",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "left",
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: "block", md: "none" },
//               }}
//             >
//               <Grid item xs={3} style={styled}>
//                 <NavButton status={true} pushLink={"/#Home"} text={"Home"} />
//               </Grid>
//               <Grid item xs={3} style={styled}>
//                 <NavButton
//                   status={false}
//                   pushLink={"/#Contact"}
//                   text={"Contact"}
//                 />
//               </Grid>
//               <Grid item xs={3} style={styled}>
//                 <NavButton status={false} pushLink={"/#About"} text={"About"} />
//               </Grid>
//               <Grid item xs={3} style={styled}>
//                 <NavButton
//                   status={false}
//                   pushLink={"/#SignUp"}
//                   text={"Sign Up"}
//                 />
//               </Grid>
//             </Menu>
//           </Box>
//         </Grid>

//         <Grid item xs={12} sx={12} md={4} lg={4} style={styled}>
//           <SearchBox />
//         </Grid>

//         <Grid container xs={12} sx={12} md={2} lg={2}>
//           <Grid item style={styled}>
//             <FavoriteIcon content={2} />
//           </Grid>

//           <Grid item style={styled}>
//             <ShoppingIcon content={6} />
//           </Grid>
//         </Grid>
//       </Grid>
//     </Grid>
//   );
// }

// export default NavBar;
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import SensorOccupiedOutlinedIcon from "@mui/icons-material/SensorOccupiedOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material";
import { InputBase, alpha } from "@mui/material";
import FavoriteIcon from "./favoriteIcon";
import ShoppingIcon from "./shoppingIcon";

const pages = ["Home", "Contact", "About", "SignUp"];
const settings = [];
const Search1 = styled("div")(({ theme }) => ({
  position: "relative",

  backgroundColor: alpha(theme.palette.common.black, 0.05),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.07),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" sx={{ bgcolor: "#FFF" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 5,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#333",
              textDecoration: "none",
            }}
          >
            AdliKara
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="#333"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "#333", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Search1
            sx={{
              mr: 5.4,

              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#333",
              textDecoration: "none",
            }}
          >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search1>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <SensorOccupiedOutlinedIcon
                  sx={{ color: "#222", fontSize: "30px" }}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ ml: 3, display: { xs: "none", md: "flex" } }}>
            <IconButton sx={{ p: 0 }}>
              <FavoriteIcon sx={{ color: "#222", fontSize: "30px" }} />
            </IconButton>
            <IconButton sx={{ p: 0 }}>
              <ShoppingIcon sx={{ color: "#222", fontSize: "30px" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
