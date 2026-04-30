import { GALLERY } from '../data/content';
import PageHero from '../components/PageHero';

export default function Gallery() {
  return (
    <>
      <PageHero eyebrow={GALLERY.eyebrow} title={GALLERY.title} />

      <section className="bg-cream py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-charcoal/60 text-base text-center mb-12">{GALLERY.intro}</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {GALLERY.slots.map((slot) => (
              <figure key={slot.id} className="bg-white border border-cream-dark overflow-hidden">
                <img
                  src={slot.src}
                  alt={slot.alt}
                  className="w-full aspect-square object-cover"
                />
                <figcaption className="px-4 py-3">
                  <p className="text-charcoal/60 text-sm font-sans italic">{slot.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
