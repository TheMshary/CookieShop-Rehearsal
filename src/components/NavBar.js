import React from 'react'

// Styling
import { ThemeButton, Logo, NavStyled, NavItem } from "../styles";
import lightLogo from "../light-logo.png";


const NavBar = ({ toggleTheme, currentTheme }) => {
  return (
    <NavStyled className="navbar navbar-expand-lg">
      <Logo className="navbar-brand" to="/">
        <img src={lightLogo} alt="logo" />
      </Logo>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <NavItem className="nav-item" to="/cookies" style={{ margin: 10 }}>Cookies</NavItem>
          <ThemeButton className="nav-item" onClick={toggleTheme}>
            {currentTheme === "light" ? "Dark" : "Light"} Mode
          </ThemeButton>
        </div>
      </div>
    </NavStyled>
  )
}

export default NavBar
