import { ADD_EXPENSE, REMOVE_EXPENSE } from "../actions";

const initialState = {
    expenses: [],
};

const expenseReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_EXPENSE:
            return {
                ...state,
                expenses: [...state.expenses, action.payload],
            };
        case REMOVE_EXPENSE:
            return {
                ...state,
                expenses: state.expenses.filter(expense => expense.id !== action.payload),
            };
        default:
            return state;
    }
};

export default expenseReducer;