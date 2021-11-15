import { Button, Grid, Typography } from '@mui/material';
import { Box} from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid style={{width:"100%", height:"80vh", backgroundImage:"url(https://i.ibb.co/Gczsmqy/banner.jpg)", backgroundRepeat:"no-repeat", backgroundSize:"cover"}} item xs={12} md={12}>
          <Box style={{marginTop:"27vh", paddingRight:"5%"}} sx={{ textAlign: 'left' }}>
          <Typography style={{color:'#f3e0ca', textTransform:"uppercase", fontSize:"30px"}} variant="body1" gutterBottom> FALL IN LOVE </Typography>
          <Typography style={{color:'#f3e0ca', textTransform:"uppercase"}} variant="h3" gutterBottom component="div"> Redefining the meaning of time </Typography>
          <Link to="/exploreProducts">
          <Button style={{color:'#f3e0ca', textTransform:"uppercase", fontSize:"20px"}} variant="outlined">More Product</Button>
          </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;