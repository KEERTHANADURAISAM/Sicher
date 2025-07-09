import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Paper,
  Avatar,
  Chip,
  Divider,
  Button,
  Container
} from '@mui/material';
import {
  Person as PersonIcon,
  Business as BusinessIcon,
  School as SchoolIcon,
  TrendingUp as TrendingUpIcon
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const directors = [
  {
    name: 'Jeeva Thangavelu',
    qualifications: 'B.Com., & CA (Final)',
    position: 'Managing Director',
    company: 'Sicher Shared Services P Ltd',
    experience: `As the Director of Sicher Shared Services P Ltd, I am privileged to lead a team of dedicated professionals
      in our mission to provide exemplary tax consultancy services. With a profound understanding of the intricate
      landscape of taxation and a commitment to client-centric solutions, I bring 12 years of experience in guiding
      businesses and individuals towards financial success and compliance excellence.`,
    bio: `My journey in the realm of taxation began 12 years ago, driven by a passion for simplifying complex tax matters
      and helping clients navigate regulatory challenges seamlessly.`,
    initials: 'JT',
    yearsExp: '12 Years',
    specialties: ['Income Tax', 'Corporate Tax', 'International Tax', 'Tax Planning'],
    primaryColor: '#1976d2',
    secondaryColor: '#1565c0',
    image: '/jeeva.jpg',
  },
  {
    name: 'Sathiyaprakash',
    qualifications: 'B.Com., M.Com., & CA (Final)',
    position: 'Director',
    company: 'Sicher Shared Services P Ltd',
    experience: `10 Years experience in the field of Taxes and Auditing.`,
    bio: `Currently managing Income Tax Filing, ROC Compliance, and Assessments for our clients.`,
    initials: 'SP',
    yearsExp: '10 Years',
    specialties: ['Income Tax Filing', 'ROC Compliance', 'Assessments', 'Auditing'],
    primaryColor: '#3f51b5',
    secondaryColor: '#303f9f',
    image: '/sathiyaprakash.jpg',
  },
];

const DirectorProfiles = () => {
  return (
    <Box sx={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f8fafc, #e2e8f0)', py: 8, px: 2 }}>
      <Container maxWidth="md">
        {/* Header */}
        <Box textAlign="center" mb={8}>
          <Typography
            variant="h2"
            component="h1"
            fontWeight="bold"
            sx={{
              background: 'linear-gradient(135deg, #1976d2, #9c27b0, #00acc1)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2,
              fontSize: { xs: '2rem', md: '3rem' }
            }}
          >
            Our Leadership Team
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: 600, mx: 'auto', lineHeight: 1.6 }}
          >
            Meet our experienced directors who bring decades of expertise in taxation and financial consulting.
          </Typography>
          <Box sx={{ width: 96, height: 4, background: 'linear-gradient(135deg, #1976d2, #1565c0)', mx: 'auto', borderRadius: 2, mt: 2 }} />
        </Box>

        {/* Cards - Single Column */}
        <Grid container spacing={6} direction="column">
          {directors.map((director, index) => (
            <Grid item key={index}>
              <Paper
                elevation={3}
                sx={{
                  borderRadius: 4,
                  overflow: 'hidden',
                  px: 4,
                  py: 5,
                  background: 'linear-gradient(135deg, #ffffff 0%, #f7fafc 100%)',
                  border: `1px solid ${director.primaryColor}25`,
                  position: 'relative',
                }}
              >
                {/* Avatar and Info */}
                <Box display="flex" alignItems="flex-start" mb={3} gap={3}>
                  <Box position="relative">
                    <Avatar
                      src={director.image}
                      sx={{
                        width: 96,
                        height: 96,
                        fontSize: 28,
                        fontWeight: 'bold',
                        background: `linear-gradient(135deg, ${director.primaryColor}, ${director.secondaryColor})`,
                        border: `3px solid ${director.primaryColor}30`,
                        boxShadow: `0 12px 24px ${director.primaryColor}40`,
                      }}
                    >
                      {!director.image && director.initials}
                    </Avatar>
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: -4,
                        right: -4,
                        width: 32,
                        height: 32,
                        background: `linear-gradient(135deg, ${director.primaryColor}, ${director.secondaryColor})`,
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: 2,
                      }}
                    >
                      <PersonIcon sx={{ color: 'white', fontSize: 16 }} />
                    </Box>
                  </Box>

                  <Box>
                    <Typography variant="h5" fontWeight="bold" color="#1a202c">
                      {director.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" fontWeight="600" sx={{ mb: 1 }}>
                      {director.qualifications}
                    </Typography>
                    <Box display="flex" alignItems="center" gap={1}>
                      <BusinessIcon sx={{ fontSize: 16, color: director.primaryColor }} />
                      <Typography variant="body2" sx={{ color: director.primaryColor, fontWeight: 600 }}>
                        {director.position}
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                {/* Experience */}
                <Box display="flex" alignItems="center" gap={2} mb={2}>
                  <Chip
                    icon={<TrendingUpIcon />}
                    label={director.yearsExp}
                    sx={{
                      bgcolor: `${director.primaryColor}15`,
                      color: director.primaryColor,
                      fontWeight: 'bold',
                      '& .MuiChip-icon': { color: director.primaryColor }
                    }}
                  />
                  <Typography variant="body2" color="text.secondary">
                    of Professional Experience
                  </Typography>
                </Box>

                {/* Text */}
                <Typography variant="body1" color="#4a5568" lineHeight={1.7} mb={2}>
                  {director.experience}
                </Typography>
                <Typography variant="body2" color="#718096" fontStyle="italic" mb={2}>
                  {director.bio}
                </Typography>

                {/* Expertise */}
                <Box>
                  <Box display="flex" alignItems="center" gap={1} mb={1}>
                    <SchoolIcon sx={{ fontSize: 20, color: director.primaryColor }} />
                    <Typography variant="subtitle2" fontWeight="bold" color="#2d3748">
                      Areas of Expertise
                    </Typography>
                  </Box>
                  <Box display="flex" flexWrap="wrap" gap={1}>
                    {director.specialties.map((specialty, idx) => (
                      <Chip
                        key={idx}
                        label={specialty}
                        size="small"
                        variant="outlined"
                        sx={{
                          borderColor: `${director.primaryColor}60`,
                          color: director.primaryColor,
                          fontSize: '0.75rem',
                          fontWeight: 500,
                          '&:hover': {
                            bgcolor: `${director.primaryColor}10`,
                            borderColor: director.primaryColor,
                            transform: 'translateY(-1px)',
                          }
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* CTA Section */}
        <Box textAlign="center" mt={10}>
          <Paper
            elevation={2}
            sx={{
              borderRadius: 4,
              p: 4,
              maxWidth: 600,
              mx: 'auto',
              background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
              border: '1px solid #e2e8f0',
            }}
          >
            <Typography variant="h5" fontWeight="bold" color="#1a202c" mb={2}>
              Ready to Work with Our Expert Team?
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={3}>
              Our experienced directors are here to guide you through complex tax matters and ensure your financial success.
            </Typography>
            <Button
              component={Link}
              to="/contact"
              variant="contained"
              size="large"
              sx={{
                background: 'linear-gradient(135deg, #1976d2 0%, #00acc1 100%)',
                borderRadius: 8,
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 'bold',
                textTransform: 'none',
                boxShadow: '0 8px 24px rgba(25, 118, 210, 0.3)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  background: 'linear-gradient(135deg, #1565c0 0%, #0097a7 100%)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 12px 32px rgba(25, 118, 210, 0.4)',
                }
              }}
            >
              Get Started Today
            </Button>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default DirectorProfiles;
