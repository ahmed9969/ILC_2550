import { useParams, Link, Navigate } from 'react-router-dom';
import { TEAM_MEMBERS } from '../../data/content';
import PageHero from '../../components/PageHero';
import PlaceholderNote from '../../components/PlaceholderNote';

function PlaceholderPhoto({ name }: { name: string }) {
  return (
    <div
      className="w-full max-w-xs aspect-square bg-cream-dark flex flex-col items-center justify-center border border-cream-dark mx-auto"
      aria-label={`Placeholder photo for ${name}`}
    >
      <svg className="w-20 h-20 text-olive/30" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
      <span className="text-xs text-olive/40 font-sans mt-3">Photo placeholder</span>
    </div>
  );
}

export default function MemberPage() {
  const { id } = useParams<{ id: string }>();
  const memberIndex = TEAM_MEMBERS.findIndex((m) => m.id === id);
  const member = TEAM_MEMBERS[memberIndex];

  if (!member) return <Navigate to="/team" replace />;

  return (
    <>
      <PageHero
        eyebrow={`Team · Member ${memberIndex + 1}`}
        title={member.name}
        subtitle={member.role}
      />

      <section className="bg-cream py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <PlaceholderNote text="Member reflection — content to be added by team member" />

          <div className="flex flex-col sm:flex-row gap-10 mb-14 items-start">
            <div className="flex-shrink-0">
              <PlaceholderPhoto name={member.name} />
            </div>
            <div className="flex-1 flex items-center">
              <div className="border-l-4 border-terracotta pl-5 py-1">
                <p className="text-xs font-sans font-semibold uppercase tracking-widest text-olive mb-2">
                  Personal Motto
                </p>
                <p className="font-serif text-lg italic text-charcoal">{member.motto}</p>
              </div>
            </div>
          </div>

          {/* Key Learnings */}
          <div className="bg-white border border-cream-dark p-8 mb-8">
            <p className="section-label">Key Learnings</p>
            <h2 className="font-serif text-2xl text-charcoal font-semibold mb-6">
              What I Took Away From This Course
            </h2>
            <ul className="space-y-4">
              {member.keyLearnings.map((learning, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="text-terracotta font-serif text-xl font-bold flex-shrink-0 leading-tight mt-0.5">
                    {String(i + 1).padStart(2, '0')}.
                  </span>
                  <p className="text-charcoal/80 leading-relaxed">{learning}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Applying Course Themes */}
          <div className="bg-olive/5 border border-olive/20 p-8">
            <p className="section-label">Applying Course Themes</p>
            <h2 className="font-serif text-2xl text-charcoal font-semibold mb-4">
              Connecting Research to Personal Experience
            </h2>
            <p className="text-charcoal/80 leading-relaxed">{member.courseThemes}</p>
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-between items-center">
            {memberIndex > 0 ? (
              <Link
                to={TEAM_MEMBERS[memberIndex - 1].slug}
                className="text-terracotta text-sm font-sans font-medium hover:underline flex items-center gap-1"
              >
                ← {TEAM_MEMBERS[memberIndex - 1].name}
              </Link>
            ) : (
              <Link to="/team" className="text-olive/60 text-sm font-sans hover:text-olive">
                ← Team Overview
              </Link>
            )}
            {memberIndex < TEAM_MEMBERS.length - 1 ? (
              <Link
                to={TEAM_MEMBERS[memberIndex + 1].slug}
                className="text-terracotta text-sm font-sans font-medium hover:underline flex items-center gap-1"
              >
                {TEAM_MEMBERS[memberIndex + 1].name} →
              </Link>
            ) : (
              <Link to="/team" className="text-olive/60 text-sm font-sans hover:text-olive">
                Team Overview →
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
