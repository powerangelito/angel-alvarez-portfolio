import { Container } from "../../ui/Container";
import { NavbarLogo } from "./NavbarLogo";
import { NavbarMenu } from "./NavbarMenu";

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
            <Container>
                <div className="flex h-20 items-center justify-between">
                    <NavbarLogo />

                    <NavbarMenu />
                </div>
            </Container>
        </header>
    );
}