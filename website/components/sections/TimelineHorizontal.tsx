import AnimateOnScroll from '@/components/animations/AnimateOnScroll';

const steps = [
  { number: '01', title: 'Browse Designs', description: 'Explore our curated collection of unique designs.' },
  { number: '02', title: 'Customize Your Product', description: 'Choose your preferred size, color, and style.' },
  { number: '03', title: 'Place Your Order', description: 'Secure checkout with multiple payment options.' },
  { number: '04', title: 'We Print & Ship', description: 'High-quality print and careful packaging.' },
  { number: '05', title: 'Enjoy Your Product', description: 'Receive and love your custom creation.' },
];

export default function TimelineHorizontal() {
  return (
    <div className="relative">
      {/* Desktop: horizontal layout */}
      <div className="hidden md:block">
        {/* Connecting line */}
        <div className="absolute top-6 left-[10%] right-[10%] h-0.5 bg-dynazur-blue/20" />
        <div className="flex justify-between relative">
          {steps.map((step, i) => (
            <AnimateOnScroll key={step.number} variant="fadeInUp" delay={i * 0.1} className="flex-1 text-center px-3">
              <div className="relative">
                {/* Number badge */}
                <div className="w-12 h-12 rounded-full bg-dynazur-bg border-2 border-dynazur-blue/20 flex items-center justify-center mx-auto mb-4 relative z-10">
                  <span className="text-dynazur-blue font-extrabold text-sm">{step.number}</span>
                </div>
                {/* Content alternates above/below */}
                <div className={i % 2 === 0 ? '' : 'mt-4'}>
                  <h4 className="font-bold text-dynazur-black text-sm mb-1">{step.title}</h4>
                  <p className="text-dynazur-text text-xs leading-relaxed">{step.description}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>

      {/* Mobile: vertical layout */}
      <div className="md:hidden space-y-6">
        {steps.map((step, i) => (
          <AnimateOnScroll key={step.number} variant="fadeInUp" delay={i * 0.1}>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-dynazur-bg border-2 border-dynazur-blue/20 flex items-center justify-center shrink-0">
                <span className="text-dynazur-blue font-extrabold text-xs">{step.number}</span>
              </div>
              <div>
                <h4 className="font-bold text-dynazur-black text-sm mb-1">{step.title}</h4>
                <p className="text-dynazur-text text-xs leading-relaxed">{step.description}</p>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </div>
  );
}
