'use client'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import styles from './carousel.module.sass'
import useEmblaCarousel from 'embla-carousel-react'
import { useEffect, useCallback } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes())
    }
  }, [emblaApi])

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>店內設計師</h1>
      <div
        className={styles.embla}
        ref={emblaRef}
      >
        <div className={styles.container}>
          <div className={styles.slide}>
            <Image
              src='/p1.webp'
              alt='stylist-1'
              fill
            />
            <div className={styles.name}>設計師1</div>
          </div>
          <div className={styles.slide}>
            <Image
              src='/p2.jpg'
              alt='stylist-2'
              fill
            />
            <div className={styles.name}>設計師2</div>
          </div>
          <div className={styles.slide}>
            <Image
              src='/p3.webp'
              alt='stylist-3'
              fill
            />
            <div className={styles.name}>設計師3</div>
          </div>
          <div className={styles.slide}>
            <Image
              src='/p4.avif'
              alt='stylist-4'
              fill
            />
            <div className={styles.name}>設計師4</div>
          </div>
          <div className={styles.slide}>
            <Image
              src='/p5.jpg'
              alt='stylist-5'
              fill
            />
            <div className={styles.name}>設計師5</div>
          </div>
        </div>
        <div className={styles.control}>
          <button
            className='embla__prev'
            onClick={scrollPrev}
          >
            <IoIosArrowBack size={30} />
          </button>
          <button
            className='embla__next'
            onClick={scrollNext}
          >
            <IoIosArrowForward size={30} />
          </button>
        </div>
      </div>
    </div>
  )
}
