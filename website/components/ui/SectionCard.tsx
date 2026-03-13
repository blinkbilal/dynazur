interface SectionCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionCard({ children, className = '' }: SectionCardProps) {
  return (
    <div className={`bg-white rounded-section px-6 md:px-10 lg:px-16 py-16 md:py-20 ${className}`}>
      {children}
    </div>
  );
}
