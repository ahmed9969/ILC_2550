import { REFERENCES } from '../data/content';
import PageHero from '../components/PageHero';

export default function References() {
  return (
    <>
      <PageHero eyebrow={REFERENCES.eyebrow} title={REFERENCES.title} />

      <section className="bg-cream py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-charcoal/70 leading-relaxed mb-10 text-base italic">
            {REFERENCES.intro}
          </p>

          <div className="space-y-4">
            {REFERENCES.citations.map((ref) => (
              <div key={ref.id} className="bg-white border border-cream-dark p-5 flex items-start gap-4">
                <span className="text-terracotta/40 font-serif text-lg font-bold flex-shrink-0 w-6 text-right">
                  {ref.id}.
                </span>
                <p className="text-charcoal/80 text-sm leading-relaxed font-sans">{ref.citation}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-olive/5 border border-olive/20 p-6">
            <p className="text-xs font-sans font-semibold uppercase tracking-widest text-olive mb-2">
              Citation Format
            </p>
            <p className="text-charcoal/70 text-sm leading-relaxed">
              All references are formatted in APA 7th edition. Full source details — including volume,
              issue, DOI, and access dates — will be verified and completed upon final submission.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
