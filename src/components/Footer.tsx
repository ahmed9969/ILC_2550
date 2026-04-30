import { Link } from 'react-router-dom';
import { SITE } from '../data/content';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-2">{SITE.title}</h3>
            <p className="text-cream/70 text-sm leading-relaxed">{SITE.theme}</p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-sans font-semibold uppercase tracking-widest text-terracotta mb-4">
              Navigate
            </h4>
            <ul className="space-y-2 text-sm text-cream/80">
              {[
                { label: 'Home', href: '/' },
                { label: 'Team', href: '/team' },
                { label: 'Research', href: '/research' },
                { label: 'Gallery', href: '/gallery' },
                { label: 'Conclusion', href: '/conclusion' },
                { label: 'References', href: '/references' },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    to={l.href}
                    className="hover:text-terracotta-light transition-colors duration-150"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Course info */}
          <div>
            <h4 className="text-xs font-sans font-semibold uppercase tracking-widest text-terracotta mb-4">
              Course
            </h4>
            <ul className="space-y-2 text-sm text-cream/80">
              <li>{SITE.course}</li>
              <li>{SITE.university}</li>
              <li>Group Project · {SITE.year}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center">
          <p className="text-cream/50 text-xs font-sans tracking-wide">{SITE.footer}</p>
        </div>
      </div>
    </footer>
  );
}
