import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Card, CardContent, Typography, Grid, Box, IconButton } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import Footer from './Footer';

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 400,
  margin: '0 auto',
  marginTop: theme.spacing(2),
  padding: theme.spacing(2),
  textAlign: 'center',
  transition: 'transform 0.3s', // Add the transition property for the animation
  '&:hover': {
    transform: 'scale(1.05)', // Scale the card on hover
  },
  background: 'grey', // Set the background color to black
  color: 'white', // Set the text color to white
}));

const About = () => {
  // State to track like button status
  const [liked, setLiked] = useState(false);

  // Function to handle like button click
  const handleLikeClick = () => {
    setLiked(!liked); // Toggle the liked state
  };

  // Effect to change the title color when liked state changes
  useEffect(() => {
    if (liked) {
      document.title = 'Liked!';
    } else {
      document.title = 'Not Liked';
    }
  }, [liked]);

  return (
    <div>
      <Grid container spacing={3}>
        {/* First Card */}
        <Grid item xs={14} sm={6} md={4}>
          <StyledCard>
            <CardContent>
              <Typography variant="h4">INDIAN</Typography>
              <Typography variant="body1">
              indian cuisine consists of a variety of regional and traditional cuisines native to India. Given the diversity in soil, climate, culture, ethnic groups, and occupations, these cuisines vary substantially and use locally available spices, herbs, vegetables, and fruits
              </Typography>
              {/* Like button */}
              <IconButton onClick={handleLikeClick}>
                {liked ? <Favorite style={{ color: 'red' }} /> : <FavoriteBorder />}
              </IconButton>
            </CardContent>
          </StyledCard>
        </Grid>

        {/* Add more cards here */}
        <Grid item xs={12} sm={6} md={4}>
          <StyledCard>
            <CardContent>
              <Typography variant="h4">CHINESE</Typography>
              <Typography variant="body1">
              Chinese food staples such as rice, soy sauce, noodles, tea, chili oil, and tofu, and utensils such as chopsticks and the wok, can now be found worldwide. An assortment of Chinese food. Clockwise from top left: Peking duck, misua, Kung Pao chicken, mooncakes, baijiu, wonton soup, spring rolls.
              </Typography>
              {/* Like button */}
              <IconButton onClick={handleLikeClick}>
                {liked ? <Favorite style={{ color: 'red' }} /> : <FavoriteBorder />}
              </IconButton>
            </CardContent>
          </StyledCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <StyledCard>
            <CardContent>
              <Typography variant="h4">JAPANESE</Typography>
              <Typography variant="body1">
              The traditional cuisine of Japan (Japanese: washoku) is based on rice with miso soup and other dishes; there is an emphasis on seasonal ingredients. Side dishes often consist of fish, pickled vegetables, and vegetables cooked in broth. Seafood is common, often grilled, but also served raw as sashimi or in sushi
              </Typography>
              {/* Like button */}
              <IconButton onClick={handleLikeClick}>
                {liked ? <Favorite style={{ color: 'red' }} /> : <FavoriteBorder />}
              </IconButton>
            </CardContent>
          </StyledCard>
        </Grid>
      </Grid>
      <Box>
        <Footer />
      </Box>
    </div>
  );
};

export default About;