interface IMainProps {
  clients: { name: string; review: string; date: string }[];
  currentPage: number;
  language: string;
  setClients: (
    clients: { name: string; review: string; date: string }[]
  ) => void;
  setPage: (page: number) => void;
}

export default IMainProps;
