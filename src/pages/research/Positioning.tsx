import { POSITIONING } from '../../data/content';
import PageHero from '../../components/PageHero';
import ResearchNav from '../../components/ResearchNav';

export default function Positioning() {
  const { eyebrow, title, sections } = POSITIONING;

  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} />
      <ResearchNav currentSlug="/research/positioning" />

      <section className="bg-cream py-16 px-6">
        <article className="max-w-3xl mx-auto">
          {sections.map((sec, i) => (
            <div key={i} className={i > 0 ? 'mt-12' : ''}>
              <h2 className="font-serif text-2xl text-olive font-semibold mt-10 mb-6">
                {sec.heading}
              </h2>
              {sec.body.map((para, j) => (
                <p key={j} className="text-charcoal/80 leading-relaxed mb-5 text-base">
                  {para}
                </p>
              ))}
            </div>
          ))}
        </article>
      </section>
    </>
  );
}
