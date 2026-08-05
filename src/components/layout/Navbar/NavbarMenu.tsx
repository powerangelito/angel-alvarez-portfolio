import { navigation } from "../../../constants/navigation";

export function NavbarMenu() {
    return (
        <ul className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
                <li key={item.href}>
                    <a
                        href={item.href}
                        className="
                            text-sm
                            font-medium
                            text-zinc-300
                            transition-colors
                            hover:text-white
                        "
                    >
                        {item.label}
                    </a>
                </li>
            ))}
        </ul>
    );
}