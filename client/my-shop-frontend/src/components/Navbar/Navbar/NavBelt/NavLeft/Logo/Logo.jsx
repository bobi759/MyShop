import { Box } from "@mui/material";
import logo from "./image.png";

const logoStyles = {
  height: "60px",
  width: "120px",
  objectFit: "contain",
  cursor: "pointer",
  px: "8px",
  m: "3px"
};

export const Logo = () => {
  return <Box component="img" src={logo} alt="Amazon Logo" sx={logoStyles} />;
};
