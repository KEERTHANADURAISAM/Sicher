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
              boxShadow: "10px 10px 30px rgba(0, 0, 0, 0.2)", // Soft shadow
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>

          <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
            Why Choose Us?
          </Typography>

          {/* Bullet Points */}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <List dense>
                {[
                  "Lorem ipsum dolor",
                  "Tempor incididunt",
                  "Lorem ipsum dolor",
                  "Incididunt ut labore",
                ].map((item, index) => (
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
                {[
                  "Aliquip ex ea commodo",
                  "Lorem ipsum dolor",
                  "Exercitation ullamco",
                  "Lorem ipsum dolor",
                ].map((item, index) => (
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
