import "./inputField.css"

export default function InputField({type, name, placeholder, isRequired}) {
    // function inputLine() {
    //     if (isRequired) {
    //         return (
    //             <input type={type} id={name} name={name} placeholder={placeholder} />
    //         );
    //     } else {
    //         return (
    //             <input type={type} id={name} name={name} placeholder={placeholder}/>
    //         );
    //     }
    // }

    if (type === "textarea") {
        return (
            <>
                {/*<label htmlFor={name}>*/}
                {/*    <strong><u>{name.charAt(0).toUpperCase() + name.slice(1)}</u>:</strong>*/}
                {/*</label>*/}
                <textarea id={name} name={name} placeholder={"Type the comment here..."}></textarea>
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
                <input type={type} id={name} name={name} placeholder={placeholder} required={isRequired}/>
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