import { Box, Grid } from "@mui/material";
import bestBookMonthImage from "./image2.png";
import summerBooksImage from "./image3.png";
import mysteriesThrillersMonthImage from "./image4.png";
import amazonBookReviewsImage from "./image.png";
import { FeatureCard } from "./FeatureCard/FeatureCard";

const items = [
  { name: "Editors' best books of the month", img: bestBookMonthImage },
  { name: "Editors' top summer books", img: summerBooksImage },
  {
    name: "Best mysteries and thrillers of the month",
    img: mysteriesThrillersMonthImage,
  },
  { name: "Amazon Book Review", img: amazonBookReviewsImage },
];

export const FeaturedCollection = () => {
  return (
    <Box sx={{ mx: "10px", p: "16px", maxWidth: "1500px" }}>
      <Grid container spacing={2}>
        {items.map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={3}>
            <FeatureCard name={item.name} image={item.img} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
