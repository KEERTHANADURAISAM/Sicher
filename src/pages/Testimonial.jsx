import React from "react";
import { Container, Grid, Card, CardContent, Typography, Avatar, Box, Chip } from "@mui/material";

const testimonials = [
  {
    name: "Shasha Solar P Ltd",
    company: "Solar Energy Solutions",
    feedback: "Their comprehensive income tax services have streamlined our financial processes significantly. The team's expertise in tax planning for renewable energy businesses has saved us substantial costs while ensuring full compliance.",
    industry: "Solar Energy",
    logo: "https://via.placeholder.com/80x80/4CAF50/FFFFFF?text=SS",
    rating: 5
  },
  {
    name: "Pearl Property Developers",
    company: "Real Estate Development",
    feedback: "Exceptional company law consultancy services that guided us through complex property development regulations. Their corporate governance advisory has strengthened our business structure and investor confidence.",
    industry: "Real Estate",
    logo: "https://via.placeholder.com/80x80/2196F3/FFFFFF?text=PPD",
    rating: 5
  },
  {
    name: "Hotel Prince Gardens",
    company: "Hospitality",
    feedback: "Outstanding auditing services that provided clear insights into our financial health. Their tax planning strategies for the hospitality sector have optimized our tax liabilities while maintaining transparency.",
    industry: "Hospitality",
    logo: "https://via.placeholder.com/80x80/FF9800/FFFFFF?text=HPG",
    rating: 5
  },
  {
    name: "Finch by Cormorant",
    company: "Restaurant & Dining",
    feedback: "Professional income tax services tailored to the restaurant industry. Their advisory on corporate governance has helped us implement better financial controls and compliance procedures.",
    industry: "Food & Beverage",
    logo: "https://via.placeholder.com/80x80/795548/FFFFFF?text=FC",
    rating: 5
  },
  {
    name: "Finfras Consulting P Ltd",
    company: "Business Consultancy",
    feedback: "Reliable company law consultancy and auditing services that have enhanced our business operations. Their tax planning advisory has been instrumental in optimizing our consulting firm's financial structure.",
    industry: "Consulting",
    logo: "https://via.placeholder.com/80x80/607D8B/FFFFFF?text=FC",
    rating: 5
  },
  {
    name: "JS Plastics",
    company: "Manufacturing",
    feedback: "Comprehensive auditing services that identified key areas for financial improvement. Their expertise in income tax planning for manufacturing businesses has resulted in significant cost savings.",
    industry: "Manufacturing",
    logo: "https://via.placeholder.com/80x80/9C27B0/FFFFFF?text=JSP",
    rating: 5
  },
  {
    name: "Hotel Grand Palace",
    company: "Luxury Hospitality",
    feedback: "Exceptional corporate governance advisory that elevated our management standards. Their tax planning and advisory services have optimized our luxury hospitality operations while ensuring regulatory compliance.",
    industry: "Hospitality",
    logo: "https://via.placeholder.com/80x80/E91E63/FFFFFF?text=HGP",
    rating: 5
  },
  {
    name: "Eco Farms Property Developers",
    company: "Sustainable Development",
    feedback: "Expert company law consultancy for our sustainable development projects. Their income tax services and corporate governance advisory have supported our eco-friendly business model effectively.",
    industry: "Real Estate",
    logo: "https://via.placeholder.com/80x80/8BC34A/FFFFFF?text=EFP",
    rating: 5
  },
  {
    name: "Hi Power Equipment Co",
    company: "Electrical Manufacturing",
    feedback: "Outstanding auditing services that provided valuable insights into our electrical equipment business. Their tax planning strategies and corporate governance advisory have strengthened our industrial operations.",
    industry: "Electrical Equipment",
    logo: "https://via.placeholder.com/80x80/FF5722/FFFFFF?text=HPE",
    rating: 5
  }
];
const StarRating = ({ rating }) => {
  return (
    <Box display="flex" justifyContent="center" mb={1}>
      {[...Array(5)].map((_, i) => (
        <Typography
          key={i}
          sx={{
            color: i < rating ? "#FFD700" : "#E0E0E0",
            fontSize: "1.2rem"
          }}
        >
          ★
        </Typography>
      ))}
    </Box>
  );
};

const Testimonial = () => {
  return (
    <Box sx={{ backgroundColor: "#F8F9FA", py: 8 }}>
      <Container maxWidth="lg">
        <Box textAlign="center" mb={6}>
          <Typography 
            variant="h3" 
            sx={{ 
              fontWeight: "bold",
              color: "#2C3E50",
              mb: 2
            }}
          >
            WHAT OUR CLIENTS SAY
          </Typography>
          <Box 
            width="80px" 
            height="4px" 
            bgcolor="#627DFE" 
            mx="auto" 
            mb={2}
            sx={{ borderRadius: "2px" }}
          />
          <Typography 
            variant="h6" 
            color="text.secondary"
            sx={{ maxWidth: "600px", mx: "auto" }}
          >
            Trusted by leading businesses across various industries
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Card 
                sx={{ 
                  height: "100%",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
                  borderRadius: "16px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 16px 40px rgba(0,0,0,0.15)"
                  }
                }}
              >
                <CardContent sx={{ p: 4, textAlign: "center" }}>
                  <Avatar
                    src={testimonial.logo}
                    sx={{ 
                      width: 80, 
                      height: 80, 
                      mx: "auto", 
                      mb: 2,
                      fontSize: "1.2rem",
                      fontWeight: "bold"
                    }}
                  />
                  
                  <Chip 
                    label={testimonial.industry}
                    size="small"
                    sx={{ 
                      mb: 2,
                      backgroundColor: "#627DFE",
                      color: "white",
                      fontWeight: "500"
                    }}
                  />

                  <StarRating rating={testimonial.rating} />

                  <Typography 
                    variant="body1" 
                    sx={{ 
                      fontStyle: "italic",
                      color: "#555",
                      mb: 3,
                      lineHeight: 1.6
                    }}
                  >
                    "{testimonial.feedback}"
                  </Typography>

                  <Box>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: "bold",
                        color: "#2C3E50",
                        mb: 0.5
                      }}
                    >
                      {testimonial.name}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="text.secondary"
                      sx={{ fontWeight: "500" }}
                    >
                      {testimonial.company}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box textAlign="center" mt={6}>
          <Typography variant="h5" sx={{ color: "#2C3E50", fontWeight: "600" }}>
            Join our satisfied clients and grow your business
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonial;