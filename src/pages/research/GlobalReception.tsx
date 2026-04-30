import { GLOBAL_RECEPTION } from '../../data/content';
import PageHero from '../../components/PageHero';
import ResearchNav from '../../components/ResearchNav';

export default function GlobalReception() {
  const { eyebrow, title, intro, caseExamples, infographicCards } = GLOBAL_RECEPTION;

  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} />
      <ResearchNav currentSlug="/research/global-reception" />

      <section className="bg-cream py-16 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Intro paragraphs */}
          {intro.map((p, i) => (
            <p key={i} className="text-charcoal/80 leading-relaxed mb-5 text-base">
              {p}
            </p>
          ))}

          {/* Case Examples */}
          <div className="bg-white border border-cream-dark p-7 my-10">
            <h2 className="font-serif text-2xl text-olive font-semibold mb-4">
              {caseExamples.heading}
            </h2>
            <p className="text-charcoal/80 leading-relaxed text-base">{caseExamples.body}</p>
          </div>
        </div>

        {/* Infographic cards — full width within content */}
        <div className="max-w-5xl mx-auto mt-12">
          <p className="section-label text-center mb-3">Visual Concepts</p>
          <h2 className="font-serif text-3xl text-charcoal font-bold text-center mb-10">
            Four Infographic Ideas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {infographicCards.map((card) => (
              <div
                key={card.number}
                className="bg-white border border-cream-dark p-7 flex flex-col"
                role="figure"
                aria-label={card.title}
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-terracotta/30 font-serif text-4xl font-bold leading-none flex-shrink-0">
                    {card.number}
                  </span>
                  <h3 className="font-serif text-xl text-charcoal font-semibold leading-tight">
                    {card.title}
                  </h3>
                </div>
                <p className="text-charcoal/70 text-sm leading-relaxed mb-5">{card.description}</p>

                {/* Visual concept placeholder */}
                <div className="bg-cream-dark border border-cream-dark rounded p-5 mt-auto">
                  <p className="text-xs font-sans font-semibold uppercase tracking-widest text-olive mb-3">
                    Key Elements
                  </p>
                  <ul className="space-y-2">
                    {card.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-charcoal/70">
                        <span className="text-terracotta mt-0.5 flex-shrink-0">·</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image placeholder slot */}
                <div className="mt-4 bg-cream border border-dashed border-cream-dark h-32 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-8 h-8 text-olive/30 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-xs text-olive/40 font-sans">Infographic to be added</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
