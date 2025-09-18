import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const dropdownStyles = {
  root: {
    height: "100%",
    bgcolor: "#e6e6e6",
    borderRight: "1px solid #ccc",
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    minWidth: 100,
  },
  select: {
    height: "100%",
    "& fieldset": { border: "none" }, // remove default outline
  },
  menuProps: {
    PaperProps: {
      sx: {
        width: 200,
        mt: 0,
        ml: 0,
      },
    },
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left",
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "left",
    },
  },
};

export const DropdownMenu = () => {
  const [value, setValue] = useState("");

  return (
    <FormControl sx={dropdownStyles.root}>
      <Select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        displayEmpty
        MenuProps={dropdownStyles.menuProps}
        sx={dropdownStyles.select}
      >
        <MenuItem value="">Book</MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
};
