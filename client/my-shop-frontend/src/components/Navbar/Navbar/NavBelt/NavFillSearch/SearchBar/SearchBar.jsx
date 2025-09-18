import TextField from "@mui/material/TextField";

const searchBarStyles = {
    style: {
        height: "100%",
        bgcolor: "white",
        "& .MuiOutlinedInput-root": {
          height: "40px",
          padding: 0,
          "& input": {
            padding: "0 8px",
          },
          "& fieldset": { border: "none" },
        },
      }
}

export const SearchBar = () => {
  return (
    <TextField
      placeholder="Search Amazon"
      variant="outlined"
      fullWidth
      sx={searchBarStyles.style}
    />
  );
};
