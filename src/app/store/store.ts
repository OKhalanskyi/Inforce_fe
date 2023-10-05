import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { productsAPI } from '@/api/product.api.ts';

const rootReducer = combineReducers({
  [productsAPI.reducerPath]: productsAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productsAPI.middleware),
  });
};

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];