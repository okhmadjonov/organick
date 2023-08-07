import styled from "styled-components";

export const OfferContainer = styled.div`
  width: 100%;
  height: 675px;
  display: flex;
  align-items: center;
  background-color: white;
  /* border: 1px solid black; */
`;

export const InnerContainer = styled.div`
  width: 80vw;
  height: 367px;
  max-width: 1400px;
  margin: 0 auto;
  /* border: 1px solid black; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;
export const InnerContainerOne = styled.div`
  width: 49%;
  height: 100%;
  /* border-radius: 8px; */
  border-radius: 35px;
  /* border: 1px solid black; */
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`;
export const InnerContainerTwo = styled.div`
  width: 49%;
  height: 100%;
  overflow: hidden;
  border-radius: 35px;
  /* border: 1px solid black; */
  img {
    width: 100%;
    height: 100%;
  }
`;
