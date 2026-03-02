import { useState, useContext } from "react";
import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Skills from "./pages/Skills";
import SideNav from "./components/SideNav";
import ResumeModal from "./components/ResumeModal";
import { MyContext } from "./context/ResumeContext";
import BookModal from "./Modals/BookModal";
import MngmntModal from "./Modals/MngmntModal";
import BingoModal from "./Modals/BingoModal";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const { showModal, setShowModal } = useContext(MyContext);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Home darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Portfolio darkMode={darkMode} setSelectedProject={setSelectedProject} />
      <Contact darkMode={darkMode} />
      <SideNav darkMode={darkMode} />

      {showModal && (
        <ResumeModal darkMode={darkMode} onClose={() => setShowModal(false)} />
      )}

      {selectedProject === 1
        ? selectedProject && (
            <BookModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )
        : selectedProject === 2
          ? selectedProject && (
              <MngmntModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
              />
            )
          : selectedProject === 3
            ? selectedProject && (
                <BingoModal
                  project={selectedProject}
                  onClose={() => setSelectedProject(null)}
                />
              )
            : null}
    </>
  );
}

export default App;
