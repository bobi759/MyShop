import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";

export const CategoryOption = () => {
  const categories = [
    "Action",
    "Fantasy",
    "Adventure",
    "History",
    "Animation",
    "Horror",
    "Biography",
    "Mystery",
    "Comedy",
    "Romance",
    "Crime",
    "Sci-fi",
    "Documentary",
    "Sport",
    "Design",
    "Science",
  ];

  return (
    <Accordion sx={{ maxWidth: 400, width: "100%" }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography component="span">Shop by Category</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr", // two columns
            gap: 1, // space between items
          }}
        >
          {categories.map((cat) => (
            <FormControlLabel
              key={cat}
              control={<Checkbox />}
              label={cat}
            />
          ))}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};
