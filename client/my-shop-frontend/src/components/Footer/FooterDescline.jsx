import React from "react";
import { Box, Grid, Typography, Link } from "@mui/material";

const footerDescData = [
  { title: "Amazon Music", desc: "Stream millions of songs" },
  { title: "Amazon Ads", desc: "Reach customers wherever they spend their time" },
  { title: "6pm", desc: "Score deals on fashion brands" },
  { title: "AbeBooks", desc: "Books, art & collectibles" },
  { title: "ACX", desc: "Audiobook Publishing Made Easy" },
  { title: "Sell on Amazon", desc: "Start a Selling Account" },
  { title: "Veeqo", desc: "Shipping Software Inventory Management" },
  { title: "Amazon Business", desc: "Everything For Your Business" },
  { title: "AmazonGlobal", desc: "Ship Orders Internationally" },
  { title: "Amazon Web Services", desc: "Scalable Cloud Computing Services" },
  { title: "Audible", desc: "Listen to Books & Original Audio Performances" },
  { title: "Box Office Mojo", desc: "Find Movie Box Office Data" },
  { title: "Goodreads", desc: "Book reviews & recommendations" },
  { title: "IMDb", desc: "Movies, TV & Celebrities" },
  { title: "Kindle Direct Publishing", desc: "Indie Digital & Print Publishing Made Easy" },
  { title: "Prime Video Direct", desc: "Video Distribution Made Easy" },
  { title: "Shopbop", desc: "Designer Fashion Brands" },
  { title: "Woot!", desc: "Deals and Shenanigans" },
  { title: "Zappos", desc: "Shoes & Clothing" },
  { title: "Ring", desc: "Smart Home Security Systems" },
  { title: "eero WiFi", desc: "Stream 4K Video in Every Room" },
  { title: "Neighbors App", desc: "Real-Time Crime & Safety Alerts" },
  { title: "Amazon Subscription Boxes", desc: "Top subscription boxes – right to your door" },
  { title: "PillPack", desc: "Pharmacy Simplified" },
  { title: "Amazon Luna", desc: "Video games from the cloud, no console required" },
];

export const FooterDescLine = () => {
  return (
    <Box sx={{ bgcolor: "#131a22", px: 8, py: 6 }}>
      {/* Top grid with all business links */}
      <Grid container spacing={4}>
        {footerDescData.map((item, index) => (
          <Grid item xs={6} sm={3} md={2} key={index}>
            <Typography
              sx={{ fontSize: "12px", fontWeight: "bold", color: "#ddd" }}
            >
              <Link href="#" underline="hover" sx={{ color: "#ddd" }}>
                {item.title}
              </Link>
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "#999" }}>
              {item.desc}
            </Typography>
          </Grid>
        ))}
      </Grid>

      {/* Legal links */}
      <Box
        sx={{
          textAlign: "center",
          mt: 6,
          fontSize: "12px",
          color: "#ddd",
        }}
      >
        <Box sx={{ mb: 1 }}>
          <Link href="#" sx={{ color: "#ddd", mx: 1 }} underline="hover">
            Conditions of Use
          </Link>
          <Link href="#" sx={{ color: "#ddd", mx: 1 }} underline="hover">
            Privacy Notice
          </Link>
          <Link href="#" sx={{ color: "#ddd", mx: 1 }} underline="hover">
            Consumer Health Data Disclosure
          </Link>
          <Link href="#" sx={{ color: "#ddd", mx: 1 }} underline="hover">
            Your Ads Privacy Choices
          </Link>
        </Box>
        <Typography sx={{ fontSize: "12px", color: "#999" }}>
          © 1996-2025, Amazon.com, Inc. or its affiliates
        </Typography>
      </Box>
    </Box>
  );
};
