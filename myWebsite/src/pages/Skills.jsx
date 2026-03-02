import React from "react";
import ImageCarousel from "../components/ImageCarousel";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JAVASCRIPT from "../assets/javascript.png";
import REACT from "../assets/react.png";
import TAILWIND from "../assets/tailwind.png";
import GITHUB from "../assets/github.png";

const Skills = ({ darkMode }) => {
  return (
    <section
      id="skills"
      className={`${
        darkMode ? "dark bg-[#212121]" : "bg-primary"
      } w-full h-screen flex flex-col justify-center items-center`}
    >
      <div className="text-center text-5xl font-bold pb-12 dark:text-[#f5f5f5]">
        <h1>Skills</h1>
      </div>
      <div
        className={`bg-secondary dark:bg-[#212121] w-[80%] rounded-[5px] md:h-[50%] shadow-[0.5rem_0.5rem_0_#282825]
          border-[3px] border-tertiary dark:shadow-[0.5rem_0.5rem_0_#f7cb45] dark:border-[3px] dark:border-secondary`}
      >
        <div className="w-full h-full hidden md:block">
          <ImageCarousel darkMode={darkMode} />
        </div>
        <div className="gap-8 flex flex-wrap content-evenly p-6 md:hidden">
          <img
            src={HTML}
            className="h-20 mx-auto hover:scale-110 duration-500"
          />
          <img
            src={CSS}
            className="h-20 mx-auto hover:scale-110 duration-500"
          />
          <img
            src={JAVASCRIPT}
            className="h-20 mx-auto hover:scale-110 duration-500"
          />
          <img
            src={REACT}
            className="h-20 mx-auto hover:scale-110 duration-500"
          />
          <img
            src={TAILWIND}
            className="h-20 mx-auto hover:scale-110 duration-500"
          />
          <img
            src={GITHUB}
            className="h-20 mx-auto hover:scale-110 duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
