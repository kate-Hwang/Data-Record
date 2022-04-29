import { useState } from "react";

import ExpenseItem from "../Expense/Expenseltem";
import ExpenseFilter from "../ExpenseFilter";

import '../../assets/css/Expense/Expense.css';
import Card from "../UI/Card";


const Expense = (props) => {

    const [ filteredYear, setFilteredYear ] = useState('2020'); //화면에 기본셀렉트 설정값지정하기

    const filterEventHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    return(
        <>   
            <Card className="expenses">
                <ExpenseFilter selected={filteredYear} onChangeAddFilter={filterEventHandler}/>
                {props.items.map((expense) => ( 
                        <ExpenseItem 
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                        />
                    ))}
            </Card>
        </>
    )
}
export default Expense;