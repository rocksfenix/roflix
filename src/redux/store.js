import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';

import videos from './reducers/videos-reducer';

const rootReducer = combineReducers({
  videos,
});

const persistConfig = {
  key: 'videos',
  storage: AsyncStorage,
  blacklist: [
    'selectedMovie',
  ],
};

const persistedReducer = persistReducer(
  persistConfig,
  rootReducer,
);

export const store = createStore(
  persistedReducer,
  applyMiddleware(thunk),
);

export const persistor = persistStore(store);
