import {
  Box,
  Button,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Paper,
} from "@mui/material";

export const CartSummarySection = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
      <Grid container spacing={4} sx={{ maxWidth: 1000 }} justifyContent="center">
        {/* Calculate Shipping */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{
                borderLeft: "4px solid orange",
                pl: 1,
                mb: 2,
                color: "#1c1475",
              }}
            >
              CALCULATE SHIPPING
            </Typography>

            {/* Dropdown */}
            <Select fullWidth defaultValue="cashback" sx={{ mb: 2 }}>
              <MenuItem value="cashback">Cashback credit cards</MenuItem>
              <MenuItem value="visa">Visa</MenuItem>
              <MenuItem value="mastercard">MasterCard</MenuItem>
            </Select>

            {/* Credit card inputs */}
            <Box display="flex" gap={2} sx={{ mb: 2 }}>
              <TextField fullWidth placeholder="Credit Card Number" />
              <TextField fullWidth placeholder="Card Verification Number" />
            </Box>

            {/* Coupon */}
            <TextField fullWidth placeholder="Coupon Code" sx={{ mb: 2 }} />

            <Button
              variant="contained"
              sx={{
                bgcolor: "orange",
                color: "white",
                "&:hover": { bgcolor: "#e69500" },
              }}
            >
              Apply Coupon
            </Button>
          </Paper>
        </Grid>

        {/* Cart Subtotal */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{
                borderLeft: "4px solid orange",
                pl: 1,
                mb: 2,
                color: "#1c1475",
              }}
            >
              CART SUBTOTAL
            </Typography>

            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Order Subtotal</TableCell>
                  <TableCell align="right">$125.96</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Shipping</TableCell>
                  <TableCell align="right" sx={{ color: "#1c1475" }}>
                    Free Shipping
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Coupon</TableCell>
                  <TableCell align="right">$28.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold" }}>Total</TableCell>
                  <TableCell align="right" sx={{ fontWeight: "bold" }}>
                    $506.00
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <Button
              fullWidth
              variant="contained"
              sx={{
                mt: 2,
                bgcolor: "orange",
                color: "white",
                "&:hover": { bgcolor: "#e69500" },
              }}
            >
              Proceed To Checkout
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};
