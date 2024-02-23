'use client'

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules';
import { CSSProperties } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';



interface ImageSliderProps {
  images: string[]
}

export default function ImageSlider({ images }: ImageSliderProps) {

  return (
    <>
      <div className="rounded-md overflow-hidden">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          loop={true}
          style={{
            "--swiper-navigation-color": "black",
            "--swiper-navigation-size": "15px",
          } as CSSProperties}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Image src={image} width={1000} height={1000} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}