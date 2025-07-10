import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Paper,
  Avatar,
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
  },
  {
    name: 'Sathiyaprakash',
    qualifications: 'B.Com., M.Com., & CA (Final)',
    position: 'Director',
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
    <Box sx={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #f8fafc, #e2e8f0)', 
      py: { xs: 4, md: 8 },
      px: { xs: 1, sm: 2 }
    }}>
      <Container 
        maxWidth="lg" 
        sx={{ 
          px: { xs: 1, sm: 2, md: 3 },
          width: '100%'
        }}
      >
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
              fontSize: { xs: '1.8rem', sm: '2rem', md: '2.5rem' },
              textAlign: 'center'
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
              fontSize: { xs: '0.9rem', sm: '1rem' },
              px: { xs: 2, sm: 0 }
            }}
          >
            Meet our experienced directors who bring decades of expertise in taxation and financial consulting.
          </Typography>
        </Box>

        {/* Cards Container */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          gap: { xs: 3, md: 4 },
          width: '100%'
        }}>
          {directors.map((director, index) => (
            <Paper
              key={index}
              elevation={3}
              sx={{
                borderRadius: { xs: 3, md: 4 },
                overflow: 'hidden',
                p: { xs: 2, sm: 3, md: 4 },
                background: 'linear-gradient(135deg, #ffffff 0%, #f7fafc 100%)',
                border: `1px solid ${director.primaryColor}25`,
                width: '100%',
                maxWidth: { xs: '100%', sm: '500px', md: '600px' },
                mx: 'auto'
              }}
            >
              {/* Avatar and Basic Info */}
              <Box 
                display="flex" 
                alignItems="flex-start" 
                gap={{ xs: 1.5, sm: 2 }} 
                mb={2}
                flexDirection={{ xs: 'column', sm: 'row' }}
                textAlign={{ xs: 'center', sm: 'left' }}
              >
                <Box 
                  position="relative"
                  alignSelf={{ xs: 'center', sm: 'flex-start' }}
                >
                  <Avatar
                    src={director.image}
                    sx={{
                      width: { xs: 70, sm: 80 },
                      height: { xs: 70, sm: 80 },
                      fontSize: { xs: 20, sm: 24 },
                      fontWeight: 'bold',
                      background: `linear-gradient(135deg, ${director.primaryColor}, ${director.secondaryColor})`,
                      border: `3px solid ${director.primaryColor}30`,
                      boxShadow: `0 8px 20px ${director.primaryColor}40`,
                      '& img': {
                        objectFit: 'cover',
                        objectPosition: 'center top',
                      }
                    }}
                  >
                    {!director.image && director.initials}
                  </Avatar>
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: -4,
                      right: -4,
                      width: { xs: 24, sm: 28 },
                      height: { xs: 24, sm: 28 },
                      background: `linear-gradient(135deg, ${director.primaryColor}, ${director.secondaryColor})`,
                      borderRadius: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: 2,
                    }}
                  >
                    <PersonIcon sx={{ color: 'white', fontSize: { xs: 12, sm: 14 } }} />
                  </Box>
                </Box>
                
                <Box sx={{ flex: 1, width: '100%' }}>
                  <Typography 
                    variant="h6" 
                    fontWeight="bold" 
                    color="#1a202c"
                    sx={{ 
                      fontSize: { xs: '1.1rem', sm: '1.25rem' },
                      mb: 0.5
                    }}
                  >
                    {director.name}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ 
                      fontSize: { xs: '0.8rem', sm: '0.875rem' },
                      mb: 1
                    }}
                  >
                    {director.qualifications}
                  </Typography>
                  <Box 
                    display="flex" 
                    alignItems="center" 
                    gap={1}
                    justifyContent={{ xs: 'center', sm: 'flex-start' }}
                  >
                    <BusinessIcon sx={{ fontSize: { xs: 14, sm: 16 }, color: director.primaryColor }} />
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: director.primaryColor, 
                        fontWeight: 600,
                        fontSize: { xs: '0.8rem', sm: '0.875rem' }
                      }}
                    >
                      {director.position}
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Experience */}
              <Box 
                display="flex" 
                alignItems="center" 
                gap={1} 
                mb={2}
                flexWrap="wrap"
                justifyContent={{ xs: 'center', sm: 'flex-start' }}
              >
                <Chip
                  icon={<TrendingUpIcon />}
                  label={director.yearsExp}
                  sx={{
                    bgcolor: `${director.primaryColor}15`,
                    color: director.primaryColor,
                    fontWeight: 'bold',
                    fontSize: { xs: '0.7rem', sm: '0.8rem' },
                    '& .MuiChip-icon': { color: director.primaryColor },
                  }}
                />
                <Typography 
                  variant="body2" 
                  color="text.secondary"
                  sx={{ 
                    fontSize: { xs: '0.8rem', sm: '0.875rem' },
                    textAlign: { xs: 'center', sm: 'left' }
                  }}
                >
                  of Professional Experience
                </Typography>
              </Box>

              {/* Description */}
              <Typography 
                variant="body2" 
                color="text.primary" 
                mb={1} 
                sx={{ 
                  lineHeight: 1.6,
                  fontSize: { xs: '0.8rem', sm: '0.875rem' },
                  textAlign: { xs: 'center', sm: 'left' }
                }}
              >
                {director.experience}
              </Typography>
              <Typography 
                variant="body2" 
                color="text.secondary" 
                fontStyle="italic" 
                mb={2}
                sx={{ 
                  fontSize: { xs: '0.8rem', sm: '0.875rem' },
                  textAlign: { xs: 'center', sm: 'left' }
                }}
              >
                {director.bio}
              </Typography>

              {/* Expertise */}
              <Box>
                <Box 
                  display="flex" 
                  alignItems="center" 
                  gap={1} 
                  mb={1}
                  justifyContent={{ xs: 'center', sm: 'flex-start' }}
                >
                  <SchoolIcon sx={{ fontSize: { xs: 16, sm: 18 }, color: director.primaryColor }} />
                  <Typography 
                    variant="subtitle2" 
                    fontWeight="bold" 
                    color="#2d3748"
                    sx={{ fontSize: { xs: '0.8rem', sm: '0.875rem' } }}
                  >
                    Areas of Expertise
                  </Typography>
                </Box>
                <Box 
                  display="flex" 
                  flexWrap="wrap" 
                  gap={1}
                  justifyContent={{ xs: 'center', sm: 'flex-start' }}
                >
                  {director.specialties.map((specialty, idx) => (
                    <Chip
                      key={idx}
                      label={specialty}
                      size="small"
                      variant="outlined"
                      sx={{
                        borderColor: `${director.primaryColor}60`,
                        color: director.primaryColor,
                        fontSize: { xs: '0.65rem', sm: '0.7rem' },
                        fontWeight: 500,
                        '&:hover': {
                          bgcolor: `${director.primaryColor}10`,
                          borderColor: director.primaryColor,
                        },
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Paper>
          ))}
        </Box>

        {/* CTA Section */}
        <Box textAlign="center" mt={{ xs: 6, md: 8 }}>
          <Paper
            elevation={2}
            sx={{
              borderRadius: { xs: 3, md: 4 },
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
              sx={{ 
                fontSize: { xs: '0.8rem', sm: '0.875rem' },
                px: { xs: 1, sm: 0 }
              }}
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
                borderRadius: { xs: 4, md: 6 },
                px: { xs: 3, md: 4 },
                py: { xs: 1, md: 1.2 },
                fontWeight: 'bold',
                textTransform: 'none',
                fontSize: { xs: '0.9rem', sm: '1rem' },
                boxShadow: '0 6px 16px rgba(25, 118, 210, 0.3)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #1565c0 0%, #0097a7 100%)',
                  transform: 'translateY(-1px)',
                },
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