// ─── Site-wide ────────────────────────────────────────────────────────────────

export const SITE = {
  title: 'Food, Migration & Identity',
  subtitle: 'ILC 2550',
  course: 'ILC 2550: Food, Language and Culture',
  theme: 'Food and Forced Migration: Culture, Survival, and Resilience',
  university: 'Webster University',
  year: '2025',
  footer: 'ILC 2550 · Food, Language & Culture · Webster University · Group Project 2025',
};

// ─── Home ─────────────────────────────────────────────────────────────────────

export const HOME = {
  hero: {
    eyebrow: 'ILC 2550 · Webster University · 2025',
    heading: 'Food and Forced Migration',
    subheading: 'Culture, Survival, and Resilience',
    body: 'This collaborative research project explores how food functions as a lifeline, a vessel of memory, and a marker of identity for displaced communities around the world.',
    cta: { label: 'Explore the Research', href: '/research' },
    cta2: { label: 'Meet the Team', href: '/team' },
  },
  themes: [
    {
      icon: '🌾',
      title: 'Survival',
      body: 'How displaced peoples navigate food insecurity, humanitarian aid systems, and structural barriers to nourishment.',
    },
    {
      icon: '🍲',
      title: 'Culture & Identity',
      body: 'Food as a carrier of memory, belonging, and cultural continuity across borders and generations.',
    },
    {
      icon: '🌍',
      title: 'Resilience',
      body: 'The ways communities adapt recipes, build informal economies, and assert agency through culinary practice.',
    },
    {
      icon: '⚖️',
      title: 'Power & Politics',
      body: 'How host-country policies, gender roles, and humanitarian regimes shape access to culturally meaningful food.',
    },
  ],
  intro: {
    heading: 'About This Project',
    body: [
      'This website presents our group research for ILC 2550: Food, Language and Culture at Webster University. Our central theme — "Food and Forced Migration: Culture, Survival, and Resilience" — examines the intersections of displacement, identity, and sustenance.',
      'Across seven research sections, we trace the historical and contemporary dimensions of food in forced migration: from structural barriers and humanitarian aid, to culinary adaptation, sociopolitical context, and the global reception of refugee cuisines.',
    ],
  },
};

// ─── Team ─────────────────────────────────────────────────────────────────────

export const TEAM_OVERVIEW = {
  eyebrow: 'The Team',
  heading: 'Who We Are',
  intro:
    'We are a group of twelve students in ILC 2550: Food, Language and Culture at Webster University. This project represents our collaborative inquiry into the lives, histories, and culinary worlds of displaced communities.',
};

export interface TeamMember {
  id: string;
  slug: string;
  name: string;
  role: string;
  photo?: string;
  keyLearnings: string[];
  motto: string;
  courseThemes: string;
}

const PLACEHOLDER = {
  keyLearnings: [
    'Key learning one — to be added after reflection.',
    'Key learning two — to be added after reflection.',
    'Key learning three — to be added after reflection.',
  ],
  motto: '"Personal motto — to be added."',
  courseThemes:
    'Reflection on course themes to be added.',
};

export const TEAM_MEMBERS: TeamMember[] = [
  { id: 'member1',  slug: '/team/member1',  name: 'Shahinaxon Ibrohimova', role: 'Researcher & Writer',             ...PLACEHOLDER },
  { id: 'member2',  slug: '/team/member2',  name: 'Farangiz Kurbanova',    role: 'Researcher & Editor',            ...PLACEHOLDER },
  { id: 'member3',  slug: '/team/member3',  name: 'Shohruhbek Hakimov',    role: 'Visual Designer & Researcher',   ...PLACEHOLDER },
  { id: 'member4',  slug: '/team/member4',  name: 'Aziza Jonaliyeva',      role: 'Content Strategist & Writer',    ...PLACEHOLDER },
  { id: 'member5',  slug: '/team/member5',  name: 'Abdulboriy Qodirov',    role: 'Research Lead & Analyst',        ...PLACEHOLDER },
  { id: 'member6',  slug: '/team/member6',  name: 'Munir Xamrayev',        role: 'Researcher & Writer',            ...PLACEHOLDER },
  { id: 'member7',  slug: '/team/member7',  name: 'Ahmed Niaz',            role: 'Researcher & Editor',            ...PLACEHOLDER },
  { id: 'member8',  slug: '/team/member8',  name: 'Alishir Faik',          role: 'Visual Designer & Researcher',   ...PLACEHOLDER },
  { id: 'member9',  slug: '/team/member9',  name: 'Raxmatillo Tolibjonov', role: 'Content Strategist & Writer',    ...PLACEHOLDER },
  { id: 'member10', slug: '/team/member10', name: 'Samandar Jafarov',      role: 'Research Lead & Analyst',        ...PLACEHOLDER },
  { id: 'member11', slug: '/team/member11', name: 'Behruzbek Olimjonov',   role: 'Researcher & Writer (Yapper)',   photo: '/team/behruzbek.jpg', ...PLACEHOLDER },
  { id: 'member12', slug: '/team/member12', name: 'Malikjon Rustamov',     role: 'Researcher & Analyst',           ...PLACEHOLDER },
];

// ─── Research Hub ─────────────────────────────────────────────────────────────

export interface ResearchSection {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
}

export const RESEARCH_HUB = {
  eyebrow: 'Research Knowledge Base',
  heading: 'Exploring Food, Displacement, and Identity',
  intro:
    'Our research is organized across seven interconnected sections, tracing the topic from foundational definitions through historical development, sociocultural and political context, global reception, scholarly gaps, our own positioning, and public engagement.',
};

export const RESEARCH_SECTIONS: ResearchSection[] = [
  {
    slug: '/research/topic-introduction',
    shortTitle: 'Topic Introduction',
    title: 'Forced Migration and Food as Survival',
    description: 'Foundational definitions, structural barriers to food access, and food as cultural identity.',
  },
  {
    slug: '/research/historical-development',
    shortTitle: 'Historical Development',
    title: 'Strategies of Adaptation and Survival',
    description: 'How displaced populations adapt food practices — practically, emotionally, and culturally.',
  },
  {
    slug: '/research/sociocultural-context',
    shortTitle: 'Sociocultural Context',
    title: 'Sociocultural & Sociopolitical Context',
    description: 'Gender roles, class, race, political factors, and the economics of eating in displacement.',
  },
  {
    slug: '/research/global-reception',
    shortTitle: 'Global Reception',
    title: 'Global Reception & Influence of Refugee Cuisines',
    description: 'How refugee cuisines circulate, adapt, and enrich food cultures in host countries.',
  },
  {
    slug: '/research/identifying-the-gap',
    shortTitle: 'Identifying the Gap',
    title: 'Identifying the Scholarly Gap',
    description: 'Where existing literature falls short and the questions that remain unanswered.',
  },
  {
    slug: '/research/positioning',
    shortTitle: 'Our Perspective',
    title: 'Positioning Our Perspective',
    description: 'Our argument, stance, and contribution to the academic discussion.',
  },
  {
    slug: '/research/public-engagement',
    shortTitle: 'Public Engagement',
    title: 'Public Engagement',
    description: 'How this research reaches beyond the academy into community and public life.',
  },
];

// ─── Topic Introduction ───────────────────────────────────────────────────────

export interface TopicParagraph {
  heading: string;
  body: string;
  subBody: string;
}

export const TOPIC_INTRODUCTION = {
  eyebrow: 'Research · Topic Introduction',
  title: 'Forced Migration and Food as Survival',
  paragraphs: [
    {
      heading: 'Forced Migration and Food as Survival',
      body: 'Forced migration is a term that is used to define the involuntary movement of individuals due to war, persecution, natural calamities or economic downfall. In the case of refugees and internally displaced people (IDPs), they tend to move away abruptly, and they are deprived of the stable food systems, whether it is farms, markets and sources of income. Consequently, food turns out to be a survival need. Humanitarian aid is very important to many displaced populations, and it usually supplies food rations that are basic and set to fulfill minimum caloric requirements. Nevertheless, these rations are not always sufficient in terms of their amount and are not diverse in terms of nutrition, causing food insecurity and malnutrition, particularly in vulnerable populations, including children and pregnant women.',
      subBody: 'In addition to the availability, access to food is limited by structural factors. Host countries often cannot legally work or own land, hindering their access to food self-sufficiency. Markets can be limited in refugee camps and high food prices and unreliable incomes are further challenges in urban areas. Such circumstances compel displaced persons to employ coping mechanisms like starving, eating less, or selling food aid to take care of other basic necessities, perpetuating dependencies and vulnerabilities.',
    },
    {
      heading: 'The Culture and Identity of Food',
      body: 'Food is a very important aspect in determining the cultural identity of a given people because it indicates the traditions, beliefs and social practices. To displaced peoples, the deprivation of access to traditional foods means more than merely a change in diet, it is a change in cultural continuity. People are frequently compelled to change their eating habits to new ones, which might not be consistent with either their cultural or religious beliefs. This may cause emotional turmoil, because food is a closely related emotion to memory, belonging, and a feeling of home.',
      subBody: 'Nevertheless, several displaced societies are vigorously maintaining their food culture despite these issues. They use what is available to change recipes, eat together in their communities, and transfer culinary knowledge between generations. These are practices that can retain cultural identity and bring about psychological stability. Simultaneously, the lack of culturally suitable food may adversely affect the mental health, raising the levels of loss and disconnection. Hence, food is a marker of identity as well as a means of survival during displacement.',
    },
    {
      heading: 'Economics, Politics, and Culture',
      body: 'Food in forced migration situation is not a mere humanitarian concern but a power and inequality issue. Humanitarian assistance regimes usually decide the type of food that is provided, restricting the independence of displaced communities and establishing reliance on foreign powers. There are also inequalities among displaced communities, where gender, legal status, and location are some of the factors that affect access to food. An example is women who are usually the ones who prepare food but have little access to resources and may forsake their own to feed their families.',
      subBody: 'Displaced populations, on the other hand, are resilient as they adapt their food practices. Informal food economies, including small businesses and community kitchens, come into existence in refugee contexts, offering both livelihood and agency. In other instances, the refugees practice small scale farming or come up with hybrid dishes which they mix with the dishes of the host communities. These adaptive measures emphasize the fact that food is not merely a matter of survival but also of reestablishing lives, dignity and creating long-term resilience.',
    },
  ] as TopicParagraph[],
};

// ─── Historical Development ───────────────────────────────────────────────────

export interface HistSection {
  heading: string;
  intro?: string;
  bullets?: string[];
  cases?: { title: string; body: string }[];
}

export const HISTORICAL_DEVELOPMENT = {
  eyebrow: 'Research · Historical Development',
  title: 'Historical Development of Food Practices in Forced Migration',
  sections: [
    {
      heading: 'Key Refugee Waves and Displacement Events',
      intro: 'Forced migration has repeatedly reshaped food cultures across history.',
      bullets: [
        'Post–World War II Europe (1945–1950s): millions of displaced people in camps across Germany, Austria, and Italy relied on shared kitchens and improvised cooking spaces. Communities often recreated familiar meals to restore normalcy after war trauma.',
        'Palestinian displacement (1948 Nakba and after): refugees in camps across Lebanon, Jordan, and Syria preserved Levantine dishes as symbols of homeland and identity.',
        'Syrian Civil War (2011–present): Syrians displaced to Turkey, Jordan, Europe, and beyond carried recipes, spices, and bread-making traditions into diaspora communities.',
      ],
    },
    {
      heading: 'How Food Practices Were Preserved Historically',
      intro: 'Refugees preserve food traditions through memory, adaptation, and community transmission.',
      bullets: [
        'Oral transmission: recipes are passed from parents to children, often without written instructions.',
        'Ingredient substitution: when original ingredients are unavailable, refugees replace them with local alternatives while keeping the taste and meaning.',
        'Preservation techniques: drying, pickling, bread-making, and spice blending help maintain traditional flavors.',
        'Community cooking: shared kitchens in camps or urban refugee neighborhoods recreate collective identity.',
        'Festivals and religious meals: Ramadan, Easter, weddings, and memorial events keep culinary heritage alive.',
      ],
    },
    {
      heading: 'Notable Communities and Organizations Supporting Refugee Cuisine',
      intro: 'Many organizations use food as a tool for economic survival and cultural resilience.',
      bullets: [
        'UNRWA-supported Palestinian camps helped sustain communal kitchens and family food traditions across generations.',
        'Soufra (Lebanon): a women-led kitchen in Burj al-Barajneh camp preserves Palestinian cuisine while creating jobs for refugee women.',
        'Caritas cooking programs: supported Syrian refugee women through culinary training and catering work.',
        'Local Syrian restaurants in Istanbul and Europe: became both businesses and cultural hubs where displaced communities rebuild belonging.',
      ],
    },
    {
      heading: 'Historical Case Examples',
      cases: [
        {
          title: 'Post-WWII Europe',
          body: 'Displaced persons camps became places where refugees rebuilt social life through familiar bread, soups, and national dishes. Food restored dignity after extreme deprivation, and shared mealtimes became anchors of community and normalcy in otherwise chaotic circumstances.',
        },
        {
          title: 'Palestinian Camps',
          body: 'Traditional dishes like musakhan, maqluba, taboon bread, and preserved pickles (mooneh) became edible memory of villages lost after 1948. Passed down across generations in diaspora communities, these recipes carry not just flavor but an entire geography of belonging.',
        },
        {
          title: 'Syrian Diaspora',
          body: 'Syrian restaurants and home kitchens in Turkey, Jordan, and Europe preserve dishes like manakish, kibbeh, and shish taouk, while adapting to new ingredients and markets. These culinary spaces function simultaneously as economic enterprises and sites of cultural continuity.',
        },
      ],
    },
  ] as HistSection[],
};

// ─── Sociocultural Context ────────────────────────────────────────────────────

export interface SocioSection {
  heading: string;
  body?: string;
  intro?: string;
  bullets?: string[];
  showPullQuoteAfter?: boolean;
}

export const SOCIOCULTURAL_CONTEXT = {
  eyebrow: 'Research · Sociocultural Context',
  title: 'Sociocultural & Sociopolitical Context',
  intro:
    'Food in displacement is never "just a meal"; it is deeply intertwined with the social structures and political realities of the host country.',
  pullQuote: 'A meal is a map of where we have been and a declaration of where we are now.',
  sections: [
    {
      heading: 'Gender Roles',
      body: 'Historically, women have been the primary keepers of culinary knowledge in displaced communities. While this preserves culture, it can also reinforce a double burden: women are expected to recreate "the taste of home" using limited rations, often spending hours processing raw grains or legumes provided by aid agencies.',
    },
    {
      heading: 'Class, Access, and Aid',
      intro: 'There is a stark divide in how refugees eat based on their socioeconomic status:',
      bullets: [
        'Aid Dependency: Many refugees in camps rely on the World Food Programme (WFP), which has shifted from physical food boxes to Cash-Based Transfers (CBT). While CBT allows for more dignity, it is subject to local inflation.',
        'The "Luxury" of Ingredients: Access to fresh meat or specific spices often becomes a marker of wealth within a displaced community.',
      ],
      showPullQuoteAfter: true,
    },
    {
      heading: 'Race and Resilience',
      body: 'Food serves as a form of "culinary resilience." For many marginalized racial groups, traditional food becomes a shield against the homogenization or "othering" experienced in host countries. However, it can also lead to "culinary colonialism," where the host population consumes the refugee\'s food while remaining indifferent to the refugee\'s political rights.',
    },
    {
      heading: 'Political Factors',
      intro: 'Host country policies dictate the "right to eat."',
      bullets: [
        'Labor Laws: Many host countries forbid refugees from working legally. This pushes culinary experts into the "shadow economy," where they sell home-cooked meals without health protections or legal recourse.',
        'Zoning: In some regions, refugee-run food stalls are frequently dismantled by authorities to prevent "permanent" settlement patterns.',
      ],
    },
  ] as SocioSection[],
};

// ─── Global Reception ─────────────────────────────────────────────────────────

export const GLOBAL_RECEPTION = {
  eyebrow: 'Research · Global Reception',
  title: 'Global Reception & Influence of Refugee Cuisines',
  intro: [
    'Refugee cuisines have become an important part of food cultures in many host countries. As people migrate, they bring culinary traditions that introduce new flavors, ingredients, and cooking methods. Over time, these cuisines often gain popularity and contribute to cultural diversity and mutual understanding.',
    'Refugee food is commonly shared through restaurants, street food stalls, catering services, and food festivals. These platforms allow migrants to sustain livelihoods while also presenting their culture to a wider audience. Food festivals, in particular, create spaces for cultural exchange and acceptance.',
    'Many traditional dishes are adapted to local tastes and available ingredients. This fusion process may involve altering spice levels, presentation, or cooking techniques to suit the preferences of the host population while maintaining the dish\'s cultural identity.',
  ],
  caseExamples: {
    heading: 'Case Examples',
    body: 'Syrian baklava in Germany has become widely appreciated, sometimes modified with less sweetness or different nuts. Similarly, Afghan mantu in the United States is often adapted in portion size or seasoning, making it more accessible while preserving its traditional essence.',
  },
  infographicCards: [
    {
      number: '01',
      title: 'Migration Routes and Associated Dishes',
      description:
        'Maps showing major displacement routes — Syria to Germany, Palestine to Lebanon and Jordan — paired with traditional dishes like manakish, maqluba, or musakhan. These visuals highlight how recipes become "edible maps" of migration journeys.',
      items: ['Syria → Germany · manakish, kibbeh', 'Palestine → Jordan · maqluba, musakhan', 'Afghanistan → USA · mantu, bolani', 'South Sudan → Uganda · kisra, ful medames'],
    },
    {
      number: '02',
      title: 'Recipe Adaptation Charts',
      description:
        'Charts comparing traditional recipes with their adapted versions in host countries. A dish originally made with specific regional spices may be modified using locally available ingredients.',
      items: ['Original ingredient → Substitute in host country', 'Traditional spice blends → Local equivalents', 'Cooking method shifts (open fire → gas range)', 'Presentation adapted to host preferences'],
    },
    {
      number: '03',
      title: 'Photos of Refugee Cooking Practices',
      description:
        'A human-centered perspective on food practices in displacement. Images of families cooking in refugee camps, shared community kitchens, and small food businesses run by refugees emphasize daily life and resilience.',
      items: ['Community kitchen gatherings', 'Family cooking in camp settings', 'Refugee-run street food stalls', 'Intergenerational recipe transmission'],
    },
    {
      number: '04',
      title: 'Ingredient Scarcity vs. Adaptation',
      description:
        'Infographics visually representing the relationship between limited resources and creativity in cooking. Comparisons between food aid rations and traditional meal requirements.',
      items: ['Food aid ration vs. traditional meal composition', 'Scarcity → simplified or hybrid dishes', 'Economic constraints → dietary shifts', 'Creative substitution as culinary agency'],
    },
  ],
};

// ─── Identifying the Gap ──────────────────────────────────────────────────────

export const IDENTIFYING_GAP = {
  eyebrow: 'Research · Identifying the Gap',
  title: 'Identifying the Scholarly Gap',
  intro: 'Current literature on food and forced migration tends to focus on food security metrics — calories, malnutrition rates, and aid delivery logistics. While this work is essential, it leaves significant gaps in our understanding of food as a cultural, psychological, and political phenomenon.',
  gaps: [
    {
      number: '01',
      heading: 'Refugee-Centered Perspectives',
      body: 'Much existing research is conducted about refugees rather than with them. The experiential and subjective dimensions of food loss and adaptation remain under-documented, particularly outside Western academic traditions. Displaced communities are rarely positioned as knowledge producers in studies about their own food systems.',
    },
    {
      number: '02',
      heading: 'Informal Economies and Mental Health',
      body: 'There is limited research connecting the growth of informal refugee food economies to psychological outcomes such as reduced anxiety, restored agency, and improved community cohesion. The link between culinary self-sufficiency and mental wellbeing deserves far more scholarly attention than it currently receives.',
    },
    {
      number: '03',
      heading: 'Longitudinal Studies',
      body: 'Most existing research captures snapshot moments of displacement rather than tracking how food practices evolve across years or generations within diaspora communities. We know relatively little about how the second and third generations of displaced families negotiate inherited food cultures in new national contexts.',
    },
    {
      number: '04',
      heading: 'Gender and Intersectionality',
      body: 'While gender is acknowledged in some literature, intersectional analyses that examine how gender, race, class, and legal status together shape food access and food labor in displacement remain rare. The compounded burdens carried by displaced women in particular are undertheorized.',
    },
    {
      number: '05',
      heading: 'Politics of Culinary Reception',
      body: 'Academic work on how host societies receive refugee cuisines — the dynamics of appreciation versus appropriation, or celebration versus exploitation — remains nascent and largely disconnected from policy discussions. The gap between cultural enthusiasm for refugee food and political indifference to refugee rights is a pressing area for further inquiry.',
    },
  ],
  closing: 'This project aims to contribute to filling these gaps by drawing on interdisciplinary sources and foregrounding the lived experiences and adaptive strategies of displaced communities across history and geography.',
};

// ─── Positioning ─────────────────────────────────────────────────────────────

export const POSITIONING = {
  eyebrow: 'Research · Our Perspective',
  title: 'Positioning Our Perspective',
  sections: [
    {
      heading: 'Argument & Stance',
      body: [
        'Food practices should be understood as meaningful social and cultural actions that go beyond simple consumption. They act as tools of resilience by helping individuals and communities cope with displacement, globalization, and social change. For migrants and Indigenous populations, maintaining traditional cooking methods, ingredients, and eating rituals allows them to preserve a sense of identity and continuity, even in unfamiliar environments.',
        'At the same time, food practices also support integration, as people adapt their cuisines by incorporating new ingredients or techniques from the host society. This creates a hybrid food culture that reflects both preservation and adaptation. Therefore, food operates simultaneously as a form of cultural resistance, identity expression, and a practical means of connecting with broader society.',
      ],
    },
    {
      heading: 'Contribution to Academic Discussion',
      body: [
        'This research contributes to academic discussion by framing food as an active and influential element in social, cultural, and political processes, rather than treating it as a purely biological necessity. It builds on existing literature by emphasizing how everyday food practices reveal deeper issues such as identity formation, power relations, and the effects of globalization.',
        'Additionally, the research offers an interdisciplinary perspective, combining insights from sociology, anthropology, and political science to provide a more comprehensive understanding of the topic. By focusing on lived experiences and daily practices, it adds a grounded, human-centered dimension to theoretical debates, helping scholars better understand how individuals and communities negotiate change, preserve culture, and create new forms of belonging.',
      ],
    },
  ],
};

// ─── Public Engagement ───────────────────────────────────────────────────────

export const PUBLIC_ENGAGEMENT = {
  eyebrow: 'Research · Public Engagement',
  title: 'Public Engagement',
  intro: 'Research on food and forced migration carries urgency beyond the academy. The findings of this project connect to ongoing public conversations about refugee rights, humanitarian policy, and cultural integration. Below are four arenas where this research speaks directly to public life.',
  areas: [
    {
      icon: '🍽️',
      heading: 'Food Festivals and Cultural Exchange',
      body: 'Organizations such as the Refugee Food Festival (founded in Paris, 2016, and now spanning cities across Europe and beyond) use food as a bridge between displaced populations and host communities. These events do more than celebrate cuisine — they create spaces for political solidarity, mutual recognition, and economic opportunity for refugee chefs and food entrepreneurs.',
    },
    {
      icon: '🏫',
      heading: 'Educational Outreach',
      body: 'Food is a uniquely accessible entry point for broader publics to engage with the realities of forced migration. Cooking demonstrations, university programs like ILC 2550, and documentary projects have proven effective tools for building empathy and challenging stereotypes. When students cook a dish from a displaced culture, they begin to understand the human story behind it.',
    },
    {
      icon: '📱',
      heading: 'Digital Storytelling',
      body: 'Refugees documenting their food traditions on platforms such as Instagram and YouTube have created powerful counter-narratives to the dominant humanitarian discourse, which too often reduces displaced people to passive victims. These digital food stories assert authorship, cultural pride, and a living relationship to tradition — reaching audiences that academic papers cannot.',
    },
    {
      icon: '⚖️',
      heading: 'Policy Implications',
      body: 'The research presented in this project supports advocacy for culturally appropriate food aid, the legal right of refugees to work in the food sector, and protection of informal food economies from punitive zoning and labor enforcement. Recognizing culturally meaningful food as a human right — not a luxury — has concrete policy implications for humanitarian organizations and host-country governments alike.',
    },
  ],
};

// ─── Gallery ─────────────────────────────────────────────────────────────────

export const GALLERY = {
  eyebrow: 'Gallery',
  title: 'Our Food Outing',
  note: 'Photos from group food outing — to be uploaded',
  intro: 'A visual record of our shared food experiences throughout the course. Images and captions to be added.',
  slots: Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    caption: `Photo caption ${i + 1} — to be added`,
    alt: `Gallery image ${i + 1} placeholder`,
  })),
};

// ─── Conclusion ──────────────────────────────────────────────────────────────

export const CONCLUSION = {
  eyebrow: 'Conclusion',
  title: 'Conclusion',
  body: [
    'The relationship between food and forced migration is one of profound complexity, extending far beyond the biological imperative to eat. Across the research presented in this project, food emerges as a multi-dimensional force: a survival tool constrained by structural inequalities, a vessel of cultural memory and identity, a site of political negotiation, and a medium of resilience and reinvention.',
    'For displaced communities around the world — from post-WWII European camps to contemporary Syrian and Afghan diasporas — food has served as one of the most tangible threads connecting individuals to their heritage, even when everything else: home, community, legal status, and safety has been stripped away. The act of cooking a familiar dish in an unfamiliar country is simultaneously an act of memory and an act of defiance.',
    'Yet this project also reveals that food in displacement is never politically neutral. Who gets to eat what, and under what conditions, reflects the power asymmetries of humanitarian aid systems and host-country political climates. Women bear disproportionate burdens in food preparation while having limited access to resources. Informal food economies provide dignity and agency, yet remain precarious and frequently criminalized. And even when refugee cuisines are celebrated in host societies, the political rights of the people who carry them are too often ignored — a contradiction that scholars have called "culinary colonialism."',
    'What this research ultimately demonstrates is that culturally meaningful food is not a luxury — it is essential to human dignity, psychological wellbeing, and community cohesion. Recognizing this means moving beyond caloric metrics in humanitarian response, toward policies that respect the food sovereignty of displaced communities.',
    'As students of ILC 2550: Food, Language and Culture at Webster University, this project has deepened our understanding of how profoundly food shapes — and is shaped by — the social world. The stories embedded in every recipe, every improvised substitution, and every community kitchen are stories of survival, and of the enduring human will to belong.',
  ],
  closingQuote: 'Food endures. So do the people who carry it.',
};

// ─── Blog ─────────────────────────────────────────────────────────────────────

export const BLOG = {
  eyebrow: 'Blog',
  title: 'Reflections & Updates',
  posts: [
    {
      id: 1,
      date: 'April 2025',
      tag: 'Field Reflection',
      title: 'Our Group Food Outing: A First Taste of Research',
      body: [
        'As a group, we decided early in the semester that the best way to understand our research topic was to experience it firsthand. We organized a group outing to a local restaurant serving cuisine from a displaced community, approaching the meal not just as food but as a text to be read.',
        'Sitting around the table together, we began to notice things we might have overlooked in isolation: the way the owner described each dish with quiet pride, the familiar spice combinations that clearly traveled far to reach this table, the subtle modifications made to suit local palates. Every detail connected back to the themes we had been researching.',
        'The outing reminded us that food is never just fuel. It is conversation, memory, and hospitality all at once. For many displaced communities, the restaurant or the home kitchen is the first and most intimate point of contact with a new society. That contact can be a bridge or a wall, depending on how it is received.',
      ],
      author: 'The ILC 2550 Team',
    },
    {
      id: 2,
      date: 'March 2025',
      tag: 'Course Reflection',
      title: 'What We Learned About Food, Power, and Displacement',
      body: [
        'One of the most surprising things this course taught us is how deeply political a meal can be. Before ILC 2550, most of us thought about food primarily in terms of taste, nutrition, or cultural tradition. We did not fully appreciate the extent to which access to food — and specifically culturally appropriate food — is shaped by legal status, host-country policy, gender, and class.',
        'Reading about the World Food Programme\'s shift from food boxes to Cash-Based Transfers, or about the ways refugee-run food stalls are demolished in certain cities, made the politics of eating concrete and urgent. These are not abstract policy debates — they affect daily life, dignity, and mental health for millions of people.',
        'What stayed with us most, however, was the resilience. Despite extraordinary constraints, the communities we studied found ways to cook, share, adapt, and preserve. That creativity — substituting ingredients, inventing hybrid dishes, passing recipes down orally across generations — is itself a form of resistance. It is the refusal to let displacement be the end of the story.',
      ],
      author: 'The ILC 2550 Team',
    },
  ],
};

// ─── References ───────────────────────────────────────────────────────────────

export const REFERENCES = {
  eyebrow: 'References',
  title: 'APA Citations',
  intro: 'All sources cited in this project are listed below in APA 7th edition format.',
  citations: [
    {
      id: 1,
      citation: 'Carney, M. A. (2015). The unending hunger: Tracing women and food insecurity across borders. University of California Press.',
    },
    {
      id: 2,
      citation: 'Harbottle, L. (2000). Food for health, food for wealth: Ethnic and gender identities in British Iranian communities. Berghahn Books.',
    },
    {
      id: 3,
      citation: 'Koc, M., & Welsh, J. (2001). Food, foodways and immigrant experience. Ryerson University Centre for Studies in Food Security.',
    },
    {
      id: 4,
      citation: 'Mannur, A. (2010). Culinary fictions: Food in South Asian diasporic culture. Temple University Press.',
    },
    {
      id: 5,
      citation: 'Mintz, S. W., & Du Bois, C. M. (2002). The anthropology of food and eating. Annual Review of Anthropology, 31(1), 99–119. https://doi.org/10.1146/annurev.anthro.32.032702.131011',
    },
    {
      id: 6,
      citation: 'Parasecoli, F. (2011). Savoring semiotics: Food in intercultural communication. Social Semiotics, 21(5), 645–663. https://doi.org/10.1080/10350330.2011.578803',
    },
    {
      id: 7,
      citation: 'UNHCR. (2023). Global trends: Forced displacement in 2022. United Nations High Commissioner for Refugees.',
    },
    {
      id: 8,
      citation: 'Wilk, R. (2006). Home cooking in the global village: Caribbean food from buccaneers to ecotourists. Berg Publishers.',
    },
    {
      id: 9,
      citation: 'World Food Programme. (2022). WFP cash-based transfers: Annual review 2022. World Food Programme.',
    },
    {
      id: 10,
      citation: 'Zetter, R. (1991). Labelling refugees: Forming and transforming a bureaucratic identity. Journal of Refugee Studies, 4(1), 39–62. https://doi.org/10.1093/jrs/4.1.39',
    },
  ],
};
