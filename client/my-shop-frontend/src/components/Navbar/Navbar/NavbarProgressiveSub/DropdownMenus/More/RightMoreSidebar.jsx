import { Box, Grid, Divider } from "@mui/material";

export const RightMoreSidebar = () => {
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
      borderColor: "#ccc",
      color: "#1c82e9",
    },
  };

  const titleStyle = {
    ...itemStyle,
    fontWeight: 600,
    cursor: "default",
    "&:hover": {
      borderColor: "#ddd",
    },
  };

  return (
    <Grid
      container
      sx={{ flex: 1, p: 3, borderLeft: "1px solid #ddd" }}
      spacing={4}
      wrap="nowrap"
    >
      {/* Column 1 */}
      <Grid
        item
        sx={{
          minWidth: 280,
          pr: 2,
        }}
      >
        <Box sx={titleStyle}>New & Trending</Box>
        <Divider sx={{ mb: 1, ml: 2, mr: 3 }} /> {/* line after title */}
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {[
            "Manage Content and Devices",
            "Your Saved Books",
            "Author Follow",
            "Buy a Kindle",
            "Improve Your Recommendations",
            "Your Company Bookshelf",
            "Advanced Search",
          ].map((cat) => (
            <Box key={cat} sx={itemStyle}>
              {cat}
            </Box>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};
