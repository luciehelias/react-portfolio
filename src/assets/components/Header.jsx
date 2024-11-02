import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import NavBar from "./NavBar";
import BurgerButton from "./BurgerButton";

const Header = () => {
  return (
    <div className="flex items-center justify-between py-6 z-10 border-b-2 w-full fixed top-0 bg-white px-10 lg:py-2 ">
      <h1 className="lg:text-4xl text-2xl font-medium text-purple-800">
        <a href="#portfolio">Mon portfolio</a>
      </h1>
      <div className="flex items-center justify-end gap-4 text-2xl">
        <NavBar />
        <a href="https://github.com/luciehelias" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/lucie-helias/" target="_blank">
          <FaLinkedin className="text-blue-700" />
        </a>
        <BurgerButton />
      </div>
    </div>
  );
};

export default Header;
