import { Navbar } from "../components/Navbar/Navbar/Navbar";
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import {
  Person,
  ShoppingCart,
  FavoriteBorder,
  Storefront,
  Notifications,
  HelpOutline,
  Policy,
  Logout,
} from "@mui/icons-material";

export const ProfilePage = () => {
  return (
    <>
      <Navbar />
      <Box sx={{ minHeight: "100vh", bgcolor: "#fafafa", display: "flex" }}>
        {/* Sidebar */}
        <Box
          sx={{
            width: 250,
            borderRight: "1px solid #eee",
            p: 3,
            ml: 10, // shift right
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            src="https://via.placeholder.com/150"
            alt="David Matin"
            sx={{ width: 90, height: 90, mb: 2 }}
          />
          <Typography variant="h6" fontWeight="bold" sx={{ color: "#2d1a73" }}>
            David Matin
          </Typography>
          <Typography variant="body2" color="orange" mb={2}>
            Web developer
          </Typography>

          <Divider sx={{ width: "100%", my: 2 }} />

          <List sx={{ width: "100%" }}>
            {[
              { text: "Profile", icon: <Person />, selected: true },
              { text: "My Cart", icon: <ShoppingCart /> },
              { text: "Wishlist", icon: <FavoriteBorder /> },
              { text: "Shop", icon: <Storefront /> },
              { text: "Services", icon: <Notifications /> },
              { text: "Help Desk", icon: <HelpOutline /> },
              { text: "Privacy Policy", icon: <Policy /> },
              { text: "Log Out", icon: <Logout /> },
            ].map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton
                  selected={item.selected}
                  sx={{
                    "&.Mui-selected": {
                      borderLeft: "3px solid orange",
                      bgcolor: "transparent",
                    },
                    "&:hover": {
                      bgcolor: "transparent",
                    },
                  }}
                >
                  <ListItemIcon sx={{ color: "orange", minWidth: 36 }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Right Form Section */}

        <Box flex={1} p={5}>
          {/* Basic Info Section */}
          <Box mb={6}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", mb: 1, color: "#2d1a73" }}
            >
              Basic Information
            </Typography>
            <Divider sx={{ borderColor: "orange", mb: 3, width: "100%" }} />

            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Your Name"
                  defaultValue="Alexander Weir"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Professional Title"
                  defaultValue="Web Designer"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Languages" defaultValue="English" />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Age" defaultValue="32" />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label="Description"
                  defaultValue="Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
                />
              </Grid>
            </Grid>
          </Box>

          {/* Contact Info Section */}
          <Box mb={6}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", mb: 1, color: "#2d1a73" }}
            >
              Contact Information
            </Typography>
            <Divider sx={{ borderColor: "orange", mb: 3, width: "100%" }} />

            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Contact Number"
                  defaultValue="+1 123 456 7890"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Email Address"
                  defaultValue="info@example.com"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Country" defaultValue="USA" />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Postcode" defaultValue="112233" />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="City"
                  defaultValue="New York City"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Full Address"
                  defaultValue="123 Main St"
                />
              </Grid>
            </Grid>
          </Box>

          {/* Save Button */}
          <Box>
            <Button
              variant="contained"
              sx={{
                bgcolor: "orange",
                color: "white",
                "&:hover": { bgcolor: "#e69500" },
              }}
            >
              Save Setting
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};
