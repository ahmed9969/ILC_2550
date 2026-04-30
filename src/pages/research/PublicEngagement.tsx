import { PUBLIC_ENGAGEMENT } from '../../data/content';
import PageHero from '../../components/PageHero';
import ResearchNav from '../../components/ResearchNav';

export default function PublicEngagement() {
  const { eyebrow, title, intro, areas } = PUBLIC_ENGAGEMENT;

  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} />
      <ResearchNav currentSlug="/research/public-engagement" />

      <section className="bg-cream py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-charcoal/80 leading-relaxed text-base mb-12">{intro}</p>

          <div className="grid grid-cols-1 gap-6">
            {areas.map((area, i) => (
              <div key={i} className="bg-white border border-cream-dark p-7 flex items-start gap-5">
                <span className="text-3xl flex-shrink-0 mt-0.5" role="img" aria-label={area.heading}>
                  {area.icon}
                </span>
                <div>
                  <h3 className="font-serif text-xl text-olive font-semibold mb-3">{area.heading}</h3>
                  <p className="text-charcoal/80 leading-relaxed text-base">{area.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
