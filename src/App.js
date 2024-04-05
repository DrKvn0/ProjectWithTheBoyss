import './app.css';
import React, {useState} from "react";
import {useForm} from "react-hook-form"
import PopUp from "./components/pop-up/PopUp";
import InputField, {SubmitButton} from "./components/input-field/InputField";
import ExpenseTable from "./components/table/Table";
import MonthlyCapNumber from "./components/statistics/Stat";
import {Tag, TagList} from "./components/tags/Tags";
import Dropdown from "./components/dropdown/Dropdown";

const expenses = [];
const categories = ["Eating out", "Drinking", "Groceries", "Accommodation"]

let total_expenses = 0;

function parseCur(NumStr) {
    const num = NumStr.slice(1).replace(',', '');
    return parseFloat(num);
}


export default function App() {
    const [addExpenseOpen, setAddExpenseOpen] = useState(false);
    const { register, handleSubmit, reset, setValue } = useForm();




    const onSubmit = (data, event) => {
        event.preventDefault();
        console.log(data);
        expenses.push(data);
        console.log(parseCur(data.amount))
        total_expenses += parseCur(data.amount);
        console.log(total_expenses)
        console.log(expenses)
        setAddExpenseOpen(false);
        reset();
    }


    return (
      <>
          <MonthlyCapNumber expenses={total_expenses}/>
          <button className="addExpenseButton" onClick={() => setAddExpenseOpen(true)}>Add Expense</button>
        <PopUp isOpen={addExpenseOpen} onClose={() => setAddExpenseOpen(false)}>
            <h1>ADD EXPENSE</h1>
            <br/>
            <form onSubmit={handleSubmit((data, event) => onSubmit(data, event))}>
                <InputField name="name" type="text" placeholder="e.g. Coffee" isRequired={true} register={register} setValue={setValue}/>
                <InputField name="amount" type="currency" placeholder="3" isRequired={true} register={register} setValue={setValue}/>
                <InputField name="date" type="date_past" isRequired={true} register={register} setValue={setValue}/>
                <InputField name="comment" type="textarea" placeholder="Type here..." isRequired={false} register={register} setValue={setValue}/>
                <InputField name="category" type="category" isRequired={true} setValue={setValue} options={categories}/>
                <SubmitButton />
            </form>
            <br/>
        </PopUp>
        <ExpenseTable data={expenses}/>
      </>
    );
}

