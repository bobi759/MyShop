import { Box } from "@mui/material";
import { DropdownMenu } from "./DropdownMenu/DropdownMenu";
import { SearchBar } from "./SearchBar/SearchBar";
import { SearchBarIcon } from "./SearchIcon/SearchIcon";

const navFillSearchStyle = {
    style : {
        display: "flex",
        alignItems: "center",
        flexGrow: 1,
        maxWidth: 900,
        height: 40,
        mx: 2,
        border: "2px solid transparent",
        borderRadius: "6px",
        overflow: "hidden",
        transition: "border-color 0.2s, box-shadow 0.2s",

        ":focus-within": {
          borderColor: "#f90",
          boxShadow: "0 0 3px 1px rgba(255,153,0,0.6)",
        },
      }
}

export const NavFillSearch = () => {
  return (
    <Box
      sx={navFillSearchStyle.style}
    >
      <DropdownMenu />
      <SearchBar />
      <SearchBarIcon />
    </Box>
  );
};
