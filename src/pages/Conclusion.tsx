import { CONCLUSION } from '../data/content';
import PageHero from '../components/PageHero';

export default function Conclusion() {
  return (
    <>
      <PageHero eyebrow={CONCLUSION.eyebrow} title={CONCLUSION.title} />

      <section className="bg-cream py-16 px-6">
        <div className="max-w-3xl mx-auto">
          {CONCLUSION.body.map((p, i) => (
            <p key={i} className="text-charcoal/80 leading-relaxed mb-6 text-base">
              {p}
            </p>
          ))}

          <div className="mt-16 border-t border-cream-dark pt-10 text-center">
            <p className="font-serif text-2xl italic text-olive">"{CONCLUSION.closingQuote}"</p>
            <p className="mt-3 text-sm font-sans text-charcoal/50">
              ILC 2550 · Webster University · 2025
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
