import React, { useState } from 'react';

// Styles
import { GlobalStyle, ThemeButton, Title, Description, ShopImage } from "./styles";
import { ThemeProvider } from "styled-components";

// Components
import CookieList from "./components/CookieList";
import CookieDetail from './components/CookieDetail';

// Data
import cookies from './cookies';

const theme = {
  light: {
    mainColor: "#242424",
    backgroundColor: "#fefafb",
    pink: "#ff85a2",
    red: "#ff3232"
  },
  dark: {
    mainColor: "#fefafb",
    backgroundColor: "#242424",
    pink: "#ff85a2",
    red: "#ff3232"
  }
}

function App() {
  // const [VARIABLE, FUNCTION] = useState(INITIAL_VALUE);
  const [currentTheme, setCurrentTheme] = useState("light");
  const [cookie, setCookie] = useState(null);
  const [_cookies, setCookies] = useState(cookies);

  const deleteCookie = cookieId => {
    setCookies(_cookies.filter(cookie => cookie.id !== cookieId))
  }

  const toggleTheme = () => setCurrentTheme(currentTheme === "light" ? "dark" : "light");

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <ThemeButton onClick={toggleTheme}>
        {currentTheme === "light" ? "Dark" : "Light"} Mode
      </ThemeButton>
      <div>
        <Title>Cookies and Beyond</Title>
        <Description>Where cookie maniax gather</Description>
        <ShopImage src="https://i.pinimg.com/originals/8f/cf/71/8fcf719bce331fe39d7e31ebf07349f3.jpg" alt="cookie shop" />
      </div>
      {cookie === null ? <CookieList setCookie={setCookie} cookies={_cookies} deleteCookie={deleteCookie} /> : <CookieDetail cookie={cookie} setCookie={setCookie} />}
    </ThemeProvider>
  );
}

export default App;
