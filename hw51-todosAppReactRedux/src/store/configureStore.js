import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'

import { todos } from './reducer';

const store = createStore(todos, composeWithDevTools())


store.subscribe(() => {
    console.log(store.getState())
    localStorage.setItem('todos', JSON.stringify(store.getState()))
})

export default store;