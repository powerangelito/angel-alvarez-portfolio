interface HeroContentProps {
    name: string;
    title: string;
    description: string;
}

export function HeroContent({
    name,
    title,
    description,
}: HeroContentProps) {
    return (
        <>
            <p className="text-primary mb-4 text-lg">
                👋 Hola, soy
            </p>

            <h1 className="text-5xl font-black leading-tight lg:text-7xl">
                {name}
            </h1>

            <h2 className="mt-6 text-2xl text-zinc-400">
                {title}
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-500">
                {description}
            </p>
        </>
    );
}