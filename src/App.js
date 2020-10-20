import React from 'react';

// Data
import cookies from "./cookies";

// Styles
import styles from "./styles";

function App() {
  const cookieList = cookies.map(cookie => <div style={styles.cookie} key={cookie.id}>
    <img style={styles.cookieImage} src={cookie.image} alt="cute cookie" />
    <p style={styles.text}>{cookie.name}</p>
    <p style={styles.text}>{cookie.price} KD</p>
  </div>)
  return (
    <div>
      <div>
        <h1 style={styles.text}>Cookies and Beyond</h1>
        <h4 style={styles.text}>Where cookie maniax gather</h4>
        <img style={styles.shopImage} src="https://i.pinimg.com/originals/8f/cf/71/8fcf719bce331fe39d7e31ebf07349f3.jpg" alt="cookie shop" />
      </div>
      <div style={styles.list}>
        {cookieList}
      </div>
    </div>
  );
}

export default App;
