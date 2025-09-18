import { Box } from "@mui/material";
import { NavLeft } from "./NavLeft/NavLeft";
import { NavFillSearch } from "./NavFillSearch/NavFillSearch";
import { NavRight } from "./NavRight/NavRight";

const navBeltStyles = {
  root: {
    display: "flex",
    alignItems: "center",
    bgcolor: "#131921",
    color: "white",
    height: "60px",
    px: 2,
  },
  left: {
    display: "flex",
    alignItems: "center",
    height: "100%",
  },
  middle: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    px: 2,
  },
  right: {
    display: "flex",
    alignItems: "center",
    gap: 3,
    height: "100%",
  },
};

export const NavBelt = () => {
  return (
    <Box sx={navBeltStyles.root}>
      <Box sx={navBeltStyles.left}>
        <NavLeft />
      </Box>

      <Box sx={navBeltStyles.middle}>
        <NavFillSearch />
      </Box>

      <Box sx={navBeltStyles.right}>
        <NavRight />
      </Box>
    </Box>
  );
};
