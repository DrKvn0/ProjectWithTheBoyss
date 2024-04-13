import React, { useState } from "react";
// import {useForm} from "react-hook-form";
import {categories} from "../../App";
import "./tags.css"
import "../dropdown/dropdown.css"

// import InputField, {SubmitButton} from "../input-field/InputField";

// import PopUp from "../pop-up/PopUp";

export const getContrastYIQ = (hexcolor = null) => {
    if (hexcolor === null) return '#FFFFFF';
    const r = parseInt(hexcolor.substring(1, 3), 16);
    const g = parseInt(hexcolor.substring(3, 5), 16);
    const b = parseInt(hexcolor.substring(5, 7), 16);
    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return (yiq >= 128) ? '#505050' : '#FFFFFF';
}

export default function Tags({ options, setValue, name }) {

    // const {register, handleSubmit} = useForm()

    // const [isAdding, setIsAdding] = useState(false);
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

    // const onSubmit = (data, event) => {
    //     categories[data.tagName] = data.tagColor
    // }

    return (
        <div className="dropDownContainer">
            <div className="dropDownHeader" style={{backgroundColor: categories[selectedOption] || "#FFFFFF", color: fontColor}}
                 onClick={toggling}>
                {selectedOption || ("Choose ".concat(name, "..."))}
            </div>
            {isOpen && (
                <div className="dropDownListContainer">
                    {options.map(option => (
                        <li className="listItem" style={{backgroundColor: categories[option], color: getContrastYIQ(categories[option])}}
                            onClick={onOptionClicked(option)}
                            key={option}>
                            {option}
                        </li>
                    ))}
                    {/*<li onClick={() => setIsAdding(true)}>+</li>*/}
                </div>
            )}
            {/*<PopUp style={{zIndex: 100}} isOpen={isAdding} onClose={() => setIsAdding(false)}>*/}
            {/*    <form onSubmit={handleSubmit((data, event) => onSubmit(data, event))}>*/}
            {/*        <InputField name="tagName" type="text" placeholder="e.g. Groceries" register={register}/>*/}
            {/*        <input name="tagColor" type="color" {...register("tagColor")}/>*/}
            {/*        <SubmitButton />*/}
            {/*    </form>*/}
            {/*</PopUp>*/}
        </div>

    );
}