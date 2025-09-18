import { Box, Typography, Link } from "@mui/material";

export const FeedbackBox = () => {
  return (
    <Box
      sx={{
        width: "96%",
        border: "1px solid #ddd",
        borderRadius: "8px",
        my: "25px",
        mx: "auto",
        p: "12px",
        textAlign: "center",
      }}
    >
      <Typography variant="body2">
        If you have any feedback on this page, we would appreciate hearing from
        you.{" "}
        <Link href="#" underline="always" color="primary">
          Submit your feedback here.
        </Link>
      </Typography>
    </Box>
  );
};
