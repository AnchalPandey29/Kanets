import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { Box, Typography, Button, IconButton, LinearProgress } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { YouTube, School, Download, Pause, PlayArrow } from '@mui/icons-material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const slides = [
  {
    title: 'Join Our YouTube Live Classes',
    description: 'Learn from top educators with interactive YouTube sessions.',
    buttonText: 'Watch Now',
    buttonLink: 'https://youtube.com', // Replace with your YouTube link
    icon: <YouTube />,
    backgroundImage: 'https://static.vecteezy.com/system/resources/previews/014/635/455/non_2x/trendy-education-concepts-vector.jpg',
  },
  {
    title: 'Explore Our Courses',
    description: 'Comprehensive courses for all competitive exams.',
    buttonText: 'Enroll Now',
    buttonLink: '#courses', // Replace with your course page link
    icon: <School />,
    backgroundImage: 'https://t4.ftcdn.net/jpg/02/43/22/71/360_F_243227135_0MKgZJefxBmaClJmhFdgfSByHI4n8UVy.jpg',
  },
  {
    title: 'Free Study Materials',
    description: 'Access high-quality resources for free on our channel.',
    buttonText: 'Download Now',
    buttonLink: '#downloads', // Replace with your download link
    icon: <Download />,
    backgroundImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80',
  },
];

const Carousel = React.memo(() => {
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  // Progress bar animation for autoplay
  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 2.5)); // 4s interval = 100/40
      }, 100);
      return () => clearInterval(timer);
    }
  }, [isPaused]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: !isPaused,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    nextArrow: (
      <IconButton
        sx={{
          color: '#fff',
          bgcolor: 'rgba(0,0,0,0.4)',
          p: 1,
          '&:hover': { bgcolor: 'rgba(0,0,0,0.6)', transform: 'scale(1.1)' },
          transition: 'all 0.3s ease',
        }}
      >
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
        </svg>
      </IconButton>
    ),
    prevArrow: (
      <IconButton
        sx={{
          color: '#fff',
          bgcolor: 'rgba(0,0,0,0.4)',
          p: 1,
          '&:hover': { bgcolor: 'rgba(0,0,0,0.6)', transform: 'scale(1.1)' },
          transition: 'all 0.3s ease',
        }}
      >
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 18l1.41-1.41L10.83 12l4.58-4.59L14 6l-6 6z" />
        </svg>
      </IconButton>
    ),
    appendDots: (dots) => (
      <Box sx={{ bottom: 12, '& .slick-active button': { background: '#FF6D00', transform: 'scale(1.2)' } }}>
        <ul style={{ margin: 0, padding: 0 }}>{dots}</ul>
      </Box>
    ),
    customPaging: () => (
      <Button
        sx={{
          width: 10,
          height: 10,
          minWidth: 0,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.8)',
          transition: 'all 0.3s ease',
          '&:hover': { background: '#FF6D00', transform: 'scale(1.2)' },
        }}
      />
    ),
  };

  const handleTogglePause = () => {
    setIsPaused((prev) => !prev);
    setProgress(0); // Reset progress on pause/play
  };

  return (
    <Box
      sx={{
        width: '100%',
        my: 0, // No margin to ensure flush with Navbar
        position: 'relative',
        borderRadius: 2,
        overflow: 'hidden',
        boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
        border: '1px solid rgba(255,255,255,0.15)',
      }}
    >
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <AnimatePresence key={index}>
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              onClick={handleTogglePause}
            >
              <Box
                sx={{
                  height: { xs: '200px', md: '300px' }, // Reduced height
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${slide.backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  px: { xs: 2, md: 4 },
                  position: 'relative',
                  cursor: 'pointer',
                }}
              >
                <Box
                  sx={{
                    backdropFilter: 'blur(4px)', // Reduced blur for cleaner look
                    background: 'rgba(255,255,255,0.15)',
                    borderRadius: 2,
                    p: { xs: 2, md: 3 },
                    maxWidth: '700px',
                    border: '1px solid rgba(255,255,255,0.15)',
                  }}
                >
                  <motion.div
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.05, 1],
                        transition: { repeat: Infinity, duration: 2.5 },
                      }}
                      sx={{
                        color: '#fff',
                        background: 'linear-gradient(45deg, #FF6D00, #1976D2)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontSize: { xs: 32, md: 48 },
                        mb: 1,
                        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
                      }}
                    >
                      {slide.icon}
                    </motion.div>
                  </motion.div>
                  <motion.div
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <Typography
                      variant="h2"
                      sx={{
                        fontSize: { xs: '1.8rem', md: '2.8rem' }, // Smaller typography
                        fontWeight: 700,
                        mb: 1,
                        color: '#fff',
                        textShadow: '1px 1px 4px rgba(0,0,0,0.3)',
                      }}
                    >
                      {slide.title}
                    </Typography>
                  </motion.div>
                  <motion.div
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        mb: 2,
                        maxWidth: '600px',
                        fontSize: { xs: '0.9rem', md: '1.1rem' },
                        color: '#fff',
                        textShadow: '1px 1px 3px rgba(0,0,0,0.2)',
                      }}
                    >
                      {slide.description}
                    </Typography>
                  </motion.div>
                  <motion.div
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="contained"
                      color="secondary"
                      size="large"
                      href={slide.buttonLink}
                      sx={{
                        px: 4,
                        py: 1,
                        borderRadius: 2,
                        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                        background: 'linear-gradient(45deg, #FF6D00, #F57C00)',
                        '&:hover': {
                          boxShadow: '0 6px 12px rgba(0,0,0,0.3)',
                          background: 'linear-gradient(45deg, #F57C00, #FF6D00)',
                        },
                        textTransform: 'none',
                      }}
                    >
                      {slide.buttonText}
                    </Button>
                  </motion.div>
                </Box>
                <IconButton
                  onClick={handleTogglePause}
                  sx={{
                    position: 'absolute',
                    bottom: 16,
                    right: 16,
                    color: '#fff',
                    bgcolor: 'rgba(0,0,0,0.4)',
                    p: 0.8,
                    '&:hover': { bgcolor: 'rgba(0,0,0,0.6)' },
                    transition: 'all 0.3s ease',
                  }}
                >
                  {isPaused ? <PlayArrow fontSize="small" /> : <Pause fontSize="small" />}
                </IconButton>
              </Box>
            </motion.div>
          </AnimatePresence>
        ))}
      </Slider>
      <Box sx={{ mt: 0.5, px: 2 }}>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            height: 4, // Slimmer progress bar
            borderRadius: 2,
            backgroundColor: 'rgba(255,255,255,0.15)',
            '& .MuiLinearProgress-bar': { background: 'linear-gradient(45deg, #1976D2, #FF6D00)' },
          }}
        />
      </Box>
    </Box>
  );
});

export default Carousel;