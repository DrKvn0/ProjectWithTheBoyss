import './App.css';
import { useState } from "react";
import AddExpense from "./AddExpense/AddExpense";

export default function App() {
    const [addExpenseOpen, setAddExpenseOpen] = useState(false);
    return (
      <>
          <button className="addExpenseButton" onClick={() => setAddExpenseOpen(true)}>Button</button>
        <AddExpense isOpen={addExpenseOpen} onClose={() => setAddExpenseOpen(false)}>
            <h1>ADD EXPENSE</h1>
            <br/>
            <form>
                <label htmlFor="name" className="addExpenseLabel"><strong><u>Name</u>:</strong></label><br/><br/>

                <input className="addExpenseTextField" type="text" id="name" name="name"
                       placeholder={"e.g. Coffee"}/><br/><br/>

                <label htmlFor="amount" className="addExpenseLabel"><strong><u>Amount</u>:</strong></label><br/><br/>
                <div className="input-symbol-euro">
                    <input className="addExpenseTextField" type="number" id="amount" name="amount"/>
                </div>

                <label htmlFor="date" className="addExpenseLabel"><strong><u>Date</u>:</strong></label><br/><br/>
                <div>
                    <input className="addExpenseTextField" type="date" id="date" name="date"/>
                </div>

                <label htmlFor="comment" className="addExpenseLabel"><strong><u>Comment</u>:</strong></label><br/><br/>
                <div>
                    <textarea className="addExpenseTextField" id="comment" name="comment"></textarea>
                </div>
            </form>
            <br/>
        </AddExpense>
      </>
    );
}

