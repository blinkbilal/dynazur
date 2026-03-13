'use client';

import { Gift } from 'lucide-react';
import HeroSection from '@/components/sections/HeroSection';
import SectionCard from '@/components/ui/SectionCard';
import AnimateOnScroll from '@/components/animations/AnimateOnScroll';
import HandDrawnCircle from '@/components/animations/HandDrawnCircle';
import HandDrawnUnderline from '@/components/animations/HandDrawnUnderline';
import CountUpNumber from '@/components/animations/CountUpNumber';
import { YellowButton, OutlinedButton } from '@/components/ui/Buttons';
import ProductCard from '@/components/ui/ProductCard';
import TestimonialCard from '@/components/ui/TestimonialCard';
import SwiperCarousel from '@/components/ui/SwiperCarousel';
import HeroIllustration from '@/components/illustrations/HeroIllustration';
import { ApparelIcon, BookIcon, MugIcon, PosterIcon, PlannerIcon, TrackerIcon } from '@/components/illustrations/SketchIcons';
import { products, testimonials, stats, categories, partnerLogos } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';

const categoryIcons: Record<string, React.ReactNode> = {
  'Apparel': <ApparelIcon />,
  'Books': <BookIcon />,
  'Mugs': <MugIcon />,
  'Home Decor': <PosterIcon />,
  'Digital Planners': <PlannerIcon />,
  'Digital Trackers': <TrackerIcon />,
};

const featureItems = [
  { title: 'Premium Quality', description: 'Every product is crafted with the finest materials and attention to detail.', icon: '✦' },
  { title: 'Fast Shipping', description: 'Quick processing and reliable delivery to 12+ countries worldwide.', icon: '✈' },
  { title: 'Custom Designs', description: 'Unique, original designs you won\'t find anywhere else.', icon: '✎' },
  { title: 'Eco-Friendly', description: 'Sustainable materials and responsible production practices.', icon: '♻' },
];

export default function HomeClient() {
  const trendingProducts = products.filter((p) => p.trending);

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Hero Section */}
      <HeroSection
        title={
          <>
            <HandDrawnCircle>Premium</HandDrawnCircle> Print on Demand — Designed for You
          </>
        }
        subtitle="Discover a world of thoughtfully designed products — from apparel and books to mugs, home decor, and digital planners. Every item tells a story, crafted for those who live in tomorrow."
        cta={
          <YellowButton href="/shop" icon={<Gift className="w-4 h-4" />}>
            Explore Products
          </YellowButton>
        }
        illustration={<HeroIllustration className="w-full max-w-lg mx-auto" />}
      />

      {/* Product Categories */}
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionCard>
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-4xl font-black text-dynazur-black text-center mb-3">
              Our <HandDrawnUnderline>Products</HandDrawnUnderline>
            </h2>
            <p className="text-dynazur-text text-center mb-12 max-w-xl mx-auto">
              Explore our curated collection of premium products, each designed with care and purpose.
            </p>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <AnimateOnScroll key={cat.slug} variant="scaleUp" delay={i * 0.08}>
                <Link
                  href={cat.slug.startsWith('digital') ? '/digital-products' : `/products/${cat.slug}`}
                  className="group block p-6 border border-dynazur-gray/30 rounded-card hover:border-dynazur-blue/20 hover:shadow-md transition-all duration-300"
                >
                  <div className="mb-3">
                    {categoryIcons[cat.name]}
                  </div>
                  <h3 className="font-bold text-dynazur-black text-lg mb-1 group-hover:text-dynazur-blue transition-colors">{cat.name}</h3>
                  <p className="text-dynazur-text text-sm line-clamp-2">{cat.description}</p>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </SectionCard>
      </div>

      {/* Trending Products */}
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionCard>
          <AnimateOnScroll>
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl md:text-4xl font-black text-dynazur-black">
                <HandDrawnCircle color="yellow">Trending</HandDrawnCircle> Now
              </h2>
              <OutlinedButton href="/shop">View All</OutlinedButton>
            </div>
          </AnimateOnScroll>
          <SwiperCarousel slidesPerView={3}>
            {trendingProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </SwiperCarousel>
        </SectionCard>
      </div>

      {/* Why Dynazur */}
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionCard>
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-4xl font-black text-dynazur-black text-center mb-12">
              Why <HandDrawnUnderline color="#071EFC">Choose</HandDrawnUnderline> Dynazur
            </h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featureItems.map((feature, i) => (
              <AnimateOnScroll key={feature.title} variant="scaleUp" delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-14 h-14 rounded-card bg-dynazur-bg flex items-center justify-center mx-auto mb-4 text-2xl">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-dynazur-black text-base mb-2">{feature.title}</h3>
                  <p className="text-dynazur-text text-sm">{feature.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </SectionCard>
      </div>

      {/* Stats / Social Proof */}
      <div className="max-w-[1280px] mx-auto px-6">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-dynazur-black">Trusted by Thousands</h2>
          </div>
        </AnimateOnScroll>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <AnimateOnScroll key={stat.label} variant="zoomIn" delay={i * 0.1}>
              <div className="bg-white rounded-section p-6 text-center">
                <div className="text-3xl md:text-4xl font-black text-dynazur-blue mb-1">
                  <CountUpNumber end={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                </div>
                <p className="text-dynazur-text text-sm font-medium">{stat.label}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
        {/* Partner logos */}
        <AnimateOnScroll>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-40">
            {partnerLogos.map((name) => (
              <span key={name} className="text-dynazur-black font-bold text-lg">{name}</span>
            ))}
          </div>
        </AnimateOnScroll>
      </div>

      {/* Blue CTA Banner */}
      <div className="max-w-[1280px] mx-auto px-6">
        <AnimateOnScroll variant="zoomIn">
          <div className="bg-dynazur-blue rounded-section px-8 py-12 md:py-16 text-center relative overflow-hidden">
            <Image
              src="/logos/mark-milky-gray.png"
              alt=""
              width={834}
              height={1228}
              className="absolute -right-6 -bottom-8 h-48 md:h-64 w-auto opacity-[0.07] pointer-events-none select-none"
              aria-hidden="true"
            />
            <h3 className="text-2xl md:text-3xl font-black text-white mb-4 relative z-10">Ready to discover something special?</h3>
            <p className="text-white/80 text-base mb-6 max-w-lg mx-auto relative z-10">
              Explore our full collection of products designed for those who live in tomorrow.
            </p>
            <div className="relative z-10"><YellowButton href="/shop" icon={<Gift className="w-4 h-4" />}>Shop the Collection</YellowButton></div>
          </div>
        </AnimateOnScroll>
      </div>

      {/* Testimonials */}
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionCard>
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-4xl font-black text-dynazur-black text-center mb-3">
              What Our <HandDrawnCircle color="yellow">Customers</HandDrawnCircle> Say
            </h2>
            <p className="text-dynazur-text text-center mb-10 max-w-lg mx-auto">
              Real stories from real people who chose Dynazur.
            </p>
          </AnimateOnScroll>
          <SwiperCarousel slidesPerView={3}>
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </SwiperCarousel>
        </SectionCard>
      </div>
    </div>
  );
}
