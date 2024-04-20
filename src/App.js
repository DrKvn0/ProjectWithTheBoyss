import './app.css';
import React, {useState} from "react";
import {useForm} from "react-hook-form"
import PopUp from "./components/pop-up/PopUp";
import InputField, {SubmitButton} from "./components/input-field/InputField";
import ExpenseTable from "./components/table/Table";
import MonthlyCapNumber from "./components/statistics/Stat";
import PieChartComponent from "./components/statistics/AdvStat";

export const expenses = [];

export const categories = {
    "Eating out": "#FFD1DC",
    "Drinking": "#FFFFCC",
    "Groceries": "#A2D5F2",
    "Accommodation": "#D7BDE2"
}
let total_expenses = 0;

export function parseCur(NumStr) {
    const num = NumStr.slice(1).replace(',', '');
    return parseFloat(num);
}


export default function App() {
    const [addExpenseOpen, setAddExpenseOpen] = useState(false);
    const [addTagOpen, setAddTagOpen]= useState(false);
    const { register, handleSubmit, reset, setValue } = useForm();


    const onTagSubmit = (data, event) => {
        event.preventDefault();
        console.log(data);
        data.tagColor = data.tagColor.toUpperCase();
        categories[data.tagName] = data.tagColor;
        setAddTagOpen(false);
        reset();
    }

    const onSubmit = (data, event) => {
        event.preventDefault();
        if (data.amount === undefined || data.amount === '') {
            data.amount = "€0.00";
        }
        console.log(data);
        expenses.push(data);
        console.log(parseCur(data.amount))
        total_expenses += parseCur(data.amount);//translating into cents
        console.log(total_expenses)
        console.log(expenses)
        setAddExpenseOpen(false);
        reset();
    }


    return (
      <>
          <MonthlyCapNumber expenses={total_expenses}/>
          <button className="addExpenseButton" onClick={() => setAddExpenseOpen(true)}>Add Expense</button>
          <button className="addTagButton" onClick={() => setAddTagOpen(true)}>Add Tag</button>
          <PopUp isOpen={addTagOpen} onClose={() => setAddTagOpen(false)}>
              <h1>ADD TAG</h1>
              <br/>
              <form onSubmit={handleSubmit((data, event) => onTagSubmit(data, event))}>
                  <InputField name="tagName" type="text" placeholder="e.g. Groceries" isRequired={true} register={register} />
                  <InputField name="tagColor" type="color" register={register} />
                  <SubmitButton />
              </form>
          </PopUp>
        <PopUp isOpen={addExpenseOpen} onClose={() => setAddExpenseOpen(false)}>
            <h1>ADD EXPENSE</h1>
            <br/>
            <form onSubmit={handleSubmit((data, event) => onSubmit(data, event))}>
                <InputField name="name" type="text" placeholder="e.g. Coffee" isRequired={true} register={register} setValue={setValue}/>
                <InputField name="amount" type="currency" placeholder="3" isRequired={true} register={register} setValue={setValue}/>
                <InputField name="date" type="date_past" isRequired={true} register={register} setValue={setValue}/>
                <InputField name="category" type="category" isRequired={true} setValue={setValue} options={Reflect.ownKeys(categories)}/>
                <InputField name="comment" type="textarea" placeholder="Type here..." isRequired={false} register={register} setValue={setValue}/>
                <SubmitButton />
            </form>
            <br/>
        </PopUp>
        <ExpenseTable data={expenses}/>
          <PieChartComponent />
      </>
    );
}

