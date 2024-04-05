import "./stat.css"
import React from "react";

export default function MonthlyCapNumber({expenses}) {
    const monthlyCap = 1000;
    return (
        <>
            <div className="stat" style={{color: expenses < 1000 ? "green":"red"}}> {"€".concat(expenses.toString(),"/", monthlyCap)} </div>
        </>
    )
}