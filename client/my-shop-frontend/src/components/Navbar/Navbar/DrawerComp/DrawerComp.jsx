import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { DrawerList } from "./DrawerList";

const navMainStyles = {
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

export const DrawerComp = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <Box>
      <Box
        sx={{ ...navMainStyles.item, ...navMainStyles.allMenu }}
        onClick={toggleDrawer(true)}
      >
        <MenuIcon fontSize="small" />
        <Typography variant="body2">All</Typography>
      </Box>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        <DrawerList toggleDrawer= {toggleDrawer}/>
      </Drawer>

      {/* <div>text</div> */}
    </Box>
  );
};
