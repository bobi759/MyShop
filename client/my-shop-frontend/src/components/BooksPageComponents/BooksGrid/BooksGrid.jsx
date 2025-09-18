import { useState } from "react";
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Pagination,
  Rating,
  Button,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useQuery } from "@tanstack/react-query";

const ITEMS_PER_PAGE = 60; // 12 books per page

const fetchBooks = (pageNumber = 0) => {
  return fetch(`http://127.0.0.1:8000/api/book?page=` + pageNumber).then(
    (res) => res.json()
  );
};

export const BooksGrid = () => {
  const [page, setPage] = useState(1);

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const useBooks = (page_number) =>
    useQuery({
      queryKey: ["books",page_number],
      queryFn: () => fetchBooks(page_number),
    });

    const {data,isError} = useBooks(page);
    console.log(data);
  const books = data?.results;
  const startIndex = (page - 1) * ITEMS_PER_PAGE + 1;
  const endIndex = Math.min(page * ITEMS_PER_PAGE, books?.length);
  const displayedBooks = books;

  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", p: 2, mt: 6 }}>
      {/* Books Grid */}
      <Grid container spacing={1}>
        {" "}
        {/* Reduce spacing between grid items */}
        {displayedBooks?.map((book) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            lg={3} // force 3 per row at large screens
            xl={3} // force 3 per row at extra-large screens
            key={book.id}
            sx={{
              margin: 1, // Minimal margin between cards
            }}
          >
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: 2,
                transition: "0.3s",
                "&:hover": { boxShadow: 6 },
                height: "100%", // Ensures the card takes full height
                width: 250,
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Book cover */}
              <Box
                sx={{ position: "relative", height: "400px", width: "250px" }}
              >
                <CardMedia
                  component="img"
                  image={book.image}
                  alt={book.title}
                  sx={{
                    height: "100%", // Ensures the image fills the container
                    width: "100%", // Ensures the image stretches fully in the container
                    objectFit: "cover", // Makes sure images maintain aspect ratio
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                  }}
                />
                <IconButton
                  sx={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    bgcolor: "white",
                  }}
                >
                  <FavoriteBorderIcon />
                </IconButton>
              </Box>

              {/* Content */}
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  variant="subtitle1"
                  fontWeight={700}
                  textAlign="center"
                  gutterBottom
                  sx={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 2, // max 2 lines
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {book.title}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  textAlign="center"
                  sx={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 2, // ⬅ max 2 lines for genre/description
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {book.genre.name}
                </Typography>

                <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
                  <Rating value={book.rating} readOnly />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Pagination + Counter */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 4,
        }}
      >
        {/* Book counter */}
        <Typography variant="body2" color="text.secondary">
          {startIndex}–{endIndex} of {books?.length}
        </Typography>

        {/* Paginator */}
        <Pagination
        //   count={Math.ceil(books?.length / ITEMS_PER_PAGE)}
            count={100}
          page={page}
          onChange={handleChangePage}
          color="primary"
        />
      </Box>
    </Box>
  );
};
