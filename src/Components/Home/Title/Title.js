import { Grid, Typography } from "@mui/material";

function Title(props) {
  return (
    <Grid xs={12}>
      <Typography
        sx={{
          backgroundColor: "rgba(211, 211 , 211 , 0.4)",
          width: "100%",
          height: "100%",
          color: "#DB4444",
          marginLeft: "10px",
          borderLeft: "25px solid #DB4444",
          display: "flex",
          alignItems: "center",
          paddingLeft: "10px",
        }}
        className="title-home"
      >
        {props.title}
      </Typography>
    </Grid>
  );
}

export default Title;
