import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const searchBarStyles = {
    style: {
        bgcolor: "#febd69",
        height: "100%",
        borderRadius: 0,
        width: 50,
        "&:hover": {
          bgcolor: "#f3a847",
        },
      }
}

export const SearchBarIcon = () => {
  return (
    <IconButton
      type="submit"
      sx={searchBarStyles.style}
    >
      <SearchIcon />
    </IconButton>
  );
};
