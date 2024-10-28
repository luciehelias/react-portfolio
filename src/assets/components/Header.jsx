import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex items-center justify-between py-6 z-10  lg:fixed lg:top-0 lg:bg-white w-full lg:pr-40 lg:pl-10 lg:py-2 ">
      <h1 className="lg:text-4xl font-medium">Mon portfolio</h1>
      <div className="flex items-center justify-center gap-4 text-2xl ">
        <nav className="lg:flex items-center justify-between p-6 text-sm gap-4 hidden">
          <a href="#about">A propos de moi</a>
          <a href="#experiences">Mon Parcours</a>
          <a href="#projects">Mes Projets</a>
          <a href="#contact">Contact</a>
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
