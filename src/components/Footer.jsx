import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { YouTube, Facebook, Twitter } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ py: 4, px: 2, backgroundColor: '#1976D2', color: '#fff', textAlign: 'center' }}>
      <Typography variant="body2" sx={{ mb: 2 }}>
        © 2025 Kanets India. All rights reserved.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 2 }}>
        <Link href="#" color="inherit"><YouTube /></Link>
        <Link href="#" color="inherit"><Facebook /></Link>
        <Link href="#" color="inherit"><Twitter /></Link>
      </Box>
      <Typography variant="body2">
        <Link href="#home" color="inherit" sx={{ mx: 1 }}>Home</Link> |
        <Link href="#about-us" color="inherit" sx={{ mx: 1 }}>About Us</Link> |
        <Link href="#faq" color="inherit" sx={{ mx: 1 }}>FAQ</Link> |
        <Link href="#contact-us" color="inherit" sx={{ mx: 1 }}>Contact Us</Link>
      </Typography>
    </Box>
  );
};

export default Footer;