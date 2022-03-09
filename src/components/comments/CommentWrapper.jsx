import { useState } from "react";

const Commentwrapper = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((currOpen) => !currOpen);
  return (
    <div>
      <button onClick={toggleOpen}>
        {isOpen ? "Collapse comments" : "Expand comments"}
      </button>
      {isOpen && children}
    </div>
  );
};

export default Commentwrapper;
