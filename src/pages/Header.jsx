import { Box, Button, Typography } from "@mui/material";

const Header = ({ sectionRefs }) => {
  // Scroll to the Services section when the button is clicked
  const handleScroll = () => {
    const section = sectionRefs.Services.current;
    if (section) {
      const yOffset = -80; // Adjust this based on your header height
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url('/iphone-1852901_1280.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(30%)",
        }}
      />
      <Box sx={{ position: "relative", zIndex: 1, color: "white", mt: { xs: 10, sm: 8, md: 6 } }}>
        <Typography variant="h1" fontWeight="bold" sx={{ fontFamily: "Raleway, sans-serif", fontSize: { xs: 40, sm: 50, md: 64 } }}>
          Welcome to Sicher
        </Typography>
        <Typography variant="h6" mt={2}>
          Your Trusted Partner for Secure Solutions
        </Typography>
        <Button
          variant="contained"
          onClick={handleScroll} // ✅ Call function to scroll
          sx={{
            mt: 3,
            background: "linear-gradient(to right,#6278FE,#5DA0FB)",
            color: "white",
            fontWeight: "bold",
            padding: "10px",
            borderRadius: "19px",
            width: "180px",
            "&:hover": { background: "#6372FF" },
          }}
        >
          Learn More
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
