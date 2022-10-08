import { configureStore } from '@reduxjs/toolkit';
import { shazamCoreApi } from './services/shazamCoreApi';
import playerReducer from './features/playerSlice';

export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    musicPlayer: playerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shazamCoreApi.middleware),
});
