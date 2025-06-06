import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box, useMediaQuery } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';

const NavbarRouter = React.memo(() => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Courses', path: '/courses' },
    { label: 'About Us', path: '/about' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact Us', path: '/contact' },
  ];

  const drawer = (
    <Box sx={{ textAlign: 'center', bgcolor: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)', height: '100%', p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            background: 'linear-gradient(45deg, #1976D2, #FF6D00)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Coaching Center
        </Typography>
        <IconButton onClick={handleDrawerToggle} sx={{ color: '#1976D2' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <ListItem
              component={NavLink}
              to={item.path}
              onClick={handleDrawerToggle}
              sx={{
                py: 1.5,
                borderRadius: 1,
                '&:hover': {
                  bgcolor: 'rgba(25,118,210,0.1)',
                  color: '#FF6D00',
                  transform: 'translateX(5px)',
                },
                transition: 'all 0.3s ease',
                '&.active': {
                  color: '#FF6D00',
                  bgcolor: 'rgba(25,118,210,0.05)',
                },
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{ fontWeight: 500, fontSize: '1.1rem' }}
              />
            </ListItem>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: navItems.length * 0.1 }}
        >
          <ListItem sx={{ justifyContent: 'center', mt: 2 }}>
            <Button
              variant="contained"
              color="secondary"
              component={NavLink}
              to="/login"
              sx={{
                px: 4,
                py: 1.2,
                borderRadius: 2,
                boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                background: 'linear-gradient(45deg, #FF6D00, #F57C00)',
                '&:hover': { boxShadow: '0 6px 14px rgba(0,0,0,0.3)', transform: 'scale(1.05)' },
                textTransform: 'none',
              }}
            >
              Login
            </Button>
          </ListItem>
          <ListItem sx={{ justifyContent: 'center' }}>
            <Button
              variant="outlined"
              color="primary"
              component={NavLink}
              to="/signup"
              sx={{
                px: 4,
                py: 1.2,
                borderRadius: 2,
                borderColor: '#1976D2',
                color: '#1976D2',
                '&:hover': {
                  borderColor: '#FF6D00',
                  color: '#FF6D00',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                  transform: 'scale(1.05)',
                },
                textTransform: 'none',
              }}
            >
              Signup
            </Button>
          </ListItem>
        </motion.div>
      </List>
    </Box>
  );

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <AppBar
        position="sticky"
        sx={{
          bgcolor: 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(10px)',
          boxShadow: isScrolled ? '0 4px 16px rgba(0,0,0,0.2)' : '0 2px 8px rgba(0,0,0,0.1)',
          borderBottom: '1px solid rgba(25,118,210,0.15)',
          mb: 0,
          top: 0,
          zIndex: theme.zIndex.appBar,
          transition: 'all 0.3s ease',
          py: isScrolled ? 0 : 0.5,
        }}
      >
        <Toolbar sx={{ minHeight: { xs: 56, md: isScrolled ? 60 : 72 }, px: { xs: 2, md: 4 }, transition: 'min-height 0.3s ease' }}>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <motion.img
              src="/logo.png" // Replace with your logo
              alt="Coaching Center Logo"
              style={{ height: isScrolled ? 32 : 40, marginRight: 12, objectFit: 'contain' }}
              loading="lazy"
              whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
            />
            
          </Box>
          {isMobile ? (
            <>
              <IconButton
                color="primary"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{
                  '&:hover': { transform: 'scale(1.1)', color: '#FF6D00' },
                  transition: 'all 0.3s ease',
                }}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                sx={{
                  '& .MuiDrawer-paper': {
                    width: { xs: '80%', sm: 320 },
                    bgcolor: 'transparent',
                    backdropFilter: 'blur(10px)',
                  },
                }}
              >
                {drawer}
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, md: 2.5 } }}>
              {navItems.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    color="primary"
                    component={NavLink}
                    to={item.path}
                    sx={{
                      color: '#1976D2',
                      fontWeight: 500,
                      fontSize: { xs: '0.9rem', md: '1rem' },
                      textTransform: 'none',
                      px: 2,
                      position: 'relative',
                      '&:hover': {
                        color: '#FF6D00',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: -4,
                          left: 0,
                          width: '100%',
                          height: '2px',
                          background: 'linear-gradient(45deg, #1976D2, #FF6D00)',
                          transform: 'scaleX(1)',
                          transformOrigin: 'left',
                          transition: 'transform 0.3s ease',
                        },
                      },
                      '&.active': {
                        color: '#FF6D00',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: -4,
                          left: 0,
                          width: '100%',
                          height: '2px',
                          background: 'linear-gradient(45deg, #1976D2, #FF6D00)',
                          transform: 'scaleX(1)',
                        },
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: -4,
                        left: 0,
                        width: '100%',
                        height: '2px',
                        background: 'linear-gradient(45deg, #1976D2, #FF6D00)',
                        transform: 'scaleX(0)',
                        transformOrigin: 'left',
                        transition: 'transform 0.3s ease',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                </motion.div>
              ))}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="contained"
                  color="secondary"
                  component={NavLink}
                  to="/login"
                  sx={{
                    px: { xs: 2.5, md: 3.5 },
                    py: 1,
                    borderRadius: 2,
                    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                    background: 'linear-gradient(45deg, #FF6D00, #F57C00)',
                    '&:hover': { boxShadow: '0 6px 14px rgba(0,0,0,0.3)', transform: 'scale(1.05)' },
                    textTransform: 'none',
                    fontSize: { xs: '0.9rem', md: '1rem' },
                  }}
                >
                  Login
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outlined"
                  color="primary"
                  component={NavLink}
                  to="/signup"
                  sx={{
                    px: { xs: 2.5, md: 3.5 },
                    py: 1,
                    borderRadius: 2,
                    borderColor: '#1976D2',
                    color: '#1976D2',
                    '&:hover': {
                      borderColor: '#FF6D00',
                      color: '#FF6D00',
                      boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                      transform: 'scale(1.05)',
                    },
                    textTransform: 'none',
                    fontSize: { xs: '0.9rem', md: '1rem' },
                  }}
                >
                  Signup
                </Button>
              </motion.div>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </motion.div>
  );
});

export default NavbarRouter;