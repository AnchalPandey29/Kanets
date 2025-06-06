import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Avatar,
  Button,
  Card,
  CardContent
} from '@mui/material';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import SchoolIcon from '@mui/icons-material/School';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PersonIcon from '@mui/icons-material/Person';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import PublicIcon from '@mui/icons-material/Public';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const COLORS = {
  primary: '#1976D2',
  secondary: '#FF6D00',
  background: '#F5F7FA',
  darkText: '#0F172A',
  mediumGray: '#475569',
  lightGray: '#666',
  white: '#fff',
  section1: '#F5F7FA',
  section2: '#EDEFF2',
  section3: '#F5F7FA',
  section4: '#EDEFF2',
  section5: '#F5F7FA'
};

const teamMembers = [
  {
    name: "John Doe",
    position: "Founder & CEO",
    linkedIn: "#",
    youtube: "#",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Jane Smith",
    position: "Chief Marketing Officer",
    linkedIn: "#",
    youtube: "#",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Emily Johnson",
    position: "Lead Developer",
    linkedIn: "#",
    youtube: "#",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

const stats = [
  {
    icon: <SchoolIcon sx={{ fontSize: '32px', color: COLORS.white }} />,
    value: 2000,
    label: "Students",
    description: "Empowering learners across the globe with transformative education.",
    bgColor: COLORS.primary
  },
  {
    icon: <LibraryBooksIcon sx={{ fontSize: '32px', color: COLORS.white }} />,
    value: 50,
    label: "Courses",
    description: "Diverse, high-quality courses designed to inspire and educate.",
    bgColor: COLORS.secondary
  },
  {
    icon: <PersonIcon sx={{ fontSize: '32px', color: COLORS.white }} />,
    value: 20,
    label: "Instructors",
    description: "Expert educators dedicated to your learning journey.",
    bgColor: COLORS.primary
  }
];

const missionVision = [
  {
    icon: <RocketLaunchIcon sx={{ fontSize: '32px', color: COLORS.primary }} />,
    title: "Our Mission",
    description: "To empower individuals through accessible, high-quality education that fosters personal growth, innovation, and lifelong learning."
  },
  {
    icon: <PublicIcon sx={{ fontSize: '32px', color: COLORS.secondary }} />,
    title: "Our Vision",
    description: "To create a global learning community where knowledge is shared freely, inspiring change and collaboration."
  }
];

const countUpProps = {
  duration: 2,
  suffix: "+",
  useEasing: true,
  start: 0,
  scrollSpyOnce: true,
  enableScrollSpy: true
};

const AboutUs = () => {
  return (
    <Box sx={{ textAlign: 'center' }}>
      {/* Title Section */}
      <Box sx={{ px: 2, paddingTop:10, paddingBottom:1, bgcolor: COLORS.section1 }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography variant="h3" fontWeight={700} color={COLORS.primary} gutterBottom>
            About Us
          </Typography>
          <Typography variant="body1" color={COLORS.mediumGray} maxWidth="700px" mx="auto" mb={2}>
            We are a passionate team committed to revolutionizing education through innovative, accessible, and impactful solutions. Our goal is to empower learners worldwide, fostering a community where knowledge drives progress.
          </Typography>
        </motion.div>
      </Box>


      {/* Mission and Vision Section */}
      <Box sx={{ px: 2, py: 6, bgcolor: COLORS.section1 }}>
        <Grid container spacing={3} justifyContent="center" mb={6}>
          {missionVision.map((item, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    height: 200,
                    minWidth: 250,
                    maxWidth: 350,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    mx: 'auto',
                    borderRadius: 2
                  }}
                >
                  <CardContent sx={{ px: 3, py: 2 }}>
                    <Box mb={1}>{item.icon}</Box>
                    <Typography variant="h6" fontWeight={600}>
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color={COLORS.mediumGray}
                      sx={{ fontSize: '0.9rem', lineHeight: '1.4' }}
                    >
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>


      {/* Stats Section */}
      <Box sx={{ px: 2, py: 6, bgcolor: COLORS.section2 }}>
        <Grid container spacing={3} justifyContent="center" mb={6}>
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    bgcolor: stat.bgColor,
                    color: COLORS.white,
                    height: 260,
                    minWidth: 250,
                    maxWidth: 350,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    mx: 'auto',
                    borderRadius: 2
                  }}
                >
                  <CardContent sx={{ px: 3, py: 2 }}>
                    <Box mb={1}>{stat.icon}</Box>
                    <Typography variant="h4" fontWeight={600}>
                      <CountUp end={stat.value} {...countUpProps} />
                    </Typography>
                    <Typography variant="h6" fontWeight={600}>
                      {stat.label}
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: '0.9rem', lineHeight: '1.4' }}>
                      {stat.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Team Section */}
      <Box sx={{ px: 2, py: 6, bgcolor: COLORS.section3 }}>
        <Typography variant="h4" fontWeight={600} color={COLORS.darkText} mb={4}>
          Meet Our Team
        </Typography>
        <Grid container spacing={3} justifyContent="center" mb={6}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    textAlign: 'center',
                    height: 280,
                    minWidth: 250,
                    maxWidth: 350,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    mx: 'auto',
                    borderRadius: 2
                  }}
                >
                  <CardContent sx={{ px: 3, py: 2 }}>
                    <Avatar
                      src={member.image}
                      alt={member.name}
                      sx={{
                        width: 100,
                        height: 100,
                        mx: 'auto',
                        mb: 2,
                        border: `3px solid ${COLORS.primary}`
                      }}
                    />
                    <Typography variant="h6" fontWeight={600} color={COLORS.darkText}>
                      {member.name}
                    </Typography>
                    <Typography variant="body2" color={COLORS.lightGray}>
                      {member.position}
                    </Typography>
                    <Box mt={1} display="flex" justifyContent="center" gap={2}>
                      <a href={member.linkedIn} style={{ color: COLORS.primary }}>
                        <LinkedInIcon />
                      </a>
                      <a href={member.youtube} style={{ color: COLORS.secondary }}>
                        <YouTubeIcon />
                      </a>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* CTA Section */}
      <Box sx={{ px: 2, py: 6, bgcolor: COLORS.section5 }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Button
            variant="contained"
            sx={{
              bgcolor: COLORS.secondary,
              color: COLORS.white,
              borderRadius: 2,
              px: 4,
              py: 1.5,
              fontWeight: 600
            }}
            endIcon={<KeyboardArrowDownIcon />}
          >
            Discover More
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
};

export default AboutUs;
