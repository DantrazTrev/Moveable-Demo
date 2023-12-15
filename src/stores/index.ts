
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import  canvasReducer  from './canvasReducer';
import storage from 'redux-persist/lib/storage'
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
const persistConfig = {
  key: 'canvas',
  storage: storage,
}
import {persistStore} from 'redux-persist';
// Define your root reducer by combining multiple reducers

const reducers= combineReducers({
  canvas: canvasReducer,
})

const persistedReducer = persistReducer(persistConfig, reducers);

export const makeStore = () =>
  configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
  });


// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export const store = makeStore();

export const persistor = persistStore(store);
