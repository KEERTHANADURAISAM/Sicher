import React from "react";
import { Container, Grid, Card, CardContent, Typography, Box } from "@mui/material";

const teamMembers = [
  {
    name: "Jeeva Thangavelu",
    role: "Managing Director",
    description: "B.com., & CA (Final) | 12 Years experience in taxation, guiding businesses and individuals towards financial success and compliance excellence.",
    image: "/portrait-young-confident-businessman-wearing-glasses.jpg",
  },
  {
    name: "Sathiyaprakash",
    role: "Director",
    description: "B.Com., M.Com., & CA (Final) | 10 Years experience in Taxes and Auditing | Managing Income Tax Filing, ROC Compliance, and Assessments.",
    image: "/close-up-portrait-curly-handsome-european-male.jpg",
  },
  {
    name: "Aravind Duraisamy",
    role: "Director",
    description: "B.com., ACMA (Cost Accountant) | 8 Years experience in Taxes and Auditing | 3 Years Industry Experience in Elgi Rubber Ltd, Coimbatore | Managing GST Returns, Cost Audit, and Assessments.",
    image: "/young-bearded-man-with-striped-shirt.jpg",
  }
];

const TeamSection = () => {
  return (
    <Container sx={{ py: 6 }}>
      {/* Section Title */}
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: "bold" }}>
        MEET THE TEAM
      </Typography>
      <Box width="60px" height="4px" bgcolor="#627DFE" mx="auto" my={2} />
      <Typography variant="body1" align="center" color="textSecondary" paragraph>
        Leading the Vision of Excellence in Tax Consultancy
      </Typography>

      {/* Team Members Grid */}
      <Grid container spacing={3} justifyContent="center">
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
           <Card
  sx={{
    textAlign: "center",
    boxShadow: 3,
    p: 2,
    borderRadius: 2,
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    display: "flex", // Ensure flex layout
    flexDirection: "column", // Align content vertically
    height: "100%", // Make all cards same height
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: 6,
    },
  }}
>
  <Box
    component="img"
    src={member.image}
    alt={member.name}
    sx={{
      width: "100%",
      height: "auto",
      maxWidth: "250px",
      aspectRatio: "1/1",
      objectFit: "cover",
      borderRadius: "8px",
      margin: "auto",
      transition: "transform 0.3s ease",
      "&:hover": {
        transform: "scale(1.1)",
      },
    }}
  />
  <CardContent sx={{ flexGrow: 1 }}> 
    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
      {member.name}
    </Typography>
    <Typography variant="subtitle1" color="textSecondary">
      {member.role}
    </Typography>
  </CardContent>
</Card>

          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TeamSection;
