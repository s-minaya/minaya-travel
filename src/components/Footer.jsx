function Footer() {
  return (
    <footer className="w-full bg-tertiary p-8 mt-6">

      {/* Logo y descripción */}
      <div className="mb-6">
        <p className="font-potta-one text-3xl text-primary">旅</p>
        <p className="text-secondary text-sm mt-1 leading-relaxed">
          Descubre el Japón que los turistas no ven.
        </p>
      </div>

      {/* Separador */}
      <div className="w-12 h-px bg-primary mb-6" />

      {/* Links */}
      <div className="space-y-3 mb-8">
        <p className="text-secondary/40 text-xs uppercase tracking-widest">Explora</p>
        <p className="text-secondary/70 text-sm hover:text-primary transition-colors cursor-pointer">Acerca de</p>
        <p className="text-secondary/70 text-sm hover:text-primary transition-colors cursor-pointer">Socios</p>
        <p className="text-secondary/70 text-sm hover:text-primary transition-colors cursor-pointer">Empleos</p>
        <p className="text-secondary/70 text-sm hover:text-primary transition-colors cursor-pointer">Términos y condiciones</p>
      </div>

      {/* Separador */}
      <div className="w-full h-px bg-secondary/10 mb-4" />

      {/* Copyright */}
      <div className="flex justify-between items-center">
        <p className="text-secondary/30 text-xs">© 2025 Minaya Travel Inc.</p>
        <p className="font-potta-one text-primary text-sm">日本</p>
      </div>

    </footer>
  );
}

export default Footer;