import React from "react";
import { Box, Typography, Container, Grid, Paper, Button } from "@mui/material";
import { motion } from "framer-motion";
import Features from "./Features";
import About from "./About";
import Services from "./Services";
import ClientPage from "./ClientPage";
import StatusCounter from "./StatusCounter";

// Hero video
const videoSrc = "/Sicherbg1.mp4";

const features = [
  {
    title: "Income Tax Services",
    points: [
      "Personal Tax Filing",
      "Corporate Taxation",
      "Tax Planning",
      "Representation before Authorities",
    ],
  },
  {
    title: "Company Law Services",
    points: [
      "Company Incorporation",
      "Compliance & Governance",
      "Legal Docs Drafting",
      "Secretarial Services",
    ],
  },
  {
    title: "Audit Services",
    points: [
      "Statutory Audits",
      "Internal & Tax Audits",
      "Due Diligence",
      "Specialized Compliance Audits",
    ],
  },
];

const Home = () => {
  return (
    <Box>

      {/* 🔹 HERO SECTION */}
      <Box sx={{ position: "relative", height: "100vh", overflow: "hidden" }}>
        <video
          src={videoSrc}
          autoPlay
          muted
          loop
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            zIndex: 0,
          }}
        />
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          sx={{
            zIndex: 1,
            position: "relative",
            color: "white",
            textAlign: "center",
            top: "30%",
            px: 3,
          }}
        >
        <Typography
  variant="h1"
  fontWeight="bold"
  sx={{
    fontFamily: "Raleway, sans-serif",
    fontSize: { xs: 40, sm: 50, md: 64 },
    color: "white",
    // WebkitTextStroke: "2px #c5c5c5", // light gray outline
    textAlign: "center",
    userSelect: "none",
    pointerEvents: "none",
    letterSpacing:3,
    mb: 4, // spacing below
  }}
>
                    Sicher Shared Services Pvt Ltd
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: 800, mx: "auto", mb: 3,mt:3,letterSpacing:3,fontFamily: "Quicksand, sans-serif", }}>
         Accounting - Taxes - Audit 
          </Typography>
          <Button
          variant="contained"
           sx={{
            mt: 3,
            background: "linear-gradient(to right,#6278FE,#5DA0FB)",
            color: "white",
            fontWeight: "bold",
                fontFamily: "Raleway, sans-serif",
      px: 3,
      py: 1.5,
      color: "white",
      letterSpacing:3,
      transition: "0.3s",
            padding: "10px",
            borderRadius: "19px",
            width: "180px",
            "&:hover": { background: "#6372FF" },
          }}
        >
          Learn More
        </Button>
        </Box>
      </Box>

      {/* 🔹 FEATURES SECTION */}
      <Features/>

      {/* 🔹 ABOUT US SECTION */}
     <About/>
     {/* SERVICES */}
     <Services/>
     {/* CLIENTS */}
     <ClientPage/>
   
    </Box>
  );
};

export default Home;
