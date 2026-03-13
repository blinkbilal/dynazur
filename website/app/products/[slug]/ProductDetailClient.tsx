'use client';

import { useState } from 'react';
import Link from 'next/link';
import { type Product } from '@/lib/data';
import { formatPrice } from '@/lib/utils';
import AnimateOnScroll from '@/components/animations/AnimateOnScroll';
import SectionCard from '@/components/ui/SectionCard';
import ProductCard from '@/components/ui/ProductCard';
import { YellowButton } from '@/components/ui/Buttons';
import { Star, ChevronDown, ChevronRight, Minus, Plus, Truck, RotateCcw, ShieldCheck } from 'lucide-react';

interface Props {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetailClient({ product, relatedProducts }: Props) {
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] ?? '');
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] ?? '');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState<string | null>('description');

  const categoryLabel = product.category.charAt(0).toUpperCase() + product.category.slice(1);
  const categoryPath = product.category === 'digital' ? '/digital-products' : `/products/${product.category}`;

  return (
    <div className="max-w-[1280px] mx-auto px-6 py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-dynazur-text mb-8" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-dynazur-blue transition-colors">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link href="/shop" className="hover:text-dynazur-blue transition-colors">Shop</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link href={categoryPath} className="hover:text-dynazur-blue transition-colors">{categoryLabel}</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-dynazur-black font-semibold truncate">{product.name}</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
        {/* Image */}
        <AnimateOnScroll variant="fadeInLeft" className="flex-1 lg:max-w-[55%]">
          <div className="aspect-[4/5] bg-dynazur-bg rounded-section flex items-center justify-center">
            <ProductPlaceholderLarge category={product.category} />
          </div>
        </AnimateOnScroll>

        {/* Details */}
        <AnimateOnScroll variant="fadeInRight" className="flex-1 lg:max-w-[45%]">
          <div>
            <span className="inline-block px-3 py-1 bg-dynazur-blue text-white text-xs font-bold rounded-full mb-4">
              {categoryLabel}
            </span>
            <h1 className="text-3xl md:text-4xl font-black text-dynazur-black mb-3">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.round(product.rating) ? 'fill-dynazur-yellow text-dynazur-yellow' : 'text-dynazur-gray'}`} />
                ))}
              </div>
              <span className="text-sm text-dynazur-text">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-black text-dynazur-blue">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <span className="text-lg text-dynazur-text line-through">{formatPrice(product.originalPrice)}</span>
              )}
            </div>

            <p className="text-dynazur-text leading-relaxed mb-8">{product.shortDescription}</p>

            {/* Size selector */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-6">
                <label className="block text-sm font-bold text-dynazur-black mb-2">Size</label>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-[48px] h-10 px-3 rounded-btn border text-sm font-bold transition-all ${
                        selectedSize === size
                          ? 'bg-dynazur-blue text-white border-dynazur-blue'
                          : 'bg-white text-dynazur-black border-dynazur-gray/50 hover:border-dynazur-blue'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Color selector */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-6">
                <label className="block text-sm font-bold text-dynazur-black mb-2">Color: {selectedColor}</label>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 h-10 rounded-btn border text-sm font-bold transition-all ${
                        selectedColor === color
                          ? 'bg-dynazur-blue text-white border-dynazur-blue'
                          : 'bg-white text-dynazur-black border-dynazur-gray/50 hover:border-dynazur-blue'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* File format badge for digital */}
            {product.fileFormat && (
              <div className="mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-dynazur-bg text-dynazur-black text-sm font-bold rounded-btn">
                  📁 {product.fileFormat}
                </span>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <label className="block text-sm font-bold text-dynazur-black mb-2">Quantity</label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-btn border border-dynazur-gray/50 flex items-center justify-center text-dynazur-black hover:bg-dynazur-bg transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-bold text-lg">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-btn border border-dynazur-gray/50 flex items-center justify-center text-dynazur-black hover:bg-dynazur-bg transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <YellowButton className="w-full text-base py-4 mb-6">
              {product.category === 'digital' ? 'Download Now' : 'Add to Cart'} — {formatPrice(product.price * quantity)}
            </YellowButton>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 mb-8 text-sm text-dynazur-text">
              <div className="flex items-center gap-2"><Truck className="w-4 h-4" /> Free shipping over $50</div>
              <div className="flex items-center gap-2"><RotateCcw className="w-4 h-4" /> 30-day returns</div>
              <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Secure checkout</div>
            </div>

            {/* Accordions */}
            <div className="border-t border-dynazur-gray/30">
              {[
                { id: 'description', title: 'Description', content: product.description },
                { id: 'shipping', title: 'Shipping Info', content: 'Standard shipping takes 5-7 business days domestically and 10-15 business days internationally. Express shipping available at checkout. Free shipping on orders over $50.' },
                { id: 'reviews', title: `Reviews (${product.reviewCount})`, content: `This product has an average rating of ${product.rating} out of 5 stars from ${product.reviewCount} customer reviews. Our customers love the quality and design of this product.` },
              ].map((section) => (
                <div key={section.id} className="border-b border-dynazur-gray/30">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === section.id ? null : section.id)}
                    className="w-full flex items-center justify-between py-4 text-left"
                    aria-expanded={openAccordion === section.id}
                  >
                    <span className="font-bold text-dynazur-black">{section.title}</span>
                    <ChevronDown className={`w-5 h-5 text-dynazur-text transition-transform ${openAccordion === section.id ? 'rotate-180' : ''}`} />
                  </button>
                  {openAccordion === section.id && (
                    <div className="pb-4 text-dynazur-text text-sm leading-relaxed">
                      {section.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <SectionCard className="mt-12">
          <h2 className="text-2xl md:text-3xl font-black text-dynazur-black text-center mb-10">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((p, i) => (
              <AnimateOnScroll key={p.id} variant="fadeInUp" delay={i * 0.08}>
                <ProductCard product={p} />
              </AnimateOnScroll>
            ))}
          </div>
        </SectionCard>
      )}
    </div>
  );
}

function ProductPlaceholderLarge({ category }: { category: string }) {
  return (
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" opacity="0.25">
      {category === 'apparel' && (
        <path d="M50 70 L70 55 L90 45 L110 45 L130 55 L150 70 L135 90 L125 80 L125 155 L75 155 L75 80 L65 90 Z" stroke="#050505" strokeWidth="2.5" fill="none" />
      )}
      {category === 'books' && (
        <>
          <rect x="45" y="38" width="110" height="125" rx="5" stroke="#050505" strokeWidth="2.5" fill="none" />
          <line x1="60" y1="38" x2="60" y2="163" stroke="#050505" strokeWidth="2" />
          <line x1="75" y1="70" x2="135" y2="70" stroke="#050505" strokeWidth="2" />
          <line x1="75" y1="90" x2="120" y2="90" stroke="#050505" strokeWidth="1.5" opacity="0.5" />
          <line x1="75" y1="105" x2="125" y2="105" stroke="#050505" strokeWidth="1.5" opacity="0.5" />
        </>
      )}
      {category === 'mugs' && (
        <>
          <ellipse cx="100" cy="145" rx="40" ry="8" stroke="#050505" strokeWidth="2" fill="none" />
          <path d="M60 65 L60 145 M140 65 L140 145" stroke="#050505" strokeWidth="2.5" />
          <ellipse cx="100" cy="65" rx="40" ry="10" stroke="#050505" strokeWidth="2.5" fill="none" />
          <path d="M140 85 Q175 85 175 110 Q175 135 140 135" stroke="#050505" strokeWidth="2.5" fill="none" />
          <path d="M85 45 Q90 30 100 35 Q110 30 115 45" stroke="#071EFC" strokeWidth="2" fill="none" opacity="0.5" />
        </>
      )}
      {category === 'home-decor' && (
        <>
          <rect x="40" y="30" width="120" height="140" rx="3" stroke="#050505" strokeWidth="2.5" fill="none" />
          <rect x="50" y="40" width="100" height="100" stroke="#050505" strokeWidth="1.5" fill="none" />
          <circle cx="85" cy="75" r="15" stroke="#071EFC" strokeWidth="2" fill="none" opacity="0.4" />
          <path d="M55 120 L80 95 L105 110 L130 85 L145 105" stroke="#050505" strokeWidth="1.5" fill="none" />
        </>
      )}
      {category === 'digital' && (
        <>
          <rect x="45" y="35" width="110" height="130" rx="10" stroke="#050505" strokeWidth="2.5" fill="none" />
          <rect x="55" y="55" width="90" height="80" stroke="#050505" strokeWidth="1.5" fill="none" />
          <line x1="55" y1="75" x2="145" y2="75" stroke="#050505" strokeWidth="1" opacity="0.3" />
          <line x1="55" y1="95" x2="145" y2="95" stroke="#050505" strokeWidth="1" opacity="0.3" />
          <line x1="55" y1="115" x2="145" y2="115" stroke="#050505" strokeWidth="1" opacity="0.3" />
          <circle cx="100" cy="155" r="5" stroke="#050505" strokeWidth="1.5" fill="none" />
        </>
      )}
    </svg>
  );
}
