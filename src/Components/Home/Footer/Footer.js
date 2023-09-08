import * as React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import {
  Button,
  createTheme,
  CssBaseline,
  Grid,
  styled,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import badge1 from "../../../Assets/images/google-play-badge.png";
import badge2 from "../../../Assets/images/app-store-badge.png";

function Footer() {
  const theme = createTheme({
    palette: {
      warning: {
        main: "#efefef",
      },
      secondary: {
        main: "#edf2ff",
      },
    },
  });
  return (
    <Grid
      container
      sx={{
        bgcolor: "#111",
        padding: "100px",
        height: "auto",

        display: "flex",
        justifyContent: "center",
      }}
      spacing={1.5}
    >
      <Grid xs={12} sm={12} md={6} lg={2} xl={2} sx={{ pb: { xs: 6, lg: 0 } }}>
        <Grid xs={12}>
          {" "}
          <Typography variant="h4" sx={{ color: "#fff", pb: 4 }}>
            Exclusive
          </Typography>
        </Grid>

        <Grid container>
          <Grid xs={12}>
            <Button
              sx={{
                color: "#fff",
                pb: 2,
                width: "100%",
                justifyContent: "start",
              }}
            >
              subscribe
            </Button>
          </Grid>
          <Grid xs={12}>
            <Button
              sx={{
                color: "#fff",
                pb: 2,
                width: "90%",
                justifyContent: "start",
                whiteSpace: { xs: "wrap", lg: "nowrap", xl: "wrap" },
              }}
            >
              Get 10% off your first
            </Button>
          </Grid>
        </Grid>

        <ThemeProvider theme={theme}>
          <TextField
            id="outlined-basic"
            label="Enter your email"
            color="warning"
            sx={{
              input: { color: "#efefef" },
              label: { color: "#efefef" },
              "& label.Mui-focused": {
                color: "white",
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "white",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white",
                },
                "&:hover fieldset": {
                  borderColor: "white",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "white",
                },
              },
            }}
          />
        </ThemeProvider>
      </Grid>

      <Grid
        xs={12}
        sm={12}
        md={6}
        lg={3}
        xl={3}
        sx={{ pb: { xs: 6, lg: 0 }, pl: { xs: 0, lg: 5 } }}
      >
        <Grid xs={12}>
          {" "}
          <Typography
            variant="h4"
            component="h2"
            sx={{ color: "#fff", marginLeft: { sx: "5px" }, pb: 4 }}
          >
            Support
          </Typography>
        </Grid>

        <Grid container sx={{}}>
          <Grid xs={12}>
            <Button
              sx={{
                color: "#fff",
                pb: 2,
                width: "100%",

                justifyContent: "start",
              }}
            >
              Iran,Zanjan street 11
            </Button>

            <Grid xs={12}>
              <Button
                sx={{
                  color: "#fff",
                  pb: 3,
                  width: "100%",
                  justifyContent: "start",
                }}
              >
                Adlikara@gmail.com
              </Button>
            </Grid>
            <Grid xs={12}>
              <Button
                sx={{ color: "#fff", width: "100%", justifyContent: "start" }}
              >
                +98-65489-646{" "}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid xs={12} sm={12} md={6} lg={2} xl={2} sx={{ pb: { xs: 6, lg: 0 } }}>
        <Grid xs={12}>
          <Typography variant="h4" component="h2" sx={{ color: "#fff", pb: 4 }}>
            Account
          </Typography>
        </Grid>

        <Grid container>
          <Grid xs={12}>
            <Button
              sx={{ color: "#fff", width: "100%", justifyContent: "start" }}
            >
              My Account
            </Button>
          </Grid>
          <Grid xs={12}>
            <Button
              sx={{ color: "#fff", width: "100%", justifyContent: "start" }}
            >
              Login/ Register{" "}
            </Button>
          </Grid>
          <Grid xs={12}>
            <Button
              sx={{ color: "#fff", width: "100%", justifyContent: "start" }}
            >
              Cart{" "}
            </Button>
          </Grid>
          <Grid xs={12}>
            <Button
              sx={{ color: "#fff", width: "100%", justifyContent: "start" }}
            >
              Wishlist{" "}
            </Button>
          </Grid>
          <Grid xs={12}>
            <Button
              sx={{ color: "#fff", width: "100%", justifyContent: "start" }}
            >
              Shop{" "}
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid xs={12} sm={12} md={6} lg={2} xl={2} sx={{ pb: { xs: 6, lg: 0 } }}>
        <Grid xs={12}>
          <Typography variant="h4" component="h2" sx={{ color: "#fff", pb: 4 }}>
            Quick Link
          </Typography>
        </Grid>

        <Grid container>
          <Grid xs={12}>
            <Button
              sx={{ color: "#fff", width: "100%", justifyContent: "start" }}
            >
              Privacy Policy
            </Button>
          </Grid>
          <Grid xs={12}>
            <Button
              sx={{ color: "#fff", width: "100%", justifyContent: "start" }}
            >
              Terms Of Use
            </Button>
          </Grid>
          <Grid xs={12}>
            <Button
              sx={{ color: "#fff", width: "100%", justifyContent: "start" }}
            >
              FaQ
            </Button>
          </Grid>
          <Grid xs={12}>
            <Button
              sx={{ color: "#fff", width: "100%", justifyContent: "start" }}
            >
              Contact
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        xs={12}
        sm={6}
        md={6}
        lg={2}
        xl={3}
        sx={{ pb: { xs: 7, lg: 0 }, pl: 2 }}
      >
        <Grid xs={12}>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              color: "#fff",
              pb: 4,

              whiteSpace: { xs: "wrap", lg: "nowrap", xl: "wrap" },
            }}
          >
            Download App
          </Typography>
        </Grid>

        <Grid xs={12}>
          <Button
            sx={{ color: "#fff", width: "100%", justifyContent: "start" }}
          >
            Save $3 With App New User Only
          </Button>
        </Grid>

        <Grid container xs={12}>
          <Grid item xs={6}>
            <QrCode2Icon
              sx={{
                fontSize: 100,
                width: "100%",
                height: "100%",
                color: "#fff",
              }}
              color="action"
            />
          </Grid>

          <Grid item xs={6}>
            <Grid item xs={12}>
              <img
                src={badge1}
                style={{ width: "80%", height: "100%" }}
                alt=""
              />
            </Grid>

            <Grid item xs={12}>
              <img
                src={badge2}
                style={{ width: "70%", height: "100%", marginLeft: "10px" }}
                alt=""
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={6} sm={3} md={3} lg={3} xl={3}>
            <InstagramIcon
              fontSize="large"
              sx={{
                color: "#fff",
                "&:hover": {
                  color: "#BB2525",
                },
                cursor: "pointer",
              }}
            />
          </Grid>
          <Grid item xs={6} sm={3} md={3} lg={3} xl={3}>
            <FacebookIcon
              fontSize="large"
              sx={{
                color: "#fff",
                "&:hover": {
                  color: "#1450A3",
                },
                cursor: "pointer",
              }}
            />
          </Grid>

          <Grid item xs={6} sm={3} md={3} lg={3} xl={3}>
            <TwitterIcon
              fontSize="large"
              sx={{
                color: "#fff",
                "&:hover": {
                  color: "skyblue",
                },
                cursor: "pointer",
              }}
            />
          </Grid>

          <Grid item xs={6} sm={3} md={3} lg={3} xl={3}>
            <LinkedInIcon
              fontSize="large"
              sx={{
                color: "#fff",
                "&:hover": {
                  color: "#141E46",
                },
                cursor: "pointer",
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Footer;
