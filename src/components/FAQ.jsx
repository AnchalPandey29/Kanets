import React, { useState } from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  InputAdornment,
  Chip,
  Button,
  IconButton,
  Grid
} from '@mui/material';
import { motion } from 'framer-motion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const faqs = [
  {
    question: "What is the refund policy?",
    answer: "We offer a 30-day money-back guarantee if you're not satisfied with the course.",
    isPopular: true
  },
  {
    question: "How do I access my course materials?",
    answer: "Once enrolled, you can access all course materials through your dashboard.",
    isPopular: false
  },
  {
    question: "Can I learn at my own pace?",
    answer: "Yes! All our courses are self-paced, allowing you to learn whenever and wherever you want.",
    isPopular: false
  },
  {
    question: "Are certificates provided upon completion?",
    answer: "Yes, you will receive a certificate of completion for each course you finish.",
    isPopular: true
  },
  {
    question: "What support is available if I have questions?",
    answer: "We offer 24/7 support via email, live chat, and a community forum.",
    isPopular: false
  }
];

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expanded, setExpanded] = useState(false);
  const [feedback, setFeedback] = useState({});

  const handleSearch = (event) => setSearchTerm(event.target.value.toLowerCase());
  const handleAccordionChange = (panel) => (event, isExpanded) =>
    setExpanded(isExpanded ? panel : false);
  const handleFeedback = (index, type) =>
    setFeedback((prev) => ({ ...prev, [index]: type }));

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm) ||
      faq.answer.toLowerCase().includes(searchTerm)
  );

  return (
    <Box
      sx={{
        px: { xs: 2, md: 6 },
        py: { xs: 6, md: 10 },
        position: 'relative',
        bgcolor: 'background.default',
        overflow: 'hidden'
      }}
    >
      {/* Subtle Background Gradient */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #1976D220, #FFFFFF)',
          zIndex: 0
        }}
      />

      <Box sx={{ position: 'relative', zIndex: 1 }}>
        {/* Header Text */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            align="center"
            color="primary.main"
            fontWeight={700}
            mb={2}
            sx={{ fontSize: { xs: '2rem', md: '3rem' } }}
          >
            Frequently Asked Questions
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="text.secondary"
            mb={4}
            sx={{
              fontSize: { xs: '1rem', md: '1.1rem' },
              maxWidth: 600,
              mx: 'auto'
            }}
          >
            Find answers to common questions about our courses, policies, and support.
          </Typography>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mb: 6
            }}
          >
            <TextField
              variant="outlined"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={handleSearch}
              sx={{
                width: '100%',
                maxWidth: 600,
                bgcolor: 'white',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                borderRadius: 2
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color="primary" />
                  </InputAdornment>
                )
              }}
            />
          </Box>
        </motion.div>

        {/* FAQs */}
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={10}>
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Accordion
                    expanded={expanded === `panel${index}`}
                    onChange={handleAccordionChange(`panel${index}`)}
                    sx={{
                      mb: 2,
                      borderRadius: 2,
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                      bgcolor: 'white',
                      '&:hover': {
                        boxShadow: '0 6px 16px rgba(0,0,0,0.15)'
                      }
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon color="primary" />}
                      sx={{ px: 3, py: 1.5 }}
                    >
                      <Box display="flex" alignItems="center" gap={1}>
                        <Typography
                          variant="h6"
                          fontWeight={600}
                          sx={{ fontSize: { xs: '1rem', md: '1.1rem' } }}
                        >
                          {faq.question}
                        </Typography>
                        {faq.isPopular && (
                          <Chip
                            label="Popular"
                            color="primary"
                            size="small"
                            sx={{ fontWeight: 600 }}
                          />
                        )}
                      </Box>
                    </AccordionSummary>
                    <AccordionDetails sx={{ px: 3, py: 2, bgcolor: '#F9FAFB' }}>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ fontSize: { xs: '0.9rem', md: '1rem' }, lineHeight: 1.6 }}
                      >
                        {faq.answer}
                      </Typography>
                      <Box mt={2} display="flex" alignItems="center" gap={1}>
                        <Typography variant="body2" color="text.secondary">
                          Was this helpful?
                        </Typography>
                        <IconButton
                          size="small"
                          onClick={() => handleFeedback(index, 'up')}
                          sx={{
                            color:
                              feedback[index] === 'up' ? 'primary.main' : 'text.secondary'
                          }}
                        >
                          <ThumbUpIcon fontSize="small" />
                        </IconButton>
                        <IconButton
                          size="small"
                          onClick={() => handleFeedback(index, 'down')}
                          sx={{
                            color:
                              feedback[index] === 'down' ? 'error.main' : 'text.secondary'
                          }}
                        >
                          <ThumbDownIcon fontSize="small" />
                        </IconButton>
                      </Box>
                    </AccordionDetails>
                  </Accordion>
                </motion.div>
              ))
            ) : (
              <Typography variant="body1" color="text.secondary" align="center" mt={4}>
                No FAQs found matching your search.
              </Typography>
            )}
          </Grid>
        </Grid>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box mt={6} textAlign="center">
            <Typography
              variant="body1"
              color="text.secondary"
              mb={2}
              sx={{ fontSize: { xs: '1rem', md: '1.1rem' } }}
            >
              Still have questions?
            </Typography>
            <Button
              variant="contained"
              color="primary"
              startIcon={<ContactMailIcon />}
              sx={{
                borderRadius: 2,
                px: 4,
                py: 1.5,
                fontWeight: 600,
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                '&:hover': { boxShadow: '0 6px 16px rgba(0,0,0,0.15)' }
              }}
            >
              Contact Us
            </Button>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

export default FAQ;
