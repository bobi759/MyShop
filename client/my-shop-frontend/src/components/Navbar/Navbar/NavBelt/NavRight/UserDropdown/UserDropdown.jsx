import { Box, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const userDropdownStyles = {
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", // keep the block centered inside NavBelt
    height: "100%",           // match nav height
    px: 2,
    cursor: "pointer",
  },
  topText: {
    lineHeight: 1.2,
    color: "white",
  },
  bottomRow: {
    display: "flex",
    alignItems: "center",
  },
  bottomText: {
    fontWeight: "bold",
    color: "white",
    lineHeight: 1.2,
  },
  icon: {
    fontSize: 18,
    color: "white",
  },
};

export const UserDropdown = () => {
  return (
    <Box sx={userDropdownStyles.root}>
      <Typography variant="caption" sx={userDropdownStyles.topText}>
        Hello, Bogdan
      </Typography>
      <Box sx={userDropdownStyles.bottomRow}>
        <Typography variant="body2" sx={userDropdownStyles.bottomText}>
          Account & Lists
        </Typography>
        <ArrowDropDownIcon sx={userDropdownStyles.icon} />
      </Box>
    </Box>
  );
};
