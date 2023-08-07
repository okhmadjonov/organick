import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 204px;
  display: flex;
  align-items: center;
  border: 1px solid teal;
  background-color: white;
`;

export const HeaderMenu = styled.div`
  width: 83%;
  height: 66px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border: 1px solid black; */
`;
export const LogoMenu = styled.div`
  width: 57%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border: 1px solid red; */
`;

export const Logo = styled.div`
  width: 22%;
  height: 100%;
  /* border: 1px solid black; */
  display: flex;
  align-items: center;
  overflow: hidden;
`;

export const Menu = styled.div`
  width: 58%;
  height: 100%;
  /* border: 1px solid black; */
`;
export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style-type: none;
  cursor: pointer;
`;

export const ListItem = styled.li`
  height: 66px;
`;

export const Link = styled(NavLink)`
  height: 100%;
  color: #274c5b;
  font-size: 1.25em;
  font-weight: 700;
  display: flex;
  align-items: center;
  &:hover {
    transition: all 0.3s ease-in-out;
    color: #7eb693;
  }
`;

export const SearchCart = styled.div`
  width: 34%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  /* border: 1px solid black; */
`;

export const Search = styled.div`
  width: 67%;
  height: 100%;
  border-radius: 36px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #fafafa;
  cursor: pointer;
  /* border: 1px solid black; */
`;

export const SearchField = styled.input`
  width: 75%;
  height: 70%;
  background: none;
  font-size: 1em;
  outline: none !important;
  border: none;
  padding-left: 20px;
`;
export const SearchIcon = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2em;
  background-color: #7eb693;
`;

export const Cart = styled.div`
  width: 30%;
  height: 100%;
  border-radius: 36px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid #e0e0e0;
  cursor: pointer;
`;

export const CartIcon = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2em;
  background-color: #274c5b;
`;

export const CartText = styled.p`
  font-size: 1.125em;
  font-family: "Robot", sans-serif;
  font-weight: 600;
  line-height: 21.09px;
  color: #274c5b;
`;
