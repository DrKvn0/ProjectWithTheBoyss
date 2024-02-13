import "./AddExpense.css"
import {ReactComponent as IconClose} from "./Close-icon.svg";

export default function AddExpense({isOpen, onClose, children}) {
    const onBackgroundClick = (event) => {
        if (event.target.classList.contains("modal-wrapper")) onClose();
    }
    return (
        <>
            {isOpen &&
            (<div className="modal">
                <div className="modal-wrapper" onClick={onBackgroundClick}>
                    <div className="modal-content">
                        <button className="close-button" onClick={() => onClose()}>
                            <IconClose />
                        </button>
                        {children}
                        <center><button className="done-button" onClick={() => onClose()}>Done</button></center>
                    </div>
                </div>
            </div>)}
        </>
    )
}