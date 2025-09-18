import { Box, Typography } from "@mui/material";
import image from "./image.png";

const languageDropdownStyles = {
  root: {
    display: "flex",
    alignItems: "center",
    gap: 0.5,
    cursor: "pointer", 
  },
  flag: {
    width: 35,
    height: 20,
    objectFit: "cover",
  },
  text: {
    fontWeight: 500,
  },
};

export const LanguageDropdown = () => {
  return (
    <Box sx={languageDropdownStyles.root}>
      <Box component="img" src={image} alt="flag" sx={languageDropdownStyles.flag} />
      <Typography variant="body2" sx={languageDropdownStyles.text}>
        EN
      </Typography>
    </Box>
  );
};
