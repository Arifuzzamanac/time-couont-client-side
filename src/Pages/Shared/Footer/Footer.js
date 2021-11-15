import React from 'react';
import Grid from '@mui/material/Grid';

const footerBg = {
  background: '#0b142c',
  color: 'white'
};

const Footer = () => {
  return (
    <Grid sx={{ marginTop: 10 }} container spacing={2} style={footerBg}>
      <Grid item xs={12} md={4}>
        <h4 style={{ paddingLeft: 20 }}>FARFETCH APP</h4>
        <p style={{ paddingLeft: 20 }}>Farfetch App for iOS and Android</p>
      </Grid>
      <Grid item xs={12} md={4} >
        <div>
          <h4 style={{ paddingLeft: 20 }}>DESTINATION/REGION, CURRENCY AND LANGUAGE</h4>
          <h4 style={{ paddingLeft: 20 }}>BANGLADESH usd $</h4>
        </div>
        <div>
          <i style={{ fontSize: 30, marginRight: 10, paddingLeft: 20 }} class="fab fa-facebook-square"></i>
          <i style={{ fontSize: 30, marginRight: 10 }} class="fab fa-twitter-square"></i>
          <i style={{ fontSize: 30, marginRight: 10 }} class="fab fa-linkedin"></i>
          <i style={{ fontSize: 30, marginRight: 10 }} class="fab fa-google-plus-g"></i>
        </div>
      </Grid>
      <Grid item xs={12} md={2}>
        <ul style={{ listStyle: 'none' }}>
          <h5>Customer Service</h5>
          <li>Help & contact us</li>
          <li>Orders & shipping</li>
          <li>Payment & pricing</li>
          <li>Returns & refunds</li>
          <li>FAQs</li>
          <li>Terms & conditions</li>
          <li>Privacy policy</li>
          <li>Accessibility</li>
        </ul>
      </Grid>
      <Grid item xs={12} md={2}>
        <ul style={{ listStyle: 'none' }}>
          <h5>About Us</h5>
          <li>About us</li>
          <li>Investor</li>
          <li>Partner</li>
          <li>Affiliate Programme</li>
          <li>Careers</li>
          <li>FARFETCH Customer</li>
          <li>Promise</li>
          <li>Sitemap</li>
          <li>Positively ROLEX</li>
        </ul>
      </Grid>
    </Grid>
  );
};

export default Footer;