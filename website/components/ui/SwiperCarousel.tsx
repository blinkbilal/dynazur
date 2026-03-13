'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

interface SwiperCarouselProps {
  children: React.ReactNode[];
  slidesPerView?: number;
  spaceBetween?: number;
  autoplay?: boolean;
  className?: string;
}

export default function SwiperCarousel({
  children,
  slidesPerView = 3,
  spaceBetween = 24,
  autoplay = true,
  className = '',
}: SwiperCarouselProps) {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={spaceBetween}
      slidesPerView={1}
      breakpoints={{
        768: { slidesPerView: Math.min(2, slidesPerView) },
        1024: { slidesPerView },
      }}
      autoplay={autoplay ? { delay: 5000, disableOnInteraction: false } : false}
      pagination={{ clickable: true }}
      loop={children.length > slidesPerView}
      className={`pb-12 ${className}`}
    >
      {children.map((child, index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
}
