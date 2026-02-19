import React from 'react';
import { Box, Typography, Card, CardMedia, Chip, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const Travelplace = () => {
  const travelDestinations = [
    {
      id: 1,
      name: "Swiss Alps",
      location: "Switzerland",
      available: "Year Round",
      description: "Experience breathtaking mountain views, pristine lakes, and charming villages in the heart of Europe.",
      image: "https://images.unsplash.com/photo-1614088459293-5669fadc3448?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsJTIwZGVzdGluYXRpb258ZW58MHx8MHx8fDA%3D"
    },
    {
      id: 2,
      name: "Tropical Paradise",
      location: "Maldives",
      available: "Nov - Apr",
      description: "Discover crystal clear waters, overwater bungalows, and unforgettable sunsets in this tropical haven.",
      image: "https://images.unsplash.com/photo-1606922183036-62e19495eaab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbCUyMGRlc3RpbmF0aW9ufGVufDB8fDB8fHww"
    },
    {
      id: 3,
      name: "Desert Adventure",
      location: "Dubai",
      available: "Oct - Mar",
      description: "Experience the perfect blend of modern luxury and traditional desert culture in this stunning city.",
      image: "https://images.unsplash.com/photo-1682686580036-b5e25932ce9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRyYXZlbCUyMGRlc3RpbmF0aW9ufGVufDB8fDB8fHww"
    },
    {
      id: 4,
      name: "Historic Wonders",
      location: "Italy",
      available: "Apr - Oct",
      description: "Walk through ancient history, savor authentic cuisine, and immerse yourself in Renaissance art and architecture.",
      image: "https://images.unsplash.com/photo-1727622765649-1af1d87ee018?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbCUyMGRlc3RpbmF0aW9ufGVufDB8fDB8fHww"
    },
    {
      id: 5,
      name: "Tea Country",
      location: "Sri Lanka",
      available: "Year Round",
      description: "Explore lush tea plantations, misty mountains, and experience authentic Ceylon tea culture.",
      image: "https://media.istockphoto.com/id/2183673991/photo/woman-exploring-on-tea-plantation-in-sri-lanka.webp?a=1&b=1&s=612x612&w=0&k=20&c=q87jLGZd50e2cJyDxNKhqMVWm24Xij1mgccRkDDKsGY="
    },
    
    {
      id: 6,
      name: "Nature Born ",
      location: "Kerala",
      available: "Year Round",
      description: "Touch the clouds where majestic peaks tell stories of ancient times",
      image:"https://images.unsplash.com/photo-1524726240783-939bfdd633e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRyYXZlbCUyMGRlc3RpbmF0aW9ufGVufDB8fDB8fHww"
    }

  ];

  // Remove the theme parameter since it's not being used
  const StyledCard = styled(Card)({
    position: 'relative',
    width: 280,
    height: 280,
    borderRadius: '50px 10px',
    overflow: 'hidden',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    cursor: 'pointer',
    '&:hover': {
      transform: 'translateY(-10px)',
      boxShadow: '0 20px 30px rgba(0,0,0,0.2)',
      '& .MuiCardMedia-root': {
        transform: 'scale(1.1)',
      },
      '& .card-content': {
        opacity: 1,
        transform: 'translateY(0)',
      }
    }
  });

  const CardMediaStyled = styled(CardMedia)({
    height: '100%',
    transition: 'transform 0.5s ease-in-out',
  });

  const CardContentStyled = styled(Box)({
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 70%, transparent 100%)',
    color: 'white',
    padding: '20px',
    opacity: 0,
    fontFamily:"poppins",
    transform: 'translateY(20px)',
    transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
    '& .MuiTypography-root': {
      color: 'white',
    }
  });

  return (
    <Box sx={{  
      margin: '0 auto', 
      padding: '40px 20px',
  
      
    }}>
      <Box sx={{ textAlign: 'center', mb: '50px' }}>
        <Typography 
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontSize: { xs: '24px', md: '36px' },
            fontWeight: 600,
            color: '#333',
            position: 'relative',
            display: 'inline-block',
            '&:after': {
              content: '""',
              position: 'absolute',
              bottom: '-10px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '4px',
              backgroundColor: '#FF6B6B',
              borderRadius: '2px'
            }
          }}
        >
          Explore the places you need to go
        </Typography>
      </Box>

      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '30px',
      }}>
        {travelDestinations.map((destination) => (
          <StyledCard key={destination.id}>
            <CardMediaStyled
              component="img"
              image={destination.image}
              alt={destination.name}
            />
            <CardContentStyled className="card-content">
              <Typography 
                variant="h5" 
                sx={{ 
                  fontWeight: 600, 
                  mb: 1,
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                  fontSize: '1.2rem',
                  fontFamily:"poppins",
                }}
              >
                {destination.name}
              </Typography>
              
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <Typography variant="body2" sx={{ opacity: 0.9, fontFamily:"poppins", }}>
                  📍 {destination.location}
                </Typography>
                <Chip 
                  label={destination.available}
                  size="small"
                  sx={{ 
                    backgroundColor: '#FF6B6B',
                    color: 'white',
                    fontSize: '10px',
                    height: '20px',
                    fontFamily:"poppins",
                    '& .MuiChip-label': {
                      px: 1
                    }
                  }}
                />
              </Box>
              
              <Typography 
                variant="body2" 
                sx={{ 
                  opacity: 0.8,
                  lineHeight: 1.4,
                  mb: 2,
                  fontSize: '0.8rem',
                  display: '-webkit-box',
                  overflow: 'hidden',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 3,
                  fontFamily:"poppins",
                }}
              >
                {destination.description}
              </Typography>
              
              <Button 
                variant="outlined"
                size="small"
                sx={{
                  color: 'white',
                  borderColor: 'white',
                  fontSize: '0.75rem',
                  borderRadius:"10px",
                  textTransform:"none",
                  fontFamily:"poppins",
                  '&:hover': {
                    borderColor: '#FF6B6B',
                    backgroundColor: 'rgba(255,107,107,0.1)'
                  }
                }}
              >
                View Details
              </Button>
            </CardContentStyled>
          </StyledCard>
        ))}
      </Box>
    </Box>
  );
};

export default Travelplace;