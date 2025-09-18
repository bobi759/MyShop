import React from "react";
import { Box, Grid, Typography, Link } from "@mui/material";

const footerData = [
  {
    title: "Get to Know Us",
    links: [
      "Careers",
      "Blog",
      "About Amazon",
      "Investor Relations",
      "Amazon Devices",
      "Amazon Science",
    ],
  },
  {
    title: "Make Money with Us",
    links: [
      "Sell products on Amazon",
      "Sell on Amazon Business",
      "Sell apps on Amazon",
      "Become an Affiliate",
      "Advertise Your Products",
      "Self-Publish with Us",
      "Host an Amazon Hub",
      "See More Make Money with Us",
    ],
  },
  {
    title: "Amazon Payment Products",
    links: [
      "Amazon Business Card",
      "Shop with Points",
      "Reload Your Balance",
      "Amazon Currency Converter",
    ],
  },
  {
    title: "Let Us Help You",
    links: [
      "Amazon and COVID-19",
      "Your Account",
      "Your Orders",
      "Shipping Rates & Policies",
      "Returns & Replacements",
      "Manage Your Content and Devices",
      "Help",
    ],
  },
];

export const FooterVerticalColumn = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#232f3e", // dark blue background
        color: "#fff",
        px: 6,
        py: 4,
      }}
    >
      <Grid container spacing={6} justifyContent="center">
        {footerData.map((section, index) => (
          <Grid item xs={6} sm={3} key={index} sx={{ px: "30px" }}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "bold", mb: 2, fontSize: "16px" }}
            >
              {section.title}
            </Typography>
            {section.links.map((link, i) => (
              <Typography key={i} sx={{ mb: 1 }}>
                <Link
                  href="#"
                  underline="hover"
                  sx={{ color: "#ddd", fontSize: "14px" }}
                >
                  {link}
                </Link>
              </Typography>
            ))}
          </Grid>
        ))}
      </Grid>
    </Box>
    
  );
};
