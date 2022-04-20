import DeleteDevice from "../apis/components/DeleteDevice";

const ConfirmationPopup = ({ pathName, id, closeModal, handleDeleteCallBack }) => {

    const handleDeleteTrue = async () => {
        try {
            await DeleteDevice(pathName, id);
            handleDeleteCallBack();

            closeModal();
        }
        catch (e) {
            console.log(e);
        }
    };

    return (
        <div className="delete-options">
            <p>Do you really wish to remove this entry?</p>
            <button className="confirm-bttn popup-button" onClick={() => handleDeleteTrue()}>Yes</button>
            <button className="cancel-bttn popup-button" onClick={() => closeModal()}>No</button>
        </div>
    )

}

export default ConfirmationPopup;