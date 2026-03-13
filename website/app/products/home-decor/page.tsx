import { Metadata } from 'next';
import Image from 'next/image';
import HeroSection from '@/components/sections/HeroSection';
import PostersIllustration from '@/components/illustrations/PostersIllustration';
import HandDrawnCircle from '@/components/animations/HandDrawnCircle';
import AnimateOnScroll from '@/components/animations/AnimateOnScroll';
import SectionCard from '@/components/ui/SectionCard';
import ProductCard from '@/components/ui/ProductCard';
import TimelineHorizontal from '@/components/sections/TimelineHorizontal';
import { YellowButton } from '@/components/ui/Buttons';
import { products } from '@/lib/data';
import { Frame, Palette, Ruler, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Home Decor',
  description: 'Transform your space with striking art prints, wall art, and home decor from Dynazur.',
};

const homeDecorProducts = products.filter((p) => p.category === 'home-decor');

const features = [
  { icon: Frame, title: 'Gallery Quality', description: 'Printed on 250gsm fine art paper with archival-grade inks for lasting beauty.' },
  { icon: Palette, title: 'Original Artwork', description: 'Every piece features unique designs created by our in-house artists.' },
  { icon: Ruler, title: 'Multiple Sizes', description: 'Available in A3, A2, and A1 to fit any wall and complement any room.' },
  { icon: Star, title: 'Curated Interiors', description: 'From wall art to shelf decor — pieces that turn a house into a home.' },
];

export default function HomeDecorPage() {
  return (
    <>
      <HeroSection
        title={<><HandDrawnCircle>Home Decor</HandDrawnCircle> That Tells Your Story</>}
        subtitle="Curated wall art, prints, and decor pieces designed to transform any space into a gallery of self-expression."
        cta={<YellowButton href="/shop">Shop Home Decor</YellowButton>}
        illustration={<PostersIllustration className="w-full max-w-md mx-auto" />}
      />

      <div className="max-w-[1280px] mx-auto px-6 space-y-6 pb-12">
        <SectionCard>
          <h2 className="text-2xl md:text-4xl font-black text-dynazur-black text-center mb-10">
            What Makes Our Decor Special
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
            Our Home Decor Collection
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {homeDecorProducts.map((product, i) => (
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
            <h2 className="text-2xl md:text-4xl font-black text-white mb-4 relative z-10">Make Your Walls Talk</h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto relative z-10">Discover art prints and decor that tell your story and transform your space.</p>
            <div className="relative z-10"><YellowButton href="/shop">Shop Home Decor</YellowButton></div>
          </AnimateOnScroll>
        </div>
      </div>
    </>
  );
}
