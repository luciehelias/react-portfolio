import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <nav className="flex items-center justify-between py-6 ">
      <h1 className="text-4xl font-medium">Mon portfolio</h1>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://github.com/luciehelias" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/lucie-helias/" target="_blank">
          <FaLinkedin className="text-blue-700" />
        </a>
      </div>
    </nav>
  );
};

export default Header;
