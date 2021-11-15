import React from 'react';
import Review from '../../Review/Review';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import ContuctUs from '../ContuctUs/ContuctUs';
import Services from '../Sevices/Services';

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <Services></Services>
      <Review></Review>
      <ContuctUs></ContuctUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;