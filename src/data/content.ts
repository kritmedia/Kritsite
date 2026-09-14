import {
  PricingPlan, SiteTemplate, WorkflowStep, FAQItem,
  TestimonialItem, ServicePillar, ComparisonPoint, DesignPrinciple,
} from '../types';

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'template-launch',
    name: 'Template Launch',
    inrPrice: '₹14,999',
    usdPrice: '$179',
    period: 'one-time',
    description: 'Pick a world-class pre-designed template. We apply your brand — logo, colors, copy — and have you live in 1–2 business days.',
    turnaround: '1–2 Business Days',
    idealFor: 'Startups, freelancers, local businesses',
    features: [
      'Choose from 6 premium pre-designed templates',
      'Brand color & logo application',
      'Your copy inserted & formatted',
      'Mobile-first responsive layout',
      'Basic on-page SEO setup',
      '1 round of revision included',
      'Domain + hosting guidance',
    ],
  },
  {
    id: 'custom-build',
    name: 'Custom Build',
    badge: 'MOST POPULAR',
    inrPrice: '₹49,999',
    usdPrice: '$599',
    period: 'one-time',
    description: 'A fully bespoke website designed from scratch around your brand, your audience, and your conversion goals. Includes full SEO, AEO & GEO strategy.',
    turnaround: '2–3 Weeks',
    idealFor: 'Growing businesses, SaaS, agencies, D2C brands',
    features: [
      'Fully custom design — no templates used',
      'Up to 8 pages (Home, Services, About, Contact + more)',
      'SEO + AEO + GEO optimized copy & structure',
      'Schema.org markup + Core Web Vitals 95+ target',
      'Scroll animations & micro-interactions',
      'Contact forms + CTA integration',
      '3 rounds of revisions',
      'Figma design file handover',
      '30-day post-launch support',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    inrPrice: '₹1,49,999',
    usdPrice: '$1,799',
    period: 'starting from',
    description: 'Complex multi-page platforms, landing page systems, micro-animations, and advanced integrations. Scoped per project.',
    turnaround: '4–8 Weeks',
    idealFor: 'Enterprises, funded startups, luxury brands',
    features: [
      'Unlimited pages & complex architecture',
      'Advanced scroll-driven & GSAP animations',
      'CMS integration (Sanity, Contentful, Notion)',
      'Multi-language / international SEO + hreflang',
      'E-commerce + payment gateway integration',
      'Custom illustration & design system',
      'Performance audit & Lighthouse 98+ guarantee',
      'Dedicated project manager',
      '90-day post-launch support & maintenance',
    ],
    highlight: 'Custom Scoped',
  },
];

export const SITE_TEMPLATES: SiteTemplate[] = [
  {
    id: 'obsidian',
    name: 'Obsidian',
    tagline: 'Dark SaaS & Dev Tools',
    industry: 'SaaS / Tech',
    category: 'SaaS / Tech',
    pages: 6,
    accentColor: '#ff5500',
    mockupBg: 'from-[#0a0a0a] to-[#111]',
    previewImg: '/images/previews/obsidian_preview.jpg',
    features: ['Hero + Feature Grid', 'Pricing Table', 'FAQ', 'Blog Ready', 'Auth CTAs'],
  },
  {
    id: 'studio',
    name: 'Studio',
    tagline: 'Creative Agency & Portfolio',
    industry: 'Agency / Portfolio',
    category: 'Agency / Portfolio',
    pages: 5,
    accentColor: '#e8e8e8',
    mockupBg: 'from-[#0d0d0d] to-[#1a1a1a]',
    previewImg: '/images/previews/studio_preview.jpg',
    features: ['Portfolio Grid', 'Case Studies', 'Team Section', 'Services', 'Client Logos'],
  },
  {
    id: 'luxe',
    name: 'Luxe',
    tagline: 'E-Commerce & Luxury Brand',
    industry: 'E-Commerce',
    category: 'E-Commerce',
    pages: 7,
    accentColor: '#c9a84c',
    mockupBg: 'from-[#080808] to-[#141414]',
    previewImg: '/images/previews/luxe_preview.jpg',
    features: ['Product Showcase', 'Collection Grid', 'Brand Story', 'Testimonials', 'Shop CTA'],
  },
  {
    id: 'persona',
    name: 'Persona',
    tagline: 'Personal Brand & Coaches',
    industry: 'Personal Brand',
    category: 'Personal Brand',
    pages: 5,
    accentColor: '#a855f7',
    mockupBg: 'from-[#0c0c14] to-[#12121e]',
    previewImg: '/images/previews/zenith_preview.jpg',
    features: ['Bio Hero', 'Speaking / Services', 'Media Kit', 'Testimonials', 'Newsletter'],
  },
  {
    id: 'bloom',
    name: 'Bloom',
    tagline: 'Restaurants & Local Business',
    industry: 'Local Business',
    category: 'Local Business',
    pages: 4,
    accentColor: '#22c55e',
    mockupBg: 'from-[#050d05] to-[#0d150d]',
    previewImg: '/images/previews/astral_preview.jpg',
    features: ['Menu / Services', 'Location & Hours', 'Gallery', 'Reservations / Contact'],
  },
  {
    id: 'venture',
    name: 'Venture',
    tagline: 'Startup & Business Landing',
    industry: 'Startup',
    category: 'Startup',
    pages: 5,
    accentColor: '#3b82f6',
    mockupBg: 'from-[#050812] to-[#0b1020]',
    previewImg: '/images/previews/kinetic_preview.jpg',
    features: ['Product Hero', 'How It Works', 'Metrics / Proof', 'Pricing', 'Investor CTA'],
  },
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    step: '01',
    title: 'Discovery & Strategy',
    duration: 'Day 1',
    description: 'We start with a detailed intake session — understanding your business, target audience, competitors, and goals. This shapes every design and copy decision that follows.',
    deliverables: ['Brand questionnaire review', 'Competitor analysis', 'Sitemap & content plan', 'Project timeline locked'],
  },
  {
    step: '02',
    title: 'Design & Mockup',
    duration: 'Day 2–7',
    description: 'We design your website in Figma — every page, every section. You review, comment, and approve before a single line of code is written.',
    deliverables: ['Full Figma mockup (desktop + mobile)', 'Typography & color system', 'Component library', 'Design approval sign-off'],
  },
  {
    step: '03',
    title: 'Development + Content + SEO',
    duration: 'Day 7–18',
    description: 'We build your website with clean, semantic HTML — optimized for speed, accessibility, and search. Copy is crafted for SEO, AEO, and GEO simultaneously.',
    deliverables: ['Production-ready code', 'SEO meta & schema setup', 'AEO-ready FAQ & content', 'Core Web Vitals QA'],
  },
  {
    step: '04',
    title: 'Launch & Handover',
    duration: 'Day 18–21',
    description: 'We deploy to your domain, configure DNS, submit to Google Search Console, and hand over everything — Figma files, codebase, and a launch checklist.',
    deliverables: ['Live domain deployment', 'Google Search Console setup', 'Full asset & code handover', '30-day support window'],
  },
];

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    id: 'design',
    tag: 'Pillar 01 // Craft',
    title: 'Design-First Philosophy',
    subtitle: 'We treat every website like an architectural project. Before a pixel is placed, we define grid systems, typographic scale, motion language, and component anatomy.',
    metric: '100%',
    metricLabel: 'Custom Grid & Type System',
    features: [
      'Defined 8-point spacing grid system',
      'Typographic hierarchy (H1–H6 + body + mono)',
      'Color system with semantic tokens',
      'Motion design language & transitions',
      'WCAG 2.1 AA accessibility compliance',
      'Cross-browser & device QA tested',
    ],
    specs: [
      { label: 'Grid System', value: '8pt spacing baseline' },
      { label: 'Accessibility', value: 'WCAG 2.1 AA' },
      { label: 'Devices Tested', value: 'Mobile, Tablet, Desktop' },
      { label: 'Design Tool', value: 'Figma + Dev Mode' },
    ],
  },
  {
    id: 'seo',
    tag: 'Pillar 02 // Discoverability',
    title: 'SEO + AEO + GEO Optimized',
    subtitle: 'We optimize for three layers of search: traditional Google SEO, AI-powered Answer Engines like Perplexity & ChatGPT, and geographically targeted discovery.',
    metric: '95+',
    metricLabel: 'Target Lighthouse Score',
    features: [
      'Semantic HTML5 with structured data (Schema.org)',
      'On-page SEO: meta, OG tags, canonical, sitemap.xml',
      'AEO: FAQ schema, HowTo schema, Article schema',
      'GEO: LocalBusiness schema, geo-targeted content',
      'Core Web Vitals: LCP, INP, CLS optimized',
      'Google Search Console & Analytics setup',
    ],
    specs: [
      { label: 'Lighthouse Target', value: '95+ Performance' },
      { label: 'Schema Types', value: 'FAQ, Local, Article' },
      { label: 'Search Coverage', value: 'Google + AI Engines' },
      { label: 'Sitemap', value: 'Auto-generated XML' },
    ],
  },
  {
    id: 'templates',
    tag: 'Pillar 03 // Speed',
    title: 'Fast-Launch Templates',
    subtitle: 'Our pre-designed templates are built to world-class standards — not Wix themes. Each is a handcrafted design system, fully responsive and SEO-ready out of the box.',
    metric: '1–2',
    metricLabel: 'Day Launch Guarantee',
    features: [
      '6 premium template designs across key industries',
      'Brand application: your logo, colors, and copy',
      'Mobile-first, fully responsive layouts',
      'Basic on-page SEO configured on launch',
      '1 round of revision included',
      'Domain connection & hosting guidance',
    ],
    specs: [
      { label: 'Templates Available', value: '6 premium designs' },
      { label: 'Turnaround', value: '1–2 business days' },
      { label: 'Revision Rounds', value: '1 included' },
      { label: 'SEO Setup', value: 'Basic meta + OG' },
    ],
  },
  {
    id: 'custom',
    tag: 'Pillar 04 // Bespoke',
    title: 'Full Custom Builds',
    subtitle: 'For businesses that refuse to look like everyone else. We design and build from a blank canvas — every section, every interaction, every word crafted for your specific goals.',
    metric: '0%',
    metricLabel: 'Template DNA — Pure Custom',
    features: [
      'Blank-canvas design — no templates, no shortcuts',
      'Full content strategy: copy, structure & information architecture',
      'Scroll animations, parallax, micro-interactions',
      'CMS integration (Sanity, Notion, Contentful)',
      'Contact forms, booking systems, email integration',
      'Figma design system + code handover',
    ],
    specs: [
      { label: 'Pages', value: 'Up to 8 (Custom: unlimited)' },
      { label: 'Animations', value: 'Scroll + micro-interactions' },
      { label: 'CMS', value: 'Sanity / Notion / Contentful' },
      { label: 'Revisions', value: '3 rounds included' },
    ],
  },
];

export const COMPARISON_POINTS: ComparisonPoint[] = [
  {
    category: 'Design Quality',
    generic: 'Mass-produced template. Looks like 1000 other sites.',
    kritsite: 'Intentional design system. Unique to your brand.',
  },
  {
    category: 'SEO Readiness',
    generic: 'Basic meta tags at best. Often duplicate content issues.',
    kritsite: 'Full semantic HTML, schema markup, sitemap, Search Console setup.',
  },
  {
    category: 'AI Discoverability',
    generic: 'Not structured for AI search engines. Invisible to Perplexity, ChatGPT.',
    kritsite: 'AEO + GEO structured — shows up in AI-powered answer results.',
  },
  {
    category: 'Mobile Experience',
    generic: 'Responsive but not mobile-first. Clunky on smaller screens.',
    kritsite: 'Designed mobile-first. Every interaction tested on real devices.',
  },
  {
    category: 'Copy & Messaging',
    generic: 'Generic placeholder copy or DIY content with no strategy.',
    kritsite: 'Professionally written, conversion-focused, keyword-researched.',
  },
  {
    category: 'Page Speed',
    generic: 'Bloated plugin stack. Lighthouse scores often below 60.',
    kritsite: 'Clean code, optimized assets. Lighthouse 95+ target every build.',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    quote: "We spent 6 months on a Wix site that looked like everyone else's. KritSite rebuilt us in 2 weeks and we started getting inbound leads within days of launch. The difference was night and day.",
    author: 'Ananya Mehta',
    role: 'Founder',
    company: 'CloudStack (B2B SaaS)',
    stat: '3.2x Inbound Leads',
  },
  {
    quote: "The SEO setup alone was worth it. We went from page 4 to page 1 for our main keyword in under 3 months. And the site actually looks like a brand, not a template.",
    author: 'Rohan Desai',
    role: 'Head of Growth',
    company: 'Thrive Digital Agency',
    stat: 'Page 1 in 90 Days',
  },
  {
    quote: "I needed my coaching site live in 48 hours before a speaking event. KritSite launched the Template plan same-day. It looked better than sites I've seen agencies charge ₹3 lakhs for.",
    author: 'Priya Nair',
    role: 'Executive Coach & Speaker',
    company: 'Priya Nair Consulting',
    stat: 'Live in 24 Hours',
  },
];

export const HOME_FAQS: FAQItem[] = [
  {
    category: 'General',
    question: 'What makes KritSite different from other web design agencies?',
    answer: 'Most agencies either use page builders (Wix, Squarespace) or copy the same layout for every client. KritSite treats every project as a design problem — with a proper design system, content strategy, and SEO architecture built from day one. We also optimize for AEO and GEO, which most agencies don\'t even know exist yet.',
  },
  {
    category: 'Pricing',
    question: 'Why is your pricing lower than other agencies?',
    answer: 'We\'re a lean studio under KritMedia — no bloated overheads. We\'ve also productized our process, which lets us deliver faster and more affordably without compromising craft. Our goal is to be the obvious choice for design-serious businesses who don\'t want to overpay.',
  },
  {
    category: 'Templates',
    question: 'Are your templates really different from Wix or Squarespace themes?',
    answer: 'Completely. Our templates are hand-designed, hand-coded layouts — not drag-and-drop builder outputs. They\'re built on clean semantic HTML with real SEO architecture, and they\'re unique enough that you won\'t see hundreds of identical sites out in the wild.',
  },
  {
    category: 'Timeline',
    question: 'How fast can you actually launch a website?',
    answer: 'Template launches: 1–2 business days (from content receipt to live site). Custom builds: 2–3 weeks. Enterprise projects: 4–8 weeks depending on scope. We commit to timelines in writing at project kickoff.',
  },
  {
    category: 'SEO',
    question: 'What is AEO and GEO and why does it matter?',
    answer: 'AEO (Answer Engine Optimization) structures your content to appear in AI-generated answer summaries from Perplexity, ChatGPT, Gemini, and Google\'s AI Overviews. GEO (Generative Engine Optimization) goes further — optimizing to be cited as a source by AI. With AI search growing rapidly, this is the next SEO frontier, and we bake it in from day one.',
  },
];

export const SERVICES_FAQS: FAQItem[] = [
  {
    category: 'Process',
    question: 'Do I need to provide the copy (written content) myself?',
    answer: 'For Template Launch plans, yes — we need your text, images, and logo. For Custom Build and Enterprise, our team handles content strategy and writes the copy for you as part of the project scope.',
  },
  {
    category: 'Process',
    question: 'What do you need from me to get started?',
    answer: 'A completed intake form (we send you one on signup), your brand assets (logo, brand colors if any), your top 3 competitor URLs, and a clear sense of your target customer. We handle the rest.',
  },
  {
    category: 'Revisions',
    question: 'How do revisions work?',
    answer: 'We share design mockups via Figma before development begins. You review and comment directly on the file. Template plans include 1 revision round; Custom includes 3; Enterprise is unlimited within scope.',
  },
  {
    category: 'Tech',
    question: 'What tech stack do you build on?',
    answer: 'We build on React / Next.js for performance-critical sites, or clean HTML/CSS/JS for simpler projects. CMS options include Sanity, Contentful, and Notion. All code is handoff-ready and version-controlled on GitHub.',
  },
  {
    category: 'Hosting',
    question: 'Do you handle hosting and domain setup?',
    answer: 'We guide you through domain purchase and DNS configuration. For hosting, we recommend and deploy to Vercel (for React/Next.js) or Netlify — both are free or very low cost for most sites. We handle the full deployment.',
  },
  {
    category: 'After Launch',
    question: 'What happens after the site goes live?',
    answer: 'Template plans include 7 days of post-launch support for any issues. Custom plans include 30 days. Enterprise includes 90 days. Ongoing maintenance retainers are available from ₹3,999/month.',
  },
];

export const TEMPLATES_FAQS: FAQItem[] = [
  {
    category: 'Templates',
    question: 'Can I see a live preview of the templates before choosing?',
    answer: 'Yes — we can share live preview links on request. Contact us and mention which template(s) you\'re interested in and we\'ll send them over within a few hours.',
  },
  {
    category: 'Templates',
    question: 'Can I switch templates after the project starts?',
    answer: 'Yes, but only before we\'ve started applying your brand. Once the customization work has begun, switching templates requires a fresh start and may incur an additional charge.',
  },
  {
    category: 'Templates',
    question: 'Will my template-based site look too similar to other KritSite clients?',
    answer: 'Unlikely. Once we apply your brand colors, logo, typography, images, and copy — the site feels entirely yours. The layout structure is shared, but the brand expression is unique. Like how two restaurants can have the same floor plan but feel completely different inside.',
  },
  {
    category: 'Templates',
    question: 'What if I want to upgrade from a template to a custom build later?',
    answer: 'Absolutely possible. The ₹14,999 template price is credited toward your Custom Build price if you upgrade within 6 months. Just reach out to us.',
  },
];

export const DESIGN_PRINCIPLES: DesignPrinciple[] = [
  {
    number: '#01',
    title: 'Design Intentionality',
    description: 'Every pixel earns its place. We design with grid systems, typographic scales, and motion language — not by eye-balling things until they look "okay".',
    tags: ['Grid Systems', 'Type Hierarchy', 'Design Tokens'],
  },
  {
    number: '#02',
    title: 'Performance First',
    description: 'Beautiful and blazing fast. Every KritSite project targets a Lighthouse score of 95+. Speed is design. A slow website destroys trust faster than bad visuals.',
    tags: ['Lighthouse 95+', 'Core Web Vitals', 'Clean Code'],
  },
  {
    number: '#03',
    title: 'Content-Led SEO',
    description: 'Copy that ranks, reads like a human wrote it (because we did), and answers questions before they\'re asked. SEO isn\'t an afterthought — it shapes structure from day one.',
    tags: ['Keyword Strategy', 'Schema Markup', 'AEO Ready'],
  },
  {
    number: '#04',
    title: 'Future-Proof Architecture',
    description: 'Built for how search — and discovery — actually works in 2026: AI-powered answer engines, voice search, and geographically personalized results.',
    tags: ['AEO + GEO', 'Semantic HTML', 'AI Search Ready'],
  },
];

export const TRUSTED_BRANDS = [
  'CloudStack', 'Thrive Digital', 'Nuvora Labs', 'Apex Ventures',
  'Priya Nair Consulting', 'Bloom Foods', 'Vertex Studio', 'Arora & Co.',
  'Nexus SaaS', 'Clarity Media', 'Summit Brands', 'Orbit Agency',
];
