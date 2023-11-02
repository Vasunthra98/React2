import React, { useState } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { Card, CardContent, Typography, CardMedia, Grid, Button, Container, AppBar, Toolbar,CssBaseline,Box } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from './Footer';

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 300,
  margin: theme.spacing(2),
  padding: theme.spacing(2),
  textAlign: 'center',
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
  position: 'relative',
}));

const themeLight = createTheme({
  palette: {
    mode: 'light',
  },
});

const themeDark = createTheme({
  palette: {
    mode: 'dark',
  },
});

const Home = () => {
  const [theme, setTheme] = useState(themeLight);
  
  const toggleTheme = () => {
    setTheme(theme === themeLight ? themeDark : themeLight);
  };


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
  };

  const animeData = [
    {
      title: 'INSIDE',
      description: 'BEST TIME EVER',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTejTVFqaygAgWDwuL1QS6cVBIDGycsPr2xow&usqp=CAU',
    },
    {
      title: 'OUTSIDE',
      description: 'BEAUTIFUL VIEW',
      image: 'http://ambience-313001.alludaipurhotels.com/data/Pics/OriginalPhoto/9235/923514/923514283/hotel-ambience-udaipur-pic-3.JPEG',
    },
    {
      title: 'FIRST CLASS',
      description: 'FUN TIME',
      image: 'http://ambience-313001.alludaipurhotels.com/data/Pics/OriginalPhoto/9235/923514/923514598/hotel-ambience-udaipur-pic-5.JPEG',
    },
    // Add more anime cards here...
  ];

  const randomImages = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS7mdxidVEnyheqr9qejxv0--54Nl0CHdxGTHTIRoWHRHvWMJoUIIz6K5AGWi36uGpEP4&usqp=CAU',
    'https://oneintheorangejacket.com/wp-content/uploads/2023/06/Bhutanese-Cuisine.jpg',
    'https://www.blueosa.com/wp-content/uploads/2020/07/butter-chicken-Chicken-Makhani.jpg',
    'https://media.istockphoto.com/id/1184182314/photo/mini-pavlova-cakes-meringue-dessert-with-berries.jpg?s=612x612&w=0&k=20&c=3Z6PRS4zZb7XqOO8sVyuULFeUFjkDYg5nDP3ChMC3V8='
    
  ];

  const animeWallpapers = [
   'https://www.asiadmc.com/sites/default/files/Deep_Fried_Food.jpg',
   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkdnkIASpm_Ms45kOQ9Zbe8GQRKTkM8D5eDQ&usqp=CAU',
   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa11bbO_b6qZ_elLgs6HH512p8hDyZLUZ7AA&usqp=CAU',
   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa11bbO_b6qZ_elLgs6HH512p8hDyZLUZ7AA&usqp=CAU',
   'https://media.istockphoto.com/id/1133151212/photo/japanese-dumplings-gyoza-with-pork-meat-and-vegetables.jpg?s=612x612&w=0&k=20&c=vC6GTUDGK6dD5_QHvY1V7fVUdPx-z4TG73DUACR_L5s=',
   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWrYBzSWM-j5Fr-pDJ6qlKVKFEoR1amcKRDw&usqp=CAU',
   'https://media.istockphoto.com/id/453780395/photo/chicken-chow-mein.jpg?s=612x612&w=0&k=20&c=KMwd2tqZLtJb2MyLH6ZixzXReAX5oaT3QANc7As2v5k=',
   'https://t4.ftcdn.net/jpg/01/07/93/25/360_F_107932517_bRTDt5PCP4mOxlnsifzR6kXxkR3xi8QA.jpg',
   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwydhEKStAyvl715JZWYcMJ4fi_4_cLBQ16g&usqp=CAU',
   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGu3YyzSEh8nSVF1vWm9V6v-Pp9mKVCH6v-g&usqp=CAU',
   'https://plus.unsplash.com/premium_photo-1669680785558-c189b49aed4e?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGVzc2VydHN8ZW58MHx8MHx8fDA%3D',
   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlBeXkrULkUAMpJDPz6vdmrBeuktD9Eoc2QQ&usqp=CAU',
   'https://media.istockphoto.com/id/1184182314/photo/mini-pavlova-cakes-meringue-dessert-with-berries.jpg?s=612x612&w=0&k=20&c=3Z6PRS4zZb7XqOO8sVyuULFeUFjkDYg5nDP3ChMC3V8='

];

  return (
    <ThemeProvider theme={theme}>
      <div style={{ backgroundColor: theme.palette.mode === 'dark' ? '#333' : '#f5f5f5', minHeight: '100vh' }}>
        <CssBaseline />
        <AppBar position="sticky" color='grey'>
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              AMBIENCE
            </Typography>
            <Button color="inherit" onClick={toggleTheme}>
              MODE
            </Button>
          </Toolbar>
        </AppBar>
       
        <Container>
          <Grid container spacing={2} alignItems="stretch">
            <Grid item xs={12} sm={6} md={8}>
              <Slider {...settings}>
                {animeData.map((anime, index) => (
                  <div key={index}>
                    <StyledCard>
                      <CardMedia component="img"  src=" " height="140" image={anime.image} alt={anime.title} />
                      <CardContent>
                        <Typography gutterBottom variant="h4">
                          {anime.title}
                        </Typography>
                        <Typography variant="body2">{anime.description}</Typography>
                      </CardContent>
                    </StyledCard>
                  </div>
                ))}
              </Slider>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100%">
                <Typography variant="h6" gutterBottom>
                  SIGNATURE DISHES
                </Typography>
                <Grid container spacing={2}>
                  {randomImages.map((image, index) => (
                    <Grid item xs={6} key={index}>
                      <img src={image} alt={`Random ${index}`} style={{ width: '100%' }} />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
          <Typography variant="h4" style={{ marginTop: '24px' }}>
            MENU
          </Typography>
          <Grid container spacing={2}>
            {animeWallpapers.map((wallpaper, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <StyledCard>
                  <CardMedia component="img" height="140" image={wallpaper} alt={`Anime Wallpaper ${index}`} />
                  <CardContent>
                    <Typography gutterBottom variant="h5">
                      DISHES {index + 1}
                    </Typography>
                   
                  </CardContent>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Home;