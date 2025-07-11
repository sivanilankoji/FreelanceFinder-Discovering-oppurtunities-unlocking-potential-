import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  IconButton,
  Divider,
} from '@mui/material';
import {
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  Email,
  Phone,
  LocationOn,
} from '@mui/icons-material';

const Footer: React.FC = () => {
  const footerSections = [
    {
      title: 'For Clients',
      links: [
        'Post a Project',
        'Find Freelancers',
        'How it Works',
        'Success Stories',
        'Client Resources',
      ],
    },
    {
      title: 'For Freelancers',
      links: [
        'Find Work',
        'Create Profile',
        'Freelancer Resources',
        'Skill Tests',
        'Success Tips',
      ],
    },
    {
      title: 'Company',
      links: [
        'About Us',
        'Careers',
        'Press',
        'Blog',
        'Contact',
      ],
    },
    {
      title: 'Support',
      links: [
        'Help Center',
        'Safety & Security',
        'Terms of Service',
        'Privacy Policy',
        'Community Guidelines',
      ],
    },
  ];

  const socialLinks = [
    { icon: <Facebook />, url: '#' },
    { icon: <Twitter />, url: '#' },
    { icon: <LinkedIn />, url: '#' },
    { icon: <Instagram />, url: '#' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#1e293b',
        color: 'white',
        pt: 6,
        pb: 3,
        mt: 8,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2,
              }}
            >
              SB Works
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, color: '#94a3b8' }}>
              Discovering Opportunities, Unlocking Potential. Connect with skilled freelancers 
              and transform your projects into reality.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  href={social.url}
                  sx={{
                    color: '#94a3b8',
                    '&:hover': {
                      color: '#60a5fa',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.2s ease-in-out',
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          {footerSections.map((section, index) => (
            <Grid item xs={12} sm={6} md={2} key={index}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, mb: 2, color: 'white' }}
              >
                {section.title}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {section.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    href="#"
                    sx={{
                      color: '#94a3b8',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      '&:hover': {
                        color: '#60a5fa',
                      },
                      transition: 'color 0.2s ease-in-out',
                    }}
                  >
                    {link}
                  </Link>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 4, borderColor: '#334155' }} />

        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="body2" sx={{ color: '#94a3b8' }}>
              © 2024 SB Works. All rights reserved. Empowering freelancers and clients worldwide.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: { xs: 'flex-start', md: 'flex-end' },
                gap: 3,
                flexWrap: 'wrap',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Email sx={{ fontSize: 16, color: '#94a3b8' }} />
                <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                  support@sbworks.com
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Phone sx={{ fontSize: 16, color: '#94a3b8' }} />
                <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                  +1 (555) 123-4567
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;