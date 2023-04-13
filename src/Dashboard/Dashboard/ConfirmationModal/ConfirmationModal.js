import React from "react";
const ConfirmationModal = ({
  title,
  message,
  modalData,
  closeModal,
  handleDeleteDoctor,
}) => {
  return (
    <div>
      <input type="checkbox" id="Confirmation-Modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{message}</p>
          <div className="modal-action">
            <button onClick={closeModal} className="btn btn-outline">
              cancel
            </button>
            <label
              onClick={() => handleDeleteDoctor(modalData)}
              htmlFor="Confirmation-Modal"
              className="btn btn-success"
            >
              ok
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
