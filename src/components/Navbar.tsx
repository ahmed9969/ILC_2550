import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SITE, RESEARCH_SECTIONS } from '../data/content';

const researchLinks = RESEARCH_SECTIONS.map((s) => ({
  label: s.shortTitle,
  href: s.slug,
}));

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white border-b border-cream-dark sticky top-0 z-40">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex flex-col leading-tight group">
            <span className="font-serif text-lg font-bold text-charcoal group-hover:text-terracotta transition-colors">
              {SITE.title}
            </span>
            <span className="text-xs text-olive font-sans tracking-widest uppercase">
              {SITE.subtitle}
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">

            <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'text-terracotta' : ''}`}>
              Home
            </NavLink>

            {/* Team — single link, no dropdown needed */}
            <NavLink to="/team" className={({ isActive }) => `nav-link ${isActive ? 'text-terracotta' : ''}`}>
              Team
            </NavLink>

            {/* Research — hover dropdown */}
            <div className="relative group">
              <NavLink
                to="/research"
                className={({ isActive }) =>
                  `nav-link flex items-center gap-1 py-1 ${isActive ? 'text-terracotta' : ''}`
                }
              >
                Research
                <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </NavLink>

              {/* Dropdown — shown on hover via group-hover */}
              <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-cream-dark shadow-lg z-50 py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 max-h-80 overflow-y-auto">
                {researchLinks.map((link) => (
                  <NavLink
                    key={link.href}
                    to={link.href}
                    className={({ isActive }) =>
                      `block px-4 py-2.5 text-sm font-sans transition-colors duration-150 ${
                        isActive
                          ? 'bg-cream text-terracotta font-medium'
                          : 'text-charcoal hover:bg-cream hover:text-terracotta'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </div>

            <NavLink to="/gallery" className={({ isActive }) => `nav-link ${isActive ? 'text-terracotta' : ''}`}>
              Gallery
            </NavLink>

            <NavLink to="/conclusion" className={({ isActive }) => `nav-link ${isActive ? 'text-terracotta' : ''}`}>
              Conclusion
            </NavLink>

            <NavLink to="/references" className={({ isActive }) => `nav-link ${isActive ? 'text-terracotta' : ''}`}>
              References
            </NavLink>

          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-charcoal hover:text-terracotta transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-cream-dark py-3 space-y-1 pb-4">
            <NavLink to="/" end className="block px-3 py-2 text-sm nav-link" onClick={() => setMobileOpen(false)}>Home</NavLink>
            <NavLink to="/team" className="block px-3 py-2 text-sm nav-link" onClick={() => setMobileOpen(false)}>Team</NavLink>

            <div className="px-3 py-2">
              <NavLink to="/research" className="block text-sm font-semibold nav-link mb-2" onClick={() => setMobileOpen(false)}>
                Research
              </NavLink>
              {researchLinks.map((l) => (
                <NavLink key={l.href} to={l.href} className="block py-1.5 pl-3 text-sm nav-link" onClick={() => setMobileOpen(false)}>
                  {l.label}
                </NavLink>
              ))}
            </div>

            <NavLink to="/gallery" className="block px-3 py-2 text-sm nav-link" onClick={() => setMobileOpen(false)}>Gallery</NavLink>
            <NavLink to="/conclusion" className="block px-3 py-2 text-sm nav-link" onClick={() => setMobileOpen(false)}>Conclusion</NavLink>
            <NavLink to="/references" className="block px-3 py-2 text-sm nav-link" onClick={() => setMobileOpen(false)}>References</NavLink>
          </div>
        )}
      </nav>
    </header>
  );
}
