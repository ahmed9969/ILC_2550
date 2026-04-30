import { IDENTIFYING_GAP } from '../../data/content';
import PageHero from '../../components/PageHero';
import ResearchNav from '../../components/ResearchNav';

export default function IdentifyingGap() {
  const { eyebrow, title, intro, gaps, closing } = IDENTIFYING_GAP;

  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} />
      <ResearchNav currentSlug="/research/identifying-the-gap" />

      <section className="bg-cream py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-charcoal/80 leading-relaxed text-base mb-12">{intro}</p>

          <div className="space-y-6">
            {gaps.map((gap) => (
              <div key={gap.number} className="bg-white border border-cream-dark p-7 flex items-start gap-5">
                <span className="text-terracotta/30 font-serif text-3xl font-bold leading-none flex-shrink-0">
                  {gap.number}
                </span>
                <div>
                  <h3 className="font-serif text-xl text-olive font-semibold mb-3">{gap.heading}</h3>
                  <p className="text-charcoal/80 leading-relaxed text-base">{gap.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 border-l-4 border-terracotta pl-6 py-1">
            <p className="text-charcoal/75 leading-relaxed text-base italic">{closing}</p>
          </div>
        </div>
      </section>
    </>
  );
}
