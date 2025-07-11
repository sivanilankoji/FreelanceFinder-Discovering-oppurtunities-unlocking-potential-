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
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Rating,
  Paper,
  Badge,
} from '@mui/material';
import {
  Search,
  LocationOn,
  Star,
  Verified,
  Schedule,
  AttachMoney,
  Message,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const FreelancersPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [sortBy, setSortBy] = useState('rating');

  const freelancers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'Expert Graphic Designer & Brand Specialist',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 4.9,
      reviewCount: 127,
      hourlyRate: '$45/hr',
      location: 'New York, NY',
      skills: ['Logo Design', 'Brand Identity', 'Illustration', 'Adobe Creative Suite'],
      category: 'Design',
      completedProjects: 89,
      responseTime: '1 hour',
      online: true,
      verified: true,
      description: 'Passionate graphic designer with 5+ years of experience creating memorable brand identities. Recently completed the Sugar Rush Bakery logo redesign project.',
      portfolio: [
        'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=300',
        'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=300',
        'https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg?auto=compress&cs=tinysrgb&w=300',
      ],
    },
    {
      id: 2,
      name: 'Mike Chen',
      title: 'Full-Stack Developer & Tech Architect',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 4.8,
      reviewCount: 95,
      hourlyRate: '$75/hr',
      location: 'San Francisco, CA',
      skills: ['React', 'Node.js', 'MongoDB', 'AWS', 'TypeScript'],
      category: 'Development',
      completedProjects: 67,
      responseTime: '30 minutes',
      online: true,
      verified: true,
      description: 'Senior full-stack developer specializing in modern web applications. Expert in React ecosystem and cloud deployment.',
      portfolio: [
        'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=300',
        'https://images.pexels.com/photos/270349/pexels-photo-270349.jpeg?auto=compress&cs=tinysrgb&w=300',
      ],
    },
    {
      id: 3,
      name: 'Emily Davis',
      title: 'Content Writer & SEO Specialist',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 4.7,
      reviewCount: 156,
      hourlyRate: '$35/hr',
      location: 'Austin, TX',
      skills: ['Content Writing', 'SEO', 'Technical Writing', 'Copywriting'],
      category: 'Writing',
      completedProjects: 134,
      responseTime: '2 hours',
      online: false,
      verified: true,
      description: 'Professional content writer with expertise in technical and marketing content. Proven track record of improving search rankings.',
      portfolio: [],
    },
    {
      id: 4,
      name: 'Alex Rodriguez',
      title: 'UI/UX Designer & Product Designer',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 4.9,
      reviewCount: 78,
      hourlyRate: '$60/hr',
      location: 'Los Angeles, CA',
      skills: ['UI/UX Design', 'Figma', 'Prototyping', 'User Research'],
      category: 'Design',
      completedProjects: 45,
      responseTime: '1 hour',
      online: true,
      verified: true,
      description: 'Creative UI/UX designer focused on creating intuitive and beautiful user experiences for web and mobile applications.',
      portfolio: [
        'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=300',
        'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=300',
      ],
    },
    {
      id: 5,
      name: 'Lisa Wang',
      title: 'Digital Marketing Strategist',
      avatar: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 4.6,
      reviewCount: 89,
      hourlyRate: '$50/hr',
      location: 'Miami, FL',
      skills: ['Social Media Marketing', 'PPC', 'Analytics', 'Content Strategy'],
      category: 'Marketing',
      completedProjects: 72,
      responseTime: '3 hours',
      online: true,
      verified: false,
      description: 'Results-driven digital marketing specialist with expertise in social media campaigns and performance marketing.',
      portfolio: [],
    },
    {
      id: 6,
      name: 'David Kim',
      title: 'Data Scientist & Analytics Expert',
      avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 4.8,
      reviewCount: 43,
      hourlyRate: '$80/hr',
      location: 'Seattle, WA',
      skills: ['Python', 'Machine Learning', 'Tableau', 'SQL', 'Statistics'],
      category: 'Data Science',
      completedProjects: 28,
      responseTime: '4 hours',
      online: false,
      verified: true,
      description: 'Experienced data scientist specializing in predictive analytics and business intelligence solutions.',
      portfolio: [],
    },
  ];

  const categories = ['All', 'Design', 'Development', 'Writing', 'Marketing', 'Data Science'];

  const filteredFreelancers = freelancers.filter(freelancer => {
    const matchesSearch = freelancer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         freelancer.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         freelancer.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = category === '' || category === 'All' || freelancer.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            mb: 2,
            background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Find Expert Freelancers
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Connect with skilled professionals ready to bring your projects to life
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* Filters Sidebar */}
        <Grid item xs={12} md={3}>
          <Paper sx={{ p: 3, position: 'sticky', top: 100 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
              Filter Freelancers
            </Typography>

            <Box sx={{ mb: 3 }}>
              <TextField
                fullWidth
                placeholder="Search freelancers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: <Search sx={{ mr: 1, color: 'text.secondary' }} />,
                }}
              />
            </Box>

            <Box sx={{ mb: 3 }}>
              <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select
                  value={category}
                  label="Category"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {categories.map((cat) => (
                    <MenuItem key={cat} value={cat === 'All' ? '' : cat}>
                      {cat}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            <Box sx={{ mb: 3 }}>
              <FormControl fullWidth>
                <InputLabel>Sort By</InputLabel>
                <Select
                  value={sortBy}
                  label="Sort By"
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <MenuItem value="rating">Highest Rated</MenuItem>
                  <MenuItem value="reviews">Most Reviews</MenuItem>
                  <MenuItem value="rate-low">Lowest Rate</MenuItem>
                  <MenuItem value="rate-high">Highest Rate</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Paper>
        </Grid>

        {/* Freelancers List */}
        <Grid item xs={12} md={9}>
          <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6">
              {filteredFreelancers.length} freelancers found
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {filteredFreelancers.map((freelancer, index) => (
              <Grid item xs={12} lg={6} key={freelancer.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      p: 3,
                      height: '100%',
                      position: 'relative',
                      '&:hover': {
                        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.2s ease-in-out',
                    }}
                  >
                    {freelancer.online && (
                      <Badge
                        color="success"
                        variant="dot"
                        sx={{
                          position: 'absolute',
                          top: 16,
                          right: 16,
                          '& .MuiBadge-dot': {
                            width: 12,
                            height: 12,
                          },
                        }}
                      />
                    )}

                    <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                      <Avatar
                        src={freelancer.avatar}
                        sx={{ width: 80, height: 80, mr: 2 }}
                      />
                      <Box sx={{ flex: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                          <Typography variant="h6" sx={{ fontWeight: 600 }}>
                            {freelancer.name}
                          </Typography>
                          {freelancer.verified && (
                            <Verified sx={{ fontSize: 20, color: 'primary.main' }} />
                          )}
                        </Box>
                        <Typography
                          variant="subtitle1"
                          sx={{ color: 'text.secondary', mb: 1 }}
                        >
                          {freelancer.title}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <Rating value={freelancer.rating} readOnly size="small" />
                            <Typography variant="body2" sx={{ fontWeight: 600 }}>
                              {freelancer.rating}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              ({freelancer.reviewCount} reviews)
                            </Typography>
                          </Box>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <LocationOn sx={{ fontSize: 16, color: 'text.secondary' }} />
                          <Typography variant="body2" color="text.secondary">
                            {freelancer.location}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>

                    <Typography
                      variant="body2"
                      sx={{ mb: 3, color: 'text.secondary', lineHeight: 1.6 }}
                    >
                      {freelancer.description}
                    </Typography>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                      {freelancer.skills.slice(0, 4).map((skill) => (
                        <Chip
                          key={skill}
                          label={skill}
                          size="small"
                          sx={{
                            backgroundColor: 'primary.light',
                            color: 'white',
                            fontWeight: 500,
                          }}
                        />
                      ))}
                      {freelancer.skills.length > 4 && (
                        <Chip
                          label={`+${freelancer.skills.length - 4} more`}
                          size="small"
                          variant="outlined"
                        />
                      )}
                    </Box>

                    {freelancer.portfolio.length > 0 && (
                      <Box sx={{ mb: 3 }}>
                        <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                          Portfolio
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                          {freelancer.portfolio.slice(0, 3).map((image, idx) => (
                            <Box
                              key={idx}
                              component="img"
                              src={image}
                              sx={{
                                width: 60,
                                height: 60,
                                borderRadius: 1,
                                objectFit: 'cover',
                              }}
                            />
                          ))}
                        </Box>
                      </Box>
                    )}

                    <Grid container spacing={2} alignItems="center">
                      <Grid item xs={12} sm={6}>
                        <Box>
                          <Typography variant="h6" sx={{ fontWeight: 700, color: 'success.main', mb: 1 }}>
                            {freelancer.hourlyRate}
                          </Typography>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                            <Typography variant="body2" color="text.secondary">
                              {freelancer.completedProjects} projects completed
                            </Typography>
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <Schedule sx={{ fontSize: 14, color: 'text.secondary' }} />
                            <Typography variant="body2" color="text.secondary">
                              Responds in {freelancer.responseTime}
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end' }}>
                          <Button
                            variant="outlined"
                            startIcon={<Message />}
                            sx={{ px: 2 }}
                          >
                            Message
                          </Button>
                          <Button
                            variant="contained"
                            sx={{
                              px: 3,
                              fontWeight: 600,
                              '&:hover': {
                                transform: 'translateY(-1px)',
                              },
                              transition: 'all 0.2s ease-in-out',
                            }}
                          >
                            Hire Now
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FreelancersPage;