import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import {
  IClientsAction,
  IClientsState,
} from '../../model/slices/clientsReducer';
import { RootState } from '../store';

const initialState: IClientsState = {
  clients: [],
  currentPage: 1,
};

const clientsSlice = createSlice({
  name: 'clients',
  initialState,
  reducers: {
    setClients: (state, action: PayloadAction<IClientsAction['payload']>) => {
      state.clients = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
});

export const selectClients = (state: RootState) => state.clientsSlice.clients;
export const selectCurrentPage = (state: RootState) =>
  state.clientsSlice.currentPage;

export const { setClients, setPage } = clientsSlice.actions;

export default clientsSlice;
