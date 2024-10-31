const NavBar = ({ isOpen, toggleNav }) => {
  return (
    <div>
      <nav className="lg:flex lg:items-center lg:justify-between p-6 text-base gap-4 hidden ">
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

      {isOpen && (
        <div className="fixed inset-y-0 right-0 w-1/2 bg-violet-800 z-10 lg:hidden transition-transform duration-300 ease-in-out">
          <nav className="flex flex-col pl-4 mt-40 h-full">
            <a
              className="text-white text-lg pl-2 hover:text-purple-800 my-4"
              href="#about"
              onClick={toggleNav}
            >
              A propos de moi
            </a>
            <a
              className="text-white text-lg pl-2 hover:text-purple-800 my-4"
              href="#future"
              onClick={toggleNav}
            >
              Mes Objectifs
            </a>
            <a
              className="text-white text-lg pl-2 hover:text-purple-800 my-4"
              href="#projects"
              onClick={toggleNav}
            >
              Mes Projets
            </a>
            <a
              className="text-white text-lg pl-2 hover:text-purple-800 my-4"
              href="#experiences"
              onClick={toggleNav}
            >
              Mon Parcours
            </a>
            <a
              className="text-white text-lg pl-2 hover:text-purple-800 my-4"
              href="#contact"
              onClick={toggleNav}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </div>
  );
};

export default NavBar;
