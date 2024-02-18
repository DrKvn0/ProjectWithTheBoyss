import './app.css';
import { useState } from "react";
import PopUp from "./components/pop-up/PopUp";
import InputField, { SubmitButton } from "./components/input-field/InputField";

export default function App() {
    const [addExpenseOpen, setAddExpenseOpen] = useState(false);
    return (
      <>
          <button className="addExpenseButton" onClick={() => setAddExpenseOpen(true)}>Button</button>
        <PopUp isOpen={addExpenseOpen} onClose={() => setAddExpenseOpen(false)}>
            <h1>ADD EXPENSE</h1>
            <br/>
            <form>
                <InputField name="name" type="text" placeholder="e.g. Coffee" isRequired={true}/>

                {/*<label htmlFor="amount" className="addExpenseLabel">*/}
                {/*    <strong><u>Amount</u>:</strong>*/}
                {/*</label>*/}
                {/*<br/>*/}
                {/*<br/>*/}
                {/*<div className="input-symbol-euro">*/}
                {/*    <input className="addExpenseTextField" type="number" id="amount" name="amount"/>*/}
                {/*</div>*/}

                <InputField name="amount" type="number" placeholder="3" isRequired={true}/>

                <InputField name="date" type="date" isRequired={true}/>

                <InputField name="comment" type="textarea" placeholder="Type here..." isRequired={false}/>

                <SubmitButton />
            </form>
            <br/>
        </PopUp>
      </>
    );
}

