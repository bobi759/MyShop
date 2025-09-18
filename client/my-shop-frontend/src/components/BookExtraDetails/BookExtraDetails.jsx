import React, { useState } from "react";
import {
  Box,
  Tabs,
  Tab,
  Typography,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Paper,
  Divider,
  TextField,
  Button,
} from "@mui/material";

const TabPanel = ({ children, value, index }) => {
  return (
    <div hidden={value !== index}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

export const BookExtraDetails = () => {
  const [tab, setTab] = useState(0);
  const [reviews, setReviews] = useState([
    {
      stars: "⭐️⭐️⭐️⭐️⭐️",
      author: "John D.",
      text: "An amazing book! It completely changed the way I look at success and personal growth.",
    },
    {
      stars: "⭐️⭐️⭐️⭐️",
      author: "Maria P.",
      text: "Very inspiring, although some chapters felt a bit repetitive.",
    },
    {
      stars: "⭐️⭐️⭐️⭐️⭐️",
      author: "Alex R.",
      text: "A timeless classic. Definitely worth reading multiple times!",
    },
  ]);

  const [newReview, setNewReview] = useState({
    author: "",
    email: "",
    text: "",
  });

  const handleChange = (_, newValue) => {
    setTab(newValue);
  };

  const handleInputChange = (e) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newReview.author || !newReview.text) return;

    setReviews([
      ...reviews,
      {
        stars: "⭐️⭐️⭐️⭐️⭐️", // default stars (you can later add rating input)
        author: newReview.author,
        text: newReview.text,
      },
    ]);
    setNewReview({ author: "", email: "", text: "" });
  };

  return (
    <Box sx={{ mt: 6, maxWidth: 700, mx: "auto" }}>
      {/* Tabs */}
      <Tabs
        value={tab}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
        sx={{ mb: 2 }}
      >
        <Tab label="Details Product" />
        <Tab label="Customer Reviews" />
      </Tabs>

      {/* Tab Content */}
      <TabPanel value={tab} index={0}>
        <Paper variant="outlined">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell sx={{ fontWeight: 600 }}>Book Title</TableCell>
                <TableCell>Think and Grow Rich</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ fontWeight: 600 }}>Author</TableCell>
                <TableCell>Napoleon Rich</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ fontWeight: 600 }}>ISBN</TableCell>
                <TableCell>121341381648 (ISBN13: 121341381648)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ fontWeight: 600 }}>Edition Language</TableCell>
                <TableCell>English</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ fontWeight: 600 }}>Book Format</TableCell>
                <TableCell>Paperback, 450 Pages</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ fontWeight: 600 }}>Date Published</TableCell>
                <TableCell>August 10th 2019</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ fontWeight: 600 }}>Publisher</TableCell>
                <TableCell>Wepress Inc.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ fontWeight: 600 }}>Pages</TableCell>
                <TableCell>520</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ fontWeight: 600 }}>Lesson</TableCell>
                <TableCell>7</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ fontWeight: 600 }}>Topic</TableCell>
                <TableCell>360</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ fontWeight: 600 }}>Tags</TableCell>
                <TableCell>
                  <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                    <Chip label="Drama" color="warning" />
                    <Chip label="Adventure" color="warning" />
                    <Chip label="Survival" color="warning" />
                    <Chip label="Biography" color="warning" />
                    <Chip label="Trending2022" color="warning" />
                    <Chip label="Bestseller" color="warning" />
                  </Box>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      </TabPanel>

      <TabPanel value={tab} index={1}>
        <Paper variant="outlined" sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Customer Reviews
          </Typography>
          <Divider sx={{ mb: 2 }} />

          {/* Existing Reviews */}
          {reviews.map((review, i) => (
            <Box key={i} sx={{ mb: 2 }}>
              <Typography variant="subtitle2">
                {review.stars} {review.author}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {review.text}
              </Typography>
              <Divider sx={{ my: 2 }} />
            </Box>
          ))}

          {/* Add Review Form */}
          <Typography variant="h6" gutterBottom>
            Leave a Reply
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
              <TextField
                label="Author"
                name="author"
                value={newReview.author}
                onChange={handleInputChange}
                fullWidth
              />
              <TextField
                label="Email"
                name="email"
                value={newReview.email}
                onChange={handleInputChange}
                fullWidth
              />
            </Box>
            <TextField
              label="Type Comment Here"
              name="text"
              value={newReview.text}
              onChange={handleInputChange}
              fullWidth
              multiline
              rows={4}
              sx={{ mb: 2 }}
            />
            <Button type="submit" variant="contained" color="warning">
              Submit Now →
            </Button>
          </form>
        </Paper>
      </TabPanel>
    </Box>
  );
};
