import React from "react";
import Slider from "react-slick";
import { Container, Typography, Box, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Sample client logos
const clientLogos = [
  { name: "Client 1", logo: "/logo2.jpg" },
  { name: "Client 2", logo: "/logo2.jpg" },
  { name: "Client 3", logo: "/logo2.jpg" },
  { name: "Client 4", logo: "/logo2.jpg" },
  { name: "Client 5", logo: "/logo2.jpg" },
];

// Custom Prev Arrow
const PrevArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      left: "-50px",
      top: "50%",
      transform: "translateY(-50%)",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      color: "white",
      "&:hover": { backgroundColor: "black" },
    }}
  >
    <ArrowBackIos />
  </IconButton>
);

// Custom Next Arrow
const NextArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      right: "-50px",
      top: "50%",
      transform: "translateY(-50%)",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      color: "white",
      "&:hover": { backgroundColor: "black" },
    }}
  >
    <ArrowForwardIos />
  </IconButton>
);

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 3 } },
    { breakpoint: 768, settings: { slidesToShow: 2 } },
    { breakpoint: 480, settings: { slidesToShow: 1 } },
  ],
};

const ClientPage = () => {
  return (
    <Container sx={{ py: 6, textAlign: "center", position: "relative" }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
      OUR VALUED CLIENTS
      </Typography>
      <Box width="60px" height="4px" mx="auto" my={2} />
      <Box sx={{ position: "relative", width: "100%" }}>
        <Slider {...settings}>
          {clientLogos.map((client, index) => (
            <Box key={index} sx={{ p: 2, textAlign: "center" }}>
              <img src={client.logo} alt={client.name} style={{ width: "100px", height: "auto" }} />
            </Box>
          ))}
        </Slider>
      </Box>
    </Container>
  );
};

export default ClientPage;
