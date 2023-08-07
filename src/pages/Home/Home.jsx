import React from "react";
import { HomeContainer } from "./Home.styled";
import HomeBanner from "./components/HomeBanner/HomeBanner";
import HomeOfferBanner from "./components/HomeOfferBanner/HomeOfferBanner";

const Home = () => {
  return (
    <HomeContainer>
      <HomeBanner />
      <HomeOfferBanner />
    </HomeContainer>
  );
};

export default Home;
