import { Box, Grid, Typography, Divider, Link } from "@mui/material";


export const LeftSidebar = () => {
  return (
    <Box
        sx={{
          width: "220px",
          bgcolor: "#f0f2f2", // full grey background
          borderRight: "1px solid #ddd",
          p: 2, // <-- PADDING goes here
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        {/* Recently Visited */}
        <Box>
          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
            Recently Visited
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {[
              "Amazon Book Clubs",
              "Author Follow",
              "Comics & Manga",
              "Romance",
            ].map((item) => (
              <Box
                key={item}
                sx={{
                  border: "0.8px solid #ddd",
                  borderRadius: "8px",
                  textAlign: "center",
                  px: "15px", // left/right padding
                  py: "6px", // top/bottom padding
                  fontSize: "14px",
                  cursor: "pointer",
                  bgcolor: "#fff",
                  display: "inline-block", // keeps size tight
                  minWidth: "140px", // matches Amazon width
                  lineHeight: "24px", // matches height
                  "&:hover": { bgcolor: "#f5f5f5" },
                }}
              >
                {item}
              </Box>
            ))}
          </Box>
        </Box>

        <Box>
          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
            Featured
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {[
              "Kindle eBooks",
              "Audible",
              "Kindle Deals",
              "Kindle unlimited",
              "Best Books of 2025 so far",
            ].map((item) => (
              <Box
                key={item}
                sx={{
                  border: "0.8px solid #ddd",
                  borderRadius: "8px",
                  textAlign: "center",
                  px: "15px", // left/right padding
                  py: "6px", // top/bottom padding
                  fontSize: "14px",
                  cursor: "pointer",
                  bgcolor: "#fff",
                  display: "inline-block", // keeps size tight
                  minWidth: "140px", // matches Amazon width
                  lineHeight: "24px", // matches height
                  "&:hover": { bgcolor: "#f5f5f5" },
                }}
              >
                {item}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
  );
};
