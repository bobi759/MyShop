import { Box, Grid, Divider, Typography } from "@mui/material";

export const RightMembershipsSidebar = () => {
  const memberships = [
    {
      title: "kindleunlimited",
      titleColor: "#f29900", // Kindle orange
      description:
        "Unlimited access to over 4 million digital books, audiobooks, comics, and magazines. Read or listen anywhere, anytime.",
    },
    {
      title: "audible",
      titleColor: "#ff9900", // Audible orange
      description:
        "Access over 700,000 audiobooks and listen across any device. Prime members new to Audible get 2 free audiobooks with trial.",
    },
    {
      title: "comixologyunlimited",
      titleColor: "#009999", // teal/blue
      description:
        "Explore over 45,000 comics, graphic novels, and manga from top publishers including Marvel, DC, Kodansha, Dark Horse, Image, and Yen Press.",
    },
    {
      title: "prime reading",
      titleColor: "#1c82e9", // Amazon Prime blue
      description:
        "Prime members can access a curated catalog of eBooks, audiobooks, magazines, comics, and more, that offer a taste of the Kindle Unlimited library.",
    },
    {
      title: "amazon kids+",
      titleColor: "#a020f0", // purple
      description:
        "Amazon Kids+ provides unlimited access to ad-free, age-appropriate books, including classic chapter books as well as graphic novel favorites.",
    },
  ];

  return (
    <Grid
      container
      sx={{
        flex: 1,
        p: 3,
        borderLeft: "1px solid #ddd",
      }}
      spacing={4}
      wrap="nowrap"
    >
      <Grid item sx={{ minWidth: 280, pr: 2 }}>
        {/* Section Title */}
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "0.95rem",
            margin: "0 30px 8px 20px",
            display: "flex",
            alignItems: "center",
          }}
        >
          Memberships
        </Typography>
        <Divider sx={{ mb: 2, ml: 2, mr: 3 }} />

        {/* Membership Items */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {memberships.map((item) => (
            <Box key={item.title}>
              <Typography
                sx={{
                  color: item.titleColor,
                  fontWeight: 600,
                  marginLeft: "20px",
                  marginBottom: "4px",
                  textTransform: "none",
                  fontSize: "0.95rem",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.85rem",
                  color: "#333",
                  marginLeft: "20px",
                  marginRight: "20px",
                }}
              >
                {item.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};
