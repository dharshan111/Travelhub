import React from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Button,
  Rating,
  IconButton,
  Stack,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

const Product = () => {
  const [favorites, setFavorites] = React.useState({});

  const products = [
    {
      id: 1,
      name: "Premium Travel Luggage",
      category: "Luggage",
      price: "$129.99",
      rating: 4.5,
      available: "In Stock",
      description:
        "Durable hardshell luggage with 360° spinner wheels and TSA lock",
      image:
        "https://images.unsplash.com/photo-1639598003276-8a70fcaaad6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bHVnZ2FnZXxlbnwwfHwwfHx8MA%3D%3D",
      features: ["Water-resistant", "Lightweight"],
    },
    {
      id: 2,
      name: "Sony WH-1000XM4",
      category: "Headphones",
      price: "$348.99",
      rating: 4.8,
      available: "Limited Stock",
      description:
        "Industry-leading noise canceling with exceptional sound quality",
      image:
        "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
      features: ["30hr battery", "Touch control", "Wireless"],
    },
    {
      id: 3,
      name: "Columbia Waterproof Jacket",
      category: "Raincoat",
      price: "$89.99",
      rating: 4.3,
      available: "In Stock",
      description:
        "Lightweight waterproof jacket perfect for unexpected showers",
      image:
        "https://images.unsplash.com/photo-1611308725032-74f0a551d018?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFpbmNvYXR8ZW58MHx8MHx8fDA%3D",
      features: ["Breathable", "Packable", "Wind-resistant"],
    },
    {
      id: 4,
      name: "Canon EOS R50",
      category: "Camera",
      price: "$679.99",
      rentPrice: "$45/day",
      rating: 4.7,
      available: "In Stock",
      description: "Mirrorless camera with 4K video and advanced autofocus",
      image:
        "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D",
      features: ["24.2MP", "4K Video", "WiFi"],
      hasRentOption: true,
    },
    {
      id: 5,
      name: "Nike Air Max 270",
      category: "Shoes",
      price: "$149.99",
      rating: 4.6,
      available: "New Arrival",
      description:
        "Men's lifestyle shoes with Max Air unit for all-day comfort",
      image:
        "https://plus.unsplash.com/premium_photo-1770507223618-baf74eb4053d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYXZlbCUyMHNob2VzfGVufDB8fDB8fHww",
      features: ["Breathable", "Lightweight", "Stylish"],
    },
    {
      id: 6,
      name: "Adidas Ultraboost",
      category: "Shoes",
      price: "$179.99",
      rating: 4.7,
      available: "Limited Edition",
      description:
        "Responsive running shoes with energy-returning Boost technology",
      image:
        "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRyYXZlbCUyMHNob2VzfGVufDB8fDB8fHww",
      features: ["Energy return", "Primeknit", "Durable"],
    },
    {
      id: 7,
      name: "Apple Watch Series 9",
      category: "Smart Watch",
      price: "$399.99",
      rating: 4.9,
      available: "Pre-order",
      description:
        "Advanced smartwatch with health tracking and always-on display",
      image:
        "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNtYXJ0JTIwd2F0Y2h8ZW58MHx8MHx8fDA%3D",
      features: ["GPS", "Heart monitor", "Water resistant"],
    },
    {
      id: 8,
      name: "Nike Dri-FIT Hoodie",
      category: "Sweater",
      price: "$65.99",
      rating: 4.4,
      available: "In Stock",
      description:
        "Comfortable pullover hoodie with moisture-wicking technology",
      image:
        "https://images.unsplash.com/photo-1601379327928-bedfaf9da2d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3dlYXRlcnxlbnwwfHwwfHx8MA%3D%3D",
      features: ["Adjustable hood", "Kangaroo pocket"],
    },
  ];

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Fixed styled components - removed theme parameter
  const StyledCard = styled(Card)({
    height: "100%",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    borderRadius: "16px",
    overflow: "hidden",
    transition: "transform 0.2s, box-shadow 0.2s",
    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: "0 12px 24px rgba(0,0,0,0.1)",
    },
  });

  const FavoriteButton = styled(IconButton)({
    position: "absolute",
    top: 8,
    right: 8,
  
    zIndex: 1,
    "&:hover": {
      backgroundColor: "#fff",
    },
  });

  const getAvailabilityColor = (status) => {
    switch (status) {
      case "In Stock":
        return "#4caf50";
      case "Limited Stock":
        return "#ff9800";
      case "New Arrival":
        return "#2196f3";
      case "Limited Edition":
        return "#9c27b0";
      case "Pre-order":
        return "#f44336";
      default:
        return "#757575";
    }
  };

  return (
    <Box
      sx={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "40px 20px",
    
       
      }}
    >
      {/* Header */}
      <Box sx={{ textAlign: "center", mb: 5 }}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontSize: { xs: "24px", md: "36px" },
            fontWeight: 600,
            color: "#333",
            position: "relative",
            display: "inline-block",
            "&:after": {
              content: '""',
              position: "absolute",
              bottom: "-10px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "80px",
              height: "4px",
              backgroundColor: "#FF6B6B",
              borderRadius: "2px",
            },
          }}
        >
          Products
        </Typography>
      </Box>

      {/* Product Grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
            xl: "repeat(5, 1fr)",
          },
          gap: 3,
        }}
      >
        {products.map((product) => (
          <StyledCard key={product.id}>
            {/* Favorite Button */}
            <FavoriteButton
              onClick={() => toggleFavorite(product.id)}
              size="small"
            >
              {favorites[product.id] ? (
                <FavoriteIcon sx={{ color: "#f44336" }} />
              ) : (
                <FavoriteBorderIcon />
              )}
            </FavoriteButton>

            {/* Product Image */}
            <CardMedia
              component="img"
              height="200"
              image={product.image}
              alt={product.name}
              sx={{
                objectFit: "cover",
                backgroundColor: "#f5f5f5",
              }}
            />

            {/* Availability Chip */}
            <Chip
              label={product.available}
              size="small"
              sx={{
                position: "absolute",
                top: 8,
                left: 8,
                backgroundColor: getAvailabilityColor(product.available),
                color: "white",
                fontWeight: 500,
                fontSize: "0.7rem",
                zIndex: 1,
              }}
            />

            <CardContent sx={{ flexGrow: 1, p: 2 }}>
              {/* Category */}
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  fontWeight: 500,
                  display: "block",
                  mb: 0.5,
                }}
              >
                {product.category}
              </Typography>

              {/* Product Name */}
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 1,
                  fontSize: "1rem",
                  lineHeight: 1.3,
                  height: "2.6rem",
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                }}
              >
                {product.name}
              </Typography>

              {/* Rating */}
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <Rating
                  value={product.rating}
                  precision={0.5}
                  size="small"
                  readOnly
                />
                <Typography variant="caption" sx={{ ml: 0.5 }}>
                  ({product.rating})
                </Typography>
              </Box>

              {/* Description */}
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  mb: 1.5,
                  fontSize: "0.8rem",
                  height: "2.4rem",
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                }}
              >
                {product.description}
              </Typography>

              {/* Features */}
              <Stack
                direction="row"
                spacing={0.5}
                sx={{
                  mb: 1.5,
                  flexWrap: "wrap",
                  gap: 0.5,
                }}
              >
                {product.features.map((feature, index) => (
                  <Chip
                    key={index}
                    label={feature}
                    size="small"
                    variant="outlined"
                    sx={{
                      fontSize: "0.6rem",
                      height: "20px",
                      "& .MuiChip-label": { px: 1 },
                    }}
                  />
                ))}
              </Stack>

              {/* Price Section */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 1,
                  mb: 1.5,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 700, color: "#000"}}
                >
                  {product.price}
                </Typography>
                {product.hasRentOption && (
                  <Typography
                    variant="caption"
                    sx={{ color: "#ff9800", fontWeight: 500 }}
                  >
                    or {product.rentPrice} rent
                  </Typography>
                )}
              </Box>

              {/* Action Buttons */}
              <Box sx={{ display: "flex", gap: 1 }}>
                <Button
                  variant="contained"
                  size="small"
                  fullWidth
                  startIcon={<ShoppingCartIcon />}
                  sx={{
                    background:
                      "linear-gradient(45deg, #FF6B6B 30%, #FF8E8E 90%)",
                    boxShadow: "0 3px 15px rgba(255,107,107,0.4)",
                    "&:hover": {
                      background:
                        "linear-gradient(45deg, #FF5252 30%, #FF7676 90%)",
                    },
                  }}
                >
                  Buy Now
                </Button>

                {product.hasRentOption && (
                  <Button
                    variant="outlined"
                    size="small"
                    fullWidth
                    startIcon={<CameraAltIcon />}
                    sx={{
                      borderColor: "#ff9800",
                      color: "#ff9800",
                      "&:hover": {
                        borderColor: "#f57c00",
                        backgroundColor: "rgba(255,152,0,0.04)",
                      },
                      textTransform: "none",
                    }}
                  >
                    Rent
                  </Button>
                )}
              </Box>
            </CardContent>
          </StyledCard>
        ))}
      </Box>
    </Box>
  );
};

export default Product;
