import React, { useContext } from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import {
  AiFillFacebook,
  AiFillGithub,
  AiOutlineMail,
  AiFillLinkedin,
} from "react-icons/ai";
import { MyContext } from "../context/ResumeContext";

const SideNav = ({ ShowRes, darkMode }) => {
  const { showModal, setShowModal } = useContext(MyContext);
  const openNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <aside
      className={`${
        ShowRes
          ? "fixed hidden lg:flex top-[35.5%] w-[60px] z-10"
          : "hidden lg:flex top-[35.5%] w-[60px] absolute z-10"
      }
      ${darkMode && "dark"}`}
    >
      <nav>
        <ul className="text-tertiary dark:text-primary ml-20 overflow-hidden">
          <li className="flex items-center w-[160px] h-[60px] pl-2 ml-[-100px] hover:ml-[0px] duration-300">
            <button
              className="flex justify-between items-center px-4 w-full bg-transparent"
              role="link"
              onClick={() =>
                openNewTab(
                  "https://www.linkedin.com/in/caleb-andrei-juanito-981b852a3/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BbNvnSl54SJyi8DX6rAUTBQ%3D%3D",
                )
              }
            >
              LinkedIn
              <AiFillLinkedin size={40} />
            </button>
          </li>
          <li className="w-[160px] h-[60px] flex items-center ml-[-100px] hover:ml-[0px] duration-300">
            <button
              className="flex justify-between items-center px-4 w-full bg-transparent"
              role="link"
              onClick={() => openNewTab("https://github.com/Error404awit")}
            >
              Github
              <AiFillGithub size={40} />
            </button>
          </li>
          <li className="flex items-center w-[300px] h-[60px] ml-[-240px] hover:ml-[0px] duration-500">
            <div className="flex justify-between items-center px-4 w-full bg-transparent">
              calebandreijuanito@gmail.com
              <AiOutlineMail size={40} />
            </div>
          </li>
          <li className="flex items-center w-[160px] h-[60px] ml-[-100px] hover:ml-[0px] duration-300">
            <div
              to="/Resume"
              className="flex justify-between items-center px-4 w-full cursor-pointer"
              onClick={() => {
                setShowModal(true);
              }}
            >
              Resume
              <BsFillPersonLinesFill size={40} />
            </div>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideNav;
