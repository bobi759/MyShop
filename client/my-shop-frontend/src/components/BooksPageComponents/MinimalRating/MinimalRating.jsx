import FormControlLabel from "@mui/material/FormControlLabel";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import Rating from "@mui/material/Rating";
import CheckboxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckboxIcon from "@mui/icons-material/CheckBox";



export const MinimalRating = () => {
  const ratings = [1, 2, 3, 4, 5];

  return (
    // must be controlled
    <Accordion sx={{ maxWidth: 400, width: "100%" }} expanded="true">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography component="span">Minimal Rating</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr", // two columns
            gap: 1, // space between items
          }}
        >
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            {ratings.map((cat) => (
              <div key={cat}>
                <FormControlLabel
                  value={cat}
                  control={
                    <Radio
                      icon={<CheckboxOutlineBlankIcon />}
                      checkedIcon={<CheckboxIcon />}
                    />
                  }
                  label=""
                />
                <Rating name={`read-only-${cat}`} value={cat} readOnly />
              </div>
            ))}
          </RadioGroup>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};
