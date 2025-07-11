import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  Avatar,
  Rating,
  Tab,
  Tabs,
  Paper,
  Divider,
  LinearProgress,
} from '@mui/material';
import {
  LocationOn,
  Star,
  Verified,
  Schedule,
  Language,
  School,
  Work,
  Message,
  Favorite,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`profile-tabpanel-${index}`}
      aria-labelledby={`profile-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

const ProfilePage: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const freelancer = {
    name: 'Sarah Johnson',
    title: 'Expert Graphic Designer & Brand Specialist',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
    rating: 4.9,
    reviewCount: 127,
    hourlyRate: '$45/hr',
    location: 'New York, NY',
    memberSince: 'March 2020',
    responseTime: '1 hour',
    completedProjects: 89,
    verified: true,
    languages: ['English (Native)', 'Spanish (Conversational)'],
    description: `Passionate graphic designer with 5+ years of experience creating memorable brand identities. 
    I specialize in logo design, brand development, and visual storytelling that helps businesses connect with their audience. 
    Recently completed the successful Sugar Rush Bakery logo redesign project, which increased their brand recognition by 40%.`,
    skills: [
      { name: 'Logo Design', level: 95 },
      { name: 'Brand Identity', level: 90 },
      { name: 'Illustration', level: 85 },
      { name: 'Adobe Creative Suite', level: 95 },
      { name: 'Typography', level: 88 },
      { name: 'Print Design', level: 82 },
    ],
    education: [
      {
        degree: 'Bachelor of Fine Arts in Graphic Design',
        school: 'Parsons School of Design',
        year: '2018',
      },
      {
        degree: 'Certificate in Digital Marketing',
        school: 'Google Digital Academy',
        year: '2021',
      },
    ],
    experience: [
      {
        title: 'Senior Graphic Designer',
        company: 'Creative Agency NYC',
        period: '2020 - 2023',
        description: 'Led brand identity projects for Fortune 500 companies.',
      },
      {
        title: 'Freelance Designer',
        company: 'Self-employed',
        period: '2018 - Present',
        description: 'Providing design services to small and medium businesses.',
      },
    ],
  };

  const portfolio = [
    {
      id: 1,
      title: 'Sugar Rush Bakery Logo',
      category: 'Logo Design',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Complete brand identity redesign for artisanal bakery',
    },
    {
      id: 2,
      title: 'TechStart Brand Package',
      category: 'Brand Identity',
      image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Modern tech startup branding with logo and guidelines',
    },
    {
      id: 3,
      title: 'Eco-Friendly Product Labels',
      category: 'Package Design',
      image: 'https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Sustainable packaging design for organic products',
    },
    {
      id: 4,
      title: 'Restaurant Menu Design',
      category: 'Print Design',
      image: 'https://images.pexels.com/photos/196647/pexels-photo-196647.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Elegant menu design for fine dining restaurant',
    },
  ];

  const reviews = [
    {
      id: 1,
      client: 'Sugar Rush Bakery',
      avatar: 'https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 5,
      date: '2 weeks ago',
      comment: 'Sarah exceeded our expectations! The logo redesign perfectly captured our brand essence. Professional, creative, and delivered on time. Highly recommended!',
      project: 'Logo Redesign',
    },
    {
      id: 2,
      client: 'TechStart Solutions',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 5,
      date: '1 month ago',
      comment: 'Outstanding work on our brand identity. Sarah understood our vision and created something beyond what we imagined. Great communication throughout the project.',
      project: 'Brand Identity Package',
    },
    {
      id: 3,
      client: 'Green Earth Co.',
      avatar: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 4,
      date: '2 months ago',
      comment: 'Very professional and talented designer. The packaging design helped increase our product sales significantly. Will definitely work with Sarah again.',
      project: 'Package Design',
    },
  ];

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        {/* Profile Sidebar */}
        <Grid item xs={12} md={4}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card sx={{ p: 4, position: 'sticky', top: 100 }}>
              <Box sx={{ textAlign: 'center', mb: 3 }}>
                <Avatar
                  src={freelancer.avatar}
                  sx={{ width: 120, height: 120, mx: 'auto', mb: 2 }}
                />
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 1 }}>
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    {freelancer.name}
                  </Typography>
                  {freelancer.verified && (
                    <Verified sx={{ fontSize: 24, color: 'primary.main' }} />
                  )}
                </Box>
                <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
                  {freelancer.title}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 2 }}>
                  <Rating value={freelancer.rating} readOnly size="small" />
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    {freelancer.rating}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ({freelancer.reviewCount} reviews)
                  </Typography>
                </Box>
                <Typography variant="h5" sx={{ fontWeight: 700, color: 'success.main', mb: 3 }}>
                  {freelancer.hourlyRate}
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
                <Button
                  variant="contained"
                  fullWidth
                  startIcon={<Message />}
                  sx={{ fontWeight: 600 }}
                >
                  Contact
                </Button>
                <Button
                  variant="outlined"
                  sx={{ minWidth: 'auto', px: 2 }}
                >
                  <Favorite />
                </Button>
              </Box>

              <Divider sx={{ my: 3 }} />

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <LocationOn sx={{ fontSize: 20, color: 'text.secondary' }} />
                  <Typography variant="body2">{freelancer.location}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Schedule sx={{ fontSize: 20, color: 'text.secondary' }} />
                  <Typography variant="body2">Responds in {freelancer.responseTime}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Work sx={{ fontSize: 20, color: 'text.secondary' }} />
                  <Typography variant="body2">{freelancer.completedProjects} projects completed</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Star sx={{ fontSize: 20, color: 'text.secondary' }} />
                  <Typography variant="body2">Member since {freelancer.memberSince}</Typography>
                </Box>
              </Box>

              <Divider sx={{ my: 3 }} />

              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
                  Languages
                </Typography>
                {freelancer.languages.map((language, index) => (
                  <Typography key={index} variant="body2" sx={{ mb: 1 }}>
                    {language}
                  </Typography>
                ))}
              </Box>
            </Card>
          </motion.div>
        </Grid>

        {/* Main Content */}
        <Grid item xs={12} md={8}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Paper sx={{ mb: 4 }}>
              <Tabs
                value={tabValue}
                onChange={handleTabChange}
                sx={{ borderBottom: 1, borderColor: 'divider' }}
              >
                <Tab label="Overview" />
                <Tab label="Portfolio" />
                <Tab label="Reviews" />
                <Tab label="Experience" />
              </Tabs>

              <TabPanel value={tabValue} index={0}>
                <Box sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
                    About Me
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.7 }}>
                    {freelancer.description}
                  </Typography>

                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
                    Skills & Expertise
                  </Typography>
                  <Grid container spacing={2}>
                    {freelancer.skills.map((skill, index) => (
                      <Grid item xs={12} sm={6} key={index}>
                        <Box sx={{ mb: 2 }}>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                            <Typography variant="body2" sx={{ fontWeight: 500 }}>
                              {skill.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {skill.level}%
                            </Typography>
                          </Box>
                          <LinearProgress
                            variant="determinate"
                            value={skill.level}
                            sx={{ height: 6, borderRadius: 3 }}
                          />
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </TabPanel>

              <TabPanel value={tabValue} index={1}>
                <Box sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
                    Portfolio ({portfolio.length} projects)
                  </Typography>
                  <Grid container spacing={3}>
                    {portfolio.map((item) => (
                      <Grid item xs={12} sm={6} key={item.id}>
                        <Card
                          sx={{
                            '&:hover': {
                              transform: 'translateY(-4px)',
                              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                            },
                            transition: 'all 0.2s ease-in-out',
                            cursor: 'pointer',
                          }}
                        >
                          <Box
                            component="img"
                            src={item.image}
                            sx={{
                              width: '100%',
                              height: 200,
                              objectFit: 'cover',
                            }}
                          />
                          <CardContent>
                            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                              {item.title}
                            </Typography>
                            <Chip
                              label={item.category}
                              size="small"
                              sx={{ mb: 2, backgroundColor: 'primary.light', color: 'white' }}
                            />
                            <Typography variant="body2" color="text.secondary">
                              {item.description}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </TabPanel>

              <TabPanel value={tabValue} index={2}>
                <Box sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
                    Client Reviews ({reviews.length})
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    {reviews.map((review) => (
                      <Card key={review.id} sx={{ p: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                          <Avatar src={review.avatar} sx={{ width: 50, height: 50 }} />
                          <Box sx={{ flex: 1 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                                {review.client}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {review.date}
                              </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                              <Rating value={review.rating} readOnly size="small" />
                              <Chip label={review.project} size="small" variant="outlined" />
                            </Box>
                            <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                              {review.comment}
                            </Typography>
                          </Box>
                        </Box>
                      </Card>
                    ))}
                  </Box>
                </Box>
              </TabPanel>

              <TabPanel value={tabValue} index={3}>
                <Box sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
                    Work Experience
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mb: 4 }}>
                    {freelancer.experience.map((exp, index) => (
                      <Card key={index} sx={{ p: 3 }}>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                          {exp.title}
                        </Typography>
                        <Typography variant="subtitle1" color="primary.main" sx={{ mb: 1 }}>
                          {exp.company}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                          {exp.period}
                        </Typography>
                        <Typography variant="body1">
                          {exp.description}
                        </Typography>
                      </Card>
                    ))}
                  </Box>

                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
                    Education
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {freelancer.education.map((edu, index) => (
                      <Card key={index} sx={{ p: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <School sx={{ color: 'primary.main' }} />
                          <Box>
                            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                              {edu.degree}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {edu.school} • {edu.year}
                            </Typography>
                          </Box>
                        </Box>
                      </Card>
                    ))}
                  </Box>
                </Box>
              </TabPanel>
            </Paper>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProfilePage;