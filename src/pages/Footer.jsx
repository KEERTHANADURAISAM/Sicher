import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#F6F6F6",
        py: 4,
        borderTop: "1px solid #ddd",
        boxShadow: "0px -2px 10px rgba(0,0,0,0.08)",
        mt: 8,
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          backgroundColor: "#eaeaea",
        },
      }}
    >
      <Typography
        variant="body2"
        align="center"
        sx={{
          color: "#333",
          fontSize: "14px",
          mt: 2,
          transition: "color 0.3s",
          "& strong": {
            color: "#1976d2",
          },
        }}
      >
        Designed & Developed by <strong>Keerthana Duraisamy</strong> © 2025
      </Typography>
    </Box>
  );
};

export default Footer;
