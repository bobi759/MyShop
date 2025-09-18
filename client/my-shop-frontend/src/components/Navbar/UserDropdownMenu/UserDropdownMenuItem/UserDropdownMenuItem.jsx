import { MenuItem, ListItemIcon } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

export const UserDropdownMenuItem = ({IconClass,handleProfileClose,itemText}) => {
  return (
    <MenuItem onClick={handleProfileClose}>
      <ListItemIcon>
        <IconClass fontSize="small" />
      </ListItemIcon>
      {itemText}
    </MenuItem>
  );
};
