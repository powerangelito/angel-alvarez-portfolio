import { Link } from 'react-router-dom';

export function NavbarLogo() {
  return (
    <Link to="/#home" className="flex items-center gap-3">
      <div
        className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                bg-blue-600
                font-bold
                text-white
            "
      >
        A
      </div>

      <div>
        <p className="font-bold">Angel Alvarez</p>

        <span className="text-xs text-zinc-500">Full Stack Developer</span>
      </div>
    </Link>
  );
}
