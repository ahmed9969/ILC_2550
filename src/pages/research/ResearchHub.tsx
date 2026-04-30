import { Link } from 'react-router-dom';
import { RESEARCH_HUB, RESEARCH_SECTIONS } from '../../data/content';
import PageHero from '../../components/PageHero';

export default function ResearchHub() {
  return (
    <>
      <PageHero
        eyebrow={RESEARCH_HUB.eyebrow}
        title={RESEARCH_HUB.heading}
        subtitle={RESEARCH_HUB.intro}
      />

      <section className="bg-cream py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 gap-5">
            {RESEARCH_SECTIONS.map((s, i) => (
              <Link
                key={s.slug}
                to={s.slug}
                className="group bg-white border border-cream-dark p-7 card-hover flex items-start gap-6"
              >
                <span className="text-terracotta/30 font-serif text-4xl font-bold leading-none flex-shrink-0 w-12 text-center group-hover:text-terracotta/50 transition-colors">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-sans font-semibold uppercase tracking-widest text-olive mb-1">
                    {s.shortTitle}
                  </p>
                  <h3 className="font-serif text-xl text-charcoal font-semibold mb-2 group-hover:text-terracotta transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-charcoal/60 text-sm leading-relaxed">{s.description}</p>
                </div>
                <svg
                  className="w-5 h-5 text-terracotta/30 group-hover:text-terracotta transition-colors flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
