import './App.css';
import { useState } from "react";
import AddExpense from "./AddExpense/AddExpense";

export default function App() {
    const [addExpenseOpen, setAddExpenseOpen] = useState(false);
    return (
      <>
          <button onClick={() => setAddExpenseOpen(true)}>Button</button>
        <AddExpense isOpen={addExpenseOpen} onClose={() => setAddExpenseOpen(false)}>
            <h1>ADD EXPENSE</h1>
            <p>content will be here eventually.</p>
        </AddExpense>
      </>
  );
}

