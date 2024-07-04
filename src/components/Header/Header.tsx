import React from 'react';
import styles from './header.module.css';
import Watch from '../Watch/Watch';
import { connect } from 'react-redux';
import { selectLanguage, setLanguage } from '../../store/slices/languageSlice';
import { RootState } from '../../store/store';
import { Dispatch } from '@reduxjs/toolkit';

interface HeaderProps {
  language: string;
  setLanguage: (language: string) => void;
}

class Header extends React.Component<HeaderProps> {
  handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.props.setLanguage(event.target.value);
  };

  render() {
    const headerImg =
      'https://assets.turbologo.ru/assets/landing/watermark-349102dbc1cb51b5b93f17117681dccfcccdec93ef6fab3832f9ddaf532cb72d.png';
    const { language } = this.props;

    return (
      <header className={styles.header}>
        <img
          className={styles.header__img}
          src={headerImg}
          alt="header image"
        />
        <select
          className={styles.header__select}
          value={language}
          onChange={this.handleLanguageChange}
        >
          <option value="ru">ru</option>
          <option value="en">en</option>
        </select>
        <Watch />
      </header>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  language: selectLanguage(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setLanguage: (language: string) => dispatch(setLanguage(language)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
