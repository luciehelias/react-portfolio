// ButtonBurger.js
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import NavBar from "./NavBar";

const ButtonBurger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <GiHamburgerMenu
        className="lg:hidden text-black text-2xl cursor-pointer"
        onClick={toggleNav}
      />
      {isOpen && <NavBar isOpen={isOpen} toggleNav={toggleNav} />}
    </div>
  );
};

export default ButtonBurger;
