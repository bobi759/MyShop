import {
  Box,
  Typography,
  Card,
  CardMedia,
  Avatar,
  Button,
  IconButton,
  Rating,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ShareIcon from "@mui/icons-material/Share";

import { Navbar } from "../components/Navbar/Navbar/Navbar";
import { BookExtraDetails } from "../components/BookExtraDetails/BookExtraDetails";

export const BookDetailsPage = () => {
  return (
    <>
      <Navbar />

      <Box sx={{ maxWidth: 1200, mx: "auto", p: 4 }}>
        {/* ALWAYS side-by-side: left column fixed, right column fills */}
        {/* If you want it to stack on small screens, use:
            gridTemplateColumns: { xs: "1fr", md: "380px 1fr" } */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "380px 1fr",
            columnGap: 4,
            alignItems: "start",
          }}
        >
          {/* Left: Cover */}
          <Card sx={{ borderRadius: 3, boxShadow: 3, overflow: "hidden" }}>
            <CardMedia
              component="img"
              image="https://placehold.co/600x900?text=Book+Cover"
              alt="Think and Grow Rich"
            />
          </Card>

          {/* Right: Details */}
          <Box>
            <Typography variant="h4" fontWeight={800} gutterBottom>
              Think and Grow Rich
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                mb: 2,
                flexWrap: "wrap",
              }}
            >
              <Rating value={4} readOnly />
              <Typography>4.0</Typography>
              <Box sx={{ flexGrow: 1 }} />
              <IconButton color="primary">
                <FacebookIcon />
              </IconButton>
              <IconButton sx={{ color: "#1DA1F2" }}>
                <TwitterIcon />
              </IconButton>
              <IconButton sx={{ color: "green" }}>
                <WhatsAppIcon />
              </IconButton>
              <IconButton color="secondary">
                <ShareIcon />
              </IconButton>
            </Box>

            {/* Meta */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "auto auto auto",
                gap: 3,
                alignItems: "center",
                mb: 3,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Avatar src="https://placehold.co/80x80" />
                <Box>
                  <Typography variant="caption" color="text.secondary">
                    Written by
                  </Typography>
                  <Typography fontWeight={600}>Kevin Smiley</Typography>
                </Box>
              </Box>
              <Box>
                <Typography variant="caption" color="text.secondary">
                  Publisher
                </Typography>
                <Typography fontWeight={600}>Printarea Studios</Typography>
              </Box>
              <Box>
                <Typography variant="caption" color="text.secondary">
                  Year
                </Typography>
                <Typography fontWeight={600}>2019</Typography>
              </Box>
            </Box>

            {/* Description */}
            <Typography color="text.secondary" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate.
            </Typography>
            <Typography color="text.secondary" paragraph>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </Typography>

            {/* Price + actions */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                flexWrap: "wrap",
                mt: 2,
              }}
            >
              <Typography variant="h5" fontWeight={800} color="warning.main">
                $54.78
              </Typography>
              <Typography
                sx={{ textDecoration: "line-through", color: "text.disabled" }}
              >
                $70.00
              </Typography>

              {/* Simple quantity stepper */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  border: 1,
                  borderColor: "divider",
                  borderRadius: 2,
                  overflow: "hidden",
                }}
              >
                <IconButton
                  size="small"
                  sx={{ borderRight: 1, borderColor: "divider" }}
                >
                  -
                </IconButton>
                <Box sx={{ px: 2, minWidth: 36, textAlign: "center" }}>1</Box>
                <IconButton
                  size="small"
                  sx={{ borderLeft: 1, borderColor: "divider" }}
                >
                  +
                </IconButton>
              </Box>

              <Button
                variant="contained"
                color="warning"
                startIcon={<ShoppingCartIcon />}
                sx={{ borderRadius: 2, px: 3 }}
              >
                Add to cart
              </Button>

              <IconButton sx={{ border: 1, borderColor: "divider" }}>
                <FavoriteBorderIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>



        <BookExtraDetails/>

    </>
  );
};
