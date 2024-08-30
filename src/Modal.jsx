import React from 'react';

const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }
  const handleContentClick = (e) => {
    e.stopPropagation(); // Prevent click from propagating to the overlay
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={handleContentClick}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
