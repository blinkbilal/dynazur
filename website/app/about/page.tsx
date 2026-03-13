import { Metadata } from 'next';
import Image from 'next/image';
import HeroSection from '@/components/sections/HeroSection';
import AboutIllustration from '@/components/illustrations/AboutIllustration';
import HandDrawnCircle from '@/components/animations/HandDrawnCircle';
import HandDrawnUnderline from '@/components/animations/HandDrawnUnderline';
import AnimateOnScroll from '@/components/animations/AnimateOnScroll';
import SectionCard from '@/components/ui/SectionCard';
import TimelineVertical from '@/components/sections/TimelineVertical';
import { YellowButton } from '@/components/ui/Buttons';
import { teamMembers, timelineMilestones, companyValues } from '@/lib/data';
import { Heart, Lightbulb, Leaf, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Dynazur — our story, values, team, and mission to create premium products for those who live in tomorrow.',
};

const valueIcons = [Heart, Lightbulb, Leaf, Users];

export default function AboutPage() {
  return (
    <>
      <HeroSection
        title={<>About <HandDrawnCircle>Dynazur</HandDrawnCircle></>}
        subtitle="We create premium products for those who live in tomorrow. Learn about the story, values, and team behind the brand."
        cta={<YellowButton href="/shop">Explore Products</YellowButton>}
        illustration={<AboutIllustration className="w-full max-w-md mx-auto" />}
      />

      <div className="max-w-[1280px] mx-auto px-6 space-y-6 pb-12">
        {/* Story */}
        <SectionCard>
          <div className="max-w-3xl mx-auto text-center">
            <AnimateOnScroll>
              <h2 className="text-2xl md:text-4xl font-black text-dynazur-black mb-6">Our Story</h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <p className="text-dynazur-text leading-relaxed mb-4">
                Dynazur was born from a simple belief: everyday products should inspire. What started as five t-shirt designs in 2023 has grown into a full collection of apparel, books, mugs, home decor, and digital products — all designed with intention and crafted with care.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.15}>
              <p className="text-dynazur-text leading-relaxed">
                Our name combines &quot;dynamic&quot; and &quot;azure&quot; — a nod to the ever-moving, sky-reaching ambition that drives everything we make. We believe that great design isn&apos;t just about aesthetics; it&apos;s about creating moments of connection, motivation, and joy in your daily life.
              </p>
            </AnimateOnScroll>
          </div>
        </SectionCard>

        {/* Values */}
        <SectionCard>
          <h2 className="text-2xl md:text-4xl font-black text-dynazur-black text-center mb-10">
            Our <HandDrawnUnderline>Values</HandDrawnUnderline>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, i) => {
              const Icon = valueIcons[i];
              return (
                <AnimateOnScroll key={value.title} variant="scaleUp" delay={i * 0.1}>
                  <div className="text-center p-6 rounded-card bg-dynazur-bg/50 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                    <div className="w-10 h-10 mx-auto mb-4 rounded-lg bg-dynazur-yellow/15 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-dynazur-blue" />
                    </div>
                    <h3 className="font-extrabold text-dynazur-blue text-lg mb-2">{value.title}</h3>
                    <p className="text-dynazur-text text-sm">{value.description}</p>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </SectionCard>

        {/* Timeline */}
        <SectionCard>
          <h2 className="text-2xl md:text-4xl font-black text-dynazur-black text-center mb-12">
            Our <HandDrawnCircle color="yellow">Journey</HandDrawnCircle>
          </h2>
          <TimelineVertical milestones={timelineMilestones} />
        </SectionCard>

        {/* Team */}
        <SectionCard>
          <h2 className="text-2xl md:text-4xl font-black text-dynazur-black text-center mb-10">
            Our <HandDrawnUnderline>Team</HandDrawnUnderline>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <AnimateOnScroll key={member.id} variant="zoomIn" delay={i * 0.1}>
                <div className="text-center">
                  {/* Sketch-style avatar with border */}
                  <div className="w-28 h-28 mx-auto mb-4 rounded-full bg-dynazur-bg relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-dynazur-blue text-3xl font-black">
                      {member.name.charAt(0)}
                    </div>
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 112 112" fill="none">
                      <circle cx="56" cy="56" r="52" stroke="#050505" strokeWidth="2" strokeDasharray="4 3" opacity="0.4" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-dynazur-black text-lg">{member.name}</h3>
                  <p className="text-dynazur-blue text-sm font-semibold mb-2">{member.role}</p>
                  <p className="text-dynazur-text text-sm">{member.bio}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </SectionCard>

        {/* Blue CTA */}
        <div className="bg-dynazur-blue rounded-section px-6 md:px-16 py-14 md:py-20 text-center relative overflow-hidden">
          <Image src="/logos/mark-milky-gray.png" alt="" width={834} height={1228} className="absolute -right-6 -bottom-8 h-48 md:h-64 w-auto opacity-[0.07] pointer-events-none select-none" aria-hidden="true" />
          <AnimateOnScroll>
            <h2 className="text-2xl md:text-4xl font-black text-white mb-4 relative z-10">Join the Dynazur Community</h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto relative z-10">Discover products designed for those who live in tomorrow.</p>
            <div className="relative z-10"><YellowButton href="/shop">Shop Now</YellowButton></div>
          </AnimateOnScroll>
        </div>
      </div>
    </>
  );
}
