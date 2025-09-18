import { Box } from "@mui/material";
import { GlobalLocation } from "./GlobalLocation/GlobalLocation";
import { Logo } from "./Logo/Logo";

export const NavLeft = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
      }}
    >
      <Logo />
      <GlobalLocation />
    </Box>
  );
};
