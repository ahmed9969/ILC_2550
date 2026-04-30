import { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { SITE, RESEARCH_SECTIONS } from '../data/content';

const teamLinks = [
  { label: 'Team Overview', href: '/team' },
];

const researchLinks = RESEARCH_SECTIONS.map((s) => ({
  label: s.shortTitle,
  href: s.slug,
}));

function Dropdown({
  label,
  links,
  isOpen,
  onToggle,
  onClose,
}: {
  label: string;
  links: { label: string; href: string }[];
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [onClose]);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={onToggle}
        className="nav-link flex items-center gap-1 py-1"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {label}
        <svg
          className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-cream-dark shadow-lg z-50 py-1 max-h-80 overflow-y-auto">
          {links.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              onClick={onClose}
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
      )}
    </div>
  );
}

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpenDropdown(null);
    setMobileOpen(false);
  }, [location]);

  const toggle = (name: string) =>
    setOpenDropdown((prev) => (prev === name ? null : name));

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
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `nav-link ${isActive ? 'text-terracotta' : ''}`
              }
            >
              Home
            </NavLink>

            <Dropdown
              label="Team"
              links={teamLinks}
              isOpen={openDropdown === 'team'}
              onToggle={() => toggle('team')}
              onClose={() => setOpenDropdown(null)}
            />

            <Dropdown
              label="Research"
              links={researchLinks}
              isOpen={openDropdown === 'research'}
              onToggle={() => toggle('research')}
              onClose={() => setOpenDropdown(null)}
            />

            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                `nav-link ${isActive ? 'text-terracotta' : ''}`
              }
            >
              Gallery
            </NavLink>

            <NavLink
              to="/conclusion"
              className={({ isActive }) =>
                `nav-link ${isActive ? 'text-terracotta' : ''}`
              }
            >
              Conclusion
            </NavLink>

            <NavLink
              to="/references"
              className={({ isActive }) =>
                `nav-link ${isActive ? 'text-terracotta' : ''}`
              }
            >
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
            <NavLink to="/" end className="block px-3 py-2 text-sm nav-link">Home</NavLink>

            <div className="px-3 py-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-olive mb-1">Team</p>
              {teamLinks.map((l) => (
                <NavLink key={l.href} to={l.href} className="block py-1.5 pl-2 text-sm nav-link">
                  {l.label}
                </NavLink>
              ))}
            </div>

            <div className="px-3 py-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-olive mb-1">Research</p>
              {researchLinks.map((l) => (
                <NavLink key={l.href} to={l.href} className="block py-1.5 pl-2 text-sm nav-link">
                  {l.label}
                </NavLink>
              ))}
            </div>

            <NavLink to="/gallery" className="block px-3 py-2 text-sm nav-link">Gallery</NavLink>
            <NavLink to="/conclusion" className="block px-3 py-2 text-sm nav-link">Conclusion</NavLink>
            <NavLink to="/references" className="block px-3 py-2 text-sm nav-link">References</NavLink>
          </div>
        )}
      </nav>
    </header>
  );
}
