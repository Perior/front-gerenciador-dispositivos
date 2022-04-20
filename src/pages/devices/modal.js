const Modal = ({ children }) => {
    return (
        <div className="popup-container">
            <div className="form-container">
                {children}
            </div>
        </div>
    );
}

export default Modal;