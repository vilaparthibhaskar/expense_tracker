import React, { useState } from 'react'
import MonthExpense from './MonthExpense'

export default function ExpenseChart({ expenses }) {
    let exp = new Array(12).fill(0);
    let max = 0
    expenses.forEach(expense => {
        let month = parseInt(expense.date.slice(5, 7)) - 1;
        exp[month] += expense.price;
        max = Math.max(max, exp[month])
    });

    let mon = { 0: 'Jan', 1: 'Feb', 2: 'Mar', 3: 'Apr', 4: 'May', 5: 'June', 6: 'July', 7: 'Aug', 8: 'Sep', 9: 'Oct', 10: 'Nov', 11: 'Dec' }
    return (
        <div className='d-flex justify-content-evenly'>
            {exp.map((monthexpense, index) => {
                return <MonthExpense label={mon[index]} val={(monthexpense / max) * 100} key={mon[index]}/>
            })
            }
        </div>
    )
}