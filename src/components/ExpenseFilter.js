import React from 'react';
import '../assets/css/Expense/ExpensesFilter.css';

const ExpenseFilter = (props) => {

    const filterChangeHandler = (event) => {
        props.onChangeAddFilter(event.target.value);
    };

    return(
        <div className="expenses-filter">
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.selected} onChange={filterChangeHandler}>
                    <option value='2022'>2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </div>
    )
}
export default ExpenseFilter;