import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Avatar,
  IconButton,
  Snackbar,
  Alert,
  Card,
  CardContent,
  Divider,
  useTheme,
  useMediaQuery,
  Fade,
  Zoom,
  InputAdornment
} from "@mui/material";
import { styled } from "@mui/material/styles";
import SendIcon from "@mui/icons-material/Send";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PersonIcon from "@mui/icons-material/Person";
import MessageIcon from "@mui/icons-material/Message";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [loading, setLoading] = useState(false);

  const contactInfo = [
    {
      icon: <LocationOnIcon />,
      title: "Visit Us",
      details: ["123 Business Avenue", "New York, NY 10001", "United States"],
      color: "#FF6B6B"
    },
    {
      icon: <PhoneIcon />,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      color: "#4ECDC4"
    },
    {
      icon: <EmailIcon />,
      title: "Email Us",
      details: ["info@shophere.com", "support@shophere.com"],
      color: "#45B7D1"
    },
    {
      icon: <AccessTimeIcon />,
      title: "Working Hours",
      details: ["Monday - Friday: 9AM - 8PM", "Saturday: 10AM - 6PM", "Sunday: Closed"],
      color: "#96CEB4"
    }
  ];

  const socialMedia = [
    { icon: <FacebookIcon />, name: "Facebook", color: "#1877F2", link: "#" },
    { icon: <TwitterIcon />, name: "Twitter", color: "#1DA1F2", link: "#" },
    { icon: <InstagramIcon />, name: "Instagram", color: "#E4405F", link: "#" },
    { icon: <LinkedInIcon />, name: "LinkedIn", color: "#0A66C2", link: "#" },
    { icon: <WhatsAppIcon />, name: "WhatsApp", color: "#25D366", link: "#" }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10,}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = "Phone number must be at least 10 digits";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      setLoading(true);
      // Simulate API call
      setTimeout(() => {
        setLoading(false);
        setOpenSnackbar(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: ""
        });
      }, 1500);
    } else {
      setErrors(newErrors);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const StyledTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
      borderRadius: '12px',
      transition: 'all 0.3s ease',
      '&:hover': {
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: '#FF6B6B',
        }
      },
      '&.Mui-focused': {
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: '#FF6B6B',
          borderWidth: '2px',
        }
      }
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: '#FF6B6B',
    }
  });

  const ContactInfoCard = styled(Card)(({ theme }) => ({
    height: '100%',
    borderRadius: '20px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0 20px 30px rgba(0,0,0,0.1)',
      '& .icon-wrapper': {
        transform: 'scale(1.1) rotate(5deg)',
      }
    }
  }));

  const IconWrapper = styled(Box)(({ color }) => ({
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color || '#FF6B6B',
    color: 'white',
    transition: 'transform 0.3s ease',
    marginBottom: '15px'
  }));

  const SocialIconButton = styled(IconButton)(({ bgcolor }) => ({
    backgroundColor: bgcolor,
    color: 'white',
    margin: '0 5px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px) scale(1.1)',
      boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
      backgroundColor: bgcolor,
    }
  }));

  return (
    <Box sx={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      py: { xs: 4, md: 8 }
    }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Fade in={true} timeout={1000}>
          <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                color: 'white',
                textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                mb: 2
              }}
            >
              Get In Touch
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'Poppins, sans-serif',
                color: 'rgba(255,255,255,0.9)',
                maxWidth: '600px',
                mx: 'auto',
                px: 2,
                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }
              }}
            >
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </Typography>
          </Box>
        </Fade>

        {/* Contact Info Cards */}
        <Grid container spacing={3} sx={{ mb: { xs: 4, md: 6 } }}>
          {contactInfo.map((info, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Zoom in={true} style={{ transitionDelay: `${index * 100}ms` }}>
                <ContactInfoCard elevation={0}>
                  <CardContent sx={{ 
                    textAlign: 'center',
                    p: { xs: 2, md: 3 }
                  }}>
                    <IconWrapper className="icon-wrapper" color={info.color}>
                      {info.icon}
                    </IconWrapper>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 600,
                        mb: 1,
                        fontSize: { xs: '1rem', md: '1.1rem' }
                      }}
                    >
                      {info.title}
                    </Typography>
                    {info.details.map((detail, idx) => (
                      <Typography 
                        key={idx}
                        variant="body2" 
                        color="text.secondary"
                        sx={{ 
                          fontSize: { xs: '0.8rem', md: '0.9rem' },
                          lineHeight: 1.8
                        }}
                      >
                        {detail}
                      </Typography>
                    ))}
                  </CardContent>
                </ContactInfoCard>
              </Zoom>
            </Grid>
          ))}
        </Grid>

        {/* Main Contact Form Section */}
        <Paper
          elevation={0}
          sx={{
            borderRadius: { xs: '20px', md: '40px' },
            overflow: 'hidden',
            background: 'rgba(255,255,255,0.95)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <Grid container>
            {/* Form Side */}
            <Grid item xs={12} md={7}>
              <Box sx={{ p: { xs: 3, sm: 4, md: 5 } }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 600,
                    color: '#333',
                    mb: 1,
                    fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem' }
                  }}
                >
                  Send Message
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 4 }}
                >
                  Fill out the form below and we'll get back to you within 24 hours.
                </Typography>

                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <StyledTextField
                        fullWidth
                        label="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        error={!!errors.name}
                        helperText={errors.name}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <PersonIcon sx={{ color: '#FF6B6B' }} />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <StyledTextField
                        fullWidth
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={!!errors.email}
                        helperText={errors.email}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <EmailIcon sx={{ color: '#FF6B6B' }} />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <StyledTextField
                        fullWidth
                        label="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        error={!!errors.phone}
                        helperText={errors.phone}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <PhoneIcon sx={{ color: '#FF6B6B' }} />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <StyledTextField
                        fullWidth
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        error={!!errors.subject}
                        helperText={errors.subject}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <MessageIcon sx={{ color: '#FF6B6B' }} />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <StyledTextField
                        fullWidth
                        label="Your Message"
                        name="message"
                        multiline
                        rows={isMobile ? 4 : 6}
                        value={formData.message}
                        onChange={handleChange}
                        error={!!errors.message}
                        helperText={errors.message}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        fullWidth={isMobile}
                        disabled={loading}
                        endIcon={<SendIcon />}
                        sx={{
                          borderRadius: '50px',
                          py: 1.5,
                          px: 4,
                          background: 'linear-gradient(45deg, #FF6B6B 30%, #FF8E8E 90%)',
                          boxShadow: '0 3px 15px rgba(255,107,107,0.4)',
                          '&:hover': {
                            background: 'linear-gradient(45deg, #FF5252 30%, #FF7676 90%)',
                          },
                          fontSize: { xs: '0.9rem', md: '1rem' }
                        }}
                      >
                        {loading ? "Sending..." : "Send Message"}
                      </Button>
                    </Grid>
                  </Grid>
                </form>

                {/* Social Media Links */}
                <Box sx={{ mt: 4, textAlign: 'center' }}>
                  <Typography 
                    variant="body2" 
                    color="text.secondary" 
                    sx={{ mb: 2 }}
                  >
                    Follow us on social media
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
                    {socialMedia.map((social, index) => (
                      <SocialIconButton
                        key={index}
                        bgcolor={social.color}
                        size={isMobile ? "small" : "medium"}
                        onClick={() => window.open(social.link, '_blank')}
                      >
                        {social.icon}
                      </SocialIconButton>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Grid>

            {/* Map Side */}
            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  height: { xs: '300px', md: '100%' },
                  minHeight: { md: '600px' },
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1645564612345!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="location-map"
                />
                
                {/* Overlay with business info */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 20,
                    left: 20,
                    right: 20,
                    background: 'rgba(255,255,255,0.95)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '15px',
                    p: 2,
                    display: { xs: 'none', md: 'block' }
                  }}
                >
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
                    Visit Our Flagship Store
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    123 Business Avenue, New York, NY 10001
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Paper>

        {/* FAQ Section */}
        <Box sx={{ mt: { xs: 4, md: 6 } }}>
          <Typography
            variant="h4"
            sx={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              color: 'white',
              textAlign: 'center',
              mb: 4,
              fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem' }
            }}
          >
            Frequently Asked Questions
          </Typography>

          <Grid container spacing={3}>
            {[
              {
                question: "How quickly do you respond to inquiries?",
                answer: "We typically respond within 24 hours during business days."
              },
              {
                question: "Do you offer customer support on weekends?",
                answer: "Yes, we have limited support available on Saturdays from 10AM to 6PM."
              },
              {
                question: "Can I schedule a video call with your team?",
                answer: "Absolutely! Please mention it in your message and we'll arrange a convenient time."
              },
              {
                question: "Do you have physical stores worldwide?",
                answer: "We currently have stores in New York, London, and Tokyo, with more locations coming soon."
              }
            ].map((faq, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Zoom in={true} style={{ transitionDelay: `${index * 100}ms` }}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: { xs: 2, md: 3 },
                      borderRadius: '15px',
                      height: '100%',
                      background: 'rgba(255,255,255,0.9)',
                      backdropFilter: 'blur(10px)',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                      }
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, fontSize: { xs: '1rem', md: '1.1rem' } }}>
                      {faq.question}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {faq.answer}
                    </Typography>
                  </Paper>
                </Zoom>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      {/* Success Snackbar */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity="success" 
          variant="filled"
          icon={<CheckCircleIcon />}
          sx={{ 
            width: '100%',
            borderRadius: '10px',
            fontSize: '0.9rem'
          }}
        >
          Message sent successfully! We'll get back to you soon.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;