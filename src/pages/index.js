import React from "react";
import { ThemeProvider } from "styled-components";

import Navigation from "sections/Navigation";
import BannerTwo from 'sections/BannerTwo';
import Service from "sections/Service";
import CoinFund from "sections/CoinFund";
import About from "sections/About";
import Awards from "sections/Awards";
import UserMap from "sections/UserMap";
import Wallet from "sections/Wallet";
import Statistics from "sections/Statistics";
import Faq from "sections/Faq";
import Footer from "sections/Footer";

import FavIcon from "assets/images/fav-icon.png";
import theme from "assets/theme/theme";
import GlobalStyle from "assets/theme";

const Head = ({ children }) => {
  return <head>{ children }</head>
};

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
      <title>WTCH Finance - Virtualizing specialty trade</title>
        <meta name="Description" content="WTCH is the cryptocurrency used in the new age of specialty item trade, entering its public sale" />
        <meta name="theme-color" content="#280D57" />
        <link rel="shortcut icon" type="image/x-icon" href={FavIcon} />
      </Head>

      <GlobalStyle />
      <Navigation />
      <BannerTwo />
      <Service />
      <CoinFund />
      <About />
      <Statistics />
       <Faq />
      <Footer />
    </ThemeProvider>
  );
};

export default Home;
