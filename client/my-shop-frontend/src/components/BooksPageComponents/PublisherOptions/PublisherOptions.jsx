import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import { Divider } from "@mui/material";


export const PublisherOption = () => {
  const publishers = [
    "Penguin",
    "HarperCollins",
    "Simon & Schuster",
    "Macmillan",
    "Hachette",
    "Oxford Press",
    "Cambridge Press",
    "Scholastic",
    "Bloomsbury",
    "Random House",
  ];

//   add image.png functionality
//   i guess we are not am the same page huh

  return (
    <Accordion sx={{ maxWidth: 400, width: "100%" }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography component="span">Choose Publisher</Typography>
      </AccordionSummary>
      <Divider/>
      <AccordionDetails>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr", // single column like your screenshot
            gap: 1,
          }}
        >
          {publishers.map((pub) => (
            <FormControlLabel
              key={pub}
              control={<Checkbox />}
              label={pub}
            />
          ))}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};
