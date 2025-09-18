import { Box, Typography, Button } from "@mui/material";

const exploreBooksStyles = {
  root: {
    display: "flex",
    alignItems: "center",
    bgcolor: "#fff",
    color: "#111",
    height: "50px",
    px: 2,
    gap: 2,
    boxShadow: "0px 1px 3px rgba(0,0,0,0.12), 0px 1px 2px rgba(0,0,0,0.24)", // light elevation
  },
  label: {
    fontWeight: "bold",
    fontSize: "14px",
  },
  button: {
    textTransform: "none", // keep normal text case
    borderRadius: "20px",  // pill shape
    fontSize: "14px",
    px: 2,
    color: "#111",
    borderColor: "#ccc",
    "&:hover": {
      borderColor: "#aaa",
      backgroundColor: "#f7f7f7",
    },
  },
};

export const ExploreBooks = () => {
  return (
    <Box sx={exploreBooksStyles.root}>
      <Typography sx={exploreBooksStyles.label}>Explore books</Typography>

      <Button variant="outlined" sx={exploreBooksStyles.button}>
        Kindle eBooks
      </Button>
      <Button variant="outlined" sx={exploreBooksStyles.button}>
        Print Books
      </Button>
      <Button variant="outlined" sx={exploreBooksStyles.button}>
        Audible Audiobooks
      </Button>
    </Box>
  );
};


