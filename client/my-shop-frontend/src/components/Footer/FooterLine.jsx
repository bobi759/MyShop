import React from "react";
import { Box, Divider } from "@mui/material";

export const FooterLine = () => {
  return (
    <Box
      sx={{
        bgcolor: "#232f3e", // Amazon footer background color
        py: "40px",         // 40px vertical padding (top + bottom space)
        border: "none"
      }}
    >
      <Divider
        sx={{
          borderColor: "#3a4553", // thin line color
          borderBottomWidth: "1px",
        }}
      />
    </Box>
  );
};
