import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const galleryImages = [
  { 
    src: "./360_F_415765406_bNYus3fB14MOQEBTwFM6WeCmj7byxGRO.jpg", 
    title: "Shasha Solar P Ltd",
    service: "Solar Energy Audit & Compliance"
  },
  { 
    src: "./medium-shot-man-working-laptop.jpg", 
    title: "Pearl Property Developers",
    service: "Property Development Audit"
  },
  { 
    src: "./undraw_at-the-airport_z3b9.png", 
    title: "Hotel Prince Gardens",
    service: "Hospitality Industry Audit"
  },
  { 
    src: "./revenue-income-money-profit-costs-budget-banking-concept.jpg", 
    title: "Finch by Cormorant",
    service: "Financial Audit & Risk Assessment"
  },
  { 
    src: "./header2.png", 
    title: "Finfras Consulting P Ltd",
    service: "Business Consultancy Audit"
  },
  { 
    src: "./stock-market-exchange-economics-investment-graph.jpg", 
    title: "JS Plastics",
    service: "Manufacturing Process Audit"
  },
  { 
    src: "./finance-economics-work-male-discussion-laptop.jpg", 
    title: "Hotel Grand Palace",
    service: "Hotel Operations Audit"
  },
  { 
    src: "./businesspeople-working-finance-accounting-analyze-financi.jpg", 
    title: "Eco Farms Property Developers",
    service: "Sustainable Development Audit"
  },
  { 
    src: "./businesspeople-working-finance-accounting-analyze-financial-graph-budget-planning-future-office-room.jpg", 
    title: "Hi Power Equipment Co",
    service: "Equipment Manufacturing Audit"
  },
];

const Gallery = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container>
        {/* Gallery Heading */}
        <Typography variant="h2" fontSize="36px" fontWeight="bold" textAlign="center" mb={2}>
          OUR PROJECT WORKS
        </Typography>
        <Box width="60px" height="4px" bgcolor="#627DFE" mx="auto" my={2} />
        <Typography variant="body1" textAlign="center" mb={4}>
          Explore our successful audit projects across various industries and sectors.
        </Typography>

        {/* Gallery Grid - 3x3 Layout */}
        <Grid container justifyContent="center">
          {galleryImages.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                  "&:hover .overlay": { opacity: 1 },cursor:'pointer'
                }}
              >
                {/* Image */}
                <img
                  src={item.src}
                  alt={item.title}
                  style={{ width: "100%", height: "250px", objectFit: "cover" }}
                />

                {/* Overlay */}
                <Box
                  className="overlay"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(135deg, rgba(98, 120, 254, 0.9), rgba(93, 160, 251, 0.9))",
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    opacity: 0,
                    transition: "opacity 0.3s ease-in-out",
                    textAlign: "center",
                    padding: "20px",
                  }}
                >
                  <Typography variant="h6" fontWeight="bold" mb={1}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" fontSize="14px" fontWeight="400">
                    {item.service}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Gallery;