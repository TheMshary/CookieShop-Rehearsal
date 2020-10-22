import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => props.theme.mainColor};
    background-color: ${props => props.theme.backgroundColor};
  }
`;

const ThemeButton = styled.button`
  font-size: 1em;
  margin: 1.25em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.mainColor};
`;

const Title = styled.h1`
  text-align: center;
  color: purple;
`;

const Description = styled.h4`
  text-align: center;
`;

const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;

const ListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CookieWrapper = styled.div`
  margin: 20px;

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

const SearchBarStyled = styled.input`
  display: block;
  width: 40%;
  margin: 1rem auto;
  padding: 0.5rem;
`;

export { GlobalStyle, ThemeButton, Title, Description, ShopImage, ListWrapper, CookieWrapper, SearchBarStyled };