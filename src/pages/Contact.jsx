import React from "react";
import { Container, Grid, TextField, Button, Typography, Box, Card, CardContent, IconButton } from "@mui/material";
import { Email, Phone, LocationOn, Facebook, Twitter, Instagram } from "@mui/icons-material";

const Contact = () => {
  return (
    <Box sx={{ background: "linear-gradient(135deg, #6e8efb, #a777e3)", py: 8, color: "white" }}>
      <Container>
        <Grid container spacing={4} alignItems="center">
          {/* Contact Form */}
          <Grid item xs={12} md={7} display="flex" justifyContent="center">
            <Box sx={{ width: { xs: "90%", md: "80%" }, p: 3, borderRadius: 3, boxShadow: 5 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", textAlign: "center",color:'white'}}>
                  Get in Touch
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ textAlign: "center", mb: 3 ,color:'white'}}>
                  We'd love to hear from you! Fill in the form below and we'll get back as soon as possible.
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Name" variant="outlined" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Email" variant="outlined" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth label="Message" multiline rows={4} variant="outlined" />
                  </Grid>
                </Grid>
                <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
                  <Button
                    variant="contained"
                    sx={{
                      width: "50%",
                      bgcolor: "#627DFE",
                      ":hover": { bgcolor: "#4a5bdc" },
                    }}
                  >
                    Send Message
                  </Button>
                </Box>
              </CardContent>
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={5}>
            <Box sx={{ textAlign: "center", p: 3 }}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
                Contact Info
              </Typography>
              <Box sx={{ mt: 2, mb: 3 }}>
                <Typography variant="body1" display="flex" alignItems="center" justifyContent="center" gap={1}>
                  <LocationOn /> 4321 California St, San Francisco, CA 12345
                </Typography>
                <Typography variant="body1" display="flex" alignItems="center" justifyContent="center" gap={1}>
                  <Phone /> +1 123 456 1234
                </Typography>
                <Typography variant="body1" display="flex" alignItems="center" justifyContent="center" gap={1}>
                  <Email /> info@company.com
                </Typography>
              </Box>
              <Box>
                <IconButton sx={{ color: "white", ":hover": { color: "#4267B2" } }}>
                  <Facebook />
                </IconButton>
                <IconButton sx={{ color: "white", ":hover": { color: "#1DA1F2" } }}>
                  <Twitter />
                </IconButton>
                <IconButton sx={{ color: "white", ":hover": { color: "#E1306C" } }}>
                  <Instagram />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
