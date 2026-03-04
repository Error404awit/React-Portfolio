import { useEffect } from "react";
import Bing from "../assets/Vide0.mp4";
import { AiFillGithub } from "react-icons/ai";

function BingoModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      className="modal-overlay fixed inset-0 bg-slate-800 bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-20"
      onClick={onClose}
    >
      <div
        className="modal-content bg-primary w-[90%] max-w-4xl p-8 rounded-xl relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="close-btn absolute top-4 right-5 text-xl cursor-pointer"
          onClick={onClose}
        >
          ✕
        </button>

        <h1 className="text-3xl font-bold mb-4">
          E-Bingo Players Management System
        </h1>
        <p className="text-lg mb-4">
          Built a full-stack players management application using React,
          Express, MySQL, and Node.js. Implemented JWT-based authentication,
          protected API routes, and complete CRUD functionality. Designed a
          responsive UI with Tailwind CSS.
        </p>
        <div className="list_container md:flex md:justify-around mb-2">
          <div>
            <h1 className="text-2xl font-bold mb-2">Tech Stack:</h1>
            <ul className="list-disc">
              <li>React.js</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MySQL</li>
              <li>Tailwind CSS</li>
              <li>JWT Authentication</li>
            </ul>
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-2">Key Features</h1>
            <ul className="list-disc">
              <li>Role-Based Authentication</li>
              <li>User authentication (JWT)</li>
              <li>Protected routes</li>
              <li>Create, edit, delete tasks</li>
              <li>RESTful API integration</li>
              <li>Responsive UI</li>
              <li>Form Validation</li>
              <li>Error handling</li>
              <li>File Upload</li>
            </ul>
          </div>
        </div>
        <div className="relative h-[28rem] w-full overflow-hidden">
          <video
            src={Bing}
            autoPlay
            loop
            muted
            playsInline
            controls
            className="absolute w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default BingoModal;
