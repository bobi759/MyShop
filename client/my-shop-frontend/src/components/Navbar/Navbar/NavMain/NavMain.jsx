import { Box, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { DrawerComp } from "../DrawerComp/DrawerComp";

const navMainStyles = {
  root: {
    display: "flex",
    alignItems: "center",
    bgcolor: "#232f3e",
    color: "white",
    height: "40px",
    px: 2,
    gap: 2,
  },
  item: {
    display: "flex",
    alignItems: "center",
    fontSize: "14px",
    fontWeight: 500,
    cursor: "pointer",
    "&:hover": { textDecoration: "underline" },
  },
  allMenu: {
    display: "flex",
    alignItems: "center",
    gap: 0.5,
    fontWeight: "bold",
  },
};

export const NavMain = () => {
  return (
    <Box sx={navMainStyles.root}>
      {/* "All" menu with icon */}
      {/* <Box sx={{ ...navMainStyles.item, ...navMainStyles.allMenu }}>
        <MenuIcon fontSize="small" />
        <Typography variant="body2">All</Typography>
        </Box> */}

        <DrawerComp/>
      {/* Other sections */}
      <Box sx={navMainStyles.item}>Today’s Deals</Box>
      <Box sx={navMainStyles.item}>Customer Service</Box>
      <Box sx={navMainStyles.item}>Buy Again</Box>
      <Box sx={navMainStyles.item}>Bogdan’s Amazon.com</Box>
      <Box sx={navMainStyles.item}>Browsing History</Box>
      <Box sx={navMainStyles.item}>Gift Cards</Box>
      <Box sx={navMainStyles.item}>Sell</Box>
    </Box>
  );
};
