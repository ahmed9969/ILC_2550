import { BLOG } from '../data/content';
import PageHero from '../components/PageHero';

export default function Blog() {
  return (
    <>
      <PageHero eyebrow={BLOG.eyebrow} title={BLOG.title} />

      <section className="bg-cream py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-14">
          {BLOG.posts.map((post) => (
            <article key={post.id} className="bg-white border border-cream-dark overflow-hidden">
              {/* Header */}
              <div className="border-b border-cream-dark px-8 py-6 flex flex-wrap items-center gap-3">
                <span className="text-xs font-sans font-semibold uppercase tracking-widest bg-terracotta/10 text-terracotta px-3 py-1">
                  {post.tag}
                </span>
                <time className="text-xs text-charcoal/50 font-sans">{post.date}</time>
              </div>

              {/* Body */}
              <div className="px-8 py-8">
                <h2 className="font-serif text-2xl md:text-3xl text-charcoal font-bold mb-6 leading-snug">
                  {post.title}
                </h2>
                <div className="space-y-4">
                  {post.body.map((para, i) => (
                    <p key={i} className="text-charcoal/80 leading-relaxed text-base">{para}</p>
                  ))}
                </div>
                <p className="mt-6 text-xs font-sans text-olive">By {post.author}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
