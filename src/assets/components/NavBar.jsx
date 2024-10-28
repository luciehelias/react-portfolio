const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-6 border rounded-2xl bg-slate-200 opacity-80">
      <a href="#about">A propos de moi</a>
      <a href="#experiences">Mon Parcours</a>
      <a href="#projects">Mes Projets</a>
      <a href="#contact">Contact</a>
    </nav>
  );
};

export default Navbar;
