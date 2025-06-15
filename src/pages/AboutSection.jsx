import React from "react";
import { Box, Container, Typography, Grid, Paper, Divider, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import { CheckCircle, Users, Building, Trophy, Clock, FileCheck } from "lucide-react";
import keyStrength from '/keyStrength.jpg'
import Gallery from "./Gallery";
import DirectorProfiles from "./DirectorProfiles";

const AboutSection = () => {
  return (
    <Box sx={{ py: 6, backgroundColor: "#f9f9f9" }}>
      <Container>
        {/* Intro Section */}
         <Typography Typography  color="#1e3a5f" gutterBottom variant="h2"
          fontSize="36px"
          fontWeight="800"
          textAlign="center"
          fontFamily="Raleway">
             ABOUT SICHER SHARED SERVICES PVT LTD
        </Typography>
        <Box width="200px" height="4px" bgcolor="#8FAFFE" mx="auto" my={2} />
        <Typography variant="body1" align="center" color="text.secondary" mb={5} sx={{ maxWidth: "800px", mx: "auto" }}>
          Sicher Shared Services P Ltd is a leading Company specializing in Income Tax, Company Law, and Audit services. 
          Established with a vision to provide comprehensive and proficient financial solutions to businesses and individuals, 
          we have consistently delivered excellence in our services, earning the trust and confidence of our clients.
        </Typography>
       

        {/* Key Strengths */}
      
{/* <Box
  sx={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // mb: 3,
    bgcolor:'#FEFAF7'
  }}
>
 <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: "bold",mt:12 }}>
        OUR KEY STRENGTHS
      </Typography>
  <Box
    component="img"
    src={keyStrength}
    alt="keyStrength"
    sx={{
      width: "100%",
      maxWidth: 500, // Increased from 200 to 400
      mb: 2,
      borderRadius: 2,
    }}
  />
</Box> */}
       {/* Mission & Vision */}
       <Box sx={{ maxWidth: 1000, mx: 'auto', textAlign: 'center', px: 2, mb: 8 }}>
  {/* Vision Title & Text */}
  <Typography
    color="#1e3a5f"
    gutterBottom
    variant="h2"
    fontSize="36px"
    fontWeight="800"
    textAlign="center"
    fontFamily="Raleway"
  >
    OUR VISION
  </Typography>
  <Box width="60px" height="4px" bgcolor="#8FAFFE" mx="auto" my={2} />
  <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7, mb: 4 }}>
    To become the most trusted partner for businesses and individuals in their financial journey, 
    recognized for excellence, integrity, and innovation in taxation services. 
    We aim to empower our clients with knowledge and guidance while ensuring full compliance with relevant laws and regulations.
  </Typography>

  {/* Vision Image */}
  <Box
    component="img"
    src="/v.png"
    alt="Vision Illustration"
    sx={{
      width: '100%',
      maxWidth: 300,
      mx: 'auto',
      mb: 6,
    }}
  />

  {/* Mission Title & Text */}
  <Typography
    color="#1e3a5f"
    gutterBottom
    variant="h2"
    fontSize="36px"
    fontWeight="800"
    textAlign="center"
    fontFamily="Raleway"
  >
    OUR MISSION
  </Typography>
  <Box width="60px" height="4px" bgcolor="#8FAFFE" mx="auto" my={2} />
  <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7, mb: 4 }}>
    To provide exemplary tax consultancy services with a commitment to professionalism, compliance excellence, and client-centric solutions. 
    We strive to simplify complex financial matters and help our clients navigate regulatory challenges seamlessly.
  </Typography>

  {/* Mission Image */}
  <Box
    component="img"
    src="/target.png" // Replace with your actual image or GIF
    alt="Mission Illustration"
    sx={{
      width: '100%',
      maxWidth: 300,
      mx: 'auto',
    }}
  />
</Box>
{/* team */}
<DirectorProfiles/>
      </Container>
      <Gallery/>
    </Box>
  );
};

export default AboutSection;