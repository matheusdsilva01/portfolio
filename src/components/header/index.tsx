import Link from "next/link";

export const Header = () => (
  <header className="cinema-header">
    <nav className="shell" aria-label="Navegação principal">
      <Link href="#inicio" className="cinema-logo">MATHEUS<span>°</span>SILVA</Link>
      <div>
        <Link href="#sobre">Sobre</Link>
        <Link href="#projetos">Projetos</Link>
        <Link href="#artigos">Artigos</Link>
      </div>
      <Link href="#contato" className="cinema-contact">Contato <span>↗</span></Link>
    </nav>
  </header>
);
