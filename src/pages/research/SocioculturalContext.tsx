import { SOCIOCULTURAL_CONTEXT } from '../../data/content';
import PageHero from '../../components/PageHero';
import ResearchNav from '../../components/ResearchNav';

export default function SocioculturalContext() {
  const { eyebrow, title, intro, pullQuote, sections } = SOCIOCULTURAL_CONTEXT;

  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} />
      <ResearchNav currentSlug="/research/sociocultural-context" />

      <section className="bg-cream py-16 px-6">
        <article className="max-w-3xl mx-auto">
          <p className="font-serif text-lg italic text-charcoal/80 leading-relaxed mb-12">{intro}</p>

          {sections.map((sec, i) => (
            <div key={i} className="mt-10">
              <h2 className="font-serif text-2xl text-olive font-semibold mb-4">{sec.heading}</h2>

              {sec.body && (
                <p className="text-charcoal/80 leading-relaxed text-base">{sec.body}</p>
              )}

              {sec.intro && (
                <p className="text-charcoal/80 leading-relaxed text-base mb-4">{sec.intro}</p>
              )}

              {sec.bullets && (
                <ul className="space-y-3 mt-2">
                  {sec.bullets.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="text-terracotta mt-1.5 flex-shrink-0 text-sm">▸</span>
                      <p className="text-charcoal/80 leading-relaxed text-base">{item}</p>
                    </li>
                  ))}
                </ul>
              )}

              {sec.showPullQuoteAfter && (
                <blockquote className="pull-quote mt-10">
                  <p className="font-serif text-xl md:text-2xl text-charcoal italic leading-snug">
                    "{pullQuote}"
                  </p>
                </blockquote>
              )}
            </div>
          ))}
        </article>
      </section>
    </>
  );
}
