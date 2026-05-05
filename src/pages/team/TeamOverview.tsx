import PageHero from '../../components/PageHero';
import { TEAM_OVERVIEW, TEAM_MEMBERS } from '../../data/content';

function MemberPhoto({ name, photo }: { name: string; photo?: string }) {
  if (photo) {
    return (
      <img
        src={photo}
        alt={name}
        className="w-full aspect-square object-cover object-center"
      />
    );
  }
  return (
    <div
      className="w-full aspect-square bg-cream-dark flex flex-col items-center justify-center border-b border-cream-dark"
      aria-label={`Photo of ${name}`}
    >
      <svg className="w-16 h-16 text-olive/30" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
      <span className="text-xs text-olive/40 font-sans mt-2">Photo placeholder</span>
    </div>
  );
}

export default function TeamOverview() {
  return (
    <>
      <PageHero
        eyebrow={TEAM_OVERVIEW.eyebrow}
        title={TEAM_OVERVIEW.heading}
        subtitle={TEAM_OVERVIEW.intro}
      />

      <section className="bg-cream py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {TEAM_MEMBERS.map((member, i) => (
              <div key={member.id} className="bg-white border border-cream-dark overflow-hidden">
                <MemberPhoto name={member.name} photo={member.photo} />
                <div className="p-5">
                  <span className="text-terracotta/50 text-xs font-sans font-semibold tracking-widest block mb-1">
                    Member {i + 1}
                  </span>
                  <h3 className="font-serif text-lg text-charcoal font-semibold mb-1">
                    {member.name}
                  </h3>
                  <p className="text-olive text-xs font-sans">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
