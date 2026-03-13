'use client';

import { useState } from 'react';
import { SlidersHorizontal, X } from 'lucide-react';

interface FilterSidebarProps {
  categories: string[];
  selectedCategories: string[];
  onCategoryChange: (categories: string[]) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
}

export default function FilterSidebar({
  categories,
  selectedCategories,
  onCategoryChange,
  sortBy,
  onSortChange,
  priceRange,
  onPriceRangeChange,
}: FilterSidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleCategory = (cat: string) => {
    if (selectedCategories.includes(cat)) {
      onCategoryChange(selectedCategories.filter((c) => c !== cat));
    } else {
      onCategoryChange([...selectedCategories, cat]);
    }
  };

  const filterContent = (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h4 className="font-bold text-dynazur-black text-sm mb-3">Categories</h4>
        <div className="space-y-2">
          {categories.map((cat) => (
            <label key={cat} className="flex items-center gap-2.5 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat)}
                onChange={() => toggleCategory(cat)}
                className="w-4 h-4 rounded border-dynazur-gray accent-dynazur-blue"
              />
              <span className="text-sm text-dynazur-text group-hover:text-dynazur-black transition-colors">
                {cat}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price range */}
      <div>
        <h4 className="font-bold text-dynazur-black text-sm mb-3">Price Range</h4>
        <div className="flex items-center gap-3">
          <span className="text-xs text-dynazur-text">${priceRange[0]}</span>
          <input
            type="range"
            min="0"
            max="100"
            value={priceRange[1]}
            onChange={(e) => onPriceRangeChange([priceRange[0], Number(e.target.value)])}
            className="flex-1 accent-dynazur-blue"
          />
          <span className="text-xs text-dynazur-text">${priceRange[1]}</span>
        </div>
      </div>

      {/* Sort */}
      <div>
        <h4 className="font-bold text-dynazur-black text-sm mb-3">Sort By</h4>
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="w-full p-2.5 border border-dynazur-gray/50 rounded-btn text-sm text-dynazur-text bg-white focus:outline-none focus:border-dynazur-blue"
        >
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="newest">Newest</option>
        </select>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile filter button */}
      <button
        className="lg:hidden flex items-center gap-2 px-4 py-2 border border-dynazur-gray/50 rounded-btn text-sm font-semibold text-dynazur-black mb-4"
        onClick={() => setMobileOpen(true)}
      >
        <SlidersHorizontal className="w-4 h-4" />
        Filters
      </button>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/30" onClick={() => setMobileOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-72 bg-white p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-dynazur-black">Filters</h3>
              <button onClick={() => setMobileOpen(false)} aria-label="Close filters">
                <X className="w-5 h-5" />
              </button>
            </div>
            {filterContent}
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <div className="hidden lg:block">
        {filterContent}
      </div>
    </>
  );
}
