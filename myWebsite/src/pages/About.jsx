import React from "react";

const About = ({ darkMode }) => {
  return (
    <section
      id="about"
      className={`${
        darkMode ? "dark bg-[#212121]" : ""
      } ${"md:h-screen h-auto w-full font-bold flex flex-col items-center"}`}
    >
      <h1 className="text-5xl pb-12 md:mt-40 mt-4 dark:text-[#f9f5f2]">
        About
      </h1>
      <div
        className={`bg-secondary dark:bg-[#212121] w-4/5 py-12 pt-10 md:p-12 border-[3px] border-tertiary rounded-[5px] 
          shadow-[0.5rem_0.5rem_0_#282825] dark:shadow-[0.5rem_0.5rem_0_#f7cb45] dark:border-[3px] dark:border-secondary
         dark:text-[#f9f5f2] mb-8`}
      >
        <p className="text-xl px-7">
          I’m a Computer Science graduate with professional experience as an IT
          Specialist and a growing focus on web development. My background in IT
          has given me strong problem-solving skills, system troubleshooting
          experience, and a solid understanding of technical infrastructure.
        </p>
        <br />
        <p className="text-xl px-7">
          I work with React.js, Express.js, Tailwind CSS, and MySQL to build
          responsive web applications and RESTful CRUD APIs. I enjoy turning
          complex problems into clean, functional solutions and continuously
          improving my development skills.
        </p>
        <br />
        <p className="text-xl px-7">
          I’m currently seeking opportunities where I can contribute as a junior
          developer while continuing to grow in full-stack development.
        </p>
      </div>
    </section>
  );
};

export default About;
