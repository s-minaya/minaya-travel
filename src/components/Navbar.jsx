import { useState, useRef, useEffect } from "react";
import Icon from "./Icon";

function Navbar() {
  const [showProfile, setShowProfile] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowProfile(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="hidden w-full items-center justify-between bg-secondary px-8 py-4 shadow-sm lg:flex fixed top-0 left-0 z-40">

      {/* Logo */}
      <div>
        <p className="font-potta-one text-3xl text-primary">ミナヤトラベル</p>
        <p className="text-sm font-bold text-tertiary">Minaya Travel</p>
      </div>

      {/* Links */}
      <div className="flex items-center space-x-8">
        <a className="text-md font-bold text-tertiary transition-colors hover:text-primary" href="#home">Inicio</a>
        <a className="text-md font-bold text-tertiary transition-colors hover:text-primary" href="#recommended">Recomendados</a>
        <a className="text-md font-bold text-tertiary transition-colors hover:text-primary" href="#featured_destinations">Descubre</a>
        <a className="text-md font-bold text-tertiary transition-colors hover:text-primary" href="#faqs">FAQs</a>
        <a className="text-md font-bold text-tertiary transition-colors hover:text-primary" href="#about">Sobre nosotros</a>
      </div>

      {/* Iconos */}
      <div className="flex items-center space-x-4">
        <button className="flex items-center cursor-pointer text-tertiary transition-colors hover:text-primary">
          <Icon id="search" size={24} />
        </button>
        <button className="flex items-center cursor-pointer text-tertiary transition-colors hover:text-primary">
          <Icon id="moon" size={28} />
        </button>

        {/* Dropdown perfil */}
        <div className="relative flex items-center" ref={dropdownRef}>
          <button
            onClick={() => setShowProfile(!showProfile)}
            className="flex items-center cursor-pointer text-tertiary transition-colors hover:text-primary"
          >
            <Icon id="user" size={24} />
          </button>

          {showProfile && (
            <div className="absolute right-0 top-10 w-64 rounded-xl bg-secondary shadow-xl border border-tertiary/10 p-6 space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-lg font-bold text-tertiary">Mi perfil</p>
                <button
                  onClick={() => setShowProfile(false)}
                  className="transition-transform duration-300 hover:rotate-90"
                >
                  <Icon id="close" size={20} className="cursor-pointer text-tertiary hover:text-primary" />
                </button>
              </div>
              <p className="text-sm text-tertiary/70">¡Bienvenido de vuelta!</p>
              <p className="font-potta-one text-lg text-primary/70">おかえり</p>
              <button className="w-full cursor-pointer rounded-xl bg-primary p-3 text-sm font-semibold text-secondary">
                Mis reservas
              </button>
              <button className="w-full cursor-pointer rounded-xl bg-tertiary/10 p-3 text-sm font-semibold text-tertiary">
                Cerrar sesión
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;