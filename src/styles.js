import styled, { createGlobalStyle } from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => props.theme.mainColor};
    background-color: ${props => props.theme.backgroundColor};
  }
`;

/************************** BUTTONS **************************/
export const GoBackButton = styled.button`
  font-size: 1em;
  margin: 1.25em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.mainColor};
`;

export const DeleteButtonStyled = styled.p`
  color: ${props => props.theme.red};
`;

export const CreateButtonStyled = styled.button`
  color: ${(props) => props.theme.backgroundColor};
  background-color: ${(props) => props.theme.mainColor};

  &:hover {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;

export const ThemeButton = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.mainColor};
`;

/************************** WRAPPERS **************************/
export const ListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CookieWrapper = styled.div`
  img {
    width: 200px;
    height: 200px;
  }

  p {
    text-align: center;
    
    &.cookie-price {
      color: ${props => props.theme.pink};
    }
  }
`;

export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;

  img {
    width: 40%;
    float: left;
  }

  p {
    vertical-align: middle;
  }
`;

/************************** CONTENT **************************/
export const Logo = styled(Link)`
  padding: 0.75em;

  img {
    width: 8rem;
  }
`;

export const Title = styled.h1`
  text-align: center;
  color: purple;
`;

export const Description = styled.h4`
  text-align: center;
`;

export const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;

/************************** MISC. **************************/
export const NavStyled = styled.nav`
  background-color: ${props => props.theme.backgroundColor};
`;

export const NavItem = styled(NavLink)`
  padding: 0.25em 1em;
  color: ${props => props.theme.mainColor};

  &.active {
    color: ${props => props.theme.pink};
  }
`;

export const SearchBarStyled = styled.input`
  display: block;
  width: 40%;
  margin: 1rem auto;
  padding: 0.5rem;
`;
