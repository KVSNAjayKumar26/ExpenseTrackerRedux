export const ADD_EXPENSE = 'ADD_EXPENSE';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';

export const addExpense = (expense) => ({
    type: ADD_EXPENSE,
    payload: expense,
});

export const removeExpense = (id) => ({
    type: REMOVE_EXPENSE,
    payload: id,
});