import { combineReducers, configureStore } from '@reduxjs/toolkit';
import clientsSlice from './slices/clientsSlice';
import languageSlice from './slices/languageSlice';

const rootReducer = combineReducers({
  clientsReducer: clientsSlice.reducer,
  languageReducer: languageSlice.reducer,
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
