import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import CustomerReview from '../CurstomerReview/CustomerReview'

const CustomerReviews = () => {
  const [clientReviews, setClientReviews] = useState([])
  useEffect(() => {
    fetch('https://infinite-tor-54657.herokuapp.com/rating')
      .then(res => res.json())
      .then(data => setClientReviews(data))
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Grid container="container">
          {
            clientReviews.map(clientReview => <CustomerReview
              key={clientReview.id}
              clientReview={clientReview}
            ></CustomerReview>)
          }
        </Grid>
      </Container>
    </Box>
  );
};

export default CustomerReviews;