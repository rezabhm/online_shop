import { Typography } from "@mui/material";
import React from "react";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
const InformationUs = () => {
  return (
    <section style={{ width: "100%" }}>
      <div style={{ marginBottom: "40px" }}>
        <Typography
          variant="h6"
          sx={{ display: "flex", alignItems: "center", fontWeight: "600" }}
        >
          <span
            style={{
              backgroundColor: "#DB4444",
              borderRadius: "50%",
              margin: "0 15px 5px 0",
              color: "#fff",
              display: "inline-block",
              width: "45px",
              height: "35px",
              textAlign: "center",
              lineHeight: "45px",
            }}
          >
            <CallOutlinedIcon />
          </span>
          <span>Call To Us</span>
        </Typography>
        <Typography variant="body1" sx={{ my: 2 }}>
          We are available 24/7,7 days a week.
        </Typography>
        <Typography variant="body1">Phone:+8801611112222</Typography>
      </div>
      
      <hr />

      <div style={{ marginTop: "40px" }}>
        <Typography
          variant="h6"
          sx={{ display: "flex", alignItems: "center", fontWeight: "600" }}
        >
          {" "}
          <span
            style={{
              backgroundColor: "#DB4444",
              borderRadius: "50%",
              margin: "0 15px 5px 0",
              color: "#fff",
              display: "inline-block",
              width: "45px",
              height: "35px",
              textAlign: "center",
              lineHeight: "45px",
            }}
          >
            <EmailOutlinedIcon />
          </span>
          <span>Write To Us</span>
        </Typography>
        <Typography variant="body1" sx={{ my: 1 }}>
          Fill out our from and we will contact you within 24 hours.
        </Typography>
        <Typography variant="body1" sx={{ my: 1 }}>
          Emails:customer@exclusive.com
        </Typography>
        <Typography variant="body1">Emails:support@exclusive.com</Typography>
      </div>
    </section>
  );
};

export default InformationUs;
