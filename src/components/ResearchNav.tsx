import { NavLink } from 'react-router-dom';
import { RESEARCH_SECTIONS } from '../data/content';

export default function ResearchNav({ currentSlug }: { currentSlug: string }) {
  return (
    <nav aria-label="Research sections" className="bg-white border-b border-cream-dark">
      <div className="max-w-7xl mx-auto px-6 overflow-x-auto">
        <ul className="flex gap-0 whitespace-nowrap">
          {RESEARCH_SECTIONS.map((s, i) => (
            <li key={s.slug}>
              <NavLink
                to={s.slug}
                className={`inline-block px-4 py-3.5 text-xs font-sans font-medium tracking-wide border-b-2 transition-colors duration-150 ${
                  currentSlug === s.slug
                    ? 'border-terracotta text-terracotta'
                    : 'border-transparent text-charcoal/60 hover:text-terracotta hover:border-terracotta/40'
                }`}
              >
                <span className="text-terracotta/40 mr-1.5">{String(i + 1).padStart(2, '0')}</span>
                {s.shortTitle}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
