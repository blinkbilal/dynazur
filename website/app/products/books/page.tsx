import { Metadata } from 'next';
import Image from 'next/image';
import HeroSection from '@/components/sections/HeroSection';
import BooksIllustration from '@/components/illustrations/BooksIllustration';
import HandDrawnCircle from '@/components/animations/HandDrawnCircle';
import AnimateOnScroll from '@/components/animations/AnimateOnScroll';
import SectionCard from '@/components/ui/SectionCard';
import ProductCard from '@/components/ui/ProductCard';
import TimelineHorizontal from '@/components/sections/TimelineHorizontal';
import { YellowButton } from '@/components/ui/Buttons';
import { products } from '@/lib/data';
import { BookOpen, Lightbulb, Award, Gift } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Books',
  description: 'Thoughtfully designed books spanning creativity, productivity, and inspiration from Dynazur.',
};

const bookProducts = products.filter((p) => p.category === 'books');

const features = [
  { icon: BookOpen, title: 'Beautifully Illustrated', description: 'Every book features original artwork and carefully crafted layouts.' },
  { icon: Lightbulb, title: 'Actionable Insights', description: 'Practical guides filled with exercises, prompts, and real-world frameworks.' },
  { icon: Award, title: 'Premium Quality', description: 'Hardcover binding, thick stock paper, and rich colour printing.' },
  { icon: Gift, title: 'Perfect Gifts', description: 'Thoughtful presents for creatives, thinkers, and makers in your life.' },
];

export default function BooksPage() {
  return (
    <>
      <HeroSection
        title={<><HandDrawnCircle>Books</HandDrawnCircle> That Inspire Action</>}
        subtitle="Thoughtfully designed books spanning creativity, productivity, and inspiration. Each one crafted to make a lasting impact."
        cta={<YellowButton href="/shop">Shop Books</YellowButton>}
        illustration={<BooksIllustration className="w-full max-w-md mx-auto" />}
      />

      <div className="max-w-[1280px] mx-auto px-6 space-y-6 pb-12">
        <SectionCard>
          <h2 className="text-2xl md:text-4xl font-black text-dynazur-black text-center mb-10">
            What Makes Our Books Special
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <AnimateOnScroll key={f.title} variant="scaleUp" delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-card bg-dynazur-bg flex items-center justify-center">
                    <f.icon className="w-6 h-6 text-dynazur-blue" />
                  </div>
                  <h3 className="font-extrabold text-dynazur-black text-lg mb-2">{f.title}</h3>
                  <p className="text-dynazur-text text-sm">{f.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </SectionCard>

        <SectionCard>
          <h2 className="text-2xl md:text-4xl font-black text-dynazur-black text-center mb-10">
            Our Book Collection
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookProducts.map((product, i) => (
              <AnimateOnScroll key={product.id} variant="scaleUp" delay={i * 0.08}>
                <ProductCard product={product} />
              </AnimateOnScroll>
            ))}
          </div>
        </SectionCard>

        <SectionCard>
          <h2 className="text-2xl md:text-4xl font-black text-dynazur-black text-center mb-10">How It Works</h2>
          <TimelineHorizontal />
        </SectionCard>

        <div className="bg-dynazur-blue rounded-section px-6 md:px-16 py-14 md:py-20 text-center relative overflow-hidden">
          <Image src="/logos/mark-milky-gray.png" alt="" width={834} height={1228} className="absolute -right-6 -bottom-8 h-48 md:h-64 w-auto opacity-[0.07] pointer-events-none select-none" aria-hidden="true" />
          <AnimateOnScroll>
            <h2 className="text-2xl md:text-4xl font-black text-white mb-4 relative z-10">Find Your Next Great Read</h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto relative z-10">Explore our full library of books designed to inspire, educate, and transform.</p>
            <div className="relative z-10"><YellowButton href="/shop">Browse Books</YellowButton></div>
          </AnimateOnScroll>
        </div>
      </div>
    </>
  );
}
