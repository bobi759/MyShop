import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import { useState } from "react";

const minDistance = 10;

export const PriceOptions = () => {
  const [value, setValue] = useState([20, 37]);

  const handleChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) return;

    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }
  };

  return (

<Box
  sx={{
    display: "flex",
    justifyContent: "flex-start", // center horizontally
    width: "100%",
  }}
>
  <Accordion sx={{ maxWidth: 400,width:"100%" }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography component="span">Price range</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Stack spacing={2}>
          {/* Slider */}
          <Slider
            getAriaLabel={() => "Price range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="off"
            disableSwap
          />

          {/* Range Boxes */}
          <Box display="flex" justifyContent="space-between" gap={2}>
            <Box
              sx={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                px: 2,
                py: 1,
                minWidth: "60px",
                textAlign: "center",
                fontSize: "0.9rem",
                fontWeight: 500,
              }}
            >
              {value[0]}
            </Box>
            <Typography
              variant="body2"
              sx={{ display: "flex", alignItems: "center", fontWeight: "bold" }}
            >
              –
            </Typography>
            <Box
              sx={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                px: 2,
                py: 1,
                minWidth: "60px",
                textAlign: "center",
                fontSize: "0.9rem",
                fontWeight: 500,
              }}
            >
              {value[1]}
            </Box>
          </Box>
        </Stack>
      </AccordionDetails>
    </Accordion>
</Box>

    
  );
};
