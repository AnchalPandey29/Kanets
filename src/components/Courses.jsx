import React, { useState } from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
  Rating,
  Tooltip,
  Modal,
  Fade,
  IconButton
} from '@mui/material';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import StarIcon from '@mui/icons-material/Star';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const courses = [
  {
    id: 1,
    title: 'Full Stack Web Development',
    description: 'Master frontend & backend technologies with real-world projects.',
    duration: '12 weeks',
    lessons: 48,
    rating: 4.8,
    image: 'https://ebz-static.s3.ap-south-1.amazonaws.com/easebuzz-static/online-courses.png',
    category: 'Intermediate',
    preview: 'Learn to build full-stack applications with React, Node.js, and MongoDB.',
    isFeatured: true
  },
  {
    id: 2,
    title: 'Data Science with Python',
    description: 'Learn data wrangling, visualization, machine learning, and more.',
    duration: '10 weeks',
    lessons: 36,
    rating: 4.6,
    image: 'https://www.city.ac.uk/__data/assets/image/0010/685342/varieties/breakpoint-max.jpg',
    category: 'Advanced',
    preview: 'Dive into data science with Python, covering pandas, numpy, and scikit-learn.',
    isFeatured: false
  },
  {
    id: 3,
    title: 'UI/UX Design Fundamentals',
    description: 'Design beautiful and intuitive user experiences and interfaces.',
    duration: '8 weeks',
    lessons: 24,
    rating: 4.7,
    image: 'https://academylms.net/wp-content/uploads/2022/09/Structure-of-Online-Courses.png',
    category: 'Beginner',
    preview: 'Master the basics of UI/UX design with tools like Figma and Adobe XD.',
    isFeatured: false
  }
];

const CourseCard = ({ course }) => {
  const [rating, setRating] = useState(course.rating);
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.02} transitionSpeed={1500}>
        <motion.div
          whileHover={{ scale: 1.03 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <Card
            sx={{
              borderRadius: 3,
              boxShadow: 2,
              overflow: 'hidden',
              height: '100%',
              position: 'relative',
              bgcolor: course.isFeatured ? 'rgba(255, 215, 0, 0.05)' : 'white',
              p: 2
            }}
          >
            <Box sx={{ position: 'relative', borderRadius: 2, overflow: 'hidden' }}>
              <Box
                component="img"
                src={course.image}
                alt={course.title}
                sx={{ width: '100%', height: 160, objectFit: 'cover' }}
              />
              <Tooltip title="Preview Course">
                <IconButton
                  onClick={() => setOpenModal(true)}
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: 'white',
                    bgcolor: 'rgba(0,0,0,0.4)',
                    '&:hover': { bgcolor: 'rgba(0,0,0,0.6)' }
                  }}
                >
                  <VisibilityIcon />
                </IconButton>
              </Tooltip>
              {course.isFeatured && (
                <Chip
                  label="Featured"
                  color="warning"
                  size="small"
                  sx={{
                    position: 'absolute',
                    top: 10,
                    left: 10,
                    fontWeight: 600,
                    zIndex: 2,
                    animation: 'pulse 1.8s ease-in-out infinite',
                    '@keyframes pulse': {
                      '0%': { transform: 'scale(1)' },
                      '50%': { transform: 'scale(1.1)' },
                      '100%': { transform: 'scale(1)' }
                    }
                  }}
                />
              )}
            </Box>
            <CardContent>
              <Typography variant="subtitle1" fontWeight={600} noWrap gutterBottom>
                {course.title}
              </Typography>
              <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <Chip
                  label={course.category}
                  color={
                    course.category === 'Beginner'
                      ? 'success'
                      : course.category === 'Intermediate'
                      ? 'info'
                      : 'error'
                  }
                  size="small"
                  sx={{ fontWeight: 600 }}
                />
                <Typography variant="caption" color="text.secondary">
                  {course.duration}
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                {course.description}
              </Typography>
              <Box display="flex" alignItems="center" justifyContent="space-between" mb={1}>
                <Box display="flex" alignItems="center">
                  <PlayCircleFilledWhiteIcon color="secondary" fontSize="small" />
                  <Typography variant="caption" ml={0.5}>{course.lessons} Lessons</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <Rating
                    value={rating}
                    precision={0.1}
                    size="small"
                    icon={<StarIcon fontSize="inherit" />}
                    emptyIcon={<StarIcon fontSize="inherit" />}
                    onChange={(event, newValue) => setRating(newValue || rating)}
                  />
                  <Typography variant="caption" ml={0.5}>({rating})</Typography>
                </Box>
              </Box>
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                size="small"
                endIcon={
                  <motion.span whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 300 }}>
                    <ArrowForwardIcon fontSize="small" />
                  </motion.span>
                }
              >
                Enroll
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </Tilt>

      <Modal open={openModal} onClose={() => setOpenModal(false)} closeAfterTransition>
        <Fade in={openModal}>
          <Box
            sx={{
              bgcolor: 'white',
              borderRadius: 3,
              p: 3,
              maxWidth: 400,
              mx: 'auto',
              my: 4,
              position: 'relative',
              boxShadow: 24
            }}
          >
            <IconButton onClick={() => setOpenModal(false)} sx={{ position: 'absolute', top: 8, right: 8 }}>
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              {course.title} Preview
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              {course.preview}
            </Typography>
            <Button variant="outlined" color="primary" fullWidth onClick={() => setOpenModal(false)}>
              Close
            </Button>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

const Courses = () => {
  return (
    <Box sx={{ px: 2, py: 6, bgcolor: 'background.default', position: 'relative', overflow: 'hidden' }}>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #1976D220, #FF6D0020)',
          zIndex: 0
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        style={{ position: 'relative', zIndex: 1 }}
      >
        <Typography variant="h3" fontWeight={700} align="center" color="primary.main" gutterBottom>
          Our Courses
        </Typography>
        <Typography
          variant="body1"
          align="center"
          color="text.secondary"
          mb={4}
          maxWidth={600}
          mx="auto"
        >
          Explore our expertly curated programs designed for real-world success.
        </Typography>
      </motion.div>
      <Grid container spacing={3} sx={{ position: 'relative', zIndex: 1 }}>
        {courses.map((course) => (
          <Grid item xs={12} sm={6} md={4} key={course.id}>
            <CourseCard course={course} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Courses;
