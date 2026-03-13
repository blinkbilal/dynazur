import type { Metadata } from 'next';
import ShopClient from './ShopClient';

export const metadata: Metadata = {
  title: 'Shop All Products',
  description: 'Browse our complete collection of premium print-on-demand products — apparel, books, mugs, home decor, and digital products.',
};

export default function ShopPage() {
  return <ShopClient />;
}
