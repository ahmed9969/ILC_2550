import { HISTORICAL_DEVELOPMENT } from '../../data/content';
import PageHero from '../../components/PageHero';
import ResearchNav from '../../components/ResearchNav';

export default function HistoricalDevelopment() {
  const { eyebrow, title, sections } = HISTORICAL_DEVELOPMENT;

  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} />
      <ResearchNav currentSlug="/research/historical-development" />

      <section className="bg-cream py-16 px-6">
        <article className="max-w-3xl mx-auto space-y-12">
          {sections.map((sec, i) => (
            <div key={i}>
              <h2 className="font-serif text-2xl text-olive font-semibold mb-4">{sec.heading}</h2>

              {sec.intro && (
                <p className="text-charcoal/80 leading-relaxed text-base mb-4">{sec.intro}</p>
              )}

              {sec.bullets && (
                <ul className="space-y-3 mb-4">
                  {sec.bullets.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="text-terracotta mt-1.5 flex-shrink-0 text-sm">▸</span>
                      <p className="text-charcoal/80 leading-relaxed text-base">{item}</p>
                    </li>
                  ))}
                </ul>
              )}

              {sec.cases && (
                <div className="space-y-5 mt-4">
                  {sec.cases.map((c, j) => (
                    <div key={j} className="bg-white border border-cream-dark p-6">
                      <h3 className="font-serif text-lg text-terracotta font-semibold mb-2">{c.title}</h3>
                      <p className="text-charcoal/80 leading-relaxed text-base">{c.body}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </article>
      </section>
    </>
  );
}
