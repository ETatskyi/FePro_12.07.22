import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'

import { movies } from './reducer';

const store = createStore(movies, composeWithDevTools())


store.subscribe(() => {
    localStorage.setItem('movies', JSON.stringify(store.getState()))
})

export default store;