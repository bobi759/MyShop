import HoverPopover from "material-ui-popup-state/HoverPopover";
import Button from "@mui/material/Button";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

import {
  usePopupState,
  bindHover,
  bindPopover,
} from "material-ui-popup-state/hooks";

export const SubnavMenuElement = ({ text, dropdownComponent }) => {
  const popupState = usePopupState({
    variant: "popover",
    popupId: "demoPopover",
  });

  return (
    <div>
      <Button
        variant="text"
        {...bindHover(popupState)}
        sx={{
          color: "inherit", // Keeps the text color neutral
          textTransform: "none", // Removes uppercase transformation
          "&:hover": { backgroundColor: "transparent" }, // Removes hover effect background
          "&:focus": { outline: "none", boxShadow: "none" }, // Removes blue border on click
        }}
      >
        {text}{" "}
        {popupState.isOpen ? (
          <ArrowDropUpIcon sx={{ fontSize: 18 }} />
        ) : (
          <ArrowDropDownIcon sx={{ fontSize: 18 }} />
        )}
      </Button>

      <HoverPopover
        {...bindPopover(popupState)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        slotProps={{
          paper: {
            sx: {
              mt: 3.7,
              ml: 12,
            },
          },
        }}
      >
        {dropdownComponent}
      </HoverPopover>
    </div>
  );
};
