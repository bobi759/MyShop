import { Box, Typography } from "@mui/material";
import image from "./messi.png";

export const Messi = () => {
  return (
    <Box
      sx={{
        width: "200px", // control card width
        display: "flex",
        flexDirection: "column", // stack vertically
        alignItems: "left",
      }}
    >
      {/* Image */}
      <Box
        component="img"
        src={image}
        alt="Book cover"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "contain", // ✅ kept exactly as you had
          borderRadius: "8px",
        }}
      />

      {/* Info Section */}
      <Box
        sx={{
          mt: 1,
        }}
      >
        <Typography variant="body2">4.6 ⭐⭐⭐⭐⭐ (360)</Typography>
        <Typography variant="body1">Paperback</Typography>
        <Typography
          sx={{
            fontSize: "18px",
          }}
        >
          $15.74
        </Typography>
      </Box>
    </Box>
  );
};
