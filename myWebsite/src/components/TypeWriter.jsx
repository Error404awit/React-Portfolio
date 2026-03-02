import React, { useEffect, useState } from "react";

const Del = ({ darkMode }) => {
  const toType = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const [typing, setTyping] = useState("");
  const [speed, setSpeed] = useState(200 - Math.random() * 100);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loop, setLoop] = useState(0);
  let i = loop % toType.length;

  const sleep = (ms) => {
    new Promise((resolve) => setTimeout(resolve, ms));
  }; //hindi na implement

  useEffect(() => {
    const timeout = setInterval(() => {
      isDeleting
        ? setTyping(toType[i].slice(0, typing.length - 1))
        : setTyping(toType[i].slice(0, typing.length + 1));
    }, speed);

    if (isDeleting) {
      setSpeed((prevspeed) => prevspeed / 2); //Unti-unti tas biglang bibilis ang pagbura
    }
    return () => clearInterval(timeout);
  }, [typing]);
  //BAWAL MAG SET NG PARAM SA LOOB NG CONDITION NA NASA LOOB NG useEffect() HINDI KO DIN ALAM KUNG BAKIT!
  if (!isDeleting && typing === toType[i]) {
    //kapag nag true simula na nang pag bura
    setIsDeleting(true);
    //sleep(5000); ayaw gumana!!!
    setSpeed(2000);
  } else if (isDeleting && typing === "") {
    //kapag nag true tigil na sa pagbura balik na sa pagtype
    setIsDeleting(false);
    setSpeed(200);
    sleep(2000);
    setLoop(loop + 1);
  }

  return (
    <div>
      {isDeleting ? (
        <span className={`blinking-cursor ${darkMode ? "text-primary" : ""}`}>
          {typing}
        </span>
      ) : (
        <span className={`not-blinking ${darkMode ? "text-primary" : ""}`}>
          {typing}
        </span>
      )}
    </div>
  );
};

export default Del;
