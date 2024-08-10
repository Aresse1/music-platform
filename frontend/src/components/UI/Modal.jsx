import React from "react";
import './MyModal.css';

const Modal = ({ visible, setVisible}) => {

    const rootClasses = ["Modal"]
    if (visible) {
        rootClasses.push("active")
    }
    
    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <button className="myModalContent" onClick={e => e.stopPropagation()}>
                Open modal
            </button>

        </div>
    )
}

export default Modal