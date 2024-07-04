import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ILanguageState } from '../../model/slices/languageSlice';
import { RootState } from '../store';

const initialState: ILanguageState = {
  language: 'ru',
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export const selectLanguage = (state: RootState) =>
  state.languageReducer.language;
export default languageSlice;
