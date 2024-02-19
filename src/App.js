import './app.css';
import React, { useState } from "react";
import { useForm } from "react-hook-form"
import PopUp from "./components/pop-up/PopUp";
import InputField, { SubmitButton } from "./components/input-field/InputField";



export default function App() {
    const [addExpenseOpen, setAddExpenseOpen] = useState(false);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        setAddExpenseOpen(false);

    }


    return (
      <>
          <button className="addExpenseButton" onClick={() => setAddExpenseOpen(true)}>Button</button>
        <PopUp isOpen={addExpenseOpen} onClose={() => setAddExpenseOpen(false)}>
            <h1>ADD EXPENSE</h1>
            <br/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputField name="name" type="text" placeholder="e.g. Coffee" isRequired={true} register={register}/>

                {/*<label htmlFor="amount" className="addExpenseLabel">*/}
                {/*    <strong><u>Amount</u>:</strong>*/}
                {/*</label>*/}
                {/*<br/>*/}
                {/*<br/>*/}
                {/*<div className="input-symbol-euro">*/}
                {/*    <input className="addExpenseTextField" type="number" id="amount" name="amount"/>*/}
                {/*</div>*/}

                <InputField name="amount" type="number" placeholder="3" isRequired={true} register={register}/>

                <InputField name="date" type="date" isRequired={true} register={register}/>

                <InputField name="comment" type="textarea" placeholder="Type here..." isRequired={false} register={register}/>

                <SubmitButton />
                {/*<input type="text"*/}
                {/*    {...register("firstName", {*/}
                {/*        required: "Please enter your first name.",*/}
                {/*    })} // custom message*/}
                {/*/>*/}
                {/*<input type="submit"/>*/}
            </form>
            <br/>
        </PopUp>
      </>
    );
}

