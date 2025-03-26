import {
  Box,
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const About = () => {
  return (
    <Container sx={{ py: 8, mt: 2, backgroundColor: "#FFFFFF" }}>
      <Grid container spacing={6} alignItems="center">
        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="./colleagues-working-project-discussing-details.jpg" // Replace with actual image
            alt="About Us"
            sx={{
              width: "100%",
              boxShadow: "10px 10px 30px rgba(0, 0, 0, 0.2)",
              transition: "filter 0.3s ease-in-out",
              "&:hover": {
                filter: "blur(0px)",
              },
            }}
          />
        </Grid>

        {/* Text Section */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h2"
            fontSize="36px"
            fontWeight="bold"
            gutterBottom
            fontFamily="Raleway"
          >
            ABOUT US
          </Typography>
          <Box width="60px" height="4px" bgcolor="#627DFE" mx={0} />
          <Typography variant="body1" color="text.secondary" paragraph mt={2}>
            Sicher Shared Services P Ltd is a leading company specializing in
            Income Tax, Company Law, and Audit services. Our team is dedicated
            to providing businesses and individuals with comprehensive financial
            solutions, ensuring compliance and financial success.
          </Typography>

          <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
            Why Choose Us?
          </Typography>

          {/* Bullet Points */}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <List dense>
                {["Expert Tax Consultation", "Comprehensive Auditing", "Regulatory Compliance", "Business Advisory"].map((item, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <CheckCircleIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item xs={12} sm={6}>
              <List dense>
                {["Company Law Expertise", "Client-Centric Approach", "Strategic Financial Planning", "12+ Years of Experience"].map((item, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <CheckCircleIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
