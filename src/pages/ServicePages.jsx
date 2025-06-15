import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  Container,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Chip,
  useTheme,
  useMediaQuery,
  Divider,
  Avatar,
  Stack
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  CheckCircle,
  Phone,
  Mail,
  LocationOn,
  Person,
  Menu,
  Close,
  TrendingUp,
  Business,
  School,
  Security,
  Calculate,
  Description,
  BarChart,
  People,
  Schedule,
  EmojiEvents,
  ChevronRight,
  ArrowBack
} from '@mui/icons-material';

// Styled components
const GradientBox = styled(Box)(({ theme, gradient }) => ({
  background: gradient,
  color: 'white',
  borderRadius: theme.spacing(1),
  padding: theme.spacing(3),
}));

const ServiceCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[8],
  },
}));

const ProcessStep = styled(Box)(({ theme, bgcolor }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const StepNumber = styled(Avatar)(({ theme, bgcolor }) => ({
  backgroundColor: bgcolor,
  width: 32,
  height: 32,
  fontSize: '0.875rem',
  fontWeight: 'bold',
}));

const ServicePages = () => {
  const [currentPage, setCurrentPage] = useState('main');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const services = {
    'income-tax': {
      title: 'Income Tax Services',
      icon: <Calculate sx={{ fontSize: 32 }} />,
      color: '#1976d2',
      gradient: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
      description: 'Comprehensive income tax solutions for individuals and businesses with expert guidance and compliance assurance.',
      subServices: [
        {
          name: 'Personal Income Tax Filing',
          description: 'Complete individual tax return preparation and filing services',
          features: [
            'ITR-1 to ITR-7 filing for all categories',
            'Salary, business, and capital gains computation',
            'Deduction optimization under various sections',
            'E-filing and acknowledgment management',
            'Refund processing assistance'
          ],
          process: [
            'Document collection and verification',
            'Income computation and tax calculation',
            'Deduction identification and optimization',
            'Return preparation and review',
            'E-filing and follow-up'
          ]
        },
        {
          name: 'Corporate Taxation',
          description: 'End-to-end corporate tax compliance and planning services',
          features: [
            'Corporate income tax return filing',
            'Transfer pricing documentation',
            'Tax provision and computation',
            'Advance tax planning and payment',
            'Corporate restructuring tax advice'
          ],
          process: [
            'Financial data analysis',
            'Tax position assessment',
            'Compliance requirement mapping',
            'Return preparation and filing',
            'Post-filing compliance monitoring'
          ]
        },
        {
          name: 'Tax Planning and Advisory',
          description: 'Strategic tax planning to minimize liabilities and maximize savings',
          features: [
            'Annual tax planning sessions',
            'Investment advisory for tax savings',
            'Business structure optimization',
            'Tax-efficient salary structuring',
            'Long-term wealth planning'
          ],
          process: [
            'Current tax position analysis',
            'Goal identification and planning',
            'Strategy development',
            'Implementation guidance',
            'Periodic review and adjustment'
          ]
        },
        {
          name: 'Representation before Tax Authorities',
          description: 'Professional representation during assessments and appeals',
          features: [
            'Assessment proceedings representation',
            'Appeal filing and arguments',
            'Notice response and compliance',
            'Settlement and negotiation',
            'Documentation and evidence preparation'
          ],
          process: [
            'Case analysis and strategy formulation',
            'Documentation preparation',
            'Authority interaction and representation',
            'Follow-up and compliance',
            'Resolution and closure'
          ]
        },
        {
          name: 'Compliance and Regulatory Reporting',
          description: 'Comprehensive compliance management and regulatory reporting',
          features: [
            'TDS return filing and compliance',
            'Form 15G/15H processing',
            'Annual information return filing',
            'International tax compliance',
            'Regulatory change updates'
          ],
          process: [
            'Compliance calendar preparation',
            'Regular monitoring and alerts',
            'Return preparation and filing',
            'Compliance verification',
            'Regulatory update communication'
          ]
        }
      ]
    },
    'company-law': {
      title: 'Corporate Legal Advisory',
      icon: <Business sx={{ fontSize: 32 }} />,
      color: '#1976d2',
      gradient: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
      description: 'Complete company law compliance and corporate governance solutions for seamless business operations.',
      subServices: [
        {
          name: 'Incorporation and Registration of Companies',
          description: 'Complete company formation services from concept to registration',
          features: [
            'Name reservation and approval',
            'MOA and AOA drafting',
            'DIN and DSC procurement',
            'SPICe+ form filing',
            'Post-incorporation compliance setup'
          ],
          process: [
            'Business structure consultation',
            'Documentation preparation',
            'Regulatory filing and approval',
            'Certificate procurement',
            'Post-incorporation setup'
          ]
        },
        {
          name: 'Corporate Governance Advisory',
          description: 'Strategic guidance on corporate governance best practices',
          features: [
            'Board constitution and procedures',
            'Policy development and implementation',
            'Compliance framework design',
            'Risk management systems',
            'Stakeholder communication strategies'
          ],
          process: [
            'Current governance assessment',
            'Gap analysis and recommendations',
            'Policy and procedure development',
            'Implementation support',
            'Ongoing monitoring and review'
          ]
        },
        {
          name: 'Legal Compliance Management',
          description: 'Comprehensive legal compliance across all regulatory requirements',
          features: [
            'Annual return and event-based filing',
            'Board meeting and AGM compliance',
            'Statutory register maintenance',
            'Director appointment and resignation',
            'Share capital and transfer management'
          ],
          process: [
            'Compliance calendar creation',
            'Regular compliance monitoring',
            'Filing and documentation',
            'Compliance verification',
            'Regulatory update implementation'
          ]
        },
        {
          name: 'Drafting and Reviewing Legal Documents',
          description: 'Professional legal document preparation and review services',
          features: [
            'Agreements and contracts drafting',
            'Board resolutions and notices',
            'Compliance certificates',
            'Legal opinion and advice',
            'Document review and vetting'
          ],
          process: [
            'Requirement analysis',
            'Document drafting',
            'Legal review and verification',
            'Client consultation and revision',
            'Final documentation and execution'
          ]
        }
      ]
    },
    'auditing': {
      title: 'Auditing Services',
      icon: <BarChart sx={{ fontSize: 32 }} />,
      color: '#1976d2',
      gradient: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
      description: 'Professional auditing services ensuring transparency, compliance, and stakeholder confidence.',
      subServices: [
        {
          name: 'Statutory Audits',
          description: 'Independent statutory audit services as per regulatory requirements',
          features: [
            'Companies Act audit compliance',
            'Financial statement examination',
            'Internal control evaluation',
            'Risk assessment and testing',
            'Audit report and management letter'
          ],
          process: [
            'Audit planning and risk assessment',
            'Internal control evaluation',
            'Substantive testing and verification',
            'Findings documentation',
            'Report preparation and presentation'
          ]
        },
        {
          name: 'Internal Audits',
          description: 'Comprehensive internal audit services for process improvement',
          features: [
            'Operational efficiency review',
            'Internal control assessment',
            'Risk management evaluation',
            'Compliance verification',
            'Process improvement recommendations'
          ],
          process: [
            'Audit scope definition',
            'Process mapping and analysis',
            'Control testing and evaluation',
            'Gap identification',
            'Recommendations and follow-up'
          ]
        },
        {
          name: 'Tax Audits',
          description: 'Specialized tax audit services for compliance verification',
          features: [
            'Income tax audit under 44AB',
            'GST audit and compliance',
            'Transfer pricing audit',
            'International tax audit',
            'Tax provision review'
          ],
          process: [
            'Tax position analysis',
            'Documentation review',
            'Compliance verification',
            'Exception identification',
            'Audit report preparation'
          ]
        },
        {
          name: 'Due Diligence Audits',
          description: 'Comprehensive due diligence for transactions and investments',
          features: [
            'Financial due diligence',
            'Legal and compliance review',
            'Operational assessment',
            'Risk identification',
            'Valuation support'
          ],
          process: [
            'Scope and methodology definition',
            'Data room analysis',
            'Management interviews',
            'Risk and opportunity assessment',
            'Due diligence report preparation'
          ]
        },
        {
          name: 'Specialized Audits for Compliance',
          description: 'Industry-specific and regulatory compliance audits',
          features: [
            'Regulatory compliance audit',
            'Environmental audit',
            'Quality system audit',
            'Information system audit',
            'Forensic audit services'
          ],
          process: [
            'Compliance framework review',
            'Gap analysis and testing',
            'Evidence collection',
            'Compliance assessment',
            'Corrective action recommendations'
          ]
        }
      ]
    }
  };

  const MainPage = () => (
    <Container maxWidth="xl" sx={{ py: 4 }}>
       {/* Services Grid */}
      <Grid container spacing={4}>
        {Object.entries(services).map(([key, service]) => (
         <Grid item xs={12} md={4} key={key}>
  <ServiceCard sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
    <GradientBox gradient={service.gradient}>
      <Box display="flex" alignItems="center" gap={2} mb={2}>
        {service.icon}
        <Typography variant="h5" fontWeight="bold">{service.title}</Typography>
      </Box>
      <Typography sx={{ color: 'rgba(255,255,255,0.8)' }}>
        {service.description}
      </Typography>
    </GradientBox>

    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <Box sx={{ mb: 3 }}>
        {service.subServices.slice(0, 3).map((subService, index) => (
          <Box key={index} display="flex" alignItems="center" gap={1} mb={1}>
            <CheckCircle sx={{ color: service.color, fontSize: 16 }} />
            <Typography variant="body2" color="text.secondary">
              {subService.name}
            </Typography>
          </Box>
        ))}
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          +{service.subServices.length - 3} more services
        </Typography>
      </Box>

      <Button
        variant="contained"
        fullWidth
        onClick={() => setCurrentPage(key)}
        sx={{ 
          backgroundColor: service.color,
          '&:hover': { backgroundColor: service.color, filter: 'brightness(0.9)' }
        }}
        endIcon={<ChevronRight />}
      >
        View All Services
      </Button>
    </CardContent>
  </ServiceCard>
</Grid>

        ))}
      </Grid>
    </Container>
  );

  const ServiceDetailPage = ({ serviceKey }) => {
    const service = services[serviceKey];
    
    return (
      <Container maxWidth="xl" sx={{ py: 4 }}>
        {/* Back Button */}
        <Button
          startIcon={<ArrowBack />}
          onClick={() => setCurrentPage('main')}
          sx={{ mb: 3, color: 'text.secondary' }}
        >
          Back to Services
        </Button>

        {/* Service Header */}
        <GradientBox gradient={service.gradient} sx={{ mb: 4 }}>
          <Box display="flex" alignItems="center" gap={2} mb={2}>
            {service.icon}
            <Typography variant="h3" fontWeight="bold">{service.title}</Typography>
          </Box>
          <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.8)' }}>
            {service.description}
          </Typography>
        </GradientBox>

        {/* Sub-services */}
        <Stack spacing={4}>
          {service.subServices.map((subService, index) => (
            <Card key={index} elevation={3}>
              <Box 
                sx={{ 
                  backgroundColor: `${service.color}15`,
                  borderLeft: `4px solid ${service.color}`,
                  p: 3
                }}
              >
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                  {subService.name}
                </Typography>
                <Typography color="text.secondary">
                  {subService.description}
                </Typography>
              </Box>
              
              <CardContent>
                <Grid container spacing={4}>
                  {/* Features */}
                  <Grid item xs={12} lg={6}>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      Key Features:
                    </Typography>
                    <Stack spacing={2}>
                      {subService.features.map((feature, fIndex) => (
                        <Box key={fIndex} display="flex" alignItems="flex-start" gap={1}>
                          <CheckCircle sx={{ color: service.color, fontSize: 20, mt: 0.5 }} />
                          <Typography>{feature}</Typography>
                        </Box>
                      ))}
                    </Stack>
                  </Grid>

                  {/* Process */}
                  <Grid item xs={12} lg={6}>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      Our Process:
                    </Typography>
                    <Stack spacing={2}>
                      {subService.process.map((step, pIndex) => (
                        <ProcessStep key={pIndex}>
                          <StepNumber bgcolor={service.color}>
                            {pIndex + 1}
                          </StepNumber>
                          <Typography sx={{ mt: 0.5 }}>{step}</Typography>
                        </ProcessStep>
                      ))}
                    </Stack>
                  </Grid>
                </Grid>

                {/* CTA */}
                <Paper sx={{ p: 3, mt: 4, backgroundColor: 'grey.50' }}>
                  <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} 
                       alignItems="center" justifyContent="space-between" gap={2}>
                    <Box>
                      <Typography variant="h6" fontWeight="bold" gutterBottom>
                        Need {subService.name}?
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Get expert assistance from our qualified professionals
                      </Typography>
                    </Box>
                    <a 
  href="https://wa.me/8667289653" 
  target="_blank" 
  rel="noopener noreferrer" 
  style={{ textDecoration: 'none' }}
>
                    <Button
                      variant="contained"
                      startIcon={<Phone />}
                      sx={{ 
                        backgroundColor: service.color,
                        '&:hover': { backgroundColor: service.color, filter: 'brightness(0.9)' }
                      }}
                    >
                     Connect via WhatsApp
                    </Button>
                    </a>
                  </Box>
                </Paper>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Container>
    );
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'grey.50' }}>
   

      {/* Main Content */}
      <main>
        {currentPage === 'main' ? (
          <MainPage />
        ) : (
          <ServiceDetailPage serviceKey={currentPage} />
        )}
      </main>

    </Box>
  );
};

export default ServicePages;