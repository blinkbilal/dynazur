import { Metadata } from 'next';
import Image from 'next/image';
import HeroSection from '@/components/sections/HeroSection';
import ApparelIllustration from '@/components/illustrations/ApparelIllustration';
import HandDrawnCircle from '@/components/animations/HandDrawnCircle';
import AnimateOnScroll from '@/components/animations/AnimateOnScroll';
import SectionCard from '@/components/ui/SectionCard';
import ProductCard from '@/components/ui/ProductCard';
import TimelineHorizontal from '@/components/sections/TimelineHorizontal';
import { YellowButton } from '@/components/ui/Buttons';
import { products } from '@/lib/data';
import { Shirt, Palette, Leaf, Truck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Apparel',
  description: 'Premium custom-designed clothing and wearables from Dynazur. T-shirts, hoodies, caps and more.',
};

const apparelProducts = products.filter((p) => p.category === 'apparel');

const features = [
  { icon: Shirt, title: '100% Organic Cotton', description: 'Premium fabrics sourced responsibly for comfort that lasts.' },
  { icon: Palette, title: 'Original Designs', description: 'Every piece features artwork created by our in-house design team.' },
  { icon: Leaf, title: 'Eco-Friendly Production', description: 'Water-based inks and sustainable manufacturing processes.' },
  { icon: Truck, title: 'Fast Worldwide Shipping', description: 'Ships to 12+ countries with tracking on every order.' },
];

export default function ApparelPage() {
  return (
    <>
      <HeroSection
        title={<><HandDrawnCircle>Apparel</HandDrawnCircle> That Speaks Your Language</>}
        subtitle="Premium custom-designed clothing crafted for comfort, style, and self-expression. From everyday essentials to statement pieces."
        cta={<YellowButton href="/shop">Shop Apparel</YellowButton>}
        illustration={<ApparelIllustration className="w-full max-w-md mx-auto" />}
      />

      <div className="max-w-[1280px] mx-auto px-6 space-y-6 pb-12">
        {/* Features */}
        <SectionCard>
          <h2 className="text-2xl md:text-4xl font-black text-dynazur-black text-center mb-10">
            What Makes Our Apparel Special
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

        {/* Product Grid */}
        <SectionCard>
          <h2 className="text-2xl md:text-4xl font-black text-dynazur-black text-center mb-10">
            Our Apparel Collection
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {apparelProducts.map((product, i) => (
              <AnimateOnScroll key={product.id} variant="scaleUp" delay={i * 0.08}>
                <ProductCard product={product} />
              </AnimateOnScroll>
            ))}
          </div>
        </SectionCard>

        {/* How It Works */}
        <SectionCard>
          <h2 className="text-2xl md:text-4xl font-black text-dynazur-black text-center mb-10">
            How It Works
          </h2>
          <TimelineHorizontal />
        </SectionCard>

        {/* Blue CTA */}
        <div className="bg-dynazur-blue rounded-section px-6 md:px-16 py-14 md:py-20 text-center relative overflow-hidden">
          <Image src="/logos/mark-milky-gray.png" alt="" width={834} height={1228} className="absolute -right-6 -bottom-8 h-48 md:h-64 w-auto opacity-[0.07] pointer-events-none select-none" aria-hidden="true" />
          <AnimateOnScroll>
            <h2 className="text-2xl md:text-4xl font-black text-white mb-4 relative z-10">Ready to Wear Something Special?</h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto relative z-10">Browse our full collection and find your next favourite piece.</p>
            <div className="relative z-10"><YellowButton href="/shop">Shop the Collection</YellowButton></div>
          </AnimateOnScroll>
        </div>
      </div>
    </>
  );
}
