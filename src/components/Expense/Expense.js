import ExpenseItem from "../Expense/Expenseltem";
import ExpenseFilter from "../ExpenseFilter";

import '../../assets/css/Expense/Expense.css';
import Card from "../UI/Card";
import { useState } from "react";

const Expense = (props) => {

    const [ filteredYear, setFilteredYear ] = useState('2020'); //화면에 기본셀렉트 설정값지정하기

    const filterEventHandler = (selectedYear) => {
        // console.log('Expense.js');
        // console.log(selectedYear);
        setFilteredYear(selectedYear);
    };

    return(
        <>   
            <Card className="expenses">
                <ExpenseFilter selected={filteredYear} onChangeAddFilter={filterEventHandler}/>
                <ExpenseItem 
                    title={props.items[0].title} 
                    amount={props.items[0].amount} 
                    date={props.items[0].date}
                />
                <ExpenseItem 
                    title={props.items[1].title} 
                    amount={props.items[1].amount} 
                    date={props.items[1].date} 
                />
                <ExpenseItem 
                    title={props.items[2].title} 
                    amount={props.items[2].amount} 
                    date={props.items[2].date} 
                />
                <ExpenseItem 
                    title={props.items[3].title} 
                    amount={props.items[3].amount} 
                    date={props.items[3].date} 
                />
            </Card>
        </>
    )
}
export default Expense;