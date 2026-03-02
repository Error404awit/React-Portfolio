import React from "react";

const Contact = ({ darkMode }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section
      id="contact"
      className={`${
        darkMode ? "dark bg-[#212121]" : "bg-primary"
      } h-screen w-full flex justify-center items-center pt-20 flex-col`}
    >
      <h1 className="text-5xl font-bold text-center pb-4 dark:text-[#f5f5f5]">
        Get in Touch
      </h1>
      <form
        method="POST"
        action="https://getform.io/f/3ae0fd7a-f9dd-4b38-aeef-1b9d073bfb30"
        className="w-4/5 h-4/5 rounded-[5px] flex flex-col items-center gap-8 bg-secondary shadow-[0.5rem_0.5rem_0_#282825]
          border-[3px] border-tertiary dark:bg-[#212121] dark:shadow-[0.5rem_0.5rem_0_#feb700] dark:border-secondary"
      >
        <input
          type="text"
          name="Name"
          placeholder="Name"
          required
          autoComplete="on"
          className="w-4/5 h-10 mt-20 p-4 rounded-lg outline-none border-[2px] border-tertiary bg-primary
          dark:bg-primary dark:border-secondary"
        />
        <input
          type="email"
          name="Email"
          placeholder="Email"
          required
          autoComplete="on"
          className="w-4/5 h-10 p-4 rounded-lg outline-none border-[2px] border-tertiary bg-primary
          dark:bg-primary dark:border-secondary"
        />
        <textarea
          type="text"
          name="Message"
          placeholder="Message"
          required
          className="w-4/5 h-80 md:h-52 p-4 rounded-lg outline-none border-[2px] border-tertiary bg-primary 
          dark:bg-primary dark:border-secondary"
        />
        <button
          type="submit"
          onClick={() => handleSubmit}
          className="text-[#212121] hover:text-[#f5f5f5] p-4 rounded-[4px] border border-[#212121] hover:bg-[#212121]
            duration-300 mb-4 dark:hover:bg-secondary dark:border-secondary dark:text-[#f5f5f5] dark:hover:text-[#1d1d20]"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
