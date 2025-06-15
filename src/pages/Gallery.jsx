import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const galleryImages = [
  { src: "./360_F_415765406_bNYus3fB14MOQEBTwFM6WeCmj7byxGRO.jpg", title: "Project 1" },
  { src: "./medium-shot-man-working-laptop.jpg", title: "Project 2" },
  { src: "./undraw_at-the-airport_z3b9.png", title: "Project 3" },
  { src: "./revenue-income-money-profit-costs-budget-banking-concept.jpg", title: "Project 4" },
  { src: "./header2.png", title: "Project 5" },
  { src: "./stock-market-exchange-economics-investment-graph.jpg", title: "Project 6" },
  { src: "./finance-economics-work-male-discussion-laptop.jpg", title: "Project 7" },
  { src: "./businesspeople-working-finance-accounting-analyze-financi.jpg", title: "Project 8" },
  { src: "./businesspeople-working-finance-accounting-analyze-financial-graph-budget-planning-future-office-room.jpg", title: "Project 9" },
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.
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
                  "&:hover .overlay": { opacity: 1 },
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
                    background: "rgba(0, 0, 0, 0.6)",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    opacity: 0,
                    transition: "opacity 0.3s ease-in-out",
                  }}
                >
                  <Typography variant="h6" fontWeight="bold">{item.title}</Typography>
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
