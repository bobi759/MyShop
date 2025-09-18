import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { UserDropdownMenuItem } from "./UserDropdownMenuItem/UserDropdownMenuItem";


const menuItems = [
    {
        iconClass: ShoppingCartOutlinedIcon,
        itemText: "Profile",
    },
    {
        iconClass: FavoriteBorderIcon,
        itemText: "My Order",
    },
    {
        iconClass: PersonOutlineIcon,
        itemText: "Whishlist",
    }
]
export const UserDropdownMenu = ({handleProfileClose}) => {
    return (
        menuItems.map((x,idx) => <UserDropdownMenuItem key = {idx} IconClass = {x.iconClass} itemText = {x.itemText} handleProfileClose={handleProfileClose}/>)
    )
}