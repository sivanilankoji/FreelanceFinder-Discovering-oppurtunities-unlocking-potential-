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
  Slider,
  Paper,
  Divider,
} from '@mui/material';
import {
  Search,
  LocationOn,
  Schedule,
  AttachMoney,
  Person,
  Visibility,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const ProjectsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [budgetRange, setBudgetRange] = useState<number[]>([0, 10000]);
  const [sortBy, setSortBy] = useState('newest');

  const projects = [
    {
      id: 1,
      title: 'Logo Redesign for Sugar Rush Bakery',
      description: 'We need a modern, eye-catching logo that reflects our artisanal bakery brand. The design should be warm, inviting, and suitable for both digital and print media.',
      client: {
        name: 'Sugar Rush Bakery',
        avatar: 'https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=150',
        rating: 4.8,
        location: 'New York, NY',
      },
      budget: '$500 - $1,000',
      proposals: 12,
      timePosted: '2 hours ago',
      skills: ['Graphic Design', 'Logo Design', 'Brand Identity'],
      category: 'Design',
      featured: true,
    },
    {
      id: 2,
      title: 'E-commerce Website Development',
      description: 'Looking for an experienced developer to build a modern e-commerce platform with payment integration, inventory management, and responsive design.',
      client: {
        name: 'TechStart Solutions',
        avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
        rating: 4.9,
        location: 'San Francisco, CA',
      },
      budget: '$3,000 - $5,000',
      proposals: 8,
      timePosted: '5 hours ago',
      skills: ['React', 'Node.js', 'MongoDB', 'Payment Integration'],
      category: 'Development',
      featured: false,
    },
    {
      id: 3,
      title: 'Content Writing for Tech Blog',
      description: 'Seeking a skilled content writer to create engaging articles about emerging technologies, AI, and software development trends.',
      client: {
        name: 'Digital Insights',
        avatar: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150',
        rating: 4.7,
        location: 'Austin, TX',
      },
      budget: '$50 - $100 per article',
      proposals: 15,
      timePosted: '1 day ago',
      skills: ['Content Writing', 'Technical Writing', 'SEO'],
      category: 'Writing',
      featured: false,
    },
    {
      id: 4,
      title: 'Mobile App UI/UX Design',
      description: 'Design a user-friendly mobile app interface for a fitness tracking application. Need wireframes, mockups, and interactive prototypes.',
      client: {
        name: 'FitLife App',
        avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150',
        rating: 4.6,
        location: 'Los Angeles, CA',
      },
      budget: '$2,000 - $3,500',
      proposals: 6,
      timePosted: '3 days ago',
      skills: ['UI/UX Design', 'Figma', 'Mobile Design', 'Prototyping'],
      category: 'Design',
      featured: true,
    },
    {
      id: 5,
      title: 'Social Media Marketing Campaign',
      description: 'Create and manage a comprehensive social media marketing campaign for a new product launch across multiple platforms.',
      client: {
        name: 'Brand Boost',
        avatar: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=150',
        rating: 4.5,
        location: 'Miami, FL',
      },
      budget: '$1,500 - $2,500',
      proposals: 20,
      timePosted: '1 week ago',
      skills: ['Social Media Marketing', 'Content Creation', 'Analytics'],
      category: 'Marketing',
      featured: false,
    },
    {
      id: 6,
      title: 'Data Analysis and Visualization',
      description: 'Analyze sales data and create interactive dashboards to help identify trends and opportunities for business growth.',
      client: {
        name: 'DataDriven Corp',
        avatar: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=150',
        rating: 4.8,
        location: 'Seattle, WA',
      },
      budget: '$2,500 - $4,000',
      proposals: 4,
      timePosted: '4 days ago',
      skills: ['Data Analysis', 'Python', 'Tableau', 'SQL'],
      category: 'Data Science',
      featured: false,
    },
  ];

  const categories = ['All', 'Design', 'Development', 'Writing', 'Marketing', 'Data Science'];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === '' || category === 'All' || project.category === category;
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
          Find Your Perfect Project
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Discover opportunities that match your skills and expertise
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* Filters Sidebar */}
        <Grid item xs={12} md={3}>
          <Paper sx={{ p: 3, position: 'sticky', top: 100 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
              Filter Projects
            </Typography>

            <Box sx={{ mb: 3 }}>
              <TextField
                fullWidth
                placeholder="Search projects..."
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
              <Typography variant="subtitle2" sx={{ mb: 2 }}>
                Budget Range
              </Typography>
              <Slider
                value={budgetRange}
                onChange={(_, newValue) => setBudgetRange(newValue as number[])}
                valueLabelDisplay="auto"
                min={0}
                max={10000}
                step={100}
                valueLabelFormat={(value) => `$${value}`}
              />
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                <Typography variant="caption">${budgetRange[0]}</Typography>
                <Typography variant="caption">${budgetRange[1]}</Typography>
              </Box>
            </Box>

            <Box sx={{ mb: 3 }}>
              <FormControl fullWidth>
                <InputLabel>Sort By</InputLabel>
                <Select
                  value={sortBy}
                  label="Sort By"
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <MenuItem value="newest">Newest First</MenuItem>
                  <MenuItem value="budget-high">Highest Budget</MenuItem>
                  <MenuItem value="budget-low">Lowest Budget</MenuItem>
                  <MenuItem value="proposals">Fewest Proposals</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Paper>
        </Grid>

        {/* Projects List */}
        <Grid item xs={12} md={9}>
          <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6">
              {filteredProjects.length} projects found
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {filteredProjects.map((project, index) => (
              <Grid item xs={12} key={project.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      p: 3,
                      border: project.featured ? '2px solid #fbbf24' : '1px solid #e2e8f0',
                      position: 'relative',
                      '&:hover': {
                        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.2s ease-in-out',
                    }}
                  >
                    {project.featured && (
                      <Chip
                        label="Featured"
                        sx={{
                          position: 'absolute',
                          top: 16,
                          right: 16,
                          backgroundColor: '#fbbf24',
                          color: 'white',
                          fontWeight: 600,
                        }}
                      />
                    )}

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 600,
                          color: 'primary.main',
                          cursor: 'pointer',
                          '&:hover': { textDecoration: 'underline' },
                        }}
                      >
                        {project.title}
                      </Typography>
                    </Box>

                    <Typography
                      variant="body1"
                      sx={{ mb: 3, color: 'text.secondary', lineHeight: 1.6 }}
                    >
                      {project.description}
                    </Typography>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                      {project.skills.map((skill) => (
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
                    </Box>

                    <Divider sx={{ my: 2 }} />

                    <Grid container spacing={2} alignItems="center">
                      <Grid item xs={12} sm={6}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <Avatar
                            src={project.client.avatar}
                            sx={{ width: 40, height: 40 }}
                          />
                          <Box>
                            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                              {project.client.name}
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                              <LocationOn sx={{ fontSize: 14, color: 'text.secondary' }} />
                              <Typography variant="caption" color="text.secondary">
                                {project.client.location}
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                              <AttachMoney sx={{ fontSize: 16, color: 'success.main' }} />
                              <Typography variant="subtitle2" sx={{ fontWeight: 600, color: 'success.main' }}>
                                {project.budget}
                              </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                <Person sx={{ fontSize: 14, color: 'text.secondary' }} />
                                <Typography variant="caption" color="text.secondary">
                                  {project.proposals} proposals
                                </Typography>
                              </Box>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                <Schedule sx={{ fontSize: 14, color: 'text.secondary' }} />
                                <Typography variant="caption" color="text.secondary">
                                  {project.timePosted}
                                </Typography>
                              </Box>
                            </Box>
                          </Box>
                          <Button
                            variant="contained"
                            sx={{
                              px: 3,
                              py: 1,
                              fontWeight: 600,
                              '&:hover': {
                                transform: 'translateY(-1px)',
                              },
                              transition: 'all 0.2s ease-in-out',
                            }}
                          >
                            Submit Proposal
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

export default ProjectsPage;