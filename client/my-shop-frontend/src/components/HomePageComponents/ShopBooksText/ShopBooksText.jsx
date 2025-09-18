import { Box } from "@mui/material";

export const ShopBooksText = ({ text }) => {
  return (
    <>
      <Box
        sx={{
          mx: "10px", // margin left + right 10px
          my: "0px",
          p: "16px", // padding all around 16px
          maxWidth: "1500px", // matches Amazon’s max content width
          fontFamily: '"Amazon Ember", Arial, sans-serif',
          fontWeight: 700,
          fontSize: "25px",
          lineHeight: "30px",
          textAlign: "left",
          textRendering: "optimizeLegibility",
          textSizeAdjust: "100%",
          mb: 2, // spacing before next section
        }}
      >
        {text}
      </Box>
    </>
  );
};
