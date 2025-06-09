import React from "react";
import { Box, Container, Typography, Grid, Paper, Divider, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import { CheckCircle, Users, Building, Trophy, Clock, FileCheck } from "lucide-react";

const AboutSection = () => {
  return (
    <Box sx={{ py: 6, backgroundColor: "#f9f9f9" }}>
      <Container>
        {/* Intro Section */}
        <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
          About Sicher Shared Services P Ltd
        </Typography>
        <Box width="200px" height="4px" bgcolor="#8FAFFE" mx="auto" my={2} />
        <Typography variant="body1" align="center" color="text.secondary" mb={5} sx={{ maxWidth: "800px", mx: "auto" }}>
          Sicher Shared Services P Ltd is a leading Company specializing in Income Tax, Company Law, and Audit services. 
          Established with a vision to provide comprehensive and proficient financial solutions to businesses and individuals, 
          we have consistently delivered excellence in our services, earning the trust and confidence of our clients.
        </Typography>
        {/* Mission & Vision */}
        <Grid container spacing={4} mb={8}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4, height: "100%", borderTop: "4px solid #1e3a5f" }}>
              <Typography variant="h5" fontWeight="bold" gutterBottom color="#1e3a5f">
                Our Mission
              </Typography>
              <Typography variant="body1">
                To provide exemplary tax consultancy services with a commitment to professionalism, compliance excellence, and client-centric solutions. 
                We strive to simplify complex financial matters and help our clients navigate regulatory challenges seamlessly.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4, height: "100%", borderTop: "4px solid #1e3a5f" }}>
              <Typography variant="h5" fontWeight="bold" gutterBottom color="#1e3a5f">
                Our Vision
              </Typography>
              <Typography variant="body1">
                To become the most trusted partner for businesses and individuals in their financial journey, 
                recognized for excellence, integrity, and innovation in taxation services. 
                We aim to empower our clients with knowledge and guidance while ensuring full compliance with relevant laws and regulations.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Key Strengths */}
        <Typography variant="h5" fontWeight="bold" gutterBottom align="center" sx={{ mb: 3 }}>
          Our Key Strengths
        </Typography>
        <Grid container spacing={3} mb={8}>
          {[
            {
              title: "Strategic Insight",
              icon: <Trophy size={24} />,
              description: "We leverage our in-depth knowledge of tax laws and regulations to provide strategic insights that optimize our clients' financial positions and minimize tax liabilities."
            },
            {
              title: "Compliance Assurance",
              icon: <FileCheck size={24} />,
              description: "With a meticulous approach, we ensure full compliance with relevant laws, regulations, and standards, mitigating risks and optimizing financial performance."
            },
            {
              title: "Client Empowerment",
              icon: <Users size={24} />,
              description: "Empowering our clients with knowledge and guidance is at the core of our philosophy. We remain accessible, responsive, and committed to delivering personalized attention and support."
            },
            {
              title: "Continuous Learning",
              icon: <Clock size={24} />,
              description: "In a dynamic and evolving tax landscape, we prioritize continuous learning and professional development to stay abreast of industry trends, legislative changes, and emerging best practices."
            },
          ].map((strength, i) => (
          
  <Grid item xs={12} sm={6} key={i}>
    <Paper
      elevation={2}
      sx={{
        p: 4,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to right, #627DFE, #5DA1FC)",
        color: "RGB(255, 255, 255)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Box
          sx={{
            background: "linear-gradient(to right, #627DFE, #5DA1FC)",
            borderRadius: "50%",
            width: { xs: 70, sm: 80, md: 90 },
            height: { xs: 70, sm: 80, md: 90 },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            color: "white",
            mb: 2,
          }}
        >
          {strength.icon}
        </Box>

        <Typography variant="h6" fontWeight="bold" color="white" align="center">
          {strength.title}
        </Typography>
      </Box>

      <Typography variant="body2" align="center">
        {strength.description}
      </Typography>
    </Paper>
  </Grid>
))}

          
        </Grid>

        {/* Services */}
        <Grid container spacing={6} mb={8}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" fontWeight="bold" gutterBottom color="#1e3a5f">
              Income Tax Services
            </Typography>
            <List>
              {[
                "Personal Income Tax Filing",
                "Corporate Taxation",
                "Tax Planning and Advisory",
                "Representation before Tax Authorities",
                "Compliance and Regulatory Reporting"
              ].map((item, index) => (
              <ListItem key={index} disableGutters>
  <ListItemIcon sx={{ minWidth: '40px' }}>
    <span
      style={{
        display: 'inline-flex',
        background: 'linear-gradient(to right, #627DFE, #5DA1FC)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    >
      <CheckCircle size={20} />
    </span>
  </ListItemIcon>

                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" fontWeight="bold" gutterBottom color="#1e3a5f">
              Company Law Consultancy
            </Typography>
            <List>
              {[
                "Incorporation and Registration of Companies",
                "Corporate Governance Advisory",
                "Legal Compliance Management",
                "Drafting and Reviewing Legal Documents",
                "Company Secretarial Services"
              ].map((item, index) => (
                <ListItem key={index} disableGutters>
                  <ListItemIcon sx={{ minWidth: "40px" }}>
                    <CheckCircle size={20} color="#1e3a5f" />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" fontWeight="bold" gutterBottom color="#1e3a5f">
              Auditing Services
            </Typography>
            <List>
              {[
                "Statutory Audits",
                "Internal Audits",
                "Tax Audits",
                "Due Diligence Audits",
                "Specialized Audits for Compliance"
              ].map((item, index) => (
                <ListItem key={index} disableGutters>
                  <ListItemIcon sx={{ minWidth: "40px" }}>
                    <CheckCircle size={20} color="#1e3a5f" />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" fontWeight="bold" gutterBottom color="#1e3a5f">
              Our Clientele
            </Typography>
            <Paper elevation={1} sx={{ p: 3, bgcolor: "#f3f6fc" }}>
              <Typography variant="body2" paragraph>
                Our diverse clientele includes small and medium-sized enterprises (SMEs), large corporations, 
                startups, professionals, and individuals seeking proficient financial and legal guidance.
              </Typography>
              <Typography variant="body2" paragraph>
                In the past 12 years we have handled:
              </Typography>
              <List dense>
                {[
                  "Over 2000 individuals personal return filings",
                  "Incorporation, Annual Returns and ROC Compliance for Corporate clients",
                  "GST Compliance of over 200 clients every year",
                  "Audit of Leading Educational Institutions and Trusts in and around Coimbatore",
                  "Representation Services for IT, GST and Company Law assessments"
                ].map((item, index) => (
                  <ListItem key={index} disableGutters>
                    <ListItemIcon sx={{ minWidth: "30px" }}>
                      <CheckCircle size={16} color="#1e3a5f" />
                    </ListItemIcon>
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>

        {/* Leadership */}
        <Typography variant="h5" fontWeight="bold" align="center" gutterBottom sx={{ mb: 3 }}>
          Our Leadership Team
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              name: "Jeeva Thangavelu",
              role: "Managing Director",
              qualification: "B.Com., CA (Final)",
              experience: "12 Years",
              detail: "With a profound understanding of the intricate landscape of taxation and a commitment to client-centric solutions, he brings 12 years of experience in guiding businesses and individuals towards financial success and compliance excellence."
            },
            {
              name: "Sathiyaprakash",
              role: "Director",
              qualification: "B.Com., M.Com., CA (Final)",
              experience: "10 Years",
              detail: "With 10 years experience in the field of Taxes and Auditing, currently managing Income Tax Filing, ROC Compliance and Assessments for our clients."
            },
            {
              name: "Aravind Duraisamy",
              role: "Director",
              qualification: "B.Com., ACMA (Cost Accountant)",
              experience: "8 Years",
              detail: "Qualified Cost Accountant with 8 years experience in the field of Taxes and Auditing, including 3 years industry experience in Elgi Rubber Ltd, Coimbatore. Currently manages GST Returns, Cost Audit and Assessments for clients."
            },
          ].map((director, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Paper elevation={3} sx={{ 
                p: 4, 
                height: "100%", 
                borderRadius: "8px",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                overflow: "hidden"
              }}>
                <Box sx={{ 
                  position: "absolute", 
                  top: 0, 
                  left: 0, 
                  width: "100%", 
                  height: "8px", 
                  bgcolor: "#1e3a5f" 
                }} />
                <Typography variant="h6" fontWeight="bold" color="#1e3a5f">
                  {director.name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                  {director.role}
                </Typography>
                <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Building size={16} style={{ marginRight: "4px" }} />
                    <Typography variant="body2">{director.qualification}</Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Clock size={16} style={{ marginRight: "4px" }} />
                    <Typography variant="body2">{director.experience}</Typography>
                  </Box>
                </Box>
                <Typography variant="body2">{director.detail}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;