import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { FaComments, FaBullhorn, FaUsers, FaMagic } from "react-icons/fa";

const features = [
  {
    icon: <FaComments size={30} color="white" />,
    title: "Live Chat Support",
    description: "Get instant support with our 24/7 live chat service.",
  },
  {
    icon: <FaBullhorn size={30} color="white" />,
    title: "Marketing Tools",
    description: "Boost your business with our powerful marketing tools.",
  },
  {
    icon: <FaUsers size={30} color="white" />,
    title: "Community Support",
    description: "Join a strong community and get valuable insights.",
  },
  {
    icon: <FaMagic size={30} color="white" />,
    title: "Easy Customization",
    description: "Customize everything with simple and easy-to-use tools.",
  },
];

const Features = () => {
  return (
    <Box bgcolor="#F8F9FA" py={6} textAlign="center" sx={{ minHeight: "80vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>

      {/* Heading */}
      <Typography variant="h4" fontWeight="bold">
        FEATURES
      </Typography>
      <Box width="60px" height="4px" bgcolor="#627DFE" mx="auto" my={2} />

      {/* Features Grid (Responsive) */}
      <Grid container spacing={4} justifyContent="center" px={2}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box display="flex" flexDirection="column" alignItems="center">
              {/* Circular Icon */}
              <Box
                sx={{
                  background: "linear-gradient(to right, #627DFE, #5DA1FC)",
                  borderRadius: "50%",
                  width: { xs: 70, sm: 80, md: 90 },
                  height: { xs: 70, sm: 80, md: 90 },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                  mb: 2,
                }}
              >
                {feature.icon}
              </Box>

              {/* Title & Description */}
              <Typography variant="h3" fontWeight="bold" fontFamily='sans-serif'  fontSize='20px' color="RGB(51, 51, 51)">
                {feature.title}
              </Typography>
              <Typography
                color="textSecondary"
                textAlign="center"
                maxWidth="250px"
              >
                {feature.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Features;
