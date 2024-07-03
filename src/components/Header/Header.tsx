import React from 'react';
import styles from './header.module.css';
import Watch from '../Watch/Watch';

class Header extends React.Component {
  render() {
    const headerImg =
      'https://assets.turbologo.ru/assets/landing/watermark-349102dbc1cb51b5b93f17117681dccfcccdec93ef6fab3832f9ddaf532cb72d.png';

    return (
      <header className={styles.header}>
        <img
          className={styles.header__img}
          src={headerImg}
          alt="header image"
        />
        <select className={styles.header__select}>
          <option value="ru">ru</option>
          <option value="en">en</option>
        </select>
        <Watch />
      </header>
    );
  }
}

export default Header;
