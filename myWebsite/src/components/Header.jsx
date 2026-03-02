import React, { useRef, useState } from "react";
import { Link } from "react-scroll";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";
import { GoDownload } from "react-icons/go";
import "../components/Switch.css";
import Logo from "../assets/Logo_.svg";
import Logoc from "../assets/Logo_C.svg";
import myResume from "../assets/myResume.pdf";

const Header = ({ darkMode, setDarkMode }) => {
  const [Clicked, setClicked] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [download, setDownload] = useState(false);

  const handleClick = () => {
    setClicked(!Clicked);
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 500);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

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

  const handleDLResume = () => {
    setDownload(true);
  };

  return (
    <>
      <header
        className={
          darkMode
            ? "dark bg-[#1d1d20] w-full h-16  lg:h-24 flex justify-between items-center fixed z-20 border-b-[2px] border-primary"
            : "nav bg-secondary w-full h-16  lg:h-24 flex justify-between items-center fixed z-20 border-b-[2px] border-[#272723]"
        }
      >
        {darkMode ? (
          <img src={Logoc} alt="Logo" className="h-20 lg:h-36"></img>
        ) : (
          <img src={Logo} alt="Logo" className="h-20 lg:h-36"></img>
        )}

        <nav
          className={`flex justify-between items-center mr-4 ${
            darkMode ? "dark" : ""
          }`}
        >
          <ul className="hidden lg:flex text-tertiary dark:text-primary">
            <li className={`nav-item p-4 cursor-pointer text-lg`}>
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-item underline-animation"
              >
                Home
              </Link>
            </li>
            <li className={`nav-item p-4 cursor-pointer text-lg`}>
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                className="underline-animation"
              >
                About
              </Link>
            </li>
            <li className={`nav-item p-4 cursor-pointer text-lg`}>
              <Link
                to="skills"
                spy={true}
                smooth={true}
                duration={500}
                className="underline-animation"
              >
                Skills
              </Link>
            </li>
            <li className={`nav-item p-4 cursor-pointer text-lg`}>
              <Link
                to="portfolio"
                spy={true}
                smooth={true}
                duration={500}
                className="underline-animation"
              >
                Portfolio
              </Link>
            </li>
            <li className={`nav-item p-4 cursor-pointer text-lg`}>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                className="underline-animation"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="hidden lg:flex justify-end">
            <div className="relative">
              <BsFillSunFill
                size={30}
                className={`icon absolute text-yellow-200 z-10 top-[.48em] left-[.80em] ${
                  darkMode ? "hidden" : "animate-spin-once"
                } `}
              />
              <BsFillMoonStarsFill
                size={30}
                className={`icon absolute z-10 top-[.48em] left-[3.80em] text-white ${
                  darkMode ? "animate-spin-once" : "hidden"
                } `}
              />
              <input
                type="checkbox"
                checked={darkMode}
                onChange={toggleTheme}
                className="appearance-none relative m-auto left-0 right-0 top-0 bottom-0 cursor-pointer outline-none
              h-[2.6em] w-[6.5em] bg-[#f5f5f5] skew-x-[-7deg] duration-[0.3s] before:text-[.70em]
              before:relative before:w-[4.25em] before:h-[2.9em] before:bg-[#1d1d20] 
              before:text-[#a0a0a0] before:top-[0.42em] before:left-[0.42em] before:duration-[0.3s] before:flex 
              before:items-center before:justify-center before:font-['Poppins'] before:font-semibold before:tracking-[1px]
              checked:bg-gradient-to-tr checked:from-[#8175fe] checked:to-[#89befe] checked:before:left-[4.6em]
              checked:before:text-[#89befe] active:after:w-[130px] checked:before:bg-[#1d1d20] "
              />
            </div>
          </div>
          {/******mobile view ng Nav Bar******/}
          <button
            className="lg:hidden text-xl text-primary dark:text-tertiary p-1 rounded dark:bg-primary bg-tertiary
            w-[6.5rem] flex flex-row justify-between items-center"
            onClick={() => handleDLResume()}
          >
            Resume <GoDownload />
          </button>
          <div className="lg:hidden text-xl ml-4">
            {darkMode ? (
              <BsFillMoonStarsFill
                size={30}
                className="text-white"
                onClick={toggleTheme}
              />
            ) : (
              <BsFillSunFill
                size={30}
                className="text-yellow-200"
                onClick={toggleTheme}
              />
            )}
          </div>
          <AiOutlineBars
            size={30}
            className="ml-4 dark:text-[#f5f5f5] lg:hidden"
            onClick={handleClick}
          />

          {/*Resume*/}
          <div
            className={
              download
                ? "h-screen w-full left-0 top-0 absolute flex items-center justify-center osab"
                : "hidden"
            }
          >
            <form
              className="h-auto w-11/12 left-3 top-0 flex flex-col items-center bg-secondary shadow-[10px_10px_0_#282825] border-4 border-tertiary dark:bg-tertiary dark:shadow-[10px_10px_0_#f7cb45] dark:border-secondary"
              action="https://formsubmit.co/5d4f92b00ff077c72a58f0d83597df56"
              method="POST"
              onSubmit={(e) => {
                if (emailRef.current.value) {
                  handleDownload();
                } else {
                  e.preventDefault();
                }
              }}
            >
              <input
                type="email"
                name="email"
                placeholder="example@email.com"
                required
                autoComplete="off"
                ref={emailRef}
                className="w-4/5 py-3 px-5 mt-10 rounded-lg border-[2px] border-tertiary dark:border-secondary outline-none bg-primary"
              />
              <div className="w-full my-8 flex gap-4 justify-center">
                <button
                  type="submit"
                  value="CANCEL"
                  formNoValidate
                  className="inline-block w-[35%] py-3 px-5 mb-2 text-center font-semibold leading-6 text-blue-50
              bg-red-500 rounded-lg"
                  onClick={() => setDownload(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-block w-[35%] py-3 px-5 mb-2 text-center font-semibold leading-6 text-blue-50
              bg-green-500 rounded-lg"
                >
                  Download
                </button>
              </div>
            </form>
          </div>
        </nav>
      </header>
      {/******mobile view******/}
      <aside
        className={`${
          Clicked
            ? darkMode
              ? "bg-tertiary h-3/5 w-11/12 ml-3 lg:hidden fixed z-20 flex items-center shadow-[10px_10px_0_#f7cb45] border-4 border-secondary"
              : "bg-secondary h-3/5 w-11/12 ml-3 lg:hidden fixed z-20 flex items-center shadow-[10px_10px_0_#282825] border-4 border-tertiary"
            : "hidden"
        } ${animate ? "animate" : ""}`}
      >
        <div
          className={`text-2xl absolute right-4 top-4 ${
            darkMode ? "text-white" : ""
          }`}
        >
          <AiOutlineClose size={30} onClick={handleClick} />
        </div>
        <ul className="flex flex-col justify-evenly items-center mr-auto ml-auto text-white">
          <li className="p-4 cursor-pointer text-3xl">
            <Link to="home" smooth={true} duration={500} onClick={handleClick}>
              Home
            </Link>
          </li>
          <li className="p-4 cursor-pointer text-3xl">
            <Link to="about" smooth={true} duration={500} onClick={handleClick}>
              About
            </Link>
          </li>
          <li className="p-4 cursor-pointer text-3xl">
            <Link
              to="skills"
              smooth={true}
              duration={500}
              onClick={handleClick}
            >
              Skills
            </Link>
          </li>
          <li className="p-4 cursor-pointer text-3xl">
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              onClick={handleClick}
            >
              Portfolio
            </Link>
          </li>
          <li className="p-4 cursor-pointer text-3xl">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              onClick={handleClick}
            >
              Contact
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Header;
