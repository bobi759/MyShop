import { useState } from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import MenuIcon from "@mui/icons-material/Menu";
import GridViewIcon from "@mui/icons-material/GridView";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";
import ListIcon from "@mui/icons-material/List";
import SortIcon from "@mui/icons-material/Sort";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const categories = [
  "Architecture",
  "Art",
  "Action",
  "Biography & Autobiography",
  "Body, Mind & Spirit",
  "Business & Economics",
  "Children Fiction",
  "Children Non-Fiction",
  "Comics & Graphic Novels",
  "Cooking",
  "Crafts & Hobbies",
  "Design",
  "Drama",
  "Education",
  "Family & Relationships",
  "Fiction",
  "Foreign Language Study",
  "Games",
  "Gardening",
  "Health & Fitness",
  "History",
  "House & Home",
  "Humor",
  "Literary Collections",
  "Mathematics",
];

const sortOptions = [
  "Newest",
  "Most rated",
  "Price ASC",
  "Price DESC",
  "Discount %",
];

export const BooksFilterNavbar = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [sortAnchorEl, setSortAnchorEl] = useState(null);
  const [selectedSort, setSelectedSort] = useState("Newest");

  const handleSortClick = (event) => {
    setSortAnchorEl(event.currentTarget);
  };

  const handleSortClose = (option) => {
    if (option) setSelectedSort(option);
    setSortAnchorEl(null);
  };

  return (
    <Box sx={{ maxWidth: 1200, width: "100%", mx: "auto", mt: 3 }}>
      {/* Top Toolbar */}
      <Paper
        variant="outlined"
        sx={{
          borderRadius: 3,
          px: 2,
          py: 1.5,
          mb: 3, // ⬅️ added more bottom margin
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Left controls */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton size="small" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <IconButton size="small" aria-label="grid view">
            <GridViewIcon />
          </IconButton>
          <IconButton size="small" aria-label="column view">
            <ViewColumnIcon />
          </IconButton>
        </Box>

        {/* Right controls */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          {/* Categories toggle */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              cursor: "pointer",
              py: 0.5,
            }}
            onClick={() => setShowCategories(!showCategories)}
          >
            <ListIcon fontSize="small" />
            <Typography sx={{ fontWeight: 600 }}>Categories</Typography>
            <KeyboardArrowDownIcon
              fontSize="small"
              sx={{
                transform: showCategories ? "rotate(180deg)" : "rotate(0deg)",
                transition: "0.2s",
              }}
            />
          </Box>

          {/* Sort dropdown */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              cursor: "pointer",
              py: 0.5,
            }}
            onClick={handleSortClick}
          >
            <SortIcon fontSize="small" />
            <Typography sx={{ fontWeight: 600 }}>{selectedSort}</Typography>
            <KeyboardArrowDownIcon fontSize="small" />
          </Box>

          {/* Dropdown menu */}
          <Menu
            anchorEl={sortAnchorEl}
            open={Boolean(sortAnchorEl)}
            onClose={() => handleSortClose()}
          >
            {sortOptions.map((option, idx) => (
              <MenuItem key={idx} onClick={() => handleSortClose(option)}>
                {option}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Paper>

      {/* Categories panel (collapsible) */}
      <Collapse in={showCategories}>
        <Paper
          variant="outlined"
          sx={{ borderRadius: 2, p: 3, mb: 3 }} // ⬅️ added more padding and spacing
        >
          <Grid container spacing={2}>
            {categories.map((cat, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <FormControlLabel control={<Checkbox />} label={cat} />
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Collapse>
    </Box>
  );
};
