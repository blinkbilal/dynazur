import { Metadata } from 'next';
import ReviewsClient from './ReviewsClient';

export const metadata: Metadata = {
  title: 'Reviews',
  description: 'Read what our customers say about Dynazur products. Real reviews from real people around the world.',
};

export default function ReviewsPage() {
  return <ReviewsClient />;
}
