import React from "react";
import { HomeContainer } from "./Home.styled";
import HomeBanner from "./components/HomeBanner/HomeBanner";
import HomeOfferBanner from "./components/HomeOfferBanner/HomeOfferBanner";
import Subscribe from "../../components/Subscribe/Subscribe";

const Home = () => {
  return (
    <HomeContainer>
      <HomeBanner />
      <HomeOfferBanner />
      <Subscribe />
    </HomeContainer>
  );
};

export default Home;
