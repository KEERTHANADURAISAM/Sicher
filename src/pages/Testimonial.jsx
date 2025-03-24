import React from "react";
import { Container, Grid, Card, CardContent, Typography, Avatar, Box } from "@mui/material";

const testimonials = [
  {
    name: "John Doe",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedas commodo nibh ante facilisis bibendum dolor feugiat at.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Johnathan Doe",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedas commodo nibh ante facilisis bibendum dolor feugiat at.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "John Doe",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedas commodo nibh ante facilisis bibendum dolor feugiat at.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Johnathan Doe",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedas commodo nibh ante facilisis bibendum dolor feugiat at.",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "John Doe",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedas commodo nibh ante facilisis bibendum dolor feugiat at.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Johnathan Doe",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedas commodo nibh ante facilisis bibendum dolor feugiat at.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
];

const Testimonial = () => {
  return (
    <Container sx={{ py: 6, backgroundColor:"#F6F6F6"}}>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: "bold" }}>
        WHAT OUR CLIENTS SAY
      </Typography>
      <Box width="60px" height="4px" bgcolor="#627DFE" mx="auto" my={2} />
      <Grid container spacing={3} justifyContent="center">
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box sx={{ textAlign: "center", p: 3 }}>
              <Avatar
                src={testimonial.image}
                sx={{ width: 64, height: 64, mx: "auto", mb: 2 }}
              />
              <CardContent>
                <Typography variant="body1" sx={{ fontStyle: "italic" }}>
                  "{testimonial.feedback}"
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold", mt: 2 }}>
                  - {testimonial.name}
                </Typography>
              </CardContent>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Testimonial;
