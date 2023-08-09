import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
export const IconBtn = [
  {
    id: 1,
    icon: <ArrowBackOutlinedIcon />,
    onClick: () => {
      console.log("pervius page");
    },
  },
  {
    id: 2,
    icon: <ArrowForwardOutlinedIcon />,
    onClick: () => {
      console.log("next page");
    },
  },
];
