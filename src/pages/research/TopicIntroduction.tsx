import { TOPIC_INTRODUCTION } from '../../data/content';
import PageHero from '../../components/PageHero';
import ResearchNav from '../../components/ResearchNav';

export default function TopicIntroduction() {
  const { eyebrow, title, paragraphs } = TOPIC_INTRODUCTION;

  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} />
      <ResearchNav currentSlug="/research/topic-introduction" />

      <section className="bg-cream py-16 px-6">
        <article className="max-w-3xl mx-auto space-y-14">
          {paragraphs.map((p, i) => (
            <div key={i}>
              <h2 className="font-serif text-2xl text-olive font-semibold mb-5">{p.heading}</h2>
              <p className="text-charcoal/80 leading-relaxed text-base mb-6">{p.body}</p>
              {/* Sub-paragraph — indented, lighter */}
              <div className="border-l-2 border-cream-dark pl-6">
                <p className="text-charcoal/65 leading-relaxed text-base italic">{p.subBody}</p>
              </div>
            </div>
          ))}
        </article>
      </section>
    </>
  );
}
