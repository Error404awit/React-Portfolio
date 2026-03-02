import React, { useRef } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { GoDownload } from "react-icons/go";
import My_Resume from "../assets/My_Resume.png";
import myResume from "../assets/myResume.pdf";

const ResumeModal = ({ darkMode, onClose }) => {
  const emailRef = useRef(null);
  const handleDownload = async () => {
    const response = await fetch(myResume);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "CALEB ANDREI JUANTIO Resume.pdf";
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div
      className="fixed bg-slate-800 bg-opacity-30 backdrop-blur-sm z-20 w-full h-screen top-0 flex items-center justify-center"
      onClick={onClose}
    >
      <IoIosCloseCircleOutline
        size={40}
        className={`absolute top-3 right-3 cursor-pointer ${
          darkMode ? "text-secondary" : "text-tertiary"
        }`}
        onClick={onClose}
      />
      <div
        onClick={(event) => event.stopPropagation()}
        className="flex flex-col items-center my-6 mt-8"
      >
        <div className="bg-[#ebecf0] w-[457.92px] h-[647.424px]">
          <img src={My_Resume} alt="Resume" className="w-full h-full" />
        </div>
        <form
          className="flex w-full mt-3"
          action="https://formsubmit.co/5d4f92b00ff077c72a58f0d83597df56"
          method="POST"
          onSubmit={(e) => {
            if (emailRef.current.value) {
              handleDownload();
            } else {
              alert("Please enter your email address.");
              e.preventDefault();
            }
          }}
        >
          <input
            type="email"
            name="email"
            placeholder="Example@gmail.com"
            required
            autoComplete="on"
            ref={emailRef}
            className="w-full py-2 px-2 rounded-[0.375rem_0_0_0.375rem] border-y-[2px] border-l-[1px] border-[#f7cb45]
            outline-none bg-[#f9f5f2]"
          />
          <button
            type="submit"
            className="w-[60%] py-2 px-2 flex items-center justify-center gap-2 rounded-[0_0.375rem_0.375rem_0]
            bg-[#f7cb45]"
          >
            Download Resume
            <GoDownload />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResumeModal;
