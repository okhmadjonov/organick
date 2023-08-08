import React from "react";
import {
  EmailSb,
  EmailSubmit,
  InnerSubscribe,
  SubmitSb,
  SubscribeContainer,
  SubscribeTitle,
} from "./Subscribe.styled";
import subscribeImg from "../../assets/img/subscribe.png";
const Subscribe = () => {
  return (
    <SubscribeContainer style={{ backgroundImage: `url(${subscribeImg})` }}>
      <InnerSubscribe>
        <SubscribeTitle>Subscribe to our Newsletter</SubscribeTitle>
        <EmailSubmit>
          <EmailSb placeholder="Your Email Address"></EmailSb>
          <SubmitSb>Subscribe</SubmitSb>
        </EmailSubmit>
      </InnerSubscribe>
    </SubscribeContainer>
  );
};

export default Subscribe;
