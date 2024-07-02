import React from 'react';
import styles from './header.module.css';
import Watch from '../Watch/Watch';

class Header extends React.Component {
  render() {
    const headerImg =
      'https://assets.turbologo.ru/assets/landing/watermark-349102dbc1cb51b5b93f17117681dccfcccdec93ef6fab3832f9ddaf532cb72d.png';

    return (
      <header className={styles.header}>
        <img src={headerImg} alt="Logo" />
        <select>
          <option value="ru">RU</option>
          <option value="en">EN</option>
        </select>
        <Watch />
      </header>
    );
  }
}

export default Header;
