import Book from "../assets/Book_store.png";
import mngmnt from "../assets/Hospital_mngmnt.png";
import Bing from "../assets/E-Bingo.png";

const Portfolio = ({ darkMode, setSelectedProject }) => {
  return (
    <section
      id="portfolio"
      className={`${darkMode ? "dark bg-[#212121]" : ""} w-full md:h-screen flex`}
    >
      <div id="container" className="md:m-auto my-4 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            className="bg-secondary rounded-[5px] border-[2px] border-tertiary lg:hover:shadow-[0.5rem_0.5rem_0_#282825] hover:transition
            dark:bg-[#1d1d20] dark:hover:shadow-[0.5rem_0.5rem_0_#feb700] dark:border-secondary overflow-hidden"
          >
            <img src={Book}></img>
            <div className="card-body m-2">
              <p className="dark:text-[#f5f5f5] font-bold">
                Simple Book Store App
              </p>
              <p className="dark:text-[#f5f5f5]">
                Full-stack MERN application for managing books with CRUD
                operations.
              </p>
              <div className="flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setSelectedProject(1)}
                  className="w-full my-2 px-3 py-2 text-sm border border-tertiary text-tertiary rounded hover:osab
                  dark:border-secondary dark:text-primary dark:hover:osab transition"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
          <div
            className="bg-secondary rounded-[5px] border-[2px] border-tertiary lg:hover:shadow-[0.5rem_0.5rem_0_#282825] hover:transition
            dark:bg-[#1d1d20] dark:hover:shadow-[0.5rem_0.5rem_0_#feb700] dark:border-secondary overflow-hidden"
          >
            <img src={mngmnt}></img>
            <div className="card-body m-2">
              <p className="dark:text-[#f5f5f5] font-bold">
                Simple Hospital Management System
              </p>
              <p className="dark:text-[#f5f5f5]">
                Full-stack MERN application for managing hospital appointments,
                Registration of patients and doctors with CRUD operations.
              </p>
              <div className="flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setSelectedProject(2)}
                  className="w-full my-2 px-3 py-2 text-sm border border-tertiary text-tertiary rounded hover:osab
                  dark:border-secondary dark:text-primary dark:hover:osab transition"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
          <div
            className="bg-secondary rounded-[5px] border-[2px] border-tertiary lg:hover:shadow-[0.5rem_0.5rem_0_#282825] hover:transition
            dark:bg-[#1d1d20] dark:hover:shadow-[0.5rem_0.5rem_0_#feb700] dark:border-secondary overflow-hidden"
          >
            <img src={Bing}></img>
            <div className="card-body m-2">
              <p className="dark:text-[#f5f5f5] font-bold">
                E-Bingo Players Management System
              </p>
              <p className="dark:text-[#f5f5f5]">
                Full-stack SERN application for managing ebingo players with
                authentication and CRUD operations.
              </p>
              <div className="flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setSelectedProject(3)}
                  className="w-full my-2 px-3 py-2 text-sm border border-tertiary text-tertiary rounded hover:osab
                  dark:border-secondary dark:text-primary dark:hover:osab transition"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
