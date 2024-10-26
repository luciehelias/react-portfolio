import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import logo from "../images/Lucie Hélias.jpg";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 ">
      <div className="flex flex-shrink-0 items-center">
        <img
          src={logo}
          alt="logo"
          className="h-12 w-12 rounded-full object-cover"
        />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaGithub />
        <FaLinkedin />
      </div>
    </nav>
  );
};

export default Navbar;
