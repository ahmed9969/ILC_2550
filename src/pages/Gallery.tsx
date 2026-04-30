import { GALLERY } from '../data/content';
import PageHero from '../components/PageHero';
import PlaceholderNote from '../components/PlaceholderNote';

function PhotoSlot({ id, caption, alt }: { id: number; caption: string; alt: string }) {
  return (
    <figure className="group bg-white border border-cream-dark overflow-hidden card-hover">
      <div
        className="aspect-square bg-cream-dark flex flex-col items-center justify-center"
        aria-label={alt}
      >
        <svg
          className="w-10 h-10 text-olive/25"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <span className="text-xs text-olive/40 font-sans mt-2">Photo {id}</span>
      </div>
      <figcaption className="p-4">
        <p className="text-charcoal/60 text-sm font-sans italic">{caption}</p>
      </figcaption>
    </figure>
  );
}

export default function Gallery() {
  return (
    <>
      <PageHero
        eyebrow={GALLERY.eyebrow}
        title={GALLERY.title}
        subtitle={GALLERY.intro}
      />

      <section className="bg-cream py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <PlaceholderNote text={GALLERY.note} />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {GALLERY.slots.map((slot) => (
              <PhotoSlot key={slot.id} {...slot} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
