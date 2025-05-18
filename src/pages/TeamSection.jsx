import React from "react";
import { Container, Grid, Card, CardContent, Typography, Box } from "@mui/material";

const teamMembers = [
  {
    name: "John Doe",
    role: "Director",
    image: "young-bearded-man-with-striped-shirt.jpg",
  },
  {
    name: "Mike Doe",
    role: "Senior Designer",
    image: "young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair.jpg",
  },
  {
    name: "Jane Doe",
    role: "Senior Designer",
    image: "portrait-young-confident-businessman-wearing-glasses.jpg",
  },
  {
    name: "Karen Doe",
    role: "Project Manager",
    image: "indoor-portrait-beautiful-freckled-woman-with-dark-curly-hair-wears-fashionable-striped-shirt-rejoices-day-off-isolated-white-wall-curly-satisfied-woman-stands-indoor-alone.jpg",
  },
];

const TeamSection = () => {
  return (
    <Container sx={{ py: 6,backgroundColor:'white'}}>
      {/* Section Title */}
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: "bold" }}>
        MEET THE TEAM
      </Typography>
      <Box width="60px" height="4px" bgcolor="#627DFE" mx="auto" my={2} />
      <Typography variant="body1" align="center" color="textSecondary" paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.
      </Typography>

      {/* Team Members Grid */}
      <Grid container spacing={3} justifyContent="center">
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                textAlign: "center",
                boxShadow: 3,
                p: 2,
                borderRadius: 2,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
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
             <CardContent>
  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
    {member.name}
  </Typography>
  <Typography variant="subtitle1" color="textSecondary">
    {member.role}
  </Typography>
  {member.description && (
    <Typography variant="body2" color="textSecondary" mt={1}>
      {member.description}
    </Typography>
  )}
</CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TeamSection;
