import React from "react";
import { Container, Grid, Card, CardContent, Typography, Avatar, Box, Chip } from "@mui/material";

const testimonials = [
  {
    name: "Shasha Solar P Ltd",
    company: "Solar Energy Solutions",
    feedback: "Their expertise in digital marketing has significantly boosted our online presence and customer engagement. The team's understanding of the renewable energy sector is exceptional.",
    industry: "Solar Energy",
    logo: "https://via.placeholder.com/80x80/4CAF50/FFFFFF?text=SS",
    rating: 5
  },
  {
    name: "Pearl Property Developers",
    company: "Real Estate Development",
    feedback: "Outstanding service in brand development and marketing strategies. They helped us reach our target audience effectively and increased our property inquiries by 200%.",
    industry: "Real Estate",
    logo: "https://via.placeholder.com/80x80/2196F3/FFFFFF?text=PPD",
    rating: 5
  },
  {
    name: "Hotel Prince Gardens",
    company: "Hospitality",
    feedback: "The digital transformation of our hotel's marketing has been remarkable. Online bookings increased dramatically, and our brand visibility in the hospitality sector improved significantly.",
    industry: "Hospitality",
    logo: "https://via.placeholder.com/80x80/FF9800/FFFFFF?text=HPG",
    rating: 5
  },
  {
    name: "Finch by Cormorant",
    company: "Restaurant & Dining",
    feedback: "Their creative approach to restaurant marketing and social media management has brought us new customers every week. The ROI on our marketing investment has been exceptional.",
    industry: "Food & Beverage",
    logo: "https://via.placeholder.com/80x80/795548/FFFFFF?text=FC",
    rating: 5
  },
  {
    name: "Finfras Consulting P Ltd",
    company: "Business Consultancy",
    feedback: "Professional, reliable, and results-driven. Their understanding of B2B marketing in the consulting space has helped us establish strong industry connections and grow our client base.",
    industry: "Consulting",
    logo: "https://via.placeholder.com/80x80/607D8B/FFFFFF?text=FC",
    rating: 5
  },
  {
    name: "JS Plastics",
    company: "Manufacturing",
    feedback: "The strategic marketing approach for our automotive parts business has opened new market opportunities. Their industrial marketing expertise is top-notch.",
    industry: "Manufacturing",
    logo: "https://via.placeholder.com/80x80/9C27B0/FFFFFF?text=JSP",
    rating: 5
  },
  {
    name: "Hotel Grand Palace",
    company: "Luxury Hospitality",
    feedback: "Exceptional work in elevating our brand image and online presence. The sophisticated marketing campaigns have attracted high-end clientele and improved our occupancy rates.",
    industry: "Hospitality",
    logo: "https://via.placeholder.com/80x80/E91E63/FFFFFF?text=HGP",
    rating: 5
  },
  {
    name: "Eco Farms Property Developers",
    company: "Sustainable Development",
    feedback: "Their expertise in marketing eco-friendly projects has been invaluable. They understand the sustainability market and helped us connect with environmentally conscious buyers.",
    industry: "Real Estate",
    logo: "https://via.placeholder.com/80x80/8BC34A/FFFFFF?text=EFP",
    rating: 5
  },
  {
    name: "Hi Power Equipment Co",
    company: "Electrical Manufacturing",
    feedback: "Outstanding technical marketing support for our transformer business. They helped us reach industrial clients effectively and establish our brand in the electrical equipment sector.",
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