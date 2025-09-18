import { Box, Grid, Divider } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export const RightCommunitiesSidebar = () => {
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

  // Define items as objects so we can include icons conditionally
  const items = [
    { label: "Amazon Book Clubs" },
    { label: "Amazon Books Live" },
    { label: "Goodreads Choice Winners", icon: <ArrowOutwardIcon fontSize="small" sx={{ ml: 0.5 }} /> },
  ];

  return (
    <Grid
      container
      sx={{ flex: 1, p: 3, borderLeft: "1px solid #ddd" }}
      spacing={4}
      wrap="nowrap"
    >
      <Grid item sx={{ minWidth: 280, pr: 2 }}>
        <Box sx={titleStyle}>New & Trending</Box>
        <Divider sx={{ mb: 1, ml: 2, mr: 3 }} />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {items.map(({ label, icon }) => (
            <Box key={label} sx={itemStyle}>
              {label}
              {icon}
            </Box>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};
