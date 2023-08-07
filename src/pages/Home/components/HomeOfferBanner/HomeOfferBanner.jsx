import React from "react";
import {
  OfferContainer,
  InnerContainerOne,
  InnerContainerTwo,
  InnerContainer,
} from "./HomeOfferBanner.styled";

import offerOne from "../../../../assets/img/1.png";
import offerTwo from "../../../../assets/img/2.png";

const HomeOfferBanner = () => {
  return (
    <OfferContainer>
      <InnerContainer>
        <InnerContainerOne>
          <img src={offerOne} alt="OfferOne" />
        </InnerContainerOne>
        <InnerContainerTwo>
          <img src={offerTwo} alt="OfferTwo" />
        </InnerContainerTwo>
      </InnerContainer>
    </OfferContainer>
  );
};

export default HomeOfferBanner;
