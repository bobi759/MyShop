import React from "react";
import { Box, Link } from "@mui/material";

export const BackToTop = () => {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#2f3e52",
        color: "#fff",
        textAlign: "center",
        py: 2,
        cursor: "pointer",
        ":hover" : {
            backgroundColor: "#485769"
        }
      }}
      onClick={handleBackToTop}
    >
      <Link
        component="button"
        underline="none"
        sx={{
          color: "#fff",
          fontSize: "14px",
        }}
      >
        Back to top
      </Link>
    </Box>
  );
};
