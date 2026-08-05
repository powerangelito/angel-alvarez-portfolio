import { Container } from "../../ui/Container";

export function Footer() {
    return (
        <footer className="border-t border-zinc-800 py-10">

            <Container>

                <p className="text-center text-sm text-zinc-500">

                    © {new Date().getFullYear()} Ángel de Jesús Álvarez Lozano

                </p>

            </Container>

        </footer>
    );
}