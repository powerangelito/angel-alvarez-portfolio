import { Button } from "../../ui/Button";

export function HeroActions() {
    return (
        <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button>
                Descargar CV
            </Button>

            <Button variant="secondary">
                GitHub
            </Button>
        </div>
    );
}