import React, { useState } from "react";
import styled from "styled-components";
import {categories} from "../../App";

const DropDownContainer = styled("div")`
    position: relative;
    padding: 0.1 em;
`;

const DropDownHeader = styled("div")`
    margin-bottom: 0.8em;
    padding-top: 0.4em;
    padding-left: 1em;
    padding-bottom: 0.4em;
    font-weight: 500;
    font-size: 1.3rem;
    color: rgb(80, 80, 80);
    background: #ffffff;
    border-radius: 10px;
    border: 4px solid #505050;
    cursor: pointer;
    max-width: 300px;
`;

const DropDownListContainer = styled("div")`
    margin: 0;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    padding: 0;
    list-style: none;
    border: 2px solid #e5e5e5;
    border-top: none;
    box-sizing: border-box;
    color: #505050;
    font-size: 1.3rem;
    font-weight: 500;
    background: #ffffff;
    z-index: 1;
    width: 328px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
`;

const ListItem = styled("li")`
    padding: 0.2em;
    border-radius: 10px;
    margin: 0.1em;
    &:hover {
        background: rgba(80, 80, 80, 0.4);
    }
`;

export const getContrastYIQ = (hexcolor) => {
    const r = parseInt(hexcolor.substring(1, 3), 16);
    const g = parseInt(hexcolor.substring(3, 5), 16);
    const b = parseInt(hexcolor.substring(5, 7), 16);
    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return (yiq >= 128) ? '#505050' : '#FFFFFF';
}

export default function Dropdown({ options, setValue, name }) {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [fontColor, setFontColor] = useState("#505050");

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = value => () => {
        setSelectedOption(value);
        setValue(name, value);
        setIsOpen(false);
        setFontColor(getContrastYIQ(categories[value]))
    };


    return (
        <DropDownContainer>
            <DropDownHeader style={{backgroundColor: categories[selectedOption] || "#FFFFFF"}} onClick={toggling}>
                <p style={{color: fontColor}}>{selectedOption || ("Choose ".concat(name, "..."))}</p>
            </DropDownHeader>
            {isOpen && (
                <DropDownListContainer>
                    {options.map(option => (
                        <ListItem style={{backgroundColor: categories[option]}} onClick={onOptionClicked(option)} key={option}>
                            <p style={{color: getContrastYIQ(categories[option])}}>{option}</p>
                        </ListItem>
                    ))}
                </DropDownListContainer>
            )}
        </DropDownContainer>
    );
}