import { useState } from 'react';
import { Menu, X } from "lucide-react";

import { Container } from '../../ui/Container';

import { MobileMenu } from './MobileMenu';
import { NavbarLogo } from './NavbarLogo';
import { NavbarMenu } from './NavbarMenu';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function toggleMobileMenu() {
    setIsMobileMenuOpen((current) => !current);
  }

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <NavbarLogo />

          <NavbarMenu />

          <button
            type="button"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMobileMenuOpen}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-lg
              text-zinc-300
              transition-colors
              hover:bg-zinc-800
              hover:text-white
              lg:hidden
            "
          >
            {isMobileMenuOpen ? (
                <X size={22} />
            ) : (
                <Menu size={22} />
            )}
          </button>
        </div>
      </Container>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </header>
  );
}
