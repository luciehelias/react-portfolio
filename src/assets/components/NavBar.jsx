import React from "react";

const NavBar = () => {
  return (
    <div>
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
    </div>
  );
};

export default NavBar;
