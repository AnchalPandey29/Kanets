import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import NavbarRouter from './components/NavbarRouter';
import Carousel from './components/Carousel';
import HeroSection from './components/HeroSection';
import Courses from './components/Courses';
import AboutSection from './components/AboutSection';
import FAQSection from './components/FAQ';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import theme from './theme';

const NotFound = () => (
  <Box sx={{ textAlign: 'center', py: 8, px: 2, bgcolor: '#F8FAFC' }}>
    <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, color: '#333', mb: 2 }}>
      404 - Page Not Found
    </Typography>
    <Typography variant="body1" sx={{ fontSize: { xs: '1rem', md: '1.2rem' }, color: '#555', mb: 3 }}>
      Sorry, the page you're looking for doesn't exist.
    </Typography>
    <Button
      variant="contained"
      color="primary"
      href="/"
      sx={{
        px: 4,
        py: 1,
        borderRadius: '8px',
        bgcolor: '#1976D2',
        '&:hover': { bgcolor: '#FF6D00' },
        textTransform: 'none',
      }}
    >
      Return to Home
    </Button>
  </Box>
);

const Home = () => (
  <>
    <Carousel />
    <HeroSection />
  </>
);

const App = React.memo(() => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box sx={{ m: 0, p: 0 }}>
          <NavbarRouter />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/about" element={<AboutSection/>} />
            <Route path="/faq" element={<FAQSection />} />
            <Route path="/contact" element={<ContactSection />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
});

export default App;