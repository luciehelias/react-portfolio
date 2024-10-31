// ButtonBurger.js
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import NavBar from "./NavBar";
import { IoCloseSharp } from "react-icons/io5";

const ButtonBurger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {isOpen ? (
        <IoCloseSharp
          onClick={toggleNav}
          className="text-white text-4xl z-50 absolute"
        />
      ) : (
        <GiHamburgerMenu className="lg:hidden text-2xl " onClick={toggleNav} />
      )}
      {isOpen && <NavBar isOpen={isOpen} toggleNav={toggleNav} />}
    </div>
  );
};

export default ButtonBurger;
