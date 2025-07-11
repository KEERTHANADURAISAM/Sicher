import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";

// Logo from public folder
const logo = "/Sicher Shared logo Final.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  // { label: "Gallery", path: "/gallery" },
  // { label: "Testimonials", path: "/testimonials" },
  // { label: "Team", path: "/team" },
  { label: "Clients", path: "/clients" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: "#FFFFFF", color: "black", height: "100px", padding: "5px" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Link to="/">
              <img src={logo} alt="Sicher Logo" style={{ height: "150px", width: "auto" }} />
            </Link>
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {navItems.map(({ label, path }) => (
              <Button
                key={label}
                component={Link}
                to={path}
                sx={{
                  color: "#555555",
                  fontSize: "1rem",
                  position: "relative",
                  "&:after": {
                    content: '""',
                    display: "block",
                    width: location.pathname === path ? "100%" : "0%",
                    height: "3px",
                    background: "linear-gradient(to right,#6278FE,#5DA0FB)",
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    transition: "width 0.3s ease-in-out",
                  },
                }}
              >
                {label}
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
          {navItems.map(({ label, path }) => (
            <ListItem key={label} disablePadding>
              <ListItemButton component={Link} to={path} onClick={() => setOpen(false)}>
                {label}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;




