import React from 'react';

const ExpenseDate = (props) => {
    
    const month = props.date.toLocaleString('en-US',{month: 'long'});
    const day = props.date.getDate();
    const year = props.date.getFullYear();
    
    return(
         <div>
            <div>{month}</div>
            <div>{year}</div>
            <div>{day}</div>
        </div>
    );
}
export default ExpenseDate;