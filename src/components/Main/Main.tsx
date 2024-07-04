import React from 'react';
import { connect } from 'react-redux';
// import { Dispatch } from 'redux';

import styles from './main.module.css';
import { RootState } from '../../store/store';
import {
  selectClients,
  selectCurrentPage,
  setClients,
  setPage,
} from '../../store/slices/clientsSlice';
import { selectLanguage } from '../../store/slices/languageSlice';
import { Dispatch } from '@reduxjs/toolkit';

interface MainProps {
  clients: { name: string; review: string; date: string }[];
  currentPage: number;
  language: string;
  setClients: (
    clients: { name: string; review: string; date: string }[]
  ) => void;
  setPage: (page: number) => void;
}

class Main extends React.Component<MainProps> {
  componentDidMount() {
    this.loadClientsData();
  }

  componentDidUpdate(prevProps: MainProps) {
    if (prevProps.language !== this.props.language) {
      this.loadClientsData();
    }
  }

  loadClientsData = (): void => {
    fetch('./src/jsons/data.json')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        const { language } = this.props;

        console.log(data[language]);

        const formattedData = Object.values(data[language]).map(
          (client: any) => ({
            name: client.name,
            review: client.review,
            date: client.date,
          })
        );

        this.props.setClients(formattedData);
      });
  };

  handlePageChange = (page: number) => {
    this.props.setPage(page);
  };

  render() {
    const { clients, currentPage } = this.props;
    const clientsPerPage = 10;
    const totalPages = Math.ceil(clients.length / clientsPerPage);
    const startIndex = (currentPage - 1) * clientsPerPage;
    const currentClients = clients.slice(
      startIndex,
      startIndex + clientsPerPage
    );

    return (
      <div className={styles.main}>
        <div className={styles.clients}>
          {currentClients.map((client, index) => (
            <div key={index} className={styles.review}>
              <div className={styles.review__name}>{client.name}</div>
              <div className={styles.review__text}>{client.review}</div>
              <div className={styles.review__date}>{client.date}</div>
            </div>
          ))}
        </div>
        <div className={styles.pagination}>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => this.handlePageChange(index + 1)}
              className={currentPage === index + 1 ? styles.active : ''}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  clients: selectClients(state),
  currentPage: selectCurrentPage(state),
  language: selectLanguage(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setClients: (clients: { name: string; review: string; date: string }[]) =>
    dispatch(setClients(clients)),
  setPage: (page: number) => dispatch(setPage(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
