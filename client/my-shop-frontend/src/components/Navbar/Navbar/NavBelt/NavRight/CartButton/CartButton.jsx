import { Box, Typography, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const cartButtonStyles = {
  root: {
    display: "flex",
    alignItems: "center",
    px: 2,
    cursor: "pointer",
  },
  badge: {
    "& .MuiBadge-badge": {
      fontSize: "0.75rem",
      fontWeight: "bold",
      color: "orange",
      backgroundColor: "transparent",
      top: 2,
      right: -4,
    },
  },
  icon: {
    fontSize: 32,
    color: "white",
  },
  text: {
    fontWeight: "bold",
    color: "white",
    ml: 1,
  },
};

export const CartButton = ({ count = 3 }) => {
  return (
    <Box sx={cartButtonStyles.root}>
      <Badge badgeContent={count} color="warning" sx={cartButtonStyles.badge}>
        <ShoppingCartIcon sx={cartButtonStyles.icon} />
      </Badge>

      <Typography variant="body1" sx={cartButtonStyles.text}>
        Cart
      </Typography>
    </Box>
  );
};
