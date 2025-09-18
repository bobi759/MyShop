import { Box, Grid, Divider } from "@mui/material";

export const RightSidebar = () => {
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
          borderRight: "1px solid #ddd", // vertical divider
          pr: 2,
        }}
      >
        <Box sx={titleStyle}>Top Categories</Box>
        <Divider sx={{ mb: 1, ml: 2, mr: 3 }} /> {/* line after title */}
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {[
            "Romance",
            "Science Fiction & Fantasy",
            "Mystery, Thriller & Suspense",
            "Self-help",
            "History",
            "Children's Books",
          ].map((cat) => (
            <Box key={cat} sx={itemStyle}>
              {cat}
            </Box>
          ))}
        </Box>
      </Grid>

      {/* Column 2 */}
      <Grid
        item
        sx={{
          minWidth: 280,
          borderRight: "1px solid #ddd",
          pr: 2,
        }}
      >
        <Box sx={titleStyle}>Nonfiction</Box>
        <Divider sx={{ mb: 1, ml: 2, mr: 3 }} />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {[
            "Arts & Photography",
            "Biographies & Memoirs",
            "Business & Money",
            "Calendars",
            "Computers & Technology",
            "Cookbooks, Food & Wine",
            "Crafts, Hobbies & Home",
            "Education & Teaching",
            "Engineering & Transportation",
            "Health, Fitness & Dieting",
            "History",
            "Humor & Entertainment",
            "Law",
            "LGBTQIA+",
            "Medical Books",
            "Parenting & Relationships",
          ].map((cat) => (
            <Box key={cat} sx={itemStyle}>
              {cat}
            </Box>
          ))}
        </Box>
      </Grid>

      {/* Column 3 */}
      <Grid item sx={{ minWidth: 280 }}>
        <Box sx={titleStyle}>Politics & Social Sciences</Box>
        <Divider sx={{ mb: 1, ml: 2, mr: 3 }} />
        {/* … */}
      </Grid>
    </Grid>
  );
};
