import { Link } from 'react-router-dom';
import { HOME, RESEARCH_SECTIONS } from '../data/content';
import { TextParallaxContentExample } from '@/components/ui/text-parallax-content-scroll';

export default function Home() {
  const { hero, intro } = HOME;

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-olive overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-terracotta via-transparent to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-28 md:py-40">
          <div className="max-w-3xl">
            <p className="text-terracotta-light text-xs font-sans font-semibold uppercase tracking-widest mb-6">
              {hero.eyebrow}
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-cream leading-tight mb-6">
              {hero.heading}
            </h1>
            <p className="font-serif text-xl md:text-2xl text-terracotta-light italic mb-4">
              {hero.subheading}
            </p>
            <p className="text-cream/75 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
              {hero.body}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={hero.cta.href} className="btn-primary inline-block text-center">
                {hero.cta.label}
              </Link>
              <Link
                to={hero.cta2.href}
                className="inline-block px-6 py-3 border border-cream/40 text-cream text-sm font-sans font-medium tracking-wide hover:border-cream hover:bg-cream/10 transition-all duration-200 text-center"
              >
                {hero.cta2.label}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Parallax scroll — three core themes ── */}
      <TextParallaxContentExample />

      {/* ── About this project ── */}
      <section className="bg-cream-dark py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="section-label">{intro.heading}</p>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-bold mb-6">
              A Collaborative Research Project
            </h2>
            {intro.body.map((p, i) => (
              <p key={i} className="text-charcoal/75 leading-relaxed mb-4 text-base">
                {p}
              </p>
            ))}
            <Link to="/research" className="btn-primary inline-block mt-4">
              Read the Research
            </Link>
          </div>
          <div className="relative hidden md:block">
            <div className="bg-olive/10 border border-olive/20 p-10">
              <div className="border-l-4 border-terracotta pl-6">
                <p className="font-serif text-xl text-charcoal italic leading-relaxed">
                  "Food is not merely a means of survival — it is a declaration of belonging, a
                  vessel of memory, and an act of resistance."
                </p>
                <p className="mt-4 text-sm font-sans text-olive">ILC 2550 · Group Research Theme</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Research sections preview ── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <p className="section-label">Research</p>
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-bold">
                Explore the Knowledge Base
              </h2>
            </div>
            <Link
              to="/research"
              className="text-terracotta text-sm font-sans font-medium hover:underline whitespace-nowrap"
            >
              View all sections →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {RESEARCH_SECTIONS.map((s, i) => (
              <Link
                key={s.slug}
                to={s.slug}
                className="group bg-cream border border-cream-dark p-6 card-hover block"
              >
                <span className="text-terracotta/40 text-xs font-sans font-semibold tracking-widest block mb-3">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-serif text-lg text-charcoal font-semibold mb-2 group-hover:text-terracotta transition-colors">
                  {s.title}
                </h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">{s.description}</p>
                <span className="mt-4 inline-block text-terracotta text-xs font-medium font-sans">
                  Read more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
