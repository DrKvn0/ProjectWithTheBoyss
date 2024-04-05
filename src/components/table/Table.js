import "./table.css"
import React from "react";
import {categories} from "../../App";
import {getContrastYIQ} from "../tags/Tags";

function formatDate(date_old) {
    const dates = date_old.split('-');
    return dates[2].concat("/", dates[1], "/", dates[0]);
}


export default function ExpenseTable({data}) {
    return (
        <>
            <div>
                <table className="expenseTable">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Comment</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((expense, index) => (
                        <tr key={index}>
                            <td>{expense.name}</td>
                            <td>
                                <p className="category" style={{backgroundColor: categories[expense.category], color: getContrastYIQ(categories[expense.category])}}>
                                    {expense.category}
                                </p>
                            </td>
                            <td>{expense.amount}</td>
                            <td>{formatDate(expense.date)}</td>
                            <td>{expense.comment}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}