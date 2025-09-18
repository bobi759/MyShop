import { Box, Typography } from "@mui/material";

const returnsAndOrdersStyles = {
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", // vertically centers the 2 lines
    height: "100%",           // take full height of nav belt
    px: 1,
    cursor: "pointer",
  },
  topText: {
    lineHeight: 1.2,
    color: "white",
  },
  bottomText: {
    fontWeight: "bold",
    color: "white",
    lineHeight: 1.2,
  },
};

export const ReturnsAndOrders = () => {
  return (
    <Box sx={returnsAndOrdersStyles.root}>
      <Typography variant="caption" sx={returnsAndOrdersStyles.topText}>
        Returns
      </Typography>
      <Typography variant="body2" sx={returnsAndOrdersStyles.bottomText}>
        & Orders
      </Typography>
    </Box>
  );
};
