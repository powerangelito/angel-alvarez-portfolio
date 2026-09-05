import { navigation } from '../../../constants/navigation';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <div
      className={`
        absolute
        left-0
        top-full
        w-full
        overflow-hidden
        border-b
        border-zinc-800
        bg-zinc-950
        transition-all
        duration-300
        lg:hidden
        ${
          isOpen
            ? 'visible max-h-96 opacity-100'
            : 'invisible max-h-0 opacity-0'
        }
      `}
    >
      <nav
        aria-label="Navegación móvil"
        className="mx-auto max-w-7xl px-6 py-6"
      >
        <ul className="flex flex-col gap-2">
          {navigation.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={onClose}
                className="
                  block
                  rounded-lg
                  px-4
                  py-3
                  text-base
                  font-medium
                  text-zinc-300
                  transition-colors
                  hover:bg-zinc-900
                  hover:text-white
                "
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
