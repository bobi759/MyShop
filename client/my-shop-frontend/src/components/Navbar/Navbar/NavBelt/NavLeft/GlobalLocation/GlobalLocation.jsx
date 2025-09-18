import { Box, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const globalLocationStyles = {
  root: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    width: "90px",
    height: "60px",
    ml: "5px",
  },
  icon: {
    fontSize: 28,
    mr: 0.5,
  },
  textWrapper: {
    display: "flex",
    flexDirection: "column",
    lineHeight: 1,
  },
  topText: {
    color: "lightgray",
  },
  bottomText: {
    fontWeight: "bold",
  },
};

export const GlobalLocation = () => {
  return (
    <Box sx={globalLocationStyles.root}>
      <LocationOnIcon sx={globalLocationStyles.icon} />
      <Box sx={globalLocationStyles.textWrapper}>
        <Typography variant="caption" sx={globalLocationStyles.topText}>
          Deliver to
        </Typography>
        <Typography variant="body2" sx={globalLocationStyles.bottomText}>
          Bulgaria
        </Typography>
      </Box>
    </Box>
  );
};
