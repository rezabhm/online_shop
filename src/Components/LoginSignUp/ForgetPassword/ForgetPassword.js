import { Button } from "@mui/material";
import { Grid } from "@material-ui/core";

function ForgetPassword() {
  return (
    <>
      <Grid container sx={{ pt: "30px" }}>
        <Grid item xs={6}>
          <Button
            onChange={() => "Done Log In"}
            variant="contained"
            color="success"
          >
            Log In
          </Button>
        </Grid>

        <Grid item xs={6}>
          <Button onChange={() => "Done ForgetPassWord"} color="error">
            Forget Password ?
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default ForgetPassword;
