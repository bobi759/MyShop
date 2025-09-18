import React from "react";
import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

export const DrawerList = ({ toggleDrawer }) => {
  return (
    <Box sx={{ width: 280 }} role="presentation">
      {/* Header */}
      <Box
        sx={{
          bgcolor: "#232f3e",
          color: "white",
          p: 2,
          fontWeight: "bold",
        }}
      >
        <Typography variant="subtitle1">Hello, Bogdan</Typography>
      </Box>

      {/* Section 1 */}
      <Box sx={{ p: 2 }}>
        <Typography variant="subtitle2" sx={{ fontWeight: "bold", mb: 1 }}>
          Digital Content & Devices
        </Typography>
        <List>
          {[
            "Prime Video",
            "Amazon Music",
            "Kindle E-readers & Books",
            "Amazon Appstore",
          ].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={toggleDrawer(false)}>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      <Divider />

      {/* Section 2 */}
      <Box sx={{ p: 2 }}>
        <Typography variant="subtitle2" sx={{ fontWeight: "bold", mb: 1 }}>
          Shop by Department
        </Typography>
        <List>
          {["Electronics", "Computers", "Smart Home", "Arts & Crafts"].map(
            (text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton onClick={toggleDrawer(false)}>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            )
          )}
          <ListItem disablePadding>
            <ListItemButton onClick={toggleDrawer(false)}>
              <ListItemText primary="See all" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>

      <Divider />

      {/* Section 3: Programs & Features */}
      <Box sx={{ p: 2 }}>
        <Typography variant="subtitle2" sx={{ fontWeight: "bold", mb: 1 }}>
          Programs & Features
        </Typography>
        <List>
          {[
            "Gift Cards",
            "Shop By Interest",
            "Amazon Live",
            "International Shopping",
          ].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={toggleDrawer(false)}>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <ListItemButton onClick={toggleDrawer(false)}>
              <ListItemText primary="See all" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>

      <Divider />

      {/* Section 4: Help & Settings */}
      <Box sx={{ p: 2 }}>
        <Typography variant="subtitle2" sx={{ fontWeight: "bold", mb: 1 }}>
          Help & Settings
        </Typography>
        <List>
          {[
            "Your Account",
            "English",
            "United States",
            "Customer Service",
            "Sign Out",
          ].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={toggleDrawer(false)}>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};
