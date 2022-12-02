import { ADD_TODO, CHECK_TODO, DELETE_TODO } from './types';

const initialTodos = JSON.parse(localStorage.getItem('state'));

const todos = (state = initialTodos, action) => {
    switch (action.type) {

        case ADD_TODO: {
            return [
                ...state,
                {
                    value: action.payload.todo,
                    checked: false,
                    id: Math.floor(Math.random() * 9999)
                },
            ]
        }

        case CHECK_TODO: {
            const target = action.payload;
            const newState = state.map(el => el.id == target ? { ...el, checked: !el.checked } : el);

            return [...newState]
        }

        case DELETE_TODO: {
            const target = action.payload;
            const newState = state.filter(el => el.id != target);

            return [...newState]
        }

        default:
            return state
    }
}

export { todos };