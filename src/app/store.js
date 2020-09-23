import { configureStore } from '@reduxjs/toolkit';
import cardapioReducer from '../features/Cardapio/CardapioSlice';

export default configureStore({
  reducer: {
    cardapio: cardapioReducer,
  },
});
