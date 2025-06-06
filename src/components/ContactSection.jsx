import React, { useState } from 'react';
import {
  Box,
  Divider,
  Grid,
  Typography,
  Tooltip,
  IconButton,
  Button,
  Fab,
  useTheme
} from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const LocationSection = () => {
  const [mapError, setMapError] = useState(false);
  const [copied, setCopied] = useState(false);
  const theme = useTheme();

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Box sx={{ px: 2, py: 8, bgcolor: 'background.paper' }}>
      <Typography variant="h4" align="center" color="primary.main" fontWeight={700} gutterBottom>
        Visit Our Institute
      </Typography>
      <Typography
        variant="body1"
        align="center"
        color="text.secondary"
        mb={6}
        maxWidth={600}
        mx="auto"
      >
        We’re located in the heart of Faizabad, Uttar Pradesh. Reach us for any in-person queries or counseling.
      </Typography>

      <Grid container spacing={6} justifyContent="center" alignItems="flex-start">
        <Grid item xs={12} md={8}>
          <Tooltip title="Click to interact with the map">
            <Box
              sx={{
                width: { xs: 300, sm: 500, md: 700 },
                height: { xs: 250, sm: 350, md: 430 },
                borderRadius: 3,
                border: `2px solid ${theme.palette.primary.main}`,
                boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                overflow: 'hidden',
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.015)' }
              }}
            >
              {mapError ? (
                <Box
                  sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'grey.100',
                    color: 'error.main',
                    fontWeight: 600
                  }}
                >
                  Failed to load map. Please check your connection.
                </Box>
              ) : (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14323.524617146828!2d82.1140218!3d26.7754971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a07db89e022df%3A0x7c1d2a1766c2d5b5!2sFaizabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1717663188014!5m2!1sen!2sin"
                  style={{ width: '100%', height: '100%', border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Faizabad Location"
                  onError={() => setMapError(true)}
                />
              )}
            </Box>
          </Tooltip>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box sx={{ px: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="h6" color="text.primary" fontWeight={600}>
              Our Office
            </Typography>
            <Typography variant="body2" color="text.secondary">
              123 Learning Street<br />
              Faizabad, Uttar Pradesh, India<br />
              PIN – 224001
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: +91 98765 43210
            </Typography>
            <Button
              startIcon={<EmailIcon />}
              variant="outlined"
              color="primary"
              onClick={() => window.open('mailto:info@coachingcenter.com', '_blank')}
              sx={{ fontWeight: 600 }}
            >
              Connect via Email
            </Button>
            <Button
              startIcon={<WhatsAppIcon />}
              variant="contained"
              color="success"
              onClick={() => window.open('https://wa.me/919876543210', '_blank')}
              sx={{ fontWeight: 600 }}
            >
              Message on WhatsApp
            </Button>
          
            <Box display="flex" alignItems="center" gap={1}>
              <LocationOnIcon color="primary" />
              <Typography variant="body2" color="text.secondary">
                123 Learning Street, Faizabad
              </Typography>
              <Tooltip title={copied ? 'Copied!' : 'Copy Address'}>
                <IconButton onClick={() => handleCopy('123 Learning Street, Faizabad')} size="small">
                  <ContentCopyIcon fontSize="small" color="primary" />
                </IconButton>
              </Tooltip>
            </Box>
             <Divider sx={{ my: 0.5 }} />
            <Typography variant="subtitle2" color="text.primary" fontWeight={600}>
              Connect with us
            </Typography>
            <Box display="flex" gap={2}>
              <Tooltip title="Instagram">
                <IconButton onClick={() => window.open('https://instagram.com/yourhandle', '_blank')} sx={{ bgcolor: '#E1306C', color: '#fff' }}>
                  <InstagramIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Twitter">
                <IconButton onClick={() => window.open('https://twitter.com/yourhandle', '_blank')} sx={{ bgcolor: '#1DA1F2', color: '#fff' }}>
                  <TwitterIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="LinkedIn">
                <IconButton onClick={() => window.open('https://linkedin.com/in/yourprofile', '_blank')} sx={{ bgcolor: '#0A66C2', color: '#fff' }}>
                  <LinkedInIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Floating WhatsApp Button */}
      <Tooltip title="Chat with us on WhatsApp" placement="left">
        <Fab
          onClick={() => window.open('https://wa.me/919876543210', '_blank')}
          sx={{
            position: 'fixed',
            bottom: 16,
            right: 16,
            bgcolor: '#25D366',
            color: '#FFF',
            '&:hover': { bgcolor: '#1EBE55' }
          }}
        >
          <WhatsAppIcon />
        </Fab>
      </Tooltip>
    </Box>
  );
};

export default LocationSection;
