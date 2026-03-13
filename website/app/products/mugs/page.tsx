import { Metadata } from 'next';
import Image from 'next/image';
import HeroSection from '@/components/sections/HeroSection';
import MugsIllustration from '@/components/illustrations/MugsIllustration';
import HandDrawnCircle from '@/components/animations/HandDrawnCircle';
import AnimateOnScroll from '@/components/animations/AnimateOnScroll';
import SectionCard from '@/components/ui/SectionCard';
import ProductCard from '@/components/ui/ProductCard';
import TimelineHorizontal from '@/components/sections/TimelineHorizontal';
import { YellowButton } from '@/components/ui/Buttons';
import { products } from '@/lib/data';
import { Coffee, Droplets, Shield, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Mugs',
  description: 'Start every morning right with beautifully designed mugs from Dynazur that spark joy.',
};

const mugProducts = products.filter((p) => p.category === 'mugs');

const features = [
  { icon: Coffee, title: 'Premium Ceramic', description: 'High-quality ceramic and bone china that holds heat perfectly.' },
  { icon: Sparkles, title: 'Vibrant Prints', description: 'Full-colour, wrap-around designs that never fade or peel.' },
  { icon: Droplets, title: 'Dishwasher Safe', description: 'Built to last — safe for dishwashers and microwaves.' },
  { icon: Shield, title: 'Protected Packaging', description: 'Every mug ships in custom-fitted protective packaging.' },
];

export default function MugsPage() {
  return (
    <>
      <HeroSection
        title={<><HandDrawnCircle>Mugs</HandDrawnCircle> That Spark Joy</>}
        subtitle="Start every morning right with beautifully designed mugs. From minimalist motifs to bold statements — each sip feels intentional."
        cta={<YellowButton href="/shop">Shop Mugs</YellowButton>}
        illustration={<MugsIllustration className="w-full max-w-md mx-auto" />}
      />

      <div className="max-w-[1280px] mx-auto px-6 space-y-6 pb-12">
        <SectionCard>
          <h2 className="text-2xl md:text-4xl font-black text-dynazur-black text-center mb-10">
            What Makes Our Mugs Special
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
            Our Mug Collection
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mugProducts.map((product, i) => (
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
            <h2 className="text-2xl md:text-4xl font-black text-white mb-4 relative z-10">Pour Yourself Something Special</h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto relative z-10">Find the perfect mug to complement your morning ritual.</p>
            <div className="relative z-10"><YellowButton href="/shop">Shop Mugs</YellowButton></div>
          </AnimateOnScroll>
        </div>
      </div>
    </>
  );
}
