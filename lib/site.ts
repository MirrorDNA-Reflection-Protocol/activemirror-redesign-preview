type MediaItem = {
  kind: 'image' | 'video';
  src: string;
  alt: string;
  label: string;
  title: string;
  note: string;
  poster?: string;
};

export const homeCards = [
  {
    title: 'Chetana',
    eyebrow: 'Safety utility',
    copy: 'Before you pay, screenshot it.',
    description: 'Use a screenshot, message, or link to check suspicious activity in plain language.',
    href: '/chetana',
    cta: 'Check a screenshot',
    tone: 'safety',
    accent: 'linear-gradient(90deg, #1F6F4A 0%, #D78232 100%)',
    highlights: ['Screenshot-first scanner', 'Clear reasons', 'What to do next'],
    mediaSrc: '/media/chetana/hero-phone.png',
    mediaAlt: 'Phone preview for the Chetana scam checker'
  },
  {
    title: 'MirrorProd India',
    eyebrow: 'Creative output',
    copy: 'Ads and short videos people actually watch.',
    description: 'Go from product + goal to high-energy concepts, scripts, and edit-ready directions fast.',
    href: '/mirrorprod-india',
    cta: 'Make an ad or reel',
    tone: 'creative',
    accent: 'linear-gradient(90deg, #F0624D 0%, #6F3B5F 100%)',
    highlights: ['Product ads', 'Founder reels', 'Micro-drama pilots'],
    mediaSrc: '/media/mirrorprod/mainstream-shot.png',
    mediaAlt: 'Preview of the MirrorProd India landing page'
  },
  {
    title: 'Mirror Seed',
    eyebrow: 'Identity utility',
    copy: 'Stop repeating yourself to AI.',
    description: 'Create a reusable AI setup you can paste across tools and sessions.',
    href: '/mirrorseed',
    cta: 'Create my AI identity',
    tone: 'utility',
    accent: 'linear-gradient(90deg, #2F7A78 0%, #8AB7AD 100%)',
    highlights: ['Portable starter', 'Cleaner continuity', 'Fast setup'],
    mediaSrc: '/media/mirrorseed/hero.png',
    mediaAlt: 'Preview image for Mirror Seed'
  }
];

export const homeReasons = [
  {
    title: 'Need a quick scam check',
    copy: 'Land, upload, and get a clear read before you send money.'
  },
  {
    title: 'Need better creative fast',
    copy: 'See sample looks, pick a package, and send a short brief.'
  },
  {
    title: 'Need a cleaner AI setup',
    copy: 'Package your tone, context, and preferences once, then reuse them.'
  }
];

export const homeProof = [
  'Real screens and demos inside each page',
  'Fast to try on phone or laptop',
  'Each product has one clear next step'
];

export const chetanaExamples = [
  {
    id: 'fake-payment',
    mode: 'screenshot',
    prefill: 'Fake payment screenshot: "Paid 25,000 already. Please release the order right now."',
    title: 'Fake payment screenshot',
    detail: 'Someone says they already paid and wants goods released now.'
  },
  {
    id: 'kyc-warning',
    mode: 'message',
    prefill: 'URGENT: Your KYC is blocked. Verify in 5 minutes or your account will be frozen.',
    title: 'Suspicious KYC message',
    detail: 'A bank or wallet warning pushes you to click and verify urgently.'
  },
  {
    id: 'parcel-warning',
    mode: 'message',
    prefill: 'Parcel held at hub. Pay Rs 12 re-delivery fee now to avoid return.',
    title: 'Parcel or bank warning',
    detail: 'A delivery or refund message pressures you to pay a tiny fee first.'
  },
  {
    id: 'unknown-link',
    mode: 'link',
    prefill: 'https://whatsapp-status-secure-check.example/pay-now',
    title: 'Unknown WhatsApp link',
    detail: 'A forwarded link wants you to tap, install, or send money fast.'
  }
];

export const chetanaCategories = [
  'Payment proof scams',
  'KYC and bank message scams',
  'QR / UPI confusion',
  'Parcel and refund scams',
  'Authority intimidation scams'
];

export const chetanaFaqs = [
  {
    question: 'What can I upload?',
    answer: 'Screenshots, suspicious messages, links, and forwarded payment proof are the core inputs.'
  },
  {
    question: 'Does this work in India?',
    answer: 'Yes. The examples, language, and recovery guidance are built around India-first scam patterns.'
  },
  {
    question: 'Do I need to install anything?',
    answer: 'No. The page should feel immediate: upload, read the result, and act.'
  }
];

export const mirrorProdSamples = [
  {
    packageId: 'product-ad-sprint',
    title: 'Snack brand launch',
    tag: 'Product Ad',
    stat: 'Fast hook',
    note: 'Launch cut with punchy product focus and a single sharp offer.',
    art: 'linear-gradient(145deg, #ffd2c7 0%, #f0624d 42%, #6f3b5f 100%)'
  },
  {
    packageId: 'founder-reel-pack',
    title: 'Founder story reel',
    tag: 'Founder Reel',
    stat: 'Trust builder',
    note: 'Human-led reel that sells through clarity, rhythm, and trust.',
    art: 'linear-gradient(145deg, #f3d6d0 0%, #d57b6f 35%, #3b1f33 100%)'
  },
  {
    packageId: 'micro-drama-pilot',
    title: 'Skincare serial short',
    tag: 'Micro-Drama',
    stat: 'Stop-scroll story',
    note: 'Story-first cut designed to hold attention instead of looking like stock ads.',
    art: 'linear-gradient(145deg, #ffcfb9 0%, #f47f63 36%, #a24463 100%)'
  },
  {
    packageId: 'product-ad-sprint',
    title: 'Hindi offer cut',
    tag: 'Variant',
    stat: 'Regional fit',
    note: 'Localized variant with stronger voice and mobile-first pacing.',
    art: 'linear-gradient(145deg, #ecd9f6 0%, #a970b7 38%, #2f2030 100%)'
  }
];

export const mirrorProdOffers = [
  {
    id: 'product-ad-sprint',
    title: 'Product ad sprint',
    copy: 'Fast concepts for launches, offers, and paid campaigns.',
    detail: 'Best for product drops, promos, and mobile paid traffic.'
  },
  {
    id: 'founder-reel-pack',
    title: 'Founder reel pack',
    copy: 'Short founder-facing videos that explain, sell, and build trust.',
    detail: 'Best for trust building, explainers, and high-context offers.'
  },
  {
    id: 'micro-drama-pilot',
    title: 'Micro-drama pilot',
    copy: 'Story-first shorts built to stop the scroll and hold attention.',
    detail: 'Best for brands that need a fresher story than standard ad templates.'
  }
];

export const mirrorProdSteps = [
  'Send your product and goal',
  'We turn it into concepts and scripts',
  'You pick the direction',
  'We deliver the final pack'
];

export const mirrorProdFaqs = [
  {
    question: 'What do I need to send first?',
    answer: 'A product, audience, platform, language, and deadline is enough to start.'
  },
  {
    question: 'Can this handle Hindi and regional variants?',
    answer: 'Yes. The brief flow is built to capture Hindi and regional language needs early.'
  },
  {
    question: 'How do approvals work?',
    answer: 'Once the direction feels right, we turn it into a short brief and a simple delivery plan your team can approve fast.'
  }
];

export const mirrorSeedBenefits = [
  {
    title: 'Less repetition',
    copy: 'Save the context you keep typing over and over.'
  },
  {
    title: 'Cleaner continuity',
    copy: 'Carry the same tone and operating rules between tools.'
  },
  {
    title: 'Easier setup',
    copy: 'Start future sessions from a usable identity instead of a blank box.'
  }
];

export const chetanaMedia: MediaItem[] = [
  {
    kind: 'video',
    src: '/media/chetana/phone-demo.mp4',
    poster: '/media/chetana/phone-demo-poster.jpg',
    alt: 'Short phone demo of the Chetana flow',
    label: 'Phone demo',
    title: 'See the check flow on a phone',
    note: 'A short loop that shows the product as a quick, everyday safety check.'
  },
  {
    kind: 'image',
    src: '/media/chetana/scan-result.png',
    alt: 'Example Chetana result screen with a scam warning',
    label: 'Result screen',
    title: 'A clear result people can act on',
    note: 'The goal is simple: show the risk, explain why, and tell people what to do next.'
  },
  {
    kind: 'image',
    src: '/media/chetana/site-screenshot.png',
    alt: 'Screenshot of the Chetana site',
    label: 'Live screen',
    title: 'A simple page, not a wall of features',
    note: 'People should know what to do within seconds of landing.'
  }
];

export const mirrorProdMedia: MediaItem[] = [
  {
    kind: 'image',
    src: '/media/mirrorprod/mainstream-shot.png',
    alt: 'Screenshot of the MirrorProd India page',
    label: 'Landing page',
    title: 'Lead with what the buyer can buy',
    note: 'Real sample looks and clear packages help people decide faster.'
  },
  {
    kind: 'video',
    src: '/media/mirrorprod/founder-desk.mp4',
    poster: '/media/mirrorprod/founder-desk-poster.jpg',
    alt: 'Founder-style desk scene video',
    label: 'Founder reel',
    title: 'Human-led founder footage',
    note: 'Useful for explainers, trust-building, and high-context offers.'
  },
  {
    kind: 'video',
    src: '/media/mirrorprod/founder-beach.mp4',
    poster: '/media/mirrorprod/founder-beach-poster.jpg',
    alt: 'Founder-style beach scene video',
    label: 'Brand mood',
    title: 'Polished scenes for short-form launches',
    note: 'A quick way to show range before the buyer fills in a brief.'
  }
];

export const mirrorSeedMedia: MediaItem[] = [
  {
    kind: 'image',
    src: '/media/mirrorseed/hero.png',
    alt: 'Illustration for Mirror Seed',
    label: 'Hero image',
    title: 'Create one setup you can keep using',
    note: 'Mirror Seed helps you stop rewriting the same context every time you open a new AI.'
  },
  {
    kind: 'image',
    src: '/media/mirrorseed/how-it-works.png',
    alt: 'Three-step diagram for Mirror Seed',
    label: 'How it works',
    title: 'Create it once, use it everywhere',
    note: 'Make the seed, save it, and paste it into whichever AI you use next.'
  },
  {
    kind: 'image',
    src: '/media/mirrorseed/file.png',
    alt: 'Mirror Seed file icon graphic',
    label: 'Portable file',
    title: 'Your setup in one reusable file',
    note: 'Keep the starting point portable instead of re-explaining yourself every session.'
  }
];

export const mirrorSeedFaqs = [
  {
    question: 'Is this free?',
    answer: 'It should feel like a simple utility: quick to try, easy to keep, and easy to come back to.'
  },
  {
    question: 'Do I need an account?',
    answer: 'No. The page should let you understand the value before asking for anything extra.'
  },
  {
    question: 'Can I edit it later?',
    answer: 'Yes. The starter is a base layer, not a locked profile.'
  }
];
