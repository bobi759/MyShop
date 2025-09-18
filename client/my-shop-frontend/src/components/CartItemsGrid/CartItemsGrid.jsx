import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Typography,
  Paper,
  Button,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

const sampleBooks = [
  { id: 1, name: "Battle Drive", price: 28, img: "https://picsum.photos/60/80?1" },
  { id: 2, name: "Home", price: 28, img: "https://picsum.photos/60/80?2" },
  { id: 3, name: "Such A Fun Age", price: 28, img: "https://picsum.photos/60/80?3" },
  { id: 4, name: "Real Life", price: 28, img: "https://picsum.photos/60/80?4" },
  { id: 5, name: "Cat Adventure", price: 28, img: "https://picsum.photos/60/80?5" },
  { id: 6, name: "Take Out Tango", price: 28, img: "https://picsum.photos/60/80?6" },
];

export const CartItemGrid = () => {
  return (
    <Box display="flex" justifyContent="center" mt={4}>
      <TableContainer
        component={Paper}
        sx={{ maxWidth: 1100, width: "100%" }} // limit width but responsive
      >
        <Table>
          <TableHead sx={{ backgroundColor: "#1c1475" }}>
            <TableRow>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Product</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Product name</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Unit Price</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Quantity</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Total</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Close</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sampleBooks.map((book) => (
              <TableRow key={book.id}>
                {/* Image */}
                <TableCell>
                  <Box
                    component="img"
                    src={book.img}
                    alt={book.name}
                    sx={{ width: 50, height: 70, borderRadius: 1 }}
                  />
                </TableCell>

                {/* Name */}
                <TableCell>
                  <Typography fontWeight="500">{book.name}</Typography>
                </TableCell>

                {/* Price */}
                <TableCell>
                  <Typography color="primary">${book.price.toFixed(2)}</Typography>
                </TableCell>

                {/* Quantity */}
                <TableCell>
                  <Box display="flex" alignItems="center" gap={1}>
                    <Button variant="outlined" size="small">
                      <RemoveIcon />
                    </Button>
                    <Typography>0</Typography>
                    <Button variant="outlined" size="small">
                      <AddIcon />
                    </Button>
                  </Box>
                </TableCell>

                {/* Total */}
                <TableCell>
                  <Typography color="primary">${book.price.toFixed(2)}</Typography>
                </TableCell>

                {/* Remove */}
                <TableCell>
                  <IconButton
                    sx={{
                      bgcolor: "#ff0080",
                      color: "white",
                      "&:hover": { bgcolor: "#d6006b" },
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
