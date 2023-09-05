import React from "react";
import { Button, FormControl, Grid, Stack } from "@mui/material";
import { Typography } from "@material-ui/core";
import IconButton from "@mui/material/IconButton";
import FilledInput from "@mui/material/FilledInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const EditProfile = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [showPassword2, setShowPassword2] = React.useState(false);

  const handleClickShowPassword2 = () => setShowPassword2((show) => !show);

  const handleMouseDownPassword2 = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Typography
        style={{
          paddingLeft: "8px",
          color: "red",
        }}
      >
        Edit youre profile
      </Typography>
      <div
        style={{
          marginTop: "10px",
        }}
      >
        <Grid container>
          <Grid xs={12} sm={12} md={6}>
            <FormControl sx={{ width: "100%" }} variant="standard">
              <InputLabel
                sx={{ ml: 1, fontWeight: "bold" }}
                shrink
                htmlFor="bootstrap-input"
              >
                First Name
              </InputLabel>
              <TextField
                id="filled-start-adornment"
                sx={{ m: 1, mt: 2 }}
                placeholder="John"
                variant="filled"
              />
            </FormControl>
          </Grid>
          <Grid xs={12} sm={12} md={6}>
            <FormControl sx={{ width: "100%" }} variant="standard">
              <InputLabel sx={{ ml: 1, fontWeight: "bold" }} shrink>
                Last Name
              </InputLabel>
              <TextField
                id="filled-start-adornment"
                sx={{ m: 1, mt: 2 }}
                placeholder="ronni"
                variant="filled"
              />
            </FormControl>
          </Grid>
        </Grid>

        <Grid container>
          {" "}
          <Grid xs={12} sm={12} md={6}>
            <FormControl sx={{ width: "100%" }} variant="standard">
              <InputLabel sx={{ ml: 1, fontWeight: "bold" }} shrink>
                Email
              </InputLabel>
              <TextField
                id="filled-start-adornment"
                sx={{ m: 1, mt: 2 }}
                placeholder=" 5555@gmail.com"
                variant="filled"
              />
            </FormControl>
          </Grid>
          <Grid xs={12} sm={12} md={6}>
            <FormControl sx={{ width: "100%" }} variant="standard">
              <InputLabel sx={{ ml: 1, fontWeight: "bold" }} shrink>
                Address
              </InputLabel>
              <TextField
                id="filled-start-adornment"
                sx={{ m: 1, mt: 2 }}
                placeholder="UST,LA,Bh,123"
                variant="filled"
              />
            </FormControl>
          </Grid>
        </Grid>
        <InputLabel sx={{ mt: 3, ml: 1, fontWeight: "bold" }} shrink>
          Change Password
        </InputLabel>
        <Grid>
          <FormControl sx={{ m: 1, width: "98%" }} variant="filled">
            <TextField
              id="filled-start-adornment"
              sx={{}}
              placeholder="Current Password"
              variant="filled"
            />
          </FormControl>

          <FormControl sx={{ m: 1, width: "98%" }} variant="filled">
            <FilledInput
              placeholder="New Password"
              id="filled-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <FormControl sx={{ m: 1, width: "98%" }} variant="filled">
            <FilledInput
              placeholder="Confirm New Password"
              id="filled-adornment-password"
              type={showPassword2 ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword2}
                    onMouseDown={handleMouseDownPassword2}
                    edge="end"
                  >
                    {showPassword2 ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
        <Stack
          direction="row"
          sx={{ justifyContent: "end", mb: 8, mt: 1, mr: 1 }}
        >
          <Button variant="text" sx={{ color: "#888" }}>
            Cancel
          </Button>
          <Button sx={{ ml: 1 }} variant="contained" color="error">
            Save Changes
          </Button>
        </Stack>
      </div>
    </>
  );
};

export default EditProfile;
