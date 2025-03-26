import React, { useState } from "react";
import { AppBar, Toolbar, Box, Button, IconButton, Drawer, List, ListItem, ListItemButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

// If the image is in the public folder, use this:
const logo = "/Sicher Shared logo Final.png"; 

const Navbar = ({ sectionRefs }) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Features");

  const navItems = Object.keys(sectionRefs);

  const handleScroll = (section) => {
    setActive(section);
    setOpen(false); 
    const element = sectionRefs[section]?.current;
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 70,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: "#FFFFFF", color: "black", height: "100px", padding: "5px" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img src={logo} alt="Sicher Logo" style={{ height: "150px", width: "auto" }} />
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item}
                onClick={() => handleScroll(item)}
                sx={{
                  color: "#555555",
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
