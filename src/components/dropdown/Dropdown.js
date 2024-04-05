import React, { useState } from "react";

import "./dropdown.css"


export default function Dropdown({ options, setValue = null, name }) {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = value => () => {
        setSelectedOption(value);
        if (setValue != null) {
            setValue(name, value);
        }
        setIsOpen(false);
    };


    return (
        <div className="dropDownContainer">
            <div className="dropDownHeader" onClick={toggling}>
                {selectedOption || ("Choose ".concat(name, "..."))}
            </div>
            {isOpen && (
                <div className="dropDownListContainer">
                    {options.map(option => (
                        <li className="listItem" onClick={onOptionClicked(option)} key={option}>
                            {option}
                        </li>
                    ))}
                </div>
            )}
        </div>
    );
}