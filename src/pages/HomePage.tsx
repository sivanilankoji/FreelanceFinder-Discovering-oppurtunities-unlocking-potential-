import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
  Rating,
} from '@mui/material';
import {
  Search,
  Security,
  Speed,
  VerifiedUser,
  TrendingUp,
  People,
  Work,
  Star,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const stats = [
    { label: 'Active Freelancers', value: '10,000+', icon: <People /> },
    { label: 'Happy Clients', value: '5,000+', icon: <Star /> },
    { label: 'Projects Completed', value: '25,000+', icon: <Work /> },
    { label: 'Success Rate', value: '98%', icon: <TrendingUp /> },
  ];

  const features = [
    {
      icon: <Security />,
      title: 'Secure Transactions',
      description: 'Your payments are protected with bank-level security and escrow services.',
    },
    {
      icon: <Speed />,
      title: 'Real-time Updates',
      description: 'Stay informed with instant notifications about project progress and messages.',
    },
    {
      icon: <VerifiedUser />,
      title: 'Quality Assurance',
      description: 'Our admin team ensures every freelancer meets our high standards.',
    },
  ];

  const categories = [
    'Web Development',
    'Graphic Design',
    'Content Writing',
    'Digital Marketing',
    'Mobile Apps',
    'Data Science',
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Graphic Designer',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      comment: 'SB Works transformed my freelance career. The Sugar Rush logo project was just the beginning!',
    },
    {
      name: 'Mike Chen',
      role: 'Web Developer',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      comment: 'Amazing platform with great clients. The project management tools are top-notch.',
    },
    {
      name: 'Emily Davis',
      role: 'Content Writer',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      comment: 'Professional environment with fair pricing. Highly recommend to fellow freelancers.',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          py: 12,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 700,
                    mb: 3,
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                  }}
                >
                  Discovering Opportunities,{' '}
                  <span style={{ color: '#fbbf24' }}>Unlocking Potential</span>
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 4,
                    opacity: 0.9,
                    fontWeight: 400,
                    lineHeight: 1.6,
                  }}
                >
                  Connect with skilled freelancers and transform your projects into reality. 
                  Join thousands of successful collaborations on SB Works.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Button
                    component={Link}
                    to="/projects"
                    variant="contained"
                    size="large"
                    sx={{
                      backgroundColor: 'white',
                      color: 'primary.main',
                      px: 4,
                      py: 1.5,
                      '&:hover': {
                        backgroundColor: '#f8fafc',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.2s ease-in-out',
                    }}
                    startIcon={<Search />}
                  >
                    Find Projects
                  </Button>
                  <Button
                    component={Link}
                    to="/freelancers"
                    variant="outlined"
                    size="large"
                    sx={{
                      borderColor: 'white',
                      color: 'white',
                      px: 4,
                      py: 1.5,
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        borderColor: 'white',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.2s ease-in-out',
                    }}
                  >
                    Hire Talent
                  </Button>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    textAlign: 'center',
                  }}
                >
                  <img
                    src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Freelancer working"
                    style={{
                      width: '100%',
                      maxWidth: '500px',
                      borderRadius: '20px',
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
                    }}
                  />
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Container maxWidth="xl" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    textAlign: 'center',
                    p: 3,
                    height: '100%',
                    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
                    border: '1px solid #e2e8f0',
                  }}
                >
                  <Box
                    sx={{
                      display: 'inline-flex',
                      p: 2,
                      borderRadius: '50%',
                      backgroundColor: 'primary.main',
                      color: 'white',
                      mb: 2,
                    }}
                  >
                    {stat.icon}
                  </Box>
                  <Typography variant="h3" sx={{ fontWeight: 700, mb: 1, color: 'primary.main' }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {stat.label}
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Features Section */}
      <Box sx={{ backgroundColor: '#f8fafc', py: 8 }}>
        <Container maxWidth="xl">
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: 2,
              fontWeight: 700,
              color: 'text.primary',
            }}
          >
            Why Choose SB Works?
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: 'center',
              mb: 6,
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            We prioritize efficiency and transparency in the freelancing process
          </Typography>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card sx={{ p: 4, height: '100%', textAlign: 'center' }}>
                    <Box
                      sx={{
                        display: 'inline-flex',
                        p: 2,
                        borderRadius: '50%',
                        backgroundColor: 'secondary.light',
                        color: 'white',
                        mb: 3,
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Categories Section */}
      <Container maxWidth="xl" sx={{ py: 8 }}>
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            mb: 2,
            fontWeight: 700,
            color: 'text.primary',
          }}
        >
          Popular Categories
        </Typography>
        <Typography
          variant="h6"
          sx={{
            textAlign: 'center',
            mb: 6,
            color: 'text.secondary',
          }}
        >
          Explore diverse project opportunities
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
            justifyContent: 'center',
          }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Chip
                label={category}
                sx={{
                  px: 3,
                  py: 2,
                  fontSize: '1rem',
                  fontWeight: 500,
                  backgroundColor: 'primary.main',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.2s ease-in-out',
                  cursor: 'pointer',
                }}
              />
            </motion.div>
          ))}
        </Box>
      </Container>

      {/* Testimonials Section */}
      <Box sx={{ backgroundColor: '#f8fafc', py: 8 }}>
        <Container maxWidth="xl">
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: 2,
              fontWeight: 700,
              color: 'text.primary',
            }}
          >
            Success Stories
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: 'center',
              mb: 6,
              color: 'text.secondary',
            }}
          >
            Hear from our thriving community
          </Typography>
          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card sx={{ p: 4, height: '100%' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <Avatar
                        src={testimonial.avatar}
                        sx={{ width: 60, height: 60, mr: 2 }}
                      />
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                          {testimonial.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {testimonial.role}
                        </Typography>
                        <Rating value={testimonial.rating} readOnly size="small" />
                      </Box>
                    </Box>
                    <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
                      "{testimonial.comment}"
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
          color: 'white',
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 3,
              }}
            >
              Ready to Get Started?
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mb: 4,
                opacity: 0.9,
                maxWidth: '600px',
                mx: 'auto',
              }}
            >
              Join SB Works today and experience a new era of freelancing where your projects 
              are efficiently managed and collaborations flourish.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                component={Link}
                to="/projects"
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: 'white',
                  color: 'primary.main',
                  px: 4,
                  py: 1.5,
                  '&:hover': {
                    backgroundColor: '#f8fafc',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.2s ease-in-out',
                }}
              >
                Start as Client
              </Button>
              <Button
                component={Link}
                to="/dashboard"
                variant="outlined"
                size="large"
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderColor: 'white',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.2s ease-in-out',
                }}
              >
                Join as Freelancer
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;