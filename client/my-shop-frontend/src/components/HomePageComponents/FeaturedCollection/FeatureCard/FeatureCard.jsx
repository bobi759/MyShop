import { Box, Typography } from "@mui/material";

export const FeatureCard = ({name,image}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        border: "1px solid #ddd",
        borderRadius: "6px",
        p: 1.5,
        cursor: "pointer",
        width: "355px",
        height: "60px",
        "&:hover": {
          borderColor: "#000000ff",
        },
      }}
    >
      <Box
        component="img"
        src={image}
        alt={name}
        sx={{
          width: 40,
          objectFit: "contain",
          borderRadius: "4px",
          mr: 2,
        }}
      />
      <Typography>{name}</Typography>
    </Box>
  );
};
