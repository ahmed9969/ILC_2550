interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
}

export default function PageHero({ eyebrow, title, subtitle, dark = true }: PageHeroProps) {
  return (
    <section className={`py-20 px-6 ${dark ? 'bg-olive text-cream' : 'bg-cream-dark text-charcoal'}`}>
      <div className="max-w-4xl mx-auto">
        {eyebrow && (
          <p className={`text-xs font-sans font-semibold uppercase tracking-widest mb-4 ${dark ? 'text-terracotta-light' : 'text-terracotta'}`}>
            {eyebrow}
          </p>
        )}
        <h1 className={`font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${dark ? 'text-cream' : 'text-charcoal'}`}>
          {title}
        </h1>
        {subtitle && (
          <p className={`mt-4 text-lg md:text-xl leading-relaxed max-w-2xl ${dark ? 'text-cream/80' : 'text-charcoal/70'}`}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
