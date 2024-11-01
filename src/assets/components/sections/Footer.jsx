import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" flex flex-col items-center justify-center LG/text-2xl gap-4 lg:my-8">
      <h6 className="lg:text-l font-normal">Développé par Lucie Hélias </h6>
      <div className=" flex gap-4 mb-8 ">
        <a href="https://github.com/luciehelias" target="_blank">
          <FaGithub className="text-2xl" />
        </a>
        <a href="https://www.linkedin.com/in/lucie-helias/" target="_blank">
          <FaLinkedin className="text-blue-700 text-2xl" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
