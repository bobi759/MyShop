import React from "react";
import { Box, Grid, Typography, Link } from "@mui/material";
import { FeedbackBox } from "./FeedbackBox";

const categoriesLeft = [
  "Romance",
  "Mystery, Thriller & Suspense",
  "Literature & Fiction",
  "Biographies & Memoirs",
  "Business & Money",
];

const categoriesRight = [
  "Children's Books",
  "Science Fiction & Fantasy",
  "History",
  "Teen & Young Adult",
  "Self-help",
];

export const ExploreTopGenres = () => {
  return (
    <>
      <Box sx={{ mx: "10px", px: "16px", paddingBottom: "16px" }}>
        {/* Categories in Two Columns */}
        <Grid container>
          <Grid item>
            {categoriesLeft.map((category, index) => (
              <Box
                key={index}
                sx={{
                  width: "510px",
                  paddingBottom: 3,
                  textAlign: "left",
                  fontSize: "14px",
                }}
              >
                <Link
                  href="#"
                  underline="always"
                  sx={{
                    color: "primary.main",
                    "&:hover": { color: "#0c336f" },
                  }}
                >
                  {category}
                </Link>
              </Box>
            ))}
          </Grid>

          <Grid item sx={{ ml: 4 }}>
            {categoriesRight.map((category, index) => (
              <Box
                key={index}
                sx={{
                  width: "510px",
                  py: 1, // more vertical spacing
                  textAlign: "left",
                  fontSize: "14px",
                }}
              >
                <Link
                  href="#"
                  underline="always"
                  sx={{
                    color: "primary.main",
                    "&:hover": { color: "#0c336f" },
                  }}
                >
                  {category}
                </Link>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Box>
      <FeedbackBox/>
    </>
  );
};
