import React from "react";
import logo from "../../assets/img/Logo.png";
import { GoChevronDown } from "react-icons/go";
import { BiSearch } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {
  Cart,
  CartIcon,
  CartText,
  HeaderContainer,
  HeaderMenu,
  Link,
  List,
  ListItem,
  Logo,
  LogoMenu,
  Menu,
  Search,
  SearchCart,
  SearchField,
  SearchIcon,
} from "./Header.styled";
const Header = () => {
  return (
    <HeaderContainer>
      <HeaderMenu>
        <LogoMenu>
          <Logo>
            <img src={logo} alt="Logo" />
          </Logo>
          <Menu>
            <List>
              <ListItem>
                <Link to="/">Home</Link>
              </ListItem>
              <ListItem>
                <Link to="/about">About</Link>
              </ListItem>
              <ListItem>
                <Link to="/pages">
                  Pages <GoChevronDown style={{ marginTop: "4px" }} />
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/shop">Shop</Link>
              </ListItem>
              <ListItem>
                <Link to="/projects">Projects</Link>
              </ListItem>
              <ListItem>
                <Link to="/News">News</Link>
              </ListItem>
            </List>
          </Menu>
        </LogoMenu>
        <SearchCart>
          <Search>
            <SearchField></SearchField>
            <SearchIcon>
              <BiSearch />
            </SearchIcon>
          </Search>
          <Cart>
            <CartIcon>
              <AiOutlineShoppingCart />
            </CartIcon>
            <CartText>Cart (0)</CartText>
          </Cart>
        </SearchCart>
      </HeaderMenu>
    </HeaderContainer>
  );
};

export default Header;
