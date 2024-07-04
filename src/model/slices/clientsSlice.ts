export interface IClient {
  name: string;
  review: string;
  date: string;
}

export interface IClientsState {
  clients: IClient[];
  currentPage: number;
}
