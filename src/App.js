import React, { useState } from 'react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';

// Styles
import { GlobalStyle, ThemeButton } from "./styles";
import { ThemeProvider } from "styled-components";

// Components
import CookieList from "./components/CookieList";
import CookieDetail from './components/CookieDetail';
import Home from './components/Home';

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
      <Link to="/" style={{ margin: 10 }}>Home</Link>
      <Link to="/cookies" style={{ margin: 10 }}>Cookies</Link>
      <Switch>
        <Route path="/cookies/:cookieId">
          <CookieDetail cookies={_cookies} setCookie={setCookie} />
        </Route>
        <Route path="/cookies">
          <CookieList setCookie={setCookie} cookies={_cookies} deleteCookie={deleteCookie} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      {/* {cookie === null ? <CookieList setCookie={setCookie} cookies={_cookies} deleteCookie={deleteCookie} /> : <CookieDetail cookie={cookie} setCookie={setCookie} />} */}
    </ThemeProvider>
  );
}

export default App;
