'use client';

import { useState, useMemo } from 'react';
import AnimateOnScroll from '@/components/animations/AnimateOnScroll';
import HandDrawnCircle from '@/components/animations/HandDrawnCircle';
import ProductCard from '@/components/ui/ProductCard';
import FilterSidebar from '@/components/sections/FilterSidebar';
import { products } from '@/lib/data';

const allCategories = ['Apparel', 'Books', 'Mugs', 'Home Decor', 'Digital Products'];

export default function ShopClient() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 9;

  const categoryMap: Record<string, string> = {
    'Apparel': 'apparel',
    'Books': 'books',
    'Mugs': 'mugs',
    'Home Decor': 'home-decor',
    'Digital Products': 'digital',
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategories.length > 0) {
      const cats = selectedCategories.map((c) => categoryMap[c]);
      result = result.filter((p) => cats.includes(p.category));
    }

    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.reverse();
        break;
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return result;
  }, [selectedCategories, sortBy, priceRange]);

  const totalPages = Math.ceil(filteredProducts.length / perPage);
  const paginated = filteredProducts.slice((currentPage - 1) * perPage, currentPage * perPage);

  return (
    <div className="max-w-[1280px] mx-auto px-6 py-12">
      <AnimateOnScroll>
        <h1 className="text-3xl md:text-5xl font-black text-dynazur-black mb-8">Shop All <HandDrawnCircle color="yellow">Products</HandDrawnCircle></h1>
      </AnimateOnScroll>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <div className="lg:w-64 shrink-0">
          <div className="lg:sticky lg:top-24">
            <FilterSidebar
              categories={allCategories}
              selectedCategories={selectedCategories}
              onCategoryChange={(c) => { setSelectedCategories(c); setCurrentPage(1); }}
              sortBy={sortBy}
              onSortChange={(s) => { setSortBy(s); setCurrentPage(1); }}
              priceRange={priceRange}
              onPriceRangeChange={(r) => { setPriceRange(r); setCurrentPage(1); }}
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <p className="text-sm text-dynazur-text mb-6">{filteredProducts.length} products found</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {paginated.map((product, i) => (
              <AnimateOnScroll key={product.id} variant="scaleUp" delay={i * 0.05}>
                <ProductCard product={product} />
              </AnimateOnScroll>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-10 h-10 rounded-btn font-bold text-sm transition-all ${
                    currentPage === i + 1
                      ? 'bg-dynazur-blue text-white'
                      : 'bg-white text-dynazur-text hover:bg-dynazur-bg border border-dynazur-gray/30'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
