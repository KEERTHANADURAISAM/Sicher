import React from "react";
import Slider from "react-slick";
import { Container, Typography, Box } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonial from "./Testimonial";
import StatusCounter from "./StatusCounter";

const clientLogos = [
  { name: "Client 1", logo: "/logo2.jpg" },
  { name: "Client 2", logo: "/logo2.jpg" },
  { name: "Client 3", logo: "/logo2.jpg" },
  { name: "Client 4", logo: "/logo2.jpg" },
  { name: "Client 5", logo: "/logo2.jpg" },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 3 } },
    { breakpoint: 768, settings: { slidesToShow: 2 } },
    { breakpoint: 480, settings: { slidesToShow: 1 } },
  ],
};

const ClientPage = () => {
  return (
    <Box>
    <Container sx={{ py: 6, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
        OUR VALUED CLIENTS
      </Typography>
      <Box width="60px" height="4px" bgcolor="#627DFE" mx="auto" my={2} />
      <Slider {...settings}>
        {clientLogos.map((client, index) => (
          <Box key={index} sx={{ p: 2 }}>
            <img src={client.logo} alt={client.name} style={{ width: "100px", height: "auto" }} />
          </Box>
        ))}
      </Slider>
    </Container>
    {/* Testimonial */}
    <Testimonial/>
    <StatusCounter/>
    </Box>
  );
};

export default ClientPage;
