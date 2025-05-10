import React from "react";
import "./ConfirmDialog.css";

function ConfirmDialog({ 
  title = "Confirm action", 
  message = "Are you sure?", 
  onConfirm, 
  onCancel, 
  confirmText = "Yes", 
  cancelText = "Cancel" 
}) {
  return (
    <section className="confirm-section">
      <h1>{title}</h1>
      <p>{message}</p>
      <div className="confirm-buttons">
        <button onClick={onConfirm}>{confirmText}</button>
        <button className="cancel-button" onClick={onCancel}>{cancelText}</button>
      </div>
    </section>
  );
}

export default ConfirmDialog;
