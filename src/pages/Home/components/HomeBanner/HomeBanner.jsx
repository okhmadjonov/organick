import React from "react";
import { BannerContainer } from "./HomeBanner.styled";
import banner from "../../../../assets/img/banner.png";
const HomeBanner = () => {
  return (
    <BannerContainer
      style={{ backgroundImage: `url("${banner}")` }}></BannerContainer>
  );
};

export default HomeBanner;
