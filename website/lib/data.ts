export interface Product {
  id: string;
  name: string;
  slug: string;
  category: 'apparel' | 'books' | 'mugs' | 'home-decor' | 'digital';
  price: number;
  originalPrice?: number;
  description: string;
  shortDescription: string;
  images: string[];
  rating: number;
  reviewCount: number;
  tags: string[];
  sizes?: string[];
  colors?: string[];
  fileFormat?: string;
  featured?: boolean;
  trending?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  quote: string;
  avatar: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  productCount: number;
}

export const categories: Category[] = [
  { name: 'Apparel', slug: 'apparel', description: 'Premium custom-designed clothing and wearables crafted to express your unique style.', productCount: 24 },
  { name: 'Books', slug: 'books', description: 'Thoughtfully designed books spanning creativity, productivity, and inspiration.', productCount: 18 },
  { name: 'Mugs', slug: 'mugs', description: 'Start every morning right with beautifully designed mugs that spark joy.', productCount: 15 },
  { name: 'Home Decor', slug: 'home-decor', description: 'Transform your space with curated wall art, prints, and decor for every room.', productCount: 20 },
  { name: 'Digital Planners', slug: 'digital-planners', description: 'Stay organized with our professionally designed digital planners and templates.', productCount: 12 },
  { name: 'Digital Trackers', slug: 'digital-trackers', description: 'Track your goals, habits, and progress with beautifully crafted digital trackers.', productCount: 10 },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Minimalist Wave Tee',
    slug: 'minimalist-wave-tee',
    category: 'apparel',
    price: 34.99,
    description: 'A premium cotton t-shirt featuring our signature minimalist wave design. Made from 100% organic cotton with a relaxed fit. The design represents the constant motion of creativity and innovation.',
    shortDescription: 'Premium organic cotton tee with minimalist wave design.',
    images: ['/images/products/tee-1.jpg'],
    rating: 4.8,
    reviewCount: 124,
    tags: ['bestseller', 'organic'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Black', 'Navy'],
    featured: true,
    trending: true,
  },
  {
    id: '2',
    name: 'Tomorrow Hoodie',
    slug: 'tomorrow-hoodie',
    category: 'apparel',
    price: 59.99,
    description: 'Our flagship hoodie featuring the "for those who live in tomorrow" tagline in a sleek typographic design. Heavyweight fleece, brushed interior, kangaroo pocket.',
    shortDescription: 'Heavyweight fleece hoodie with Dynazur tagline design.',
    images: ['/images/products/hoodie-1.jpg'],
    rating: 4.9,
    reviewCount: 89,
    tags: ['premium', 'bestseller'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Electric Blue', 'Gray'],
    featured: true,
    trending: true,
  },
  {
    id: '3',
    name: 'Geometric Dreams Cap',
    slug: 'geometric-dreams-cap',
    category: 'apparel',
    price: 24.99,
    description: 'Structured snapback cap with embroidered geometric Dynazur pattern. Adjustable strap, breathable mesh back panel.',
    shortDescription: 'Snapback cap with embroidered geometric design.',
    images: ['/images/products/cap-1.jpg'],
    rating: 4.6,
    reviewCount: 56,
    tags: ['new'],
    sizes: ['One Size'],
    colors: ['Black', 'White'],
  },
  {
    id: '4',
    name: 'The Creative Mind',
    slug: 'the-creative-mind',
    category: 'books',
    price: 19.99,
    description: 'A beautifully illustrated guide to unlocking creativity in everyday life. Features exercises, prompts, and insights from leading creatives. Hardcover, 240 pages.',
    shortDescription: 'Illustrated guide to unlocking everyday creativity.',
    images: ['/images/products/book-1.jpg'],
    rating: 4.7,
    reviewCount: 203,
    tags: ['bestseller'],
    featured: true,
    trending: true,
  },
  {
    id: '5',
    name: 'Design Thinking Journal',
    slug: 'design-thinking-journal',
    category: 'books',
    price: 24.99,
    description: 'A structured journal based on design thinking principles. Dot-grid pages, guided prompts, and reflection spaces. Perfect for designers, entrepreneurs, and creative thinkers.',
    shortDescription: 'Structured journal based on design thinking principles.',
    images: ['/images/products/book-2.jpg'],
    rating: 4.8,
    reviewCount: 145,
    tags: ['premium'],
  },
  {
    id: '6',
    name: 'Tomorrow\'s Blueprint',
    slug: 'tomorrows-blueprint',
    category: 'books',
    price: 29.99,
    description: 'A forward-looking guide to building the future you want. Combines philosophy, strategy, and practical frameworks for personal and professional growth.',
    shortDescription: 'Guide to building the future through strategy and vision.',
    images: ['/images/products/book-3.jpg'],
    rating: 4.9,
    reviewCount: 178,
    tags: ['new', 'premium'],
    featured: true,
  },
  {
    id: '7',
    name: 'Blueprint Ceramic Mug',
    slug: 'blueprint-ceramic-mug',
    category: 'mugs',
    price: 16.99,
    description: 'Premium ceramic mug featuring our blueprint-style technical drawing pattern. 11oz capacity, microwave and dishwasher safe. The perfect companion for your morning ritual.',
    shortDescription: '11oz ceramic mug with blueprint technical drawing design.',
    images: ['/images/products/mug-1.jpg'],
    rating: 4.7,
    reviewCount: 312,
    tags: ['bestseller'],
    colors: ['White', 'Black'],
    trending: true,
  },
  {
    id: '8',
    name: 'Dynazur Logo Mug',
    slug: 'dynazur-logo-mug',
    category: 'mugs',
    price: 14.99,
    description: 'Classic mug featuring the Dynazur d. monogram in Electric Blue. Clean, minimal design. 15oz capacity, premium grade ceramic.',
    shortDescription: 'Classic 15oz mug with Dynazur monogram logo.',
    images: ['/images/products/mug-2.jpg'],
    rating: 4.6,
    reviewCount: 198,
    tags: ['classic'],
    colors: ['White'],
    featured: true,
  },
  {
    id: '9',
    name: 'Abstract Waves Poster',
    slug: 'abstract-waves-poster',
    category: 'home-decor',
    price: 29.99,
    description: 'Large-format art print featuring abstract wave patterns in the Dynazur color palette. Printed on 250gsm fine art paper. Available in multiple sizes.',
    shortDescription: 'Abstract wave pattern art print on fine art paper.',
    images: ['/images/products/poster-1.jpg'],
    rating: 4.8,
    reviewCount: 87,
    tags: ['premium'],
    sizes: ['A3', 'A2', 'A1'],
    trending: true,
  },
  {
    id: '10',
    name: 'Typographic Manifesto',
    slug: 'typographic-manifesto',
    category: 'home-decor',
    price: 24.99,
    description: 'Bold typographic print featuring the Dynazur manifesto. A statement piece for any creative workspace. Museum-quality print on archival paper.',
    shortDescription: 'Bold typographic print with Dynazur manifesto.',
    images: ['/images/products/poster-2.jpg'],
    rating: 4.5,
    reviewCount: 63,
    tags: ['new'],
    sizes: ['A3', 'A2'],
    featured: true,
  },
  {
    id: '11',
    name: '2026 Digital Planner',
    slug: '2026-digital-planner',
    category: 'digital',
    price: 12.99,
    description: 'Comprehensive digital planner for 2026 with daily, weekly, and monthly views. Hyperlinked tabs, note pages, goal trackers, and habit logs. Compatible with GoodNotes, Notability, and similar apps.',
    shortDescription: '2026 digital planner with daily, weekly & monthly views.',
    images: ['/images/products/planner-1.jpg'],
    rating: 4.9,
    reviewCount: 456,
    tags: ['bestseller'],
    fileFormat: 'PDF',
    featured: true,
    trending: true,
  },
  {
    id: '12',
    name: 'Habit Tracker Bundle',
    slug: 'habit-tracker-bundle',
    category: 'digital',
    price: 9.99,
    description: 'A bundle of beautifully designed habit tracking templates. Track up to 30 habits with daily, weekly, and monthly views. Printable and digital versions included.',
    shortDescription: 'Digital habit tracking templates with printable versions.',
    images: ['/images/products/tracker-1.jpg'],
    rating: 4.7,
    reviewCount: 289,
    tags: ['popular'],
    fileFormat: 'PDF + Excel',
  },
  {
    id: '13',
    name: 'Budget Tracker Pro',
    slug: 'budget-tracker-pro',
    category: 'digital',
    price: 14.99,
    description: 'Professional budget tracking spreadsheet with automated calculations, visual charts, and customizable categories. Works with Google Sheets and Excel.',
    shortDescription: 'Professional budget tracker with automated calculations.',
    images: ['/images/products/tracker-2.jpg'],
    rating: 4.8,
    reviewCount: 167,
    tags: ['premium'],
    fileFormat: 'Excel + Google Sheets',
    featured: true,
  },
  {
    id: '14',
    name: 'Mindful Morning Tee',
    slug: 'mindful-morning-tee',
    category: 'apparel',
    price: 32.99,
    description: 'A soft blend tee with a serene sunrise illustration. Perfect for those quiet morning moments. Pre-shrunk, tag-free comfort.',
    shortDescription: 'Soft blend tee with serene sunrise illustration.',
    images: ['/images/products/tee-2.jpg'],
    rating: 4.5,
    reviewCount: 78,
    tags: ['new'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Light Blue'],
  },
  {
    id: '15',
    name: 'Creative Block Breaker',
    slug: 'creative-block-breaker',
    category: 'books',
    price: 17.99,
    description: '100 exercises and prompts to break through creative blocks. Pocket-sized for on-the-go inspiration.',
    shortDescription: '100 prompts to overcome creative blocks.',
    images: ['/images/products/book-4.jpg'],
    rating: 4.6,
    reviewCount: 134,
    tags: ['popular'],
  },
  {
    id: '16',
    name: 'Sunrise Gradient Mug',
    slug: 'sunrise-gradient-mug',
    category: 'mugs',
    price: 18.99,
    description: 'Stunning gradient mug transitioning from deep blue to golden yellow, inspired by the promise of a new tomorrow. 12oz, bone china.',
    shortDescription: 'Gradient mug with blue-to-gold sunrise design.',
    images: ['/images/products/mug-3.jpg'],
    rating: 4.9,
    reviewCount: 92,
    tags: ['new', 'premium'],
    colors: ['Gradient'],
  },
  {
    id: '17',
    name: 'Goal Setting Workbook',
    slug: 'goal-setting-workbook',
    category: 'digital',
    price: 11.99,
    description: 'A structured digital workbook to define, track, and achieve your goals. Includes quarterly reviews, vision board templates, and accountability checklists.',
    shortDescription: 'Digital workbook for goal setting and quarterly reviews.',
    images: ['/images/products/workbook-1.jpg'],
    rating: 4.8,
    reviewCount: 201,
    tags: ['new'],
    fileFormat: 'PDF',
  },
  {
    id: '18',
    name: 'Social Media Content Calendar',
    slug: 'social-media-content-calendar',
    category: 'digital',
    price: 8.99,
    description: 'Plan and schedule your social media content with this beautifully designed monthly calendar template. Includes content ideas, hashtag banks, and analytics trackers.',
    shortDescription: 'Monthly social media planning calendar template.',
    images: ['/images/products/calendar-1.jpg'],
    rating: 4.6,
    reviewCount: 143,
    tags: ['popular'],
    fileFormat: 'PDF + Google Sheets',
  },
  {
    id: '19',
    name: 'Meal Planner & Grocery List',
    slug: 'meal-planner-grocery-list',
    category: 'digital',
    price: 7.99,
    description: 'Weekly meal planner with auto-generated grocery lists. Track nutrition, plan meals for the family, and save time at the store.',
    shortDescription: 'Weekly meal planner with smart grocery list generator.',
    images: ['/images/products/meal-planner-1.jpg'],
    rating: 4.7,
    reviewCount: 178,
    tags: ['new'],
    fileFormat: 'PDF + Excel',
  },
  {
    id: '20',
    name: 'Fitness Progress Tracker',
    slug: 'fitness-progress-tracker',
    category: 'digital',
    price: 10.99,
    description: 'Track workouts, body measurements, and fitness milestones with this comprehensive tracker. Includes 12-week programs, exercise logs, and progress charts.',
    shortDescription: 'Comprehensive fitness and workout tracking templates.',
    images: ['/images/products/fitness-tracker-1.jpg'],
    rating: 4.9,
    reviewCount: 234,
    tags: ['bestseller'],
    fileFormat: 'PDF + Excel',
    featured: true,
  },
  {
    id: '21',
    name: 'Reading Journal',
    slug: 'reading-journal',
    category: 'digital',
    price: 6.99,
    description: 'Keep track of your reading list, write book reviews, and set reading goals. Features TBR list, monthly reading log, and favourite quotes section.',
    shortDescription: 'Digital reading journal with book tracker and reviews.',
    images: ['/images/products/reading-journal-1.jpg'],
    rating: 4.8,
    reviewCount: 156,
    tags: ['new'],
    fileFormat: 'PDF',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    location: 'New York, USA',
    rating: 5,
    quote: 'The quality of Dynazur products is exceptional. My hoodie is the softest, most comfortable piece of clothing I own. The design is stunning and I get compliments every time I wear it.',
    avatar: '/images/avatars/avatar-1.jpg',
  },
  {
    id: '2',
    name: 'James Park',
    location: 'London, UK',
    rating: 5,
    quote: 'I ordered the 2026 Digital Planner and it completely transformed my productivity. The design is beautiful and functional — exactly what I was looking for.',
    avatar: '/images/avatars/avatar-2.jpg',
  },
  {
    id: '3',
    name: 'Maria Santos',
    location: 'São Paulo, Brazil',
    rating: 5,
    quote: 'The poster prints are gallery-quality. The colors are vibrant and the paper stock feels premium. My living room has never looked better!',
    avatar: '/images/avatars/avatar-3.jpg',
  },
  {
    id: '4',
    name: 'Akira Tanaka',
    location: 'Tokyo, Japan',
    rating: 4,
    quote: 'Fast international shipping and the mug arrived perfectly packaged. Great attention to detail in both the product and the unboxing experience.',
    avatar: '/images/avatars/avatar-4.jpg',
  },
  {
    id: '5',
    name: 'Emma Williams',
    location: 'Melbourne, Australia',
    rating: 5,
    quote: 'Every book from Dynazur is a work of art. "The Creative Mind" sits on my desk and I reference it weekly. The illustrations alone are worth the price.',
    avatar: '/images/avatars/avatar-5.jpg',
  },
  {
    id: '6',
    name: 'Lucas Meyer',
    location: 'Berlin, Germany',
    rating: 5,
    quote: 'The Habit Tracker Bundle is incredibly well-designed. It\'s simple enough to use daily but comprehensive enough to actually drive change.',
    avatar: '/images/avatars/avatar-6.jpg',
  },
  {
    id: '7',
    name: 'Priya Sharma',
    location: 'Mumbai, India',
    rating: 5,
    quote: 'I love how Dynazur combines minimalist design with meaningful messages. Their apparel line is my go-to for gifts. Everyone I\'ve gifted to has loved it!',
    avatar: '/images/avatars/avatar-7.jpg',
  },
  {
    id: '8',
    name: 'David Chen',
    location: 'Toronto, Canada',
    rating: 4,
    quote: 'The Blueprint Ceramic Mug is my daily driver. The design hasn\'t faded after months of use and it still looks brand new. Truly built to last.',
    avatar: '/images/avatars/avatar-8.jpg',
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Bilal Ahmed',
    role: 'Founder & Creative Director',
    bio: 'Visionary behind Dynazur, blending design thinking with brand building to create products that inspire.',
  },
  {
    id: '2',
    name: 'Sara Khan',
    role: 'Head of Product Design',
    bio: 'Leads the design of every Dynazur product, from concept sketches to final production specs.',
  },
  {
    id: '3',
    name: 'Alex Rivera',
    role: 'Operations Manager',
    bio: 'Ensures every order is fulfilled on time with the quality our customers deserve.',
  },
  {
    id: '4',
    name: 'Zara Lee',
    role: 'Digital Products Lead',
    bio: 'Creates our digital planners, trackers, and templates with an obsessive eye for detail.',
  },
];

export const timelineMilestones: TimelineMilestone[] = [
  {
    year: '2023',
    title: 'The Spark',
    description: 'Dynazur was born from a simple idea — premium products that tell a story. Started with just 5 t-shirt designs.',
  },
  {
    year: '2024',
    title: 'Expanding Horizons',
    description: 'Launched books, mugs, and poster collections. Reached our first 1,000 customers across 6 countries.',
  },
  {
    year: '2025',
    title: 'Going Digital',
    description: 'Introduced our digital products line — planners, trackers, and journals that complement our physical products.',
  },
  {
    year: '2026',
    title: 'Living in Tomorrow',
    description: 'Growing to 12 countries, 5,000+ products sold, and building a community of creative thinkers around the world.',
  },
];

export const stats = [
  { label: 'Products Sold', value: 5000, suffix: '+' },
  { label: 'Unique Designs', value: 50, suffix: '+' },
  { label: 'Average Rating', value: 4.9, suffix: '★', decimals: 1 },
  { label: 'Countries Shipped', value: 12, suffix: '' },
];

export const partnerLogos = [
  'Shopify', 'Printful', 'Trustpilot', 'Stripe', 'Google', 'Meta',
];

export const companyValues = [
  { title: 'Quality First', description: 'Every product meets our rigorous quality standards before it reaches your hands.' },
  { title: 'Creativity', description: 'We believe in the power of original design to inspire and transform everyday moments.' },
  { title: 'Sustainability', description: 'Committed to eco-friendly materials and responsible production practices.' },
  { title: 'Customer Focus', description: 'Your satisfaction drives everything we do — from design to delivery.' },
];

export const faqItems = [
  { question: 'How long does shipping take?', answer: 'Standard shipping takes 5-7 business days domestically and 10-15 business days for international orders. Express shipping options are available at checkout.' },
  { question: 'What is your return policy?', answer: 'We offer a 30-day return policy on all physical products. Items must be unused and in original packaging. Digital products are non-refundable once downloaded.' },
  { question: 'Are your products eco-friendly?', answer: 'Yes! We use organic cotton for apparel, recycled paper for books, and sustainable packaging materials. Our print-on-demand model minimizes waste.' },
  { question: 'Can I customize a product?', answer: 'We\'re currently working on custom design options. In the meantime, browse our extensive collection or contact us for bulk/custom orders.' },
  { question: 'How do digital products work?', answer: 'After purchase, you\'ll receive a download link via email. Digital planners are compatible with apps like GoodNotes, Notability, and similar. Trackers work with Excel and Google Sheets.' },
  { question: 'Do you ship internationally?', answer: 'Absolutely! We currently ship to 12 countries worldwide, with more being added regularly. Check our shipping page for the full list.' },
];

export const brandLogos = [
  { name: 'Echo Design Co', color: '#FF6B6B' },
  { name: 'Vertex Studios', color: '#4ECDC4' },
  { name: 'Pulse Creative', color: '#45B7D1' },
  { name: 'Nova Brand Lab', color: '#96CEB4' },
  { name: 'Apex Digital', color: '#FFEAA7' },
  { name: 'Prism Agency', color: '#DDA0DD' },
  { name: 'Craft & Co', color: '#98D8C8' },
  { name: 'Bloom Studio', color: '#F7DC6F' },
];
