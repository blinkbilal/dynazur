import Link from 'next/link';
import { type Product } from '@/lib/data';
import { formatPrice } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <div className="bg-white rounded-card border border-transparent overflow-hidden transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] group-hover:border-dynazur-blue/20">
        {/* Image */}
        <div className="relative aspect-[4/5] bg-dynazur-bg overflow-hidden skeleton-shimmer">
          <div className="absolute inset-0 flex items-center justify-center text-dynazur-gray">
            <ProductPlaceholder category={product.category} />
          </div>
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300 group-hover:scale-105" />
          {/* Category tag */}
          <span className="absolute top-3 left-3 px-3 py-1 bg-dynazur-blue text-white text-xs font-bold rounded-full">
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </span>
          {product.trending && (
            <span className="absolute top-3 right-3 px-2.5 py-1 bg-dynazur-yellow text-dynazur-black text-xs font-bold rounded-full">
              Trending
            </span>
          )}
        </div>
        {/* Info */}
        <div className="p-4">
          <h3 className="font-bold text-dynazur-black text-base mb-1 truncate">{product.name}</h3>
          <p className="text-dynazur-text text-sm mb-2 line-clamp-2">{product.shortDescription}</p>
          <div className="flex items-center justify-between">
            <span className="text-dynazur-blue font-extrabold text-lg transition-transform duration-200 group-hover:scale-105 inline-block">{formatPrice(product.price)}</span>
            <div className="flex items-center gap-1">
              <span className="text-dynazur-yellow">★</span>
              <span className="text-sm text-dynazur-text font-medium">{product.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

function ProductPlaceholder({ category }: { category: string }) {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" opacity="0.3">
      {category === 'apparel' && (
        <path d="M20 28 L28 22 L36 18 L44 18 L52 22 L60 28 L54 36 L50 32 L50 62 L30 62 L30 32 L26 36 Z" stroke="currentColor" strokeWidth="2" fill="none" />
      )}
      {category === 'books' && (
        <>
          <rect x="18" y="15" width="44" height="50" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
          <line x1="24" y1="15" x2="24" y2="65" stroke="currentColor" strokeWidth="1.5" />
          <line x1="30" y1="28" x2="54" y2="28" stroke="currentColor" strokeWidth="1.5" />
          <line x1="30" y1="36" x2="48" y2="36" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        </>
      )}
      {category === 'mugs' && (
        <>
          <ellipse cx="38" cy="22" rx="18" ry="5" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M20 22 L23 62 C23 68 30 72 38 72 C46 72 53 68 53 62 L56 22" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M56 30 C64 30 68 38 68 46 C68 54 64 58 56 58" stroke="currentColor" strokeWidth="2" fill="none" />
        </>
      )}
      {category === 'home-decor' && (
        <>
          <rect x="14" y="10" width="52" height="60" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M22 50 L34 32 L46 45 L52 38 L58 55 L18 55 Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <circle cx="50" cy="24" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </>
      )}
      {category === 'digital' && (
        <>
          <rect x="16" y="10" width="48" height="60" rx="6" stroke="currentColor" strokeWidth="2" fill="none" />
          <line x1="22" y1="28" x2="58" y2="28" stroke="currentColor" strokeWidth="1" opacity="0.5" />
          <line x1="22" y1="38" x2="58" y2="38" stroke="currentColor" strokeWidth="1" opacity="0.5" />
          <line x1="22" y1="48" x2="58" y2="48" stroke="currentColor" strokeWidth="1" opacity="0.5" />
          <rect x="24" y="18" width="20" height="6" rx="1" stroke="currentColor" strokeWidth="1" fill="none" />
        </>
      )}
    </svg>
  );
}
