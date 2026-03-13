import AnimateOnScroll from '@/components/animations/AnimateOnScroll';

interface HeroSectionProps {
  title: React.ReactNode;
  subtitle: string;
  cta?: React.ReactNode;
  illustration: React.ReactNode;
  className?: string;
}

export default function HeroSection({ title, subtitle, cta, illustration, className = '' }: HeroSectionProps) {
  return (
    <section className={`py-12 md:py-20 ${className}`}>
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* Text */}
        <div className="flex-1 lg:max-w-[55%]">
          <AnimateOnScroll variant="fadeInLeft">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-dynazur-black leading-tight mb-5">
              {title}
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fadeInLeft" delay={0.1}>
            <p className="text-dynazur-text text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              {subtitle}
            </p>
          </AnimateOnScroll>
          {cta && (
            <AnimateOnScroll variant="fadeInLeft" delay={0.2}>
              {cta}
            </AnimateOnScroll>
          )}
        </div>
        {/* Illustration */}
        <div className="flex-1 lg:max-w-[45%] w-full">
          <AnimateOnScroll variant="fadeInRight">
            {illustration}
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
