import "./stat.css";
import React, { useState } from "react";
import PopUp from "../pop-up/PopUp";

export default function MonthlyCapNumber({ expenses, tempMonthlyCap = 0 }) {
    const [monthlyCap, setMonthlyCap] = useState(tempMonthlyCap)
    const [addMonthlyCap, setAddMonthlyCap] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const saveMonthlyCap = () => {
        if (inputValue !== "") {
            setMonthlyCap(parseInt(inputValue));
        }
        setAddMonthlyCap(false); 
    };

    if (monthlyCap === 0) {
        return (
            <>
                <button className="addMonthlyCapButton" style={{ 'background-color': "#505050" }} onClick={() => setAddMonthlyCap(true)}>Add Monthly Cap</button>
                <Button MonthlyCap={addMonthlyCap} setAddMonthlyCap={setAddMonthlyCap} inputValue={inputValue} handleInputChange={handleInputChange} saveMonthlyCap={saveMonthlyCap} />
            </>
        );
    } else {
        return (
            <>
                {/*<div className="stat" style={{color: expenses < 1000 ? "green":"red"}}>{"€".concat(expenses.toString(), "/", monthlyCap)}</div>*/}
                <button className="addMonthlyCapButton" style={{ 'background-color': expenses < monthlyCap ? "green" : "red" }} onClick={() => setAddMonthlyCap(true)}>{"€".concat(expenses.toString(), "/", monthlyCap)}</button>
                <Button MonthlyCap={addMonthlyCap} setAddMonthlyCap={setAddMonthlyCap} inputValue={inputValue} handleInputChange={handleInputChange} saveMonthlyCap={saveMonthlyCap} />
            </>
        );
    }
}

export function Button({ MonthlyCap, setAddMonthlyCap, inputValue, handleInputChange, saveMonthlyCap }) {
    return (
        <>
            {MonthlyCap && (
                <PopUp isOpen={MonthlyCap} onClose={() => setAddMonthlyCap(false)}>
                    <h1>Enter Monthly Cap</h1>
                    <br />
                    <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Enter monthly cap..." />
                    <button className="saveMonthlyCapButton" onClick={saveMonthlyCap}>Save</button>
                </PopUp>
            )}
        </>
    );
}
