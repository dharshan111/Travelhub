import React, { useState } from "react";
import { 
  Box, 
  Typography, 
  InputAdornment,
  TextField,
  Container
} from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";

const Hero = () => {
  const [searchValue, setSearchValue] = useState("");

  const productCategories = [
    {
      id: 1,
      name: "Electronics",
      image: "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      id: 2,
      name: "Accessories",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      id: 3,
      name: "Fashion",
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 4,
      name: "Footwear",
      image: "https://media.istockphoto.com/id/2251627319/photo/shoe-displayed-on-a-blue-background-showing-its-design-and-sole.webp?a=1&b=1&s=612x612&w=0&k=20&c=r1_jQlwFxzMssxxsavMMqvpnPBjJKdk42uXW6aWUv2Y="
    },
    {
      id: 5,
      name: "Beauty",
      image: "https://media.istockphoto.com/id/1285148074/photo/skin-care-products-cream-scrub-tonic-in-plastic-packaging.webp?a=1&b=1&s=612x612&w=0&k=20&c=j9HLsYpGKMLJ1sKa5wsbBOOh2Ic9JIi4AbQL19Ij1Ic="
    }
  ];

  const SearchBar = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
      borderRadius: '50px',
      backgroundColor: '#fff',
      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
      transition: 'box-shadow 0.3s ease',
      '&:hover': {
        boxShadow: '0 6px 25px rgba(0,0,0,0.12)',
      },
      '&.Mui-focused': {
        boxShadow: '0 8px 30px rgba(255,107,107,0.15)',
      },
      '& input': {
        padding: '15px 20px',
        fontFamily: 'Poppins, sans-serif',
        fontSize: '16px',
      }
    }
  }));

  const CategoryCard = styled(Box)(({ theme }) => ({
    position: 'relative',
    width: '100%',
    maxWidth: '200px',
    height: '200px',
    borderRadius: '20px',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0 15px 30px rgba(0,0,0,0.2)',
      '& img': {
        transform: 'scale(1.1)',
      },
      '& .category-overlay': {
        opacity: 1,
      }
    },
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.5s ease',
    },
    '& .category-overlay': {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      padding: '20px',
      background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
      color: 'white',
      opacity: 0,
      transition: 'opacity 0.3s ease',
    }
  }));

  return (
    <Box sx={{ 
      pt: 4,
      pb: 4
    }}>
      
        {/* Search Bar */}
        <Box sx={{ mb: 6 }}>
          <SearchBar
            fullWidth
            variant="outlined"
            placeholder="Search products, destinations, or deals..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: '#FF6B6B', ml: 1 }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {/* Category Images Section */}
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h5"
            sx={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              color: '#333',
              mb: 3,
              textAlign: 'center'
            }}
          >
            Shop by Category
          </Typography>
          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 3,
          }}>
            {productCategories.map((category) => (
              <CategoryCard key={category.id}>
                <img src={category.image} alt={category.name} />
                <Box className="category-overlay">
                  <Typography sx={{ fontWeight: 600, fontSize: '1.1rem' }}>
                    {category.name}
                  </Typography>
                </Box>
              </CategoryCard>
            ))}
          </Box>
        </Box>
      
    </Box>
  );
};

export default Hero;