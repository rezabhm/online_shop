import { Grid, Typography } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
function FeaturesIcons() {
  return (
    <Grid
      container
      sx={{
        maxWidth: "1200px",
        textAlign: "center",
        mb: 15,
      }}
    >
      <Grid item xs={12} sm={12} md={4} sx={{ p: 4 }}>
        <LocalShippingIcon
          sx={{
            bgcolor: "#000",
            color: "#fff",
            borderRadius: "50%",
            width: "100px",
            fontSize: "90px",
            border: "5px solid #2F2E30",
            boxShadow: "0 0 2px 10px #C1C1C1",
          }}
        />

        <Typography variant="h5" sx={{ py: 2 }}>
          FREE AND FAST DELIVERY
        </Typography>

        <Typography>Free delivery for all orders over $140</Typography>
      </Grid>

      <Grid item xs={12} sm={12} md={4} sx={{ p: 4 }}>
        <HeadsetMicIcon
          sx={{
            bgcolor: "#000",
            color: "#fff",
            borderRadius: "50%",
            width: "100px",
            fontSize: "90px",
            border: "5px solid #2F2E30",
            boxShadow: "0 0 2px 10px #C1C1C1",
          }}
        />

        <Typography variant="h5" sx={{ py: 2 }}>
          FREE AND FAST DELIVERY
        </Typography>

        <Typography>Free delivery for all orders over $140</Typography>
      </Grid>

      <Grid item xs={12} sm={12} md={4} sx={{ p: 4 }}>
        <VerifiedUserIcon
          sx={{
            bgcolor: "#000",
            color: "#fff",
            borderRadius: "50%",
            width: "100px",
            fontSize: "90px",
            border: "5px solid #2F2E30",
            boxShadow: "0 0 2px 10px #C1C1C1",
          }}
        />

        <Typography variant="h5" sx={{ py: 2 }}>
          FREE AND FAST DELIVERY
        </Typography>

        <Typography>Free delivery for all orders over $140</Typography>
      </Grid>
    </Grid>
  );
}
export default FeaturesIcons;
