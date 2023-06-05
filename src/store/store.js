import { createStore, compose, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { rootReducer } from './rootReducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['todos'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [logger];

const composeEnhancer = compose(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composeEnhancer);

export const persistor = persistStore(store);
