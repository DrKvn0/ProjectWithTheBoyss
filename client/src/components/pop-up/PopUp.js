import "./popUp.css"
import {ReactComponent as IconClose} from "./Close-icon.svg";

export default function PopUp({isOpen, onClose, children}) {
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
                    </div>
                </div>
            </div>)}
        </>
    )
}