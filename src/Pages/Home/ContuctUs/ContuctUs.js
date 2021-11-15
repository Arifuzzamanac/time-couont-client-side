import React from 'react';
import TextField from '@mui/material/TextField';
import { Container, Grid } from '@mui/material';

const reviewBg = {
  background: '#0b142c',
  height: 500,
  borderRadius: 20
};

const ContuctUs = () => {
  return (
    <Container style={reviewBg} sx={{ textAlign: 'center', color: 'white', p: 3, marginTop: 5 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <h1 style={{ paddingTop: 40, width: '75%', margin: '50 auto' }}>Connect Us For Know Our Service</h1>
        <form style={{ backgroundColor: 'white', width: 700, margin: '15px auto', borderRadius: 20 }}>
          <TextField sx={{ width: '75%', m: 1 }} id="outline-basic" label="Your Name"></TextField>
          <TextField sx={{ width: '75%', m: 1 }} id="outline-basic" label="Your Email"></TextField>
          <TextField sx={{ width: '75%', m: 1 }} id="outline-basic" label="Phone Number"></TextField>
          <TextField sx={{ width: '75%', m: 1 }} id="outline-basic" label="Address"></TextField>
        </form>
      </Grid>
    </Container>
  );
};

export default ContuctUs;