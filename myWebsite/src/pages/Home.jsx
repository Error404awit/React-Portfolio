import React, { useContext, useEffect } from "react";
import { AiFillFacebook, AiFillGithub, AiFillMail } from "react-icons/ai";
import { MyContext } from "../context/ResumeContext";
import TypeWriter from "../components/TypeWriter";
import bgme from "../assets/bg-me.png";
import bgrme from "../assets/bgr-me.png";
import EmailModal from "../components/EmailModal";
//AYUSIN MO YUNG PICTURE NITO LUMALAMPAS PAG LUMILIIT

const Home = ({ darkMode }) => {
  const { showEmailAdd, setShowEmailAdd } = useContext(MyContext);

  const openNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  useEffect(() => {
    if (showEmailAdd) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [showEmailAdd]);

  return (
    <main
      id="home"
      className={`${
        darkMode ? "dark bg-[#212121]" : "bg-primary"
      } ${"w-full h-screen top-0"}`}
    >
      <div className="text-center p-6 pt-32">
        <h1 className="text-3xl text-tertiary font-bold py-2 dark:text-primary">
          Caleb Andrei B. Juanito
        </h1>
        <h2 className="text-xl font-bold py-2 ">
          <TypeWriter darkMode={darkMode} />
        </h2>
        <p className="hidden lg:block text-base py-5 leading-8 dark:text-primary">
          Let's Connect
        </p>
        <p className="lg:hidden text-base py-5 leading-8 dark:text-primary">
          Join me down below
        </p>
      </div>

      {/*Mobile View*/}

      <div className="flex justify-evenly text-5xl text-tertiary dark:text-[#f5f5f5] py-5 lg:hidden">
        <AiFillFacebook
          onClick={() => openNewTab("https://web.facebook.com/calebandrei123/")}
        />
        <AiFillGithub
          onClick={() => openNewTab("https://github.com/Error404awit")}
        />
        <AiFillMail onClick={() => setShowEmailAdd(true)} />
        {showEmailAdd && (
          <EmailModal
            darkMode={darkMode}
            onClose={() => setShowEmailAdd(false)}
          />
        )}
      </div>

      <div className="w-80 h-80 rounded-full overflow-hidden mx-auto relative lg:hover:translate-x-5 duration-300 mt-10 lg:mt-0">
        <img src={bgme} alt="image0" className="absolute" />
        <img
          src={bgrme}
          alt="image1"
          className="absolute lg:hover:translate-y-[-20px] duration-300"
        />
      </div>
    </main>
  );
};

export default Home;
