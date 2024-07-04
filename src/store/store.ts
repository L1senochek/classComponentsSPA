import { combineReducers, configureStore } from '@reduxjs/toolkit';

import clientsSlice from './slices/clientsReducer';

const rootReducer = combineReducers({
  clientsSlice: clientsSlice.reducer,
});

const store = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore['dispatch'];
export default store;
