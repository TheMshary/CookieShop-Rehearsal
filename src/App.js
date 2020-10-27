import React, { useState } from 'react';
import slugify from 'react-slugify';

// Routes
import { Route, Switch } from 'react-router';

// Styles
import { GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";

// Components
import CookieList from "./components/CookieList";
import CookieDetail from './components/CookieDetail';
import Home from './components/Home';
import NavBar from './components/NavBar';

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
  const [currentTheme, setCurrentTheme] = useState("light");
  const [_cookies, setCookies] = useState(cookies);

  const deleteCookie = cookieId => {
    setCookies(_cookies.filter(cookie => cookie.id !== cookieId))
  }

  const createCookie = cookie => {
    cookie.id = _cookies[_cookies.length - 1].id + 1;
    cookie.slug = slugify(cookie.name);
    setCookies([..._cookies, cookie]);
  }

  const toggleTheme = () => setCurrentTheme(currentTheme === "light" ? "dark" : "light");

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />
      <Switch>
        <Route path="/cookies/:cookieSlug">
          <CookieDetail cookies={_cookies} />
        </Route>
        <Route path="/cookies">
          <CookieList cookies={_cookies} deleteCookie={deleteCookie} createCookie={createCookie} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
