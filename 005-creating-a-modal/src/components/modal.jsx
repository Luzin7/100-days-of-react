import React from "react";

const BG_STYLE = {
  position: "fixed",
  top: "0",
  bottom: "0",
  left: "0",
  right: "0",
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  zIndex: "1000",
};

const MODAL_STYLE = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "100px",
  backgroundColor: "#3c3c3c",
  borderRadius: "15px",
  transition: "all 0.4s",
};

export default function Modal({ isOpen, children }) {
  if (isOpen) {
    return (
      <div style={BG_STYLE}>
        <div style={MODAL_STYLE}>{children}</div>
      </div>
    );
  }

  return null;
}
