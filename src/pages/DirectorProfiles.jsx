import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Chip,
  Button,
  Container,
  Card,
  CardContent,
  CardMedia,
  Avatar,
  Fade,
  Zoom
} from '@mui/material';
import {
  Person as PersonIcon,
  Business as BusinessIcon,
  School as SchoolIcon,
  TrendingUp as TrendingUpIcon,
  Star as StarIcon,
  WorkOutline as WorkIcon,
  EmojiEvents as TrophyIcon
} from '@mui/icons-material';
 import { Link } from 'react-router-dom';

const directors = [
  {
    name: 'Jeeva Thangavelu',
    qualifications: 'B.Com., & CA (Final)',
    position: 'Managing Director',
    experience: `As the Director of Sicher Shared Services P Ltd, I am privileged to lead a team of dedicated professionals in our mission to provide exemplary tax consultancy services. With a profound understanding of the intricate landscape of taxation and a commitment to client-centric solutions, I bring 12 years of experience in guiding businesses and individuals towards financial success and compliance excellence.`,
    bio: `My journey in taxation began 12 years ago, driven by a passion for simplifying complex tax matters and helping clients navigate regulatory challenges seamlessly. Throughout my career, I have honed my expertise in various aspects of tax consultancy, including income tax, corporate taxation, international taxation, and tax planning strategies.`,
    achievements: [
      'Led over 2000 individual personal return filings',
      'Managed incorporation and ROC compliance for numerous corporate clients',
      'Overseen GST compliance for 200+ clients annually',
      'Conducted audits of leading educational institutions and trusts in Coimbatore',
      'Provided representation services for IT, GST and Company Law assessments'
    ],
    keyStrengths: [
      'Strategic Insight: Leveraging in-depth knowledge of tax laws to optimize clients\' financial positions',
      'Compliance Assurance: Ensuring full compliance with laws and regulations while minimizing risks',
      'Client Empowerment: Providing personalized attention and accessible support to all clients',
      'Continuous Learning: Staying current with industry trends and legislative changes',
      'Technology Integration: Utilizing cutting-edge solutions for enhanced efficiency and accuracy'
    ],
    initials: 'JT',
    yearsExp: '12 Years',
    specialties: ['Income Tax', 'Corporate Tax', 'International Tax', 'Tax Planning', 'GST Compliance', 'Audit Services'],
    primaryColor: '#1976d2',
    secondaryColor: '#1565c0',
    image: '/jeeva.jpg',
  }
];

const DirectorProfiles = () => {
  const [hoveredCard, setHoveredCard] = React.useState(null);

  return (
    <Box sx={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8fafc, #e2e8f0)',
      py: { xs: 4, md: 8 },
      px: { xs: 1, sm: 2 }
    }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Fade in timeout={1000}>
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
        </Fade>

        {/* Director Cards */}
        <Box display="flex" flexDirection="column" alignItems="center" gap={4}>
          {directors.map((director, index) => (
            <Zoom in timeout={1200} key={index}>
              <Paper
                elevation={4}
                sx={{
                  borderRadius: 4,
                  p: { xs: 2, sm: 3, md: 4 },
                  background: 'linear-gradient(135deg, #ffffff 0%, #f7fafc 100%)',
                  border: `1px solid ${director.primaryColor}25`,
                  width: '100%',
                  maxWidth: { xs: '100%', sm: '950px' },
                  mx: 'auto',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: `0 20px 40px ${director.primaryColor}30`
                  }
                }}
              >
                <Box
                  display="flex"
                  flexDirection={{ xs: 'column', md: 'row' }}
                  alignItems="flex-start"
                  gap={4}
                >
                  {/* Enhanced Photo Card */}
                  <Box
                    sx={{
                      flexShrink: 0,
                      width: { xs: '100%', md: 320 },
                      alignSelf: { xs: 'center', md: 'flex-start' }
                    }}
                  >
                    <Card
                      elevation={12}
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                      sx={{
                        borderRadius: 4,
                        overflow: 'hidden',
                        background: 'linear-gradient(145deg, #ffffff, #f8fafc)',
                        border: `2px solid ${director.primaryColor}20`,
                        position: 'relative',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        transform: hoveredCard === index ? 'translateY(-12px) scale(1.02)' : 'translateY(0) scale(1)',
                        boxShadow: hoveredCard === index 
                          ? `0 25px 50px ${director.primaryColor}40, 0 0 0 1px ${director.primaryColor}30`
                          : `0 15px 35px ${director.primaryColor}20`
                      }}
                    >
                      {/* Photo with Overlay */}
                      <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                        <CardMedia
                          component="img"
                          height="360"
                          image={director.image}
                          alt={director.name}
                          sx={{
                            objectFit: 'cover',
                            transition: 'transform 0.4s ease-in-out',
                            transform: hoveredCard === index ? 'scale(1.08)' : 'scale(1)',
                            filter: hoveredCard === index ? 'brightness(1.1)' : 'brightness(1)'
                          }}
                        />
                        
                        {/* Gradient Overlay */}
                        <Box
                          sx={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: '45%',
                            background: `linear-gradient(to top, ${director.primaryColor}CC 0%, ${director.primaryColor}80 30%, transparent 100%)`,
                            display: 'flex',
                            alignItems: 'flex-end',
                            p: 2.5,
                            transition: 'opacity 0.3s ease',
                            opacity: hoveredCard === index ? 1 : 0.9
                          }}
                        >
                          <Box>
                            <Typography
                              variant="h6"
                              fontWeight="bold"
                              color="white"
                              sx={{ 
                                textShadow: '0 2px 8px rgba(0,0,0,0.5)',
                                fontSize: '1.3rem',
                                mb: 0.5
                              }}
                            >
                              {director.name}
                            </Typography>
                            <Typography
                              variant="body2"
                              color="white"
                              sx={{ 
                                opacity: 0.95, 
                                textShadow: '0 1px 4px rgba(0,0,0,0.4)',
                                fontSize: '0.95rem'
                              }}
                            >
                              {director.position}
                            </Typography>
                          </Box>
                        </Box>

                        {/* Experience Badge */}
                        <Chip
                          label={director.yearsExp}
                          icon={<TrophyIcon />}
                          sx={{
                            position: 'absolute',
                            top: 16,
                            right: 16,
                            background: `linear-gradient(135deg, ${director.primaryColor}, ${director.secondaryColor})`,
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: '0.8rem',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                            '& .MuiChip-icon': { 
                              color: 'white',
                              fontSize: '1rem'
                            },
                            transform: hoveredCard === index ? 'scale(1.1)' : 'scale(1)',
                            transition: 'transform 0.3s ease'
                          }}
                        />

                        {/* Star Icon */}
                        <Avatar
                          sx={{
                            position: 'absolute',
                            top: 16,
                            left: 16,
                            width: 40,
                            height: 40,
                            bgcolor: 'rgba(255,255,255,0.95)',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                            transform: hoveredCard === index ? 'scale(1.1) rotate(10deg)' : 'scale(1) rotate(0deg)',
                            transition: 'all 0.3s ease'
                          }}
                        >
                          <StarIcon sx={{ color: director.primaryColor, fontSize: 22 }} />
                        </Avatar>
                      </Box>

                      {/* Card Footer */}
                      <CardContent 
                        sx={{ 
                          background: 'rgba(255,255,255,0.98)',
                          backdropFilter: 'blur(10px)',
                          borderTop: `1px solid ${director.primaryColor}10`
                        }}
                      >
                        <Box display="flex" alignItems="center" justifyContent="space-between">
                          <Box>
                            <Typography 
                              variant="body2" 
                              color="text.secondary" 
                              sx={{ 
                                fontSize: '0.85rem',
                                fontWeight: 500
                              }}
                            >
                              {director.qualifications}
                            </Typography>
                          </Box>
                          <Box display="flex" alignItems="center" gap={0.5}>
                            <WorkIcon sx={{ fontSize: 18, color: director.primaryColor }} />
                            <Typography 
                              variant="caption" 
                              color={director.primaryColor} 
                              fontWeight="700"
                              sx={{ fontSize: '0.8rem' }}
                            >
                              Expert
                            </Typography>
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>
                  </Box>

                  {/* Director Info */}
                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Box display="flex" alignItems="center" gap={1.5} mb={2}>
                      <BusinessIcon sx={{ fontSize: 24, color: director.primaryColor }} />
                      <Typography
                        variant="h5"
                        sx={{ 
                          color: director.primaryColor, 
                          fontWeight: 700,
                          fontSize: { xs: '1.3rem', md: '1.5rem' }
                        }}
                      >
                        {director.position}
                      </Typography>
                    </Box>
                    
                    <Box display="flex" alignItems="center" gap={1} mb={2.5}>
                      <Chip
                        icon={<TrendingUpIcon />}
                        label={`${director.yearsExp} of Excellence`}
                        sx={{
                          bgcolor: `${director.primaryColor}15`,
                          color: director.primaryColor,
                          fontWeight: 'bold',
                          fontSize: '0.85rem',
                          px: 1,
                          '& .MuiChip-icon': { 
                            color: director.primaryColor,
                            fontSize: '1.1rem'
                          }
                        }}
                      />
                    </Box>
                    
                    <Typography 
                      variant="body1" 
                      color="text.primary" 
                      paragraph 
                      sx={{ 
                        lineHeight: 1.7,
                        fontSize: '1rem',
                        mb: 2
                      }}
                    >
                      {director.experience}
                    </Typography>
                    
                    <Paper
                      elevation={2}
                      sx={{
                        p: 2.5,
                        borderRadius: 3,
                        bgcolor: `${director.primaryColor}08`,
                        border: `1px solid ${director.primaryColor}20`,
                        mb: 3,
                        position: 'relative',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          left: 0,
                          top: 0,
                          bottom: 0,
                          width: 4,
                          bgcolor: director.primaryColor,
                          borderRadius: '0 2px 2px 0'
                        }
                      }}
                    >
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        fontStyle="italic"
                        sx={{ 
                          lineHeight: 1.6,
                          fontSize: '0.95rem',
                          pl: 1
                        }}
                      >
                        "{director.bio}"
                      </Typography>
                    </Paper>
                    
                    <Box>
                      <Box display="flex" alignItems="center" gap={1} mb={2}>
                        <SchoolIcon sx={{ fontSize: 20, color: director.primaryColor }} />
                        <Typography 
                          variant="h6" 
                          fontWeight="bold" 
                          color="#2d3748"
                          sx={{ fontSize: '1.1rem' }}
                        >
                          Areas of Expertise
                        </Typography>
                      </Box>
                      <Box display="flex" flexWrap="wrap" gap={1.5}>
                        {director.specialties.map((specialty, idx) => (
                          <Chip
                            key={idx}
                            label={specialty}
                            sx={{
                              bgcolor: director.primaryColor,
                              color: 'white',
                              fontSize: '0.85rem',
                              fontWeight: 600,
                              px: 1,
                              py: 0.5,
                              height: 'auto',
                              '&:hover': {
                                bgcolor: director.secondaryColor,
                                transform: 'translateY(-2px) scale(1.05)',
                                boxShadow: `0 6px 16px ${director.primaryColor}50`
                              },
                              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Paper>
            </Zoom>
          ))}
        </Box>

        {/* CTA Section */}
        <Fade in timeout={1500}>
          <Box textAlign="center" mt={8}>
            <Paper
              elevation={6}
              sx={{
                borderRadius: 4,
                p: { xs: 3, md: 4 },
                background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                border: '1px solid #e2e8f0',
                maxWidth: { xs: '100%', sm: '600px' },
                mx: 'auto',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 4,
                  background: 'linear-gradient(135deg, #1976d2, #00acc1)'
                }
              }}
            >
              <Typography
                variant="h5"
                fontWeight="bold"
                color="#1a202c"
                mb={1}
                sx={{ fontSize: { xs: '1.2rem', sm: '1.4rem' } }}
              >
                Ready to Work with Our Expert Team?
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                mb={3}
                sx={{ fontSize: '1rem', lineHeight: 1.6 }}
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
    borderRadius: 8,
    px: 4,
    py: 1.5,
    fontWeight: 'bold',
    textTransform: 'none',
    fontSize: '1.1rem',
    boxShadow: '0 8px 24px rgba(25, 118, 210, 0.3)',
    '&:hover': {
      background: 'linear-gradient(135deg, #1565c0 0%, #0097a7 100%)',
      transform: 'translateY(-2px)',
      boxShadow: '0 12px 32px rgba(25, 118, 210, 0.4)'
    },
    transition: 'all 0.3s ease'
  }}
>
  Get Started Today
</Button>

            </Paper>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default DirectorProfiles;