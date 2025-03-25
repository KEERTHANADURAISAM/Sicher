import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Box, Button, IconButton, Drawer, List, ListItem, ListItemButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = ({ sectionRefs }) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Features");

  const navItems = Object.keys(sectionRefs);

  const handleScroll = (section) => {
    setActive(section);
    setOpen(false); // Close drawer on mobile
    const element = sectionRefs[section]?.current;
    if (element) {
      const offset = 70; // Adjust based on navbar height
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };
  

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: "#FFFFFF", color: "black", height: "80px", padding: "5px" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Brand Name */}
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            SICHER
          </Typography>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item}
                onClick={() => handleScroll(item)}
                sx={{
                  color: "#555555",
                  fontFamily: "Lato, sans-serif",
                  fontSize: "1rem",
                  position: "relative",
                  "&:after": {
                    content: '""',
                    display: "block",
                    width: active === item ? "100%" : "0%",
                    height: "3px",
                    background: "linear-gradient(to right,#6278FE,#5DA0FB)",
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    transition: "width 0.3s ease-in-out",
                  },
                }}
              >
                {item}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton sx={{ display: { xs: "flex", md: "none" } }} onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <List sx={{ width: 200 }}>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton onClick={() => handleScroll(item)}>{item}</ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
