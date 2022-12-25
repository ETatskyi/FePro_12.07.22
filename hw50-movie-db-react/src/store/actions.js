export const addToDo = (payload) => ({
    type: 'ADD_TODO',
    payload
});

export const checkToDo = (payload) => ({
    type: 'CHECK_TODO',
    payload
});

export const deleteToDo = (payload) => ({
    type: 'DELETE_TODO',
    payload
});
