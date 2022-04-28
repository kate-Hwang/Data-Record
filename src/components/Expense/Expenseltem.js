
import { useState } from 'react';

import '../../assets/css/Expense/ExpenseItem.css';
import ExpenseDate from '../Expense/ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => { 

    const [title, setTitle] = useState(props.title);
    // console.log('돌아가면서 표현하긔');

    const clickHandler = () =>{
        setTitle('Update!!!');
        console.log(title);
    };

    return(
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    )
}
export default ExpenseItem;