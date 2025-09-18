import { Box } from "@mui/material";
import { CartButton } from "./CartButton/CartButton";
import { LanguageDropdown } from "./LanguageDropdown/LanguageDropdown";
import { ReturnsAndOrders } from "./ReturnsAndOrders/ReturnsAndOrders";
import { UserDropdown } from "./UserDropdown/UserDropdown";

export const NavRight = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      {/* LanguageDropdown disappears first (<1300px) */}
      <Box sx={{ display: { xs: "none", lg: "flex" } }}>
        <LanguageDropdown />
      </Box>

      {/* UserDropdown disappears at <1200px */}
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <UserDropdown />
      </Box>

      {/* ReturnsAndOrders disappears at <1000px */}
      <Box sx={{ display: { xs: "none", sm: "flex" } }}>
        <ReturnsAndOrders />
      </Box>

      {/* CartButton always visible */}
      <CartButton />
    </Box>
  );
};
