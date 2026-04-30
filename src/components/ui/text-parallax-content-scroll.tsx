import { useRef } from 'react';
import type { ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const IMG_PADDING = 12;

// ─── Types ────────────────────────────────────────────────────────────────────

interface TextParallaxContentProps {
  imgUrl: string;
  subheading: string;
  heading: string;
  children: ReactNode;
}

interface StickyImageProps {
  imgUrl: string;
  alt: string;
}

interface OverlayCopyProps {
  subheading: string;
  heading: string;
}

interface PanelContentProps {
  description: string;
  detail: string;
  linkLabel: string;
  linkHref: string;
}

// ─── Core primitives ─────────────────────────────────────────────────────────

const StickyImage = ({ imgUrl, alt }: StickyImageProps) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      ref={targetRef}
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      role="img"
      aria-label={alt}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/60"
        style={{ opacity }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }: OverlayCopyProps) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      ref={targetRef}
      style={{ y, opacity }}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl font-sans tracking-widest uppercase text-terracotta-light md:mb-4 md:text-2xl">
        {subheading}
      </p>
      <p className="text-center text-5xl font-serif font-bold md:text-7xl px-4 leading-tight">
        {heading}
      </p>
    </motion.div>
  );
};

const TextParallaxContent = ({
  imgUrl,
  subheading,
  heading,
  children,
}: TextParallaxContentProps) => (
  <div style={{ paddingLeft: IMG_PADDING, paddingRight: IMG_PADDING }}>
    <div className="relative h-[150vh]">
      <StickyImage imgUrl={imgUrl} alt={heading} />
      <OverlayCopy heading={heading} subheading={subheading} />
    </div>
    {children}
  </div>
);

// ─── Panel content block ──────────────────────────────────────────────────────

const PanelContent = ({ description, detail, linkLabel, linkHref }: PanelContentProps) => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12 bg-cream">
    <h2 className="col-span-1 font-serif text-3xl font-bold text-charcoal md:col-span-4 leading-snug">
      {description}
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-8 text-lg text-charcoal/70 leading-relaxed md:text-xl">
        {detail}
      </p>
      <Link
        to={linkHref}
        className="inline-flex items-center gap-2 bg-terracotta text-cream px-8 py-4 text-sm font-sans font-medium tracking-wide hover:bg-terracotta-dark transition-colors duration-200"
      >
        {linkLabel}
        <FiArrowUpRight className="text-base" aria-hidden="true" />
      </Link>
    </div>
  </div>
);

// ─── Exported full example wired to ILC content ───────────────────────────────

export const TextParallaxContentExample = () => (
  <div className="bg-cream">
    <TextParallaxContent
      imgUrl="https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2560&auto=format&fit=crop"
      subheading="Theme One"
      heading="Food as Survival"
    >
      <PanelContent
        description="When displacement strips everything away, food becomes the last anchor."
        detail="For millions of refugees and internally displaced persons, access to food is the first casualty of forced migration. Aid rations rarely account for cultural needs — and the gap between calories and belonging is vast. Structural barriers including legal restrictions on work, limited markets in camps, and volatile urban food prices compound the daily reality of hunger."
        linkLabel="Read: Topic Introduction"
        linkHref="/research/topic-introduction"
      />
    </TextParallaxContent>

    <TextParallaxContent
      imgUrl="https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=2560&auto=format&fit=crop"
      subheading="Theme Two"
      heading="Culture & Identity"
    >
      <PanelContent
        description="A recipe is a map of where you come from."
        detail="Food is one of the most immediate carriers of cultural identity — encoding language, memory, religion, and belonging in every ingredient and technique. When displaced communities are cut off from their traditional foods, the loss goes far beyond nutrition. The inability to recreate familiar dishes is a rupture in cultural continuity, with documented effects on mental health and intergenerational connection."
        linkLabel="Read: Sociocultural Context"
        linkHref="/research/sociocultural-context"
      />
    </TextParallaxContent>

    <TextParallaxContent
      imgUrl="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2560&auto=format&fit=crop"
      subheading="Theme Three"
      heading="Resilience"
    >
      <PanelContent
        description="Communities adapt, invent, and persist through the act of cooking."
        detail="Despite profound constraints, displaced communities around the world have built informal food economies, community kitchens, and hybrid cuisines that blend the old with the new. From Syrian restaurants in Istanbul to Palestinian cookbooks in Beirut camps, food is not merely a survival strategy — it is an assertion of dignity, agency, and the refusal to be erased."
        linkLabel="Read: Historical Development"
        linkHref="/research/historical-development"
      />
    </TextParallaxContent>
  </div>
);

export { TextParallaxContent, PanelContent };
