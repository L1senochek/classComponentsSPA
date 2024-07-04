import { PayloadAction } from '@reduxjs/toolkit';

export interface IClientsAction {
  type: string;
  payload: PayloadAction<boolean>;
}

export interface IClientsState {
  clients: object;
  currentPage: number;
}
