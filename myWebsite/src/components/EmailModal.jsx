//can see through mobile only [#f9f5f2]
import React from "react";

const EmailModal = ({ darkMode, onClose }) => {
  return (
    <div
      className="fixed z-20 w-full h-screen top-0 flex justify-center"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className={`h-16 w-72 flex flex-col justify-center items-center mt-[20.8rem] ${
          darkMode ? "bg-tertiary" : "bg-primary"
        }`}
      >
        <div className="text-xl">calebandreijuanito@gmail.com</div>
      </div>
    </div>
  );
};

export default EmailModal;
