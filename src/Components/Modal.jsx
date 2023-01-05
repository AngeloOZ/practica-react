import React from "react";
import "./styles/modal.css";

export const Modal = ({ setModal }) => {
  return (
    <div className="overlay-modal">
      <div className="modal">
        <div className="modal-header">
          <button onClick={()=>setModal(false)}>X</button>
        </div>
      </div>
    </div>
  );
};
