
import { Box, Container, Grid, Typography, CardContent } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import LanguageIcon from "@mui/icons-material/Language";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import BarChartIcon from "@mui/icons-material/BarChart";
import TranslateIcon from "@mui/icons-material/Translate";
import React from "react";

const services = [
  {
    title: "Tax & Compliance",
    icon: <LanguageIcon />,
    description: "Expert tax consultation and compliance services for businesses and individuals.",
  },
  {
    title: "Audit & Assurance",
    icon: <ShoppingCartIcon />,
    description: "Comprehensive auditing services ensuring financial accuracy and transparency.",
  },
  {
    title: "Company Law Advisory",
    icon: <CloudUploadIcon />,
    description: "Expert guidance on corporate laws, helping businesses stay legally compliant.",
  },
  {
    title: "Business Consulting",
    icon: <TranslateIcon />,
    description: "Strategic business advisory services to drive growth and profitability.",
  },
  {
    title: "Financial Planning",
    icon: <FlightTakeoffIcon />,
    description: "Tailored financial solutions for wealth management and future security.",
  },
  {
    title: "Risk Management",
    icon: <BarChartIcon />,
    description: "Identifying and mitigating financial risks for sustainable business growth.",
  },
];

const Services = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(to right, #627DFE, #5DA1FC)",
        color: "RGB(255, 255, 255)",
        py: 8,
      }}
    >
      <Container>
        {/* Section Heading */}
        <Typography
          variant="h2"
          fontSize="36px"
          fontWeight="800"
          textAlign="center"
          fontFamily="Raleway"
        >
          OUR SERVICES
        </Typography>
        <Box width="60px" height="4px" bgcolor="#8FAFFE" mx="auto" my={2} />

        <Typography variant="body1" textAlign="center" mt={1} mb={4}>
          We provide expert financial, tax, and business consulting services to help you succeed.
        </Typography>

        {/* Services Grid */}
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="stretch"
        >
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  textAlign: "center",
                  p: 3,
                  backdropFilter: "blur(5px)",
                  borderRadius: 3,
                  transition: "all 0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                    cursor: "pointer",
                  },
                }}
              >
                {/* Icon Circle */}
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
                    color: "white",
                    mb: 2,
                    mx: "auto",
                  }}
                >
                  {React.cloneElement(service.icon, { sx: { fontSize: 40 } })}
                </Box>

                {/* Card Content */}
                <CardContent>
                  <Typography variant="h3" fontWeight="500px" fontSize="20px">
                    {service.title}
                  </Typography>
                  <Typography variant="body2" mt={1}>
                    {service.description}
                  </Typography>
                </CardContent>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
