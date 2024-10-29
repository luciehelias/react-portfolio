import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <div className=" flex items-center justify-between py-6 z-10 border-b-2 w-full fixed top-0 bg-white px-10 lg:py-2 ">
      <h1 className="lg:text-4xl font-medium text-purple-800">Mon portfolio</h1>
      <div className="flex items-center justify-center gap-4 text-2xl ">
        <nav className="lg:flex items-center justify-between p-6 text-base gap-4 hidden">
          <a className="hover:text-purple-800" href="#about">
            A propos de moi
          </a>
          <a className="hover:text-purple-800" href="#future">
            Mes Objectifs
          </a>
          <a className="hover:text-purple-800" href="#projects">
            Mes Projets
          </a>
          <a className="hover:text-purple-800" href="#experiences">
            Mon Parcours
          </a>
          <a className="hover:text-purple-800" href="#contact">
            Contact
          </a>
        </nav>
        <a href="https://github.com/luciehelias" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/lucie-helias/" target="_blank">
          <FaLinkedin className="text-blue-700" />
        </a>
      </div>
    </div>
  );
};

export default Header;
