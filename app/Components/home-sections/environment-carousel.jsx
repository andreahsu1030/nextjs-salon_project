'use client'
import styles from './environment.module.sass'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

export default function EnvironmentCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ axis: 'y' }, [Autoplay()])
  return (
    <div className={styles.wrapper}>
      <div>
        <h2 className={styles.title}>店內環境</h2>
        <p>提供給您最舒適的環境</p>
      </div>
      <div className={styles.embla}>
        <div
          className={styles.viewport}
          ref={emblaRef}
        >
          <div className={styles.container}>
            <div className={styles.slide}>
              <Image
                src='/en-1.jpg'
                fill
              />
            </div>
            <div className={styles.slide}>
              <Image
                src='/en-2.jpg'
                fill
              />
            </div>
            <div className={styles.slide}>
              <Image
                src='/en-3.jpg'
                fill
              />
            </div>
            <div className={styles.slide}>
              <Image
                src='/en-4.jpg'
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
