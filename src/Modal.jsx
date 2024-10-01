import React from "react";
import './Modal.css'; // Modal CSS einbinden

function Modal({ imgSrc, onClose }) {
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <img src={imgSrc} alt="Full Size" />
      </div>
    </div>
  );
}

export default Modal;
