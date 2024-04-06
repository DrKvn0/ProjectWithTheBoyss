import "./inputField.css"
import React, { useState } from "react"
import {NumericFormat} from "react-number-format";
import Tags from "../tags/Tags";


export default function InputField({type, name, placeholder, isRequired, register, setValue, options}) {

    const [value, setVal] = useState('');

    function handleChange(event) {
        setValue("amount", (event.target.value));
        setVal(event.target.value);
    }



    if (type === "currency") {
        return (
            <>
                <NumericFormat
                    className={"currency"}
                    value={value}
                    onChange={handleChange}
                    thousandSeparator
                    prefix="€"
                    decimalScale={2}
                    fixedDecimalScale
                    placeholder="e.g. €2.40"
                />
                <br/>
                <br/>
            </>


        )
    }

    if (type === "date_past") {
        const currentDate = new Date();
        let day = currentDate.getDate().toString();
        if (day.length === 1) {
            day = "0".concat(day);
        }
        let month = (currentDate.getMonth() + 1).toString();
        if (month.length === 1) {
            month = "0".concat(month);
        }
        let year = currentDate.getFullYear().toString();

        const date_max = `${year}-${month}-${day}`;
        const date_min = '1990-01-01';

        return (
            <>
                {/*<label htmlFor={name}>*/}
                {/*    <strong><u>{name.charAt(0).toUpperCase() + name.slice(1)}</u>:</strong>*/}
                {/*</label>*/}
                <input type="date" id={name} name={name} placeholder={placeholder} min={date_min} max={date_max} defaultValue={date_max} required={isRequired} {...register(name)}/>
                <br/>
                <br/>
            </>
        )
    }

    if (type === "color") {
        return (
            <input type="color" id={name} name={name} required={isRequired} {...register(name)}/>
        );
    }

    if (type === "category") {
        return (
            <>
                <Tags name={name} setValue={setValue} options={options}></Tags>
            </>
        );
    }

    if (type === "textarea") {
        return (
            <>
                {/*<label htmlFor={name}>*/}
                {/*    <strong><u>{name.charAt(0).toUpperCase() + name.slice(1)}</u>:</strong>*/}
                {/*</label>*/}
                <textarea id={name} name={name} placeholder={"Type the comment here..."} {...register(name)}></textarea>
                <br/>
                <br/>
            </>
        )
    } else {
        return (
            <>
                {/*<label htmlFor={name}>*/}
                {/*    <strong><u>{name.charAt(0).toUpperCase() + name.slice(1)}</u>:</strong>*/}
                {/*</label>*/}
                <input type={type} id={name} name={name} placeholder={placeholder} required={isRequired} {...register(name)}/>
                <br/>
                <br/>
            </>
        )
    }

}

export function SubmitButton() {
    return (
        <>
            <center>
                <input className="submit-btn" type="submit" value="Submit"/>
            </center>
        </>
    )
}