import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Badge,
} from '@mui/material';
import {
  Notifications,
  AccountCircle,
  Work,
  Dashboard,
  Person,
  ExitToApp,
} from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [notificationAnchor, setNotificationAnchor] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNotificationMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setNotificationAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setNotificationAnchor(null);
  };

  const menuItems = [
    { label: 'Dashboard', icon: <Dashboard />, path: '/dashboard' },
    { label: 'Profile', icon: <Person />, path: '/profile/1' },
    { label: 'Logout', icon: <ExitToApp />, path: '/' },
  ];

  const notifications = [
    'New project match: Logo Design for Tech Startup',
    'Proposal accepted for Website Development',
    'Payment received: $500 for Mobile App UI',
  ];

  return (
    <AppBar 
      position="sticky" 
      sx={{ 
        backgroundColor: 'white',
        boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
        borderBottom: '1px solid #e2e8f0'
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography
                variant="h4"
                component={Link}
                to="/"
                sx={{
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textDecoration: 'none',
                  mr: 4,
                }}
              >
                SB Works
              </Typography>
            </Box>
          </motion.div>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <Button
              component={Link}
              to="/projects"
              sx={{ color: 'text.primary', fontWeight: 500 }}
            >
              Find Projects
            </Button>
            <Button
              component={Link}
              to="/freelancers"
              sx={{ color: 'text.primary', fontWeight: 500 }}
            >
              Find Talent
            </Button>
            <Button
              component={Link}
              to="/dashboard"
              sx={{ color: 'text.primary', fontWeight: 500 }}
            >
              Dashboard
            </Button>

            <IconButton
              onClick={handleNotificationMenuOpen}
              sx={{ color: 'text.primary' }}
            >
              <Badge badgeContent={3} color="error">
                <Notifications />
              </Badge>
            </IconButton>

            <IconButton onClick={handleProfileMenuOpen}>
              <Avatar
                sx={{
                  width: 40,
                  height: 40,
                  background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                }}
              >
                S
              </Avatar>
            </IconButton>
          </Box>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            {menuItems.map((item) => (
              <MenuItem
                key={item.label}
                onClick={() => {
                  navigate(item.path);
                  handleMenuClose();
                }}
                sx={{ minWidth: 200 }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  {item.icon}
                  {item.label}
                </Box>
              </MenuItem>
            ))}
          </Menu>

          <Menu
            anchorEl={notificationAnchor}
            open={Boolean(notificationAnchor)}
            onClose={handleMenuClose}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            {notifications.map((notification, index) => (
              <MenuItem key={index} onClick={handleMenuClose} sx={{ maxWidth: 300 }}>
                <Typography variant="body2">{notification}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;