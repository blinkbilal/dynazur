import { Metadata } from 'next';
import Image from 'next/image';
import HeroSection from '@/components/sections/HeroSection';
import DigitalIllustration from '@/components/illustrations/DigitalIllustration';
import HandDrawnCircle from '@/components/animations/HandDrawnCircle';
import AnimateOnScroll from '@/components/animations/AnimateOnScroll';
import SectionCard from '@/components/ui/SectionCard';
import ProductCard from '@/components/ui/ProductCard';
import { YellowButton } from '@/components/ui/Buttons';
import { products } from '@/lib/data';
import { Zap, Download, FileText, RefreshCw } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Digital Products',
  description: 'Digital planners, trackers, journals and templates — instant delivery, beautifully designed by Dynazur.',
};

const digitalProducts = products.filter((p) => p.category === 'digital');

const features = [
  { icon: Download, title: 'Instant Delivery', description: 'Download immediately after purchase — no waiting, no shipping.' },
  { icon: FileText, title: 'Multiple Formats', description: 'PDF, Excel, and Google Sheets compatible files included.' },
  { icon: RefreshCw, title: 'Free Updates', description: 'Get free updates and improvements for life after purchase.' },
  { icon: Zap, title: 'Ready to Use', description: 'Hyperlinked, interactive, and ready to use on any device.' },
];

export default function DigitalProductsPage() {
  return (
    <>
      <HeroSection
        title={<><HandDrawnCircle>Digital</HandDrawnCircle> Products for Modern Life</>}
        subtitle="Beautifully designed digital planners, trackers, and templates. Instant delivery, lifetime updates, and compatible with your favourite apps."
        cta={<YellowButton href="/shop">Browse Digital Products</YellowButton>}
        illustration={<DigitalIllustration className="w-full max-w-md mx-auto" />}
      />

      <div className="max-w-[1280px] mx-auto px-6 space-y-6 pb-12">
        {/* Instant Delivery Banner */}
        <div className="bg-dynazur-yellow rounded-section px-6 md:px-12 py-8 flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <Download className="w-10 h-10 text-dynazur-black shrink-0" />
          <div>
            <h3 className="text-xl font-black text-dynazur-black">Instant Delivery</h3>
            <p className="text-dynazur-black/70 text-sm">All digital products are delivered instantly via download link after purchase.</p>
          </div>
        </div>

        <SectionCard>
          <h2 className="text-2xl md:text-4xl font-black text-dynazur-black text-center mb-10">
            Why Go Digital
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <AnimateOnScroll key={f.title} variant="fadeInUp" delay={i * 0.1}>
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
            Our Digital Collection
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {digitalProducts.map((product, i) => (
              <AnimateOnScroll key={product.id} variant="fadeInUp" delay={i * 0.08}>
                <ProductCard product={product} />
              </AnimateOnScroll>
            ))}
          </div>
        </SectionCard>

        <div className="bg-dynazur-blue rounded-section px-6 md:px-16 py-14 md:py-20 text-center relative overflow-hidden">
          <Image src="/logos/mark-milky-gray.png" alt="" width={834} height={1228} className="absolute -right-6 -bottom-8 h-48 md:h-64 w-auto opacity-[0.07] pointer-events-none select-none" aria-hidden="true" />
          <AnimateOnScroll>
            <h2 className="text-2xl md:text-4xl font-black text-white mb-4 relative z-10">Organise Your Life, Beautifully</h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto relative z-10">From planners to budget trackers — tools designed for the way you live.</p>
            <div className="relative z-10"><YellowButton href="/shop">Explore All Products</YellowButton></div>
          </AnimateOnScroll>
        </div>
      </div>
    </>
  );
}
