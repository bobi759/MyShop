import React from "react";
import { Box, Button } from "@mui/material";
import image from "./image.png"

export const Paditem = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#232f3e", // dark background
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: 3,
        gap: 2, // spacing between elements
      }}
    >
      {/* Amazon Logo */}
      <Box
        component="img"
        src={image}
        alt="Amazon"
        sx={{ height: 25, mr: 4, cursor: "pointer" }}
      />

      {/* Buttons */}
      <Button
        variant="outlined"
        sx={{
          borderColor: "#848688",
          color: "#ddd",
          textTransform: "none",
          fontSize: "14px",
          px: 2,
          "&:hover": {
            borderColor: "#ddd",
          },
        }}
      >
        🌐 English
      </Button>

      <Button
        variant="outlined"
        sx={{
          borderColor: "#848688",
          color: "#ddd",
          textTransform: "none",
          fontSize: "14px",
          px: 2,
          "&:hover": {
            borderColor: "#ddd",
          },
        }}
      >
        💲 USD - U.S. Dollar
      </Button>

      <Button
        variant="outlined"
        sx={{
          borderColor: "#848688",
          color: "#ddd",
          textTransform: "none",
          fontSize: "14px",
          px: 2,
          "&:hover": {
            borderColor: "#ddd",
          },
        }}
      >
        🇺🇸 United States
      </Button>
    </Box>
  );
};


