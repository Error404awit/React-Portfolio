import { createContext, useState } from "react";

export const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [showEmailAdd, setShowEmailAdd] = useState(false);

  return (
    <MyContext.Provider
      value={{ showModal, setShowModal, showEmailAdd, setShowEmailAdd }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
