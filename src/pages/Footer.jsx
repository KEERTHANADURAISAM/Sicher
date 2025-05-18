
import React from "react";
import { Box, Container, Grid, Typography, Link, Divider, IconButton } from "@mui/material";
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#1e3a5f',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About Company */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Sicher Shared Services P Ltd
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              A leading company specializing in Income Tax, Company Law, and Audit services. 
              Established with a vision to provide comprehensive and proficient financial solutions.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton color="inherit" aria-label="Facebook" size="small">
                <Facebook size={20} />
              </IconButton>
              <IconButton color="inherit" aria-label="Twitter" size="small">
                <Twitter size={20} />
              </IconButton>
              <IconButton color="inherit" aria-label="LinkedIn" size="small">
                <Linkedin size={20} />
              </IconButton>
            </Box>
          </Grid>
          
          {/* Services */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Our Services
            </Typography>
            <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none' }}>
              <Box component="li" sx={{ mb: 1 }}>Income Tax Services</Box>
              <Box component="li" sx={{ mb: 1 }}>Company Law Consultancy</Box>
              <Box component="li" sx={{ mb: 1 }}>Auditing Services</Box>
              <Box component="li" sx={{ mb: 1 }}>Tax Planning and Advisory</Box>
              <Box component="li" sx={{ mb: 1 }}>Corporate Governance Advisory</Box>
            </Box>
          </Grid>
          
          {/* Contact Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', mb: 1 }}>
              <MapPin size={18} />
              <Typography variant="body2" sx={{ ml: 1 }}>
                89, Balaji Nagar, Kalapatti Post,<br />Coimbatore – 641048
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', mb: 1 }}>
              <Phone size={18} />
              <Typography variant="body2" sx={{ ml: 1 }}>
                <Link href="tel:8667289653" color="inherit" underline="hover">
                  8667289653
                </Link>
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', mb: 1 }}>
              <Mail size={18} />
              <Typography variant="body2" sx={{ ml: 1 }}>
                <Link href="mailto:ca.jeeva93@gmail.com" color="inherit" underline="hover">
                  ca.jeeva93@gmail.com
                </Link>
              </Typography>
            </Box>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 3, bgcolor: 'rgba(255, 255, 255, 0.2)' }} />
        
        {/* Copyright */}
        <Box textAlign="center">
          <Typography variant="body2">
            &copy; {currentYear} Sicher Shared Services Private Limited. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}