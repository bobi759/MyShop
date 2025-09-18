import React from "react";
import { Box, Grid, Typography, Divider } from "@mui/material";
import image from "./image.png";

const authors = [
  "Freida McFadden",
  "Stephen King",
  "Mark Bittman",
  "Meghan Quinn",
  "Holman Handbook Series",
  "Mel Robbins",
  "CSB She Reads Truth Bibles",
  "Ava Reid",
  "Tony Evans Study Bibles",
  "Kristi McLelland",
  "Carl Hiaasen",
  "James Bond",
];

export const AuthorsSection = () => {
  return (
    <>
      <Divider sx={{ width: "95%", mx: "auto",marginTop:"35px" }} />
      <Box sx={{ p: 4 }}>
        {/* Section Title */}
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 3 }}>
          Popular authors & series
        </Typography>

        {/* First Row */}
        <Grid container>
          {authors.slice(0, 6).map((author, index) => (
            <Grid item xs={2} key={index}>
              <Box
                sx={{
                  width: 240,
                  height: 170,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={image}
                  alt={author}
                  style={{
                    width: "140px",
                    height: "100%",
                    margin: "0 45px",
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>

        <Grid container>
          {authors.slice(6, 12).map((author, index) => (
            <Grid item xs={2} key={index}>
              <Box
                sx={{
                  width: 240,
                  height: 170,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={image}
                  alt={author}
                  style={{
                    width: "140px",
                    height: "100%",
                    margin: "0 45px",
                    objectFit: "contain",
                    cursor: "pointer",
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Divider sx={{ width: "95%", mx: "auto",marginBottom:"35px" }} />
    </>
  );
};
