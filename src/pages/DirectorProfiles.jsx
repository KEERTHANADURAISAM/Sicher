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
      and helping clients navigate regulatory challenges seamlessly. Throughout my career, I have honed my expertise
      in various aspects of tax consultancy, including income tax, corporate taxation, international taxation,
      and tax planning strategies.`,
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
  {
    name: 'Aravind Duraisamy',
    qualifications: 'B.Com., ACMA (Cost Accountant)',
    position: 'Director',
    company: 'Sicher Shared Services P Ltd',
    experience: `Qualified Cost Accountant with 8 years of experience in the field of Taxes and Auditing.`,
    bio: `Also has 3 years of industry experience at Elgi Rubber Ltd, Coimbatore.
      Currently managing GST Returns, Cost Audit, and Assessments for our clients.`,
    initials: 'AD',
    yearsExp: '8 Years',
    specialties: ['GST Returns', 'Cost Audit', 'Assessments', 'Industry Experience'],
    primaryColor: '#00acc1',
    secondaryColor: '#0097a7',
    image: '/aravind.jpg',
  },
];

const DirectorProfiles = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        py: 8,
        px: 2,
      }}
    >
      <Container maxWidth="xl">
        {/* Header Section */}
        <Box textAlign="center" mb={8}>
          <Typography
            variant="h2"
            component="h1"
            fontWeight="bold"
            sx={{
              background: 'linear-gradient(135deg, #1976d2 0%, #9c27b0 50%, #00acc1 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2,
              fontSize: { xs: '2.5rem', md: '3.5rem' }
            }}
          >
            Our Leadership Team
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ maxWidth: 600, mx: 'auto', mb: 3, lineHeight: 1.6 }}
          >
            Meet our experienced directors who bring decades of expertise in taxation and financial consulting
          </Typography>
          <Box
            sx={{
              width: 96,
              height: 4,
              gradient: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
              mx: 'auto',
              borderRadius: 2,
            }}
          />
        </Box>

        {/* Director Cards */}
        <Grid container spacing={4} direction="column">

          {directors.map((director, index) => (
            <Grid item xs={12} lg={6} key={index}>
              <Paper
                elevation={0}
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: 6,
                  background: 'linear-gradient(135deg, #ffffff 0%, #f7fafc 100%)',
                  border: '1px solid #e2e8f0',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'translateY(-12px)',
                    boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
                    border: `1px solid ${director.primaryColor}40`,
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 8,
                    background: `linear-gradient(90deg, ${director.primaryColor}, ${director.secondaryColor})`,
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: 128,
                    height: 128,
                    background: `radial-gradient(circle, ${director.primaryColor}15 0%, transparent 70%)`,
                    transform: 'translate(50%, -50%)',
                    borderRadius: '50%',
                  }
                }}
              >
                <Box sx={{ p: 4, position: 'relative', zIndex: 1 }}>
                  {/* Header with Avatar and Basic Info */}
                  <Box display="flex" alignItems="flex-start" mb={3} gap={3}>
                    <Box position="relative">
                      <Avatar
                        alt={director.name}
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
                    
                    <Box flex={1}>
                      <Typography 
                        variant="h4" 
                        fontWeight="bold" 
                        color="#1a202c"
                        sx={{ mb: 0.5, fontSize: { xs: '1.5rem', md: '2rem' } }}
                      >
                        {director.name}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        color="text.secondary" 
                        fontWeight="600"
                        sx={{ mb: 1 }}
                      >
                        {director.qualifications}
                      </Typography>
                      <Box display="flex" alignItems="center" gap={1}>
                        <BusinessIcon sx={{ fontSize: 16, color: director.primaryColor }} />
                        <Typography 
                          variant="body2" 
                          sx={{ color: director.primaryColor, fontWeight: 600 }}
                        >
                          {director.position}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  {/* Experience Badge */}
                  <Box display="flex" alignItems="center" gap={2} mb={3}>
                    <Chip
                      icon={<TrendingUpIcon />}
                      label={director.yearsExp}
                      size="medium"
                      sx={{
                        bgcolor: `${director.primaryColor}15`,
                        color: director.primaryColor,
                        fontWeight: 'bold',
                        fontSize: '0.875rem',
                        '& .MuiChip-icon': { 
                          color: director.primaryColor,
                          fontSize: '1rem'
                        }
                      }}
                    />
                    <Typography variant="body2" color="text.secondary">
                      of Professional Experience
                    </Typography>
                  </Box>

                  {/* Divider */}
                  <Divider 
                    sx={{ 
                      mb: 3,
                      background: `linear-gradient(90deg, transparent, ${director.primaryColor}30, transparent)`
                    }} 
                  />

                  {/* Experience Description */}
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: '#4a5568', 
                      lineHeight: 1.7, 
                      mb: 3,
                      fontSize: '0.95rem'
                    }}
                  >
                    {director.experience}
                  </Typography>

                  {/* Bio */}
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: '#718096', 
                      lineHeight: 1.6, 
                      mb: 3,
                      fontStyle: 'italic'
                    }}
                  >
                    {director.bio}
                  </Typography>

                  {/* Specialties */}
                  <Box>
                    <Box display="flex" alignItems="center" gap={1} mb={2}>
                      <SchoolIcon sx={{ fontSize: 20, color: director.primaryColor }} />
                      <Typography 
                        variant="subtitle2" 
                        fontWeight="bold" 
                        color="#2d3748"
                      >
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
                            transition: 'all 0.2s ease',
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
                </Box>

                {/* Decorative Elements */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: 96,
                    height: 96,
                    background: `radial-gradient(circle, ${director.primaryColor}08 0%, transparent 70%)`,
                    transform: 'translate(-50%, 50%)',
                    borderRadius: '50%',
                  }}
                />
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Bottom CTA Section */}
        <Box textAlign="center" mt={8}>
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
            <Typography variant="h4" fontWeight="bold" color="#1a202c" mb={2}>
              Ready to Work with Our Expert Team?
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={3}>
              Our experienced directors are here to guide you through complex tax matters and ensure your financial success.
            </Typography>
            <Button
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