import React from 'react';
import { connect } from 'react-redux';
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
import IMainProps from '../../model/Main/main';
import { IClient } from '@/model/slices/clientsSlice';

class Main extends React.Component<IMainProps> {
  componentDidMount() {
    this.loadClientsData();
  }

  componentDidUpdate(prevProps: IMainProps) {
    if (prevProps.language !== this.props.language) {
      this.loadClientsData();
    }
  }

  loadClientsData = (): void => {
    fetch('/jsons/data.json')
      .then((response) => response.json())
      .then((data) => {
        const { language } = this.props;
        const formattedData = Object.values(data[language] as IClient[]).map(
          (client: IClient) => ({
            name: client.name,
            review: client.review,
            date: client.date,
          })
        );
        this.props.setClients(formattedData);
      });
  };

  formatClientName = (fullName: string): string => {
    const [lastName, firstName] = fullName.split(' ');
    if (!firstName) {
      return lastName;
    }
    return `${lastName} ${firstName.charAt(0)}.`;
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
      <main className={styles.main}>
        <div className={styles.clients}>
          {currentClients.map((client, index) => (
            <div key={index} className={styles.client}>
              <div className={styles.client__name}>
                {this.formatClientName(client.name)}
              </div>
              <div className={styles.client__text}>{client.review}</div>
              <div className={styles.client__date}>{client.date}</div>
            </div>
          ))}
        </div>
        <div className={styles.pagination}>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => this.handlePageChange(index + 1)}
              className={`${styles.pagination__btn}${currentPage === index + 1 ? ` ${styles.active}` : ''}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </main>
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
