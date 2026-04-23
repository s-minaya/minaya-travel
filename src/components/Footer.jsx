function Footer() {
  return (
    <footer
      className="mt-6 w-full bg-tertiary p-8 lg:px-16 lg:pt-12"
      id="about"
    >
      {/* Logo */}
      <div className="mb-8 lg:hidden">
        <p className="font-potta-one text-5xl text-primary">旅</p>
        <p className="mt-2 text-xs tracking-widest text-secondary/40 uppercase">
          Minaya Travel · Tokyo, Japón
        </p>
        <p className="mt-3 max-w-xs text-sm leading-relaxed text-secondary/60">
          Descubre el Japón que los turistas no ven.
        </p>
      </div>

      {/* Separador móvil */}
      <div className="mb-8 h-px w-12 bg-primary lg:hidden" />

      {/* Grid — 1 col móvil (logo arriba), 3 col desktop (todo en fila) */}
      <div className="hidden lg:mt-12 lg:mb-12 lg:grid lg:grid-cols-3 lg:gap-16">
        {/* Columna 1 desktop — logo repetido solo en lg */}
        <div>
          <p className="font-potta-one text-8xl pb-2 text-primary">旅</p>
          <p className="mt-2 text-sm tracking-widest text-secondary/40 uppercase">
            Minaya Travel · Tokyo, Japón
          </p>
          <p className="mt-3 text-sm leading-relaxed text-secondary/60">
            Descubre el Japón que los turistas no ven.
          </p>
        </div>

        {/* Columna 2 desktop — Explora */}
        <div>
          <p className="mb-4 text-sm tracking-widest text-secondary/40 uppercase">
            Explora
          </p>
          <div className="space-y-3">
            <p className="cursor-pointer text-base text-secondary/70 transition-colors hover:text-primary">
              Acerca de
            </p>
            <p className="cursor-pointer text-base text-secondary/70 transition-colors hover:text-primary">
              Socios
            </p>
            <p className="cursor-pointer text-base text-secondary/70 transition-colors hover:text-primary">
              Empleos
            </p>
            <p className="cursor-pointer text-base text-secondary/70 transition-colors hover:text-primary">
              Términos y condiciones
            </p>
          </div>
        </div>

        {/* Columna 3 desktop — Contacto */}
        <div>
          <p className="mb-4 text-sm tracking-widest text-secondary/40 uppercase">
            Contacto
          </p>
          <div className="space-y-3">
            <p className="text-base text-secondary/70">hola@minayatravel.com</p>
            <p className="text-base text-secondary/70">+81 90 1234 5678</p>
            <p className="text-base text-secondary/70">Tokyo, Japón</p>
          </div>
        </div>
      </div>

      {/* Links móvil — 2 columnas, solo visible en móvil */}
      <div className="mb-8 grid grid-cols-2 gap-8 lg:hidden">
        <div>
          <p className="mb-4 text-xs tracking-widest text-secondary/40 uppercase">
            Explora
          </p>
          <div className="space-y-3">
            <p className="cursor-pointer text-sm text-secondary/70 transition-colors hover:text-primary">
              Acerca de
            </p>
            <p className="cursor-pointer text-sm text-secondary/70 transition-colors hover:text-primary">
              Socios
            </p>
            <p className="cursor-pointer text-sm text-secondary/70 transition-colors hover:text-primary">
              Empleos
            </p>
            <p className="cursor-pointer text-sm text-secondary/70 transition-colors hover:text-primary">
              Términos y condiciones
            </p>
          </div>
        </div>
        <div>
          <p className="mb-4 text-xs tracking-widest text-secondary/40 uppercase">
            Contacto
          </p>
          <div className="space-y-3">
            <p className="text-sm text-secondary/70">hola@minayatravel.com</p>
            <p className="text-sm text-secondary/70">+81 90 1234 5678</p>
            <p className="text-sm text-secondary/70">Tokyo, Japón</p>
          </div>
        </div>
      </div>

      {/* Separador */}
      <div className="mb-4 h-px w-full bg-secondary/10" />

      {/* Copyright */}
      <div className="flex items-center justify-between">
        <p className="text-xs text-secondary/30 lg:text-sm">
          © 2026 Minaya Travel Inc.
        </p>
        <p className="font-potta-one text-sm text-primary lg:text-2xl">日本</p>
      </div>
    </footer>
  );
}

export default Footer;
