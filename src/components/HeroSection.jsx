import React from 'react';
import { Box, Typography, Button, Grid, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { YouTube, ArrowDownward } from '@mui/icons-material';

const HeroSection = React.memo(() => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Box
        sx={{
          py: { xs: 4, md: 6 },
          px: { xs: 2, md: 4 },
          textAlign: 'center',
          backgroundColor: '#F8FAFC', // Clean, light background
          position: 'relative',
          overflow: 'hidden',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '50px',
            background: 'linear-gradient(to top, #F8FAFC, transparent)', // Subtle wave effect
          },
        }}
      >
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                  fontWeight: 700,
                  color: '#333',
                  mb: 2,
                  textShadow: '0 1px 2px rgba(0,0,0,0.1)',
                }}
              >
                Empowering Education
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  color: '#555',
                  maxWidth: '450px',
                  mx: 'auto',
                  lineHeight: 1.7,
                }}
              >
                Join our YouTube channel for free live classes and top-tier study materials to ace your exams.
              </Typography>
            </motion.div>
            <Box sx={{ display: 'flex', gap: 1.5, justifyContent: 'center', flexWrap: 'wrap' }}>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  href="https://youtube.com" // Replace with your YouTube link
                  sx={{
                    px: 3.5,
                    py: 1,
                    borderRadius: 1,
                    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                    bgcolor: '#1976D2',
                    '&:hover': {
                      bgcolor: '#FF6D00',
                      boxShadow: '0 3px 8px rgba(0,0,0,0.2)',
                    },
                    textTransform: 'none',
                    fontSize: { xs: '0.85rem', md: '0.9rem' },
                  }}
                  startIcon={<YouTube fontSize="small" />}
                >
                  Subscribe Now
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  href="#courses" // Replace with your courses link
                  sx={{
                    px: 3.5,
                    py: 1,
                    borderRadius: 1,
                    borderColor: '#1976D2',
                    color: '#1976D2',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                    '&:hover': {
                      borderColor: '#FF6D00',
                      color: '#FF6D00',
                      boxShadow: '0 3px 8px rgba(0,0,0,0.2)',
                    },
                    textTransform: 'none',
                    fontSize: { xs: '0.85rem', md: '0.9rem' },
                  }}
                >
                  Explore Courses
                </Button>
              </motion.div>
            </Box>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ scale: 1.1 }}
            >
              <IconButton
                href="https://youtube.com" // Replace with your YouTube link
                sx={{
                  mt: 2,
                  color: '#555',
                  '&:hover': { color: '#FF6D00' },
                }}
              >
                <YouTube fontSize="medium" />
              </IconButton>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <Box
                component="img"
                src="/hero.png"
                alt="Student Chatting"
                sx={{
                  width: '100%',
                  maxWidth: '450px',
                  height: 'auto',
                  objectFit: 'cover',
                  display: 'block',
                  mx: 'auto',
                }}
                loading="lazy"
              />
            </motion.div>
          </Grid>
        </Grid>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8, repeat: 1, repeatType: 'reverse', repeatDelay: 3 }}
          sx={{ position: 'absolute', bottom: 8, left: '50%', transform: 'translateX(-50%)' }}
        >
         
        </motion.div>
      </Box>
    </motion.div>
  );
});

export default HeroSection;