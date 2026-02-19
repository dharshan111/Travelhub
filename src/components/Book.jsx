import React from "react";
import { 
  Box, 
  Button, 
  Typography, 
  Paper,
  Container,
  Grid,
  Chip,
  Divider,
  Fade
} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PeopleIcon from "@mui/icons-material/People";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import HotelIcon from "@mui/icons-material/Hotel";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import { styled } from "@mui/material/styles";

const Book = () => {
  const StyledAccordion = styled(Accordion)(({ theme }) => ({
    borderRadius: '15px !important',
    marginBottom: '15px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
    '&:before': {
      display: 'none',
    },
    '&.Mui-expanded': {
      margin: '0 0 15px 0',
    }
  }));

  return (
    <Box sx={{ 
      pb: 8
    }}>
      <Container maxWidth="lg">
        {/* Travel Booking Section */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 4 },
          }}
        >
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontSize: { xs: "28px", md: "40px" },
                fontWeight: 700,
                color: "#333",
                position: "relative",
                display: "inline-block",
                "&:after": {
                  content: '""',
                  position: "absolute",
                  bottom: "-10px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "100px",
                  height: "4px",
                  backgroundColor: "#FF6B6B",
                  borderRadius: "2px",
                },
              }}
            >
              Book your Travel
            </Typography>
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Fade in={true} timeout={1000}>
                <Box sx={{display:"flex", flexDirection:{xs:"column", md:"row"}, gap:2,}}>
                  <Box
                    sx={{
                      position: 'relative',
                      borderRadius: '20px',
                      overflow: 'hidden',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                      '&:hover img': {
                        transform: 'scale(1.05)',
                      },
                      height: { xs: '300px', md: '400px' }
                    }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
                      alt="Travel Destination"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 20,
                        left: 20,
                        background: 'rgba(255,107,107,0.9)',
                        color: 'white',
                        padding: '8px 16px',
                        borderRadius: '30px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1
                      }}
                    >
                      <FlightTakeoffIcon fontSize="small" />
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        Special Offer - 20% OFF
                      </Typography>
                    </Box>
                  </Box>
                   <Box
                    sx={{
                      position: 'relative',
                      borderRadius: '20px',
                      overflow: 'hidden',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                      '&:hover img': {
                        transform: 'scale(1.05)',
                      },
                      height: { xs: '300px', md: '400px' }
                    }}
                  >
                    <img
                    src="https://images.unsplash.com/photo-1575305327780-a887f284432f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGtlcmFsYSUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
                    alt="Travel Destination"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 20,
                        left: 20,
                        background: 'rgba(255,107,107,0.9)',
                        color: 'white',
                        padding: '8px 16px',
                        borderRadius: '30px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1
                      }}
                    >
                      <FlightTakeoffIcon fontSize="small" />
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        Book Keralam - 50% OFF
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Fade>
            </Grid>

            <Grid item xs={12} md={6}>
              <Fade in={true} timeout={1200}>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      fontSize: { xs: "24px", md: "28px" },
                      fontWeight: 700,
                      color: "#333",
                      mb: 1
                    }}
                  >
                    Enjoy your Holidays! 🌴✈️
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      fontSize: { xs: "14px", md: "16px" },
                      fontWeight: 400,
                      color: "#666",
                      mb: 3,
                    }}
                  >
                    Relax, explore, and make beautiful memories with our exclusive travel packages
                  </Typography>

                  <Box sx={{ mb: 3 }}>
                    <Chip 
                      icon={<LocationOnIcon />} 
                      label="Top Destinations" 
                      sx={{ mr: 1, mb: 1, backgroundColor: '#f0f0f0' }}
                    />
                    <Chip 
                      icon={<CalendarTodayIcon />} 
                      label="Flexible Dates" 
                      sx={{ mr: 1, mb: 1, backgroundColor: '#f0f0f0' }}
                    />
                    <Chip 
                      icon={<PeopleIcon />} 
                      label="Group Discounts" 
                      sx={{ mr: 1, mb: 1, backgroundColor: '#f0f0f0' }}
                    />
                  </Box>

                  <StyledAccordion defaultExpanded>
                    <AccordionSummary
                      expandIcon={<ArrowDownwardIcon sx={{ color: '#FF6B6B' }} />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                      sx={{
                        '& .MuiAccordionSummary-content': {
                          alignItems: 'center',
                          gap: 1
                        }
                      }}
                    >
                      <HotelIcon sx={{ color: '#FF6B6B' }} />
                      <Typography component="span" sx={{ fontFamily: "poppins", fontWeight: 600 }}>
                        Plan Your Perfect Holiday
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography sx={{ fontFamily: "poppins", fontSize: "14px", color: '#666' }}>
                        Book your perfect holiday easily with ShopHere — your
                        one-stop place for travel deals, comfortable stays, and
                        curated holiday packages. Plan your trips stress-free in one
                        simple platform.
                      </Typography>
                    </AccordionDetails>
                  </StyledAccordion>

                  <StyledAccordion>
                    <AccordionSummary
                      expandIcon={<ArrowDropDownIcon sx={{ color: '#FF6B6B' }} />}
                      aria-controls="panel2-content"
                      id="panel2-header"
                      sx={{
                        '& .MuiAccordionSummary-content': {
                          alignItems: 'center',
                          gap: 1
                        }
                      }}
                    >
                      <BeachAccessIcon sx={{ color: '#FF6B6B' }} />
                      <Typography component="span" sx={{ fontFamily: "poppins", fontWeight: 600 }}>
                        Explore & Book Your Travel Easily
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography sx={{ fontFamily: "poppins", fontSize: "14px", color: '#666' }}>
                        Whether it's a beach escape, adventure trip, or city tour,
                        explore options, compare prices, and book everything in one
                        place. Start your journey today with ease.
                      </Typography>
                    </AccordionDetails>
                  </StyledAccordion>

                  <Box sx={{ 
                    display: 'flex', 
                    gap: 2, 
                    mt: 3,
                    flexDirection: { xs: 'column', sm: 'row' }
                  }}>
                    <Button
                      variant="contained"
                      size="large"
                      startIcon={<FlightTakeoffIcon />}
                      fullWidth
                      sx={{
                        borderRadius: '50px',
                        textTransform: 'none',
                        px: 4,
                        py: 1.5,
                        background: 'linear-gradient(45deg, #FF6B6B 30%, #FF8E8E 90%)',
                        boxShadow: '0 3px 15px rgba(255,107,107,0.4)',
                        '&:hover': {
                          background: 'linear-gradient(45deg, #FF5252 30%, #FF7676 90%)',
                        }
                      }}
                    >
                      Book Now
                    </Button>
                    <Button
                      variant="outlined"
                      size="large"
                      fullWidth
                      sx={{
                        borderRadius: '50px',
                        textTransform: 'none',
                        px: 4,
                        py: 1.5,
                        borderColor: '#FF6B6B',
                        color: '#FF6B6B',
                        '&:hover': {
                          borderColor: '#FF5252',
                          backgroundColor: 'rgba(255,107,107,0.04)',
                        }
                      }}
                    >
                      View Packages
                    </Button>
                  </Box>
                </Box>
              </Fade>
            </Grid>
          </Grid>

          <Divider sx={{ my: 4 }} />

          {/* Travel Stats */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-around', 
            flexWrap: 'wrap', 
            flexDirection:{xs:"column", md:"row"},
            gap: 3 
          }}>
            {[
              { number: '500+', label: 'Destinations' },
              { number: '10k+', label: 'Happy Customers' },
              { number: '24/7', label: 'Support' },
              { number: '50%', label: 'Early Bird Discount' },
            ].map((stat, index) => (
              <Box key={index} sx={{ textAlign: 'center' }}>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    fontWeight: 700, 
                    color: '#FF6B6B',
                    fontSize: { xs: '1.5rem', md: '2rem' }
                  }}
                >
                  {stat.number}
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: '#666',
                    fontSize: { xs: '0.8rem', md: '0.9rem' }
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Book;