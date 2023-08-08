import styled from "styled-components";

export const SubscribeContainer = styled.div`
  width: 100%;
  height: 323px;
  max-width: 1400px;
  margin: 0 auto;
  border-radius: 35px;
  display: flex;
  align-items: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const InnerSubscribe = styled.div`
  width: 89.8%;
  height: 113px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border: 1px solid black; */
`;

export const SubscribeTitle = styled.h2`
  width: 28%;
  height: 100%;
  color: #fff;
  font-size: 3.125em;
  line-height: 58.59px;
  font-family: "Roboto", sans-serif;
`;

export const EmailSubmit = styled.div`
  width: 45%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border: 1px solid black; */
`;

export const EmailSb = styled.input`
  width: 61%;
  height: 100%;
  background-color: white;
  border-radius: 16px;
  outline: none !important;
  border: none;
  font-size: 1.125em;
  padding-left: 15px;
  font-style: italic;
`;

export const SubmitSb = styled.button`
  width: 38%;
  height: 100%;
  background-color: #274c5b;
  border-radius: 16px;
  outline: none !important;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  font-size: 1.25em;
  font-weight: 700;

  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: #7eb693;
  }
`;
