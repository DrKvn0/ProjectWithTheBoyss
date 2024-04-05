import "./table.css";
import React, { useState } from "react";
import { Tooltip } from "./Tooltip/Tooltip";


function formatDate(date_old) {
    const dates = date_old.split('-');
    return dates[2].concat("/", dates[1], "/", dates[0]);
}

export default function ExpenseTable({data}) {
        const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });

        const handleMouseEnter = (e) => {
            const tdRect = e.currentTarget.getBoundingClientRect(); // Get the rectangle of the table cell
            const tableRect = e.currentTarget.parentNode.parentNode.getBoundingClientRect(); // Get the table rectangle
            const targetRect = e.target.getBoundingClientRect(); // Get the rectangle of the element on which the mouse is hovering

            // Calculate the difference between the coordinates of the upper-left corner of the cell and the element on which the mouse is hovering
            const thElement = document.getElementById('expenseTable').querySelector('th'); // Assuming you have the ID of your table // Connected with "<table className="expenseTable" id = "expenseTable">"
            const thHeight = thElement.getBoundingClientRect().height;

            console.log(tdRect.top, tableRect.top, targetRect.top);
            const top = targetRect.top + thHeight - tableRect.top;
            const left = targetRect.left - tableRect.left + 4.5;

            // Transmit Tooltip coordinates
            setTooltipPosition({ top, left });
    };
    
    

    const handleMouseLeave = () => {
        setTooltipPosition({ top: 0, left: 0 });
    };
    
    return (
        <div class="table-container">
            <table className="expenseTable" id = "expenseTable">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th className="comment">Comment</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((expense, index) => (
                        <tr key={index}>
                            <td>{expense.name}</td>
                            <td>
                                <p className="category">{expense.category}</p>
                            </td>
                            <td>{expense.amount}</td>
                            <td>{formatDate(expense.date)}</td>
                            <td className="comment" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                {expense.comment.length > 160 ? (
                                    <>
                                        <span className="comment-content">{expense.comment.slice(0, 125)}</span>
                                        <Tooltip position={tooltipPosition} text={expense.comment} >{"..."}</Tooltip>
                                    </>
                                ) : (
                                    expense.comment
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}