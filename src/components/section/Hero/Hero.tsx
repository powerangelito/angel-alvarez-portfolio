import { Container } from "../../ui/Container";
import { HeroActions } from "./HeroActions";
import { HeroBadges } from "./HeroBadges";
import { HeroContent } from "./HeroContent";
import { HeroImage } from "./HeroImage";

export function Hero() {
    return (
        <section
            id="home"
            className="py-24 lg:py-36"
        >
            <Container>
                <HeroContent
                    name="Angel de Jesus Alvarez Lozano"
                    title="Senior Full Stack Developer"
                    description="Especializado en Java, Spring Boot, C#, Flutter y React. Desarrollo soluciones empresariales escalables con más de 10 años de experiencia."
                />

                <HeroBadges />

                <HeroActions />

                <HeroImage />
            </Container>
        </section>
    );
}