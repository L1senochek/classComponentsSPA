import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IClient, IClientsState } from '../../model/slices/clientsSlice';
import { RootState } from '../store';

const initialState: IClientsState = {
  clients: [],
  currentPage: 1,
};

const clientsSlice = createSlice({
  name: 'clients',
  initialState,
  reducers: {
    setClients: (state, action: PayloadAction<IClient[]>) => {
      state.clients = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
});

export const selectClients = (state: RootState) => state.clientsReducer.clients;
export const selectCurrentPage = (state: RootState) =>
  state.clientsReducer.currentPage;
export const { setClients, setPage } = clientsSlice.actions;
export default clientsSlice;
