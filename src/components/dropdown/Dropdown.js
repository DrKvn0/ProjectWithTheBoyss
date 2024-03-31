import "./dropdown.css"

import React, { useState } from "react";
import styled from "styled-components";

const DropDownContainer = styled("div")`
    //width: 10.5em;
    //margin: ;
    padding: 0.1 em;
`;

const DropDownHeader = styled("div")`
    margin-bottom: 0.8em;
    padding: 0.4em 2em 0.4em 1em;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
    font-weight: 500;
    font-size: 1.3rem;
    color: #505050;
    background: #ffffff;
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
    padding: 0;
    margin: 0;
    padding-left: 1em;
    background: #ffffff;
    border: 2px solid #e5e5e5;
    box-sizing: border-box;
    color: #505050;
    font-size: 1.3rem;
    font-weight: 500;
    &:first-child {
        padding-top: 0.8em;
    }
`;

const ListItem = styled("li")`
    list-style: none;
    margin-bottom: 0.8em;
`;


export default function Dropdown({options, setValue, name}) {
    // const options = ["Mangoes", "Apples", "Oranges"];

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = value => () => {
        setSelectedOption(value);
        setValue(name, value)
        setIsOpen(false);
    };

    return (
        <>
            <DropDownContainer>
                <DropDownHeader onClick={toggling}>
                    {selectedOption || ("Choose ".concat(name, "..."))}
                </DropDownHeader>
                {isOpen && (
                    <DropDownListContainer>
                        <DropDownList>
                            {options.map(option => (
                                <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                                    {option}
                                </ListItem>
                            ))}
                        </DropDownList>
                    </DropDownListContainer>
                )}
            </DropDownContainer>
        </>
    );
}