import { useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import B1 from "../assets/b1.bmp";
import B2 from "../assets/b2.bmp";
import B3 from "../assets/b3.bmp";

function BookModal({ onClose }) {
  // Prevent background scroll
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

        <h1 className="text-3xl font-bold mb-4">Simple Book MERN Stack</h1>
        <p className="text-lg mb-4">
          Full-stack MERN application for managing books with CRUD operations.
        </p>
        <div className="list_container md:flex md:justify-around">
          <div>
            <h1 className="text-2xl font-bold mb-2">Tech Stack:</h1>
            <ul className="list-disc">
              <li>React.js</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-2">Key Features</h1>
            <ul className="list-disc">
              <li>Create, edit, delete tasks</li>
              <li>RESTful API integration</li>
              <li>Responsive UI</li>
              <li>Error handling</li>
            </ul>
          </div>
        </div>
        <div className="w-full md:flex md:justify-center md:items-center">
          <p className="flex mt-6 mb-6">
            Repository
            <a
              href="https://github.com/Error404awit/Simple-Book-Store-MERN-App.git"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2"
            >
              <AiFillGithub size={30} />
            </a>
          </p>
        </div>
        <img src={B1} alt="image" />
        <img src={B2} alt="image" />
        <img src={B3} alt="image" />
      </div>
    </div>
  );
}

export default BookModal;
