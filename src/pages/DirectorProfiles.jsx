import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Chip,
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
    experience: `As the Director of Sicher Shared Services P Ltd, I am privileged to lead a team of dedicated professionals in our mission to provide exemplary tax consultancy services. I bring 12 years of experience in guiding businesses and individuals towards financial success and compliance excellence.`,
    bio: `My journey in taxation began 12 years ago, driven by a passion for simplifying complex tax matters and helping clients navigate regulatory challenges seamlessly.`,
    initials: 'JT',
    yearsExp: '12 Years',
    specialties: ['Income Tax', 'Corporate Tax', 'International Tax', 'Tax Planning'],
    primaryColor: '#1976d2',
    secondaryColor: '#1565c0',
    image: '/jeeva.jpg',
  }
];

const DirectorProfiles = () => {
  return (
    <Box sx={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8fafc, #e2e8f0)',
      py: { xs: 4, md: 8 },
      px: { xs: 1, sm: 2 }
    }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box textAlign="center" mb={{ xs: 4, md: 6 }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{
              background: 'linear-gradient(135deg, #1976d2, #9c27b0, #00acc1)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 1,
              fontSize: { xs: '1.8rem', sm: '2rem', md: '2.5rem' }
            }}
          >
            Our Leadership Team
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              maxWidth: 500,
              mx: 'auto',
              lineHeight: 1.6,
              fontSize: { xs: '0.9rem', sm: '1rem' }
            }}
          >
            Meet our experienced directors who bring decades of expertise in taxation and financial consulting.
          </Typography>
        </Box>

        {/* Cards */}
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={4}
        >
          {directors.map((director, index) => (
            <Paper
              key={index}
              elevation={3}
              sx={{
                borderRadius: 4,
                p: { xs: 2, sm: 3, md: 4 },
                background: 'linear-gradient(135deg, #ffffff 0%, #f7fafc 100%)',
                border: `1px solid ${director.primaryColor}25`,
                width: '100%',
                maxWidth: { xs: '100%', sm: '700px' },
                mx: 'auto'
              }}
            >
              <Box
                display="flex"
                flexDirection={{ xs: 'column', sm: 'row' }}
                alignItems="flex-start"
                gap={3}
                mb={3}
              >
                {/* Director Image */}
                <Box
                  position="relative"
                  sx={{
                    flexShrink: 0,
                    width: { xs: '100%', sm: 180 },
                    maxWidth: { sm: 200 }
                  }}
                >
                  <Box
                    component="img"
                    src={director.image}
                    alt={director.name}
                    sx={{
                      width: '100%',
                      height: { xs: 'auto', sm: 620 },
                      objectFit: 'cover',
                      borderRadius: 3,
                      border: `4px solid ${director.primaryColor}30`,
                      boxShadow: `0 8px 24px ${director.primaryColor}40`
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: -6,
                      right: -6,
                      width: 28,
                      height: 28,
                      background: `linear-gradient(135deg, ${director.primaryColor}, ${director.secondaryColor})`,
                      borderRadius: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: 2
                    }}
                  >
                    <PersonIcon sx={{ color: 'white', fontSize: 16 }} />
                  </Box>
                </Box>

                {/* Director Info */}
                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    color="#1a202c"
                    sx={{ fontSize: { xs: '1.1rem', sm: '1.25rem' }, mb: 0.5 }}
                  >
                    {director.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 1 }}
                  >
                    {director.qualifications}
                  </Typography>
                  <Box display="flex" alignItems="center" gap={1} mb={2}>
                    <BusinessIcon sx={{ fontSize: 18, color: director.primaryColor }} />
                    <Typography
                      variant="body2"
                      sx={{ color: director.primaryColor, fontWeight: 600 }}
                    >
                      {director.position}
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap={1} mb={1}>
                    <Chip
                      icon={<TrendingUpIcon />}
                      label={director.yearsExp}
                      sx={{
                        bgcolor: `${director.primaryColor}15`,
                        color: director.primaryColor,
                        fontWeight: 'bold',
                        fontSize: '0.8rem',
                        '& .MuiChip-icon': { color: director.primaryColor }
                      }}
                    />
                    <Typography variant="body2" color="text.secondary">
                      of Professional Experience
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.primary" paragraph>
                    {director.experience}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    fontStyle="italic"
                    paragraph
                  >
                    {director.bio}
                  </Typography>
                  <Box mt={1}>
                    <Box display="flex" alignItems="center" gap={1} mb={1}>
                      <SchoolIcon sx={{ fontSize: 18, color: director.primaryColor }} />
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
                              borderColor: director.primaryColor
                            }
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Paper>
          ))}
        </Box>

        {/* CTA */}
        <Box textAlign="center" mt={8}>
          <Paper
            elevation={2}
            sx={{
              borderRadius: 4,
              p: { xs: 3, md: 4 },
              background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
              border: '1px solid #e2e8f0',
              maxWidth: { xs: '100%', sm: '500px', md: '600px' },
              mx: 'auto'
            }}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              color="#1a202c"
              mb={1}
              sx={{ fontSize: { xs: '1.1rem', sm: '1.25rem' } }}
            >
              Ready to Work with Our Expert Team?
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              mb={2}
              sx={{ fontSize: '0.9rem' }}
            >
              Our experienced directors are here to guide you through complex tax matters and ensure your financial success.
            </Typography>
            <Button
              component={Link}
              to="/contact"
              variant="contained"
              size="large"
              sx={{
                background: 'linear-gradient(135deg, #1976d2 0%, #00acc1 100%)',
                borderRadius: 6,
                px: 4,
                py: 1.2,
                fontWeight: 'bold',
                textTransform: 'none',
                fontSize: '1rem',
                boxShadow: '0 6px 16px rgba(25, 118, 210, 0.3)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #1565c0 0%, #0097a7 100%)',
                  transform: 'translateY(-1px)'
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
