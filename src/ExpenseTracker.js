import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addExpense, removeExpense } from './redux/actions';
import './ExpenseTracker.css';

const ExpenseTracker = () => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const dispatch = useDispatch();
    const expenses = useSelector(state => state.expenses.expenses);

    const handleAddExpense = () => {
        const expense = {
            id: Date.now(),
            description,
            amount: parseFloat(amount),
        };
        dispatch(addExpense(expense));
        setDescription('');
        setAmount('');
    };
    const handleRemoveExpense = (id) => {
        dispatch(removeExpense(id));
    };

  return (
    <div>
        <h1>Expense Tracker</h1>
        <input
        type='text'
        placeholder='Description'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        />
        <input
        type='number'
        placeholder='Amount'
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={handleAddExpense}>Add Expense</button>
        <ul>
            {expenses.map(expense => (
                <li key={expense.id}>
                    {expense.description}: ${expense.amount}
                    <button onClick={() => handleRemoveExpense(expense.id)}>Remove</button>
                </li>
            ))}
        </ul>
    </div>
  );
};

export default ExpenseTracker;