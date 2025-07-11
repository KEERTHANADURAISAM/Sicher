import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  IconButton,
  Link,
  Fade,
  Chip,
  useMediaQuery,
  useTheme
} from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import Testimonial from "./Testimonial";
import StatusCounter from "./StatusCounter";

const clientLogos = [
  {
    name: "Shasha Solar P Ltd",
    shortName: "Shasha Solar",
    initials: "SS",
    color: "#4CAF50",
    industry: "Solar Energy",
    website: "https://maps.app.goo.gl/U7VYkWEKTehmHTV36"
  },
  {
    name: "Pearl Property Developers",
    shortName: "Pearl Property",
    initials: "PPD",
    color: "#2196F3",
    industry: "Real Estate",
    website: "https://maps.app.goo.gl/v3WutgpiC83q8kM37"
  },
  {
    name: "Hotel Prince Gardens",
    shortName: "Prince Gardens",
    initials: "HPG",
    color: "#FF9800",
    industry: "Hospitality",
    website: "http://www.hotelprincegardens.com/"
  },
  {
    name: "Finch by Cormorant",
    shortName: "Finch Cormorant",
    initials: "FC",
    color: "#795548",
    industry: "Restaurant",
    website: "https://maps.app.goo.gl/iAj7uHh1nevXDiVd6"
  },
  {
    name: "Finfras Consulting P Ltd",
    shortName: "Finfras Consulting",
    initials: "FC",
    color: "#607D8B",
    industry: "Consulting",
    website: "#"
  },
  {
    name: "JS Plastics",
    shortName: "JS Plastics",
    initials: "JSP",
    color: "#9C27B0",
    industry: "Manufacturing",
    website: "#"
  },
  {
    name: "Hotel Grand Palace",
    shortName: "Grand Palace",
    initials: "HGP",
    color: "#E91E63",
    industry: "Hospitality",
    website: "http://www.hotelgrandpalace.co/"
  },
  {
    name: "Eco Farms Property Developers",
    shortName: "Eco Farms",
    initials: "EFP",
    color: "#8BC34A",
    industry: "Real Estate",
    website: "https://maps.app.goo.gl/anUGF3J76G9FgCp99"
  },
  {
    name: "Hi Power Equipment Co",
    shortName: "Hi Power",
    initials: "HPE",
    color: "#FF5722",
    industry: "Equipment",
    website: "#"
  },
  {
    name: "The Halab Restaurant",
    shortName: "Halab Restaurant",
    initials: "HR",
    color: "#009688",
    industry: "Restaurant",
    website: "https://maps.app.goo.gl/aZrSNo3oLykrfqdX7"
  }
];

const ClientCard = ({ client, index }) => (
  <Fade in={true} timeout={500 + index * 100}>
    <Card
      sx={{
        height: 120,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.3s ease",
        cursor: "pointer",
        background: `linear-gradient(135deg, ${client.color}15, ${client.color}05)`,
        border: `2px solid ${client.color}20`,
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: `0 8px 25px ${client.color}40`,
          border: `2px solid ${client.color}60`
        }
      }}
    >
      <Link
        href={client.website}
        target="_blank"
        rel="noopener noreferrer"
        underline="none"
        sx={{ width: "100%" }}
      >
        <CardContent sx={{ textAlign: "center", p: 2 }}>
          <Box
            sx={{
              width: 50,
              height: 50,
              borderRadius: "50%",
              backgroundColor: client.color,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mx: "auto",
              mb: 1,
              color: "white",
              fontWeight: "bold",
              fontSize: "1.1rem",
              boxShadow: `0 4px 12px ${client.color}40`
            }}
          >
            {client.initials}
          </Box>

          <Typography
            variant="body2"
            sx={{
              fontWeight: "600",
              color: "text.primary",
              fontSize: "0.9rem",
              lineHeight: 1.2
            }}
          >
            {client.shortName}
          </Typography>

          <Chip
            label={client.industry}
            size="small"
            sx={{
              mt: 0.5,
              height: 20,
              fontSize: "0.7rem",
              backgroundColor: `${client.color}20`,
              color: client.color,
              fontWeight: "500"
            }}
          />
        </CardContent>
      </Link>
    </Card>
  </Fade>
);

const ClientSlider = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Show 1 card on mobile

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === clientLogos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? clientLogos.length - 1 : prevIndex - 1
    );
  };

  React.useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(nextSlide, 3000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, isAutoPlaying]);

  const getVisibleLogos = () => {
    const count = isMobile ? 1 : 4;
    const logos = [];
    for (let i = 0; i < count; i++) {
      const index = (currentIndex + i) % clientLogos.length;
      logos.push(clientLogos[index]);
    }
    return logos;
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Grid container spacing={3}>
        {getVisibleLogos().map((client, index) => (
          <Grid item xs={12} md={3} key={`${currentIndex}-${index}`}>
            <ClientCard client={client} index={index} />
          </Grid>
        ))}
      </Grid>

      {/* Navigation */}
      <IconButton
        onClick={prevSlide}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
        sx={{
          position: "absolute",
          left: -20,
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "white",
          boxShadow: 3,
          "&:hover": {
            backgroundColor: "#f5f5f5",
            boxShadow: 6
          }
        }}
      >
        <ChevronLeft />
      </IconButton>

      <IconButton
        onClick={nextSlide}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
        sx={{
          position: "absolute",
          right: -20,
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "white",
          boxShadow: 3,
          "&:hover": {
            backgroundColor: "#f5f5f5",
            boxShadow: 6
          }
        }}
      >
        <ChevronRight />
      </IconButton>

      {/* Dots */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 3, gap: 1 }}>
        {clientLogos.map((_, index) => (
          <Box
            key={index}
            component="button"
            onClick={() => setCurrentIndex(index)}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            sx={{
              width: index === currentIndex ? 24 : 8,
              height: 8,
              borderRadius: 4,
              border: "none",
              backgroundColor:
                index === currentIndex ? "primary.main" : "grey.300",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor:
                  index === currentIndex ? "primary.dark" : "grey.400"
              }
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

const ClientPage = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#fafafa" }}>
        <Container sx={{ py: 8 }}>
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="h3"
              component="h2"
              sx={{ fontWeight: "bold", color: "text.primary", mb: 2 }}
            >
              OUR VALUED CLIENTS
            </Typography>
            <Box
              sx={{
                width: 80,
                height: 4,
                backgroundColor: "primary.main",
                mx: "auto",
                borderRadius: 2,
                mb: 2
              }}
            />
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ maxWidth: 600, mx: "auto" }}
            >
              Trusted by industry leaders across various sectors
            </Typography>
          </Box>

          <ClientSlider />

          <Box sx={{ textAlign: "center", mt: 6 }}>
            <Typography variant="body2" color="text.secondary">
              Professional partnerships across industries
            </Typography>
          </Box>
        </Container>
      </Box>

      <Testimonial />
      <StatusCounter />
    </>
  );
};

export default ClientPage;
