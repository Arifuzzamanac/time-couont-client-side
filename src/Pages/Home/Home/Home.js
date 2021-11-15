import React from 'react';
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
      <ContuctUs></ContuctUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;