import { Availability } from "../components/BooksPageComponents/Availability/Availability";
import { CategoryOption } from "../components/BooksPageComponents/CategoryOptions/CategoryOprion";
import { MinimalRating } from "../components/BooksPageComponents/MinimalRating/MinimalRating";
import { Navbar } from "../components/Navbar/Navbar/Navbar";
import { PriceOptions } from "../components/BooksPageComponents/PriceOptions/PriceOptions";
import { PublisherOption } from "../components/BooksPageComponents/PublisherOptions/PublisherOptions";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import Grid from "@mui/material/Grid";
import { BooksFilterNavbar } from "../components/BooksPageComponents/BooksFiltherNavbar/BooksFiltherNavbar";
import { BooksGrid } from "../components/BooksPageComponents/BooksGrid/BooksGrid";

export const BooksPage = () => {
  return (
    <>
      <Navbar />

      <Grid container spacing={2} sx={{ p: 2 }}>
        <Grid item xs={12} md={3} lg={2}>
          <div>Filter options</div>
          <PriceOptions />
          <CategoryOption />
          <PublisherOption />
          <MinimalRating />
          <Availability />

          <Stack
            direction="column"
            spacing={2}
            sx={{ maxWidth: 400, width: "100%", mt: 2 }}
          >
            <Button fullWidth variant="contained" color="warning">
              Refine Search
            </Button>
            <Button fullWidth variant="outlined" color="info">
              Reset Filther
            </Button>
          </Stack>
        </Grid>

        {/* RIGHT SIDE (Main content area) */}
        <Grid item xs={12} md={9} lg={10}>
          <div style={{ padding: "16px" }}>
            <h1>Books</h1>
            <BooksFilterNavbar/>
            <BooksGrid/>
          </div>
        </Grid>
      </Grid>

    </>
  );
};
