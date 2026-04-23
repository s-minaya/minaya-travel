import { useState } from "react";
import Icon from "./Icon";

function TabBar({ toggleDark, isDark }) {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <>
      {showProfile && (
        // Click en el fondo → cierra
        <div
          className="fixed inset-0 z-50 flex items-end bg-black/50"
          onClick={() => setShowProfile(false)}
        >
          <div
            className="w-full space-y-4 rounded-t-2xl bg-secondary p-8 dark:bg-dark-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold text-tertiary dark:text-secondary">
                Mi perfil
              </p>
              <button
                onClick={() => setShowProfile(false)}
                className="transition-transform duration-300 hover:rotate-90"
              >
                <Icon
                  id="close"
                  size={24}
                  className="cursor-pointer text-tertiary hover:text-primary dark:text-secondary/70"
                />
              </button>
            </div>
            <p className="text-tertiary/70 dark:text-secondary/60">
              ¡Bienvenido de vuelta!
            </p>
            <p className="font-potta-one text-xl text-primary/70">おかえり</p>
            <button className="w-full cursor-pointer rounded-xl bg-primary p-4 font-semibold text-secondary">
              Mis reservas
            </button>
            <button className="w-full cursor-pointer rounded-xl bg-tertiary/10 p-4 font-semibold text-tertiary dark:bg-secondary/10 dark:text-secondary">
              Cerrar sesión
            </button>
          </div>
        </div>
      )}

      <div
        className="fixed bottom-0 left-0 flex h-16 w-full items-center justify-around bg-secondary shadow-md lg:hidden"
        id="tab_bar"
      >
        <a href="#home">
          <Icon id="home" size={40} className="fill-current text-tertiary" />
        </a>
        <a href="#featured_destinations">
          <Icon id="search" size={40} className="fill-current text-primary" />
        </a>
        <a href="#recommended">
          <Icon id="heart" size={40} className="fill-current text-tertiary" />
        </a>
        <button onClick={toggleDark}>
          <Icon
            id={isDark ? "sun" : "moon"}
            size={40}
            type={isDark ? "stroke" : "fill"}
            className="cursor-pointer text-tertiary transition-colors hover:text-primary"
          />
        </button>
        <button onClick={() => setShowProfile(true)}>
          <Icon
            id="user"
            size={40}
            className="cursor-pointer fill-current text-tertiary"
          />
        </button>
      </div>
    </>
  );
}

export default TabBar;
