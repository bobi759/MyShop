import { Box, Grid, Divider } from "@mui/material";

export const RightBestSellersSidebar = () => {
  const itemStyle = {
    width: "260px",
    height: "20px",
    paddingLeft: "10px",
    margin: "0 30px 10px 20px",
    display: "flex",
    alignItems: "center",
    borderRadius: "4px",
    backgroundColor: "#fff",
    cursor: "pointer",
    "&:hover": {
      color: "#1c82e9",
    },
  };

  const titleStyle = {
    fontWeight: 600,
    fontSize: "0.95rem",
    margin: "0 30px 8px 20px",
    display: "flex",
    alignItems: "center",
    cursor: "default",
  };

  return (
    <Grid
      container
      sx={{
        flex: 1,
        p: 3,
        borderLeft: "1px solid #ddd",
        
      }}
      spacing={4}
      wrap="nowrap"
    >
      {/* Column */}
      <Grid item sx={{ minWidth: 280, pr: 2 }}>
        {/* BEST SELLERS */}
        <Box sx={titleStyle}>Best Sellers</Box>
        <Divider sx={{ mb: 1, ml: 2, mr: 3 }} />
        {["Amazon Best Sellers", "New York Times Best Sellers", "Amazon Charts"].map((text) => (
          <Box key={text} sx={itemStyle}>
            {text}
          </Box>
        ))}

        {/* ACCLAIMED */}
        <Box sx={titleStyle} mt={2}>
          Acclaimed
        </Box>
        <Divider sx={{ mb: 1, ml: 2, mr: 3 }} />
        {["Award Winners", "Goodreads Choice Winners ↗"].map((text) => (
          <Box key={text} sx={itemStyle}>
            {text}
          </Box>
        ))}

        {/* FROM OUR EDITORS */}
        <Box sx={titleStyle} mt={2}>
          From Our Editors
        </Box>
        <Divider sx={{ mb: 1, ml: 2, mr: 3 }} />
        {[
          "Editors' Picks of the Month",
          "Amazon Book Review",
          "Best Books of 2025 So Far",
        ].map((text) => (
          <Box key={text} sx={itemStyle}>
            {text}
          </Box>
        ))}
      </Grid>
    </Grid>
  );
};
