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
  LinearProgress,
  Tab,
  Tabs,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Badge,
} from '@mui/material';
import {
  TrendingUp,
  Work,
  AttachMoney,
  Star,
  Visibility,
  Edit,
  Message,
  Notifications,
  Schedule,
  CheckCircle,
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
      id={`dashboard-tabpanel-${index}`}
      aria-labelledby={`dashboard-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

const DashboardPage: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const stats = [
    {
      title: 'Total Earnings',
      value: '$12,450',
      change: '+15%',
      icon: <AttachMoney />,
      color: 'success.main',
    },
    {
      title: 'Active Projects',
      value: '8',
      change: '+2',
      icon: <Work />,
      color: 'primary.main',
    },
    {
      title: 'Completed Projects',
      value: '89',
      change: '+12',
      icon: <CheckCircle />,
      color: 'info.main',
    },
    {
      title: 'Client Rating',
      value: '4.9',
      change: '+0.1',
      icon: <Star />,
      color: 'warning.main',
    },
  ];

  const activeProjects = [
    {
      id: 1,
      title: 'E-commerce Website Redesign',
      client: 'TechStart Solutions',
      progress: 75,
      deadline: '2024-02-15',
      budget: '$3,500',
      status: 'In Progress',
    },
    {
      id: 2,
      title: 'Mobile App UI Design',
      client: 'FitLife App',
      progress: 45,
      deadline: '2024-02-20',
      budget: '$2,800',
      status: 'In Progress',
    },
    {
      id: 3,
      title: 'Brand Identity Package',
      client: 'Green Earth Co.',
      progress: 90,
      deadline: '2024-02-10',
      budget: '$1,200',
      status: 'Review',
    },
  ];

  const recentProposals = [
    {
      id: 1,
      title: 'Logo Design for Restaurant Chain',
      submittedDate: '2024-01-28',
      budget: '$800 - $1,200',
      status: 'Pending',
      client: 'Foodie Delights',
    },
    {
      id: 2,
      title: 'Website Development for Startup',
      submittedDate: '2024-01-27',
      budget: '$4,000 - $6,000',
      status: 'Shortlisted',
      client: 'InnovateTech',
    },
    {
      id: 3,
      title: 'Social Media Graphics Package',
      submittedDate: '2024-01-26',
      budget: '$500 - $800',
      status: 'Declined',
      client: 'Social Buzz',
    },
  ];

  const notifications = [
    {
      id: 1,
      message: 'New message from TechStart Solutions',
      time: '2 hours ago',
      type: 'message',
    },
    {
      id: 2,
      message: 'Project milestone approved for FitLife App',
      time: '4 hours ago',
      type: 'approval',
    },
    {
      id: 3,
      message: 'Payment received: $1,200 from Green Earth Co.',
      time: '1 day ago',
      type: 'payment',
    },
    {
      id: 4,
      message: 'New project match: Logo Design for Tech Startup',
      time: '2 days ago',
      type: 'match',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Progress':
        return 'primary';
      case 'Review':
        return 'warning';
      case 'Completed':
        return 'success';
      case 'Pending':
        return 'default';
      case 'Shortlisted':
        return 'info';
      case 'Declined':
        return 'error';
      default:
        return 'default';
    }
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100"
              sx={{ width: 60, height: 60 }}
            />
            <Box>
              <Typography variant="h4" sx={{ fontWeight: 700 }}>
                Welcome back, Sarah!
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Here's what's happening with your freelance business
              </Typography>
            </Box>
          </Box>
          <Badge badgeContent={4} color="error">
            <IconButton sx={{ backgroundColor: 'background.paper', boxShadow: 1 }}>
              <Notifications />
            </IconButton>
          </Badge>
        </Box>
      </Box>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box>
                    <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {stat.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: stat.change.startsWith('+') ? 'success.main' : 'error.main',
                        fontWeight: 600,
                        mt: 1,
                      }}
                    >
                      {stat.change} this month
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: '50%',
                      backgroundColor: `${stat.color}15`,
                      color: stat.color,
                    }}
                  >
                    {stat.icon}
                  </Box>
                </Box>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Tabs */}
      <Paper sx={{ mb: 4 }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          sx={{ borderBottom: 1, borderColor: 'divider' }}
        >
          <Tab label="Active Projects" />
          <Tab label="Proposals" />
          <Tab label="Notifications" />
        </Tabs>

        <TabPanel value={tabValue} index={0}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
            Active Projects ({activeProjects.length})
          </Typography>
          <Grid container spacing={3}>
            {activeProjects.map((project) => (
              <Grid item xs={12} md={6} lg={4} key={project.id}>
                <Card sx={{ p: 3, height: '100%' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, flex: 1 }}>
                      {project.title}
                    </Typography>
                    <Chip
                      label={project.status}
                      color={getStatusColor(project.status) as any}
                      size="small"
                    />
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Client: {project.client}
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body2">Progress</Typography>
                      <Typography variant="body2">{project.progress}%</Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={project.progress}
                      sx={{ height: 8, borderRadius: 4 }}
                    />
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Typography variant="body2" color="text.secondary">
                      Deadline: {project.deadline}
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: 'success.main' }}>
                      {project.budget}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button variant="outlined" size="small" startIcon={<Visibility />}>
                      View
                    </Button>
                    <Button variant="contained" size="small" startIcon={<Message />}>
                      Message
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
            Recent Proposals
          </Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Project Title</TableCell>
                  <TableCell>Client</TableCell>
                  <TableCell>Budget</TableCell>
                  <TableCell>Submitted</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {recentProposals.map((proposal) => (
                  <TableRow key={proposal.id}>
                    <TableCell>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                        {proposal.title}
                      </Typography>
                    </TableCell>
                    <TableCell>{proposal.client}</TableCell>
                    <TableCell>{proposal.budget}</TableCell>
                    <TableCell>{proposal.submittedDate}</TableCell>
                    <TableCell>
                      <Chip
                        label={proposal.status}
                        color={getStatusColor(proposal.status) as any}
                        size="small"
                      />
                    </TableCell>
                    <TableCell>
                      <IconButton size="small">
                        <Visibility />
                      </IconButton>
                      <IconButton size="small">
                        <Edit />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>

        <TabPanel value={tabValue} index={2}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
            Recent Notifications
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {notifications.map((notification) => (
              <Card key={notification.id} sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box
                    sx={{
                      p: 1,
                      borderRadius: '50%',
                      backgroundColor: 'primary.light',
                      color: 'white',
                    }}
                  >
                    {notification.type === 'message' && <Message />}
                    {notification.type === 'approval' && <CheckCircle />}
                    {notification.type === 'payment' && <AttachMoney />}
                    {notification.type === 'match' && <Work />}
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body1">{notification.message}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {notification.time}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            ))}
          </Box>
        </TabPanel>
      </Paper>
    </Container>
  );
};

export default DashboardPage;