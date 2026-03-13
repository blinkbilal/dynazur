import { Star } from 'lucide-react';
import { type Testimonial } from '@/lib/data';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-card border border-dynazur-gray/30 p-6 h-full flex flex-col relative">
      {/* Decorative quotation mark */}
      <span className="absolute top-3 left-4 text-[60px] leading-none text-dynazur-blue/[0.08] font-black select-none pointer-events-none">&ldquo;</span>
      {/* Stars */}
      <div className="flex items-center gap-0.5 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < testimonial.rating ? 'fill-dynazur-yellow text-dynazur-yellow' : 'text-dynazur-gray'}`}
          />
        ))}
      </div>
      {/* Quote */}
      <p className="text-dynazur-text text-sm leading-relaxed flex-1 mb-5">&ldquo;{testimonial.quote}&rdquo;</p>
      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-14 h-14 rounded-full bg-dynazur-blue/10 ring-2 ring-dynazur-blue/20 ring-offset-2 flex items-center justify-center text-dynazur-blue font-black text-lg tracking-wider">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="font-bold text-dynazur-black text-sm">{testimonial.name}</p>
          <p className="text-dynazur-text text-xs">{testimonial.location}</p>
        </div>
      </div>
    </div>
  );
}
