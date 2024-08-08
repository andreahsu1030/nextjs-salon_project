import styles from './album.module.sass'
import Link from 'next/link'
import Image from 'next/image'

const Album = () => {
  return (
    <>
      <Link href='/portfolio/1' className={styles.link}>
        <div className={styles.card}>
          <div className={styles.photo}>
            <Image
              src='/stylist-2.webp'
              fill
              alt=''
            />
          </div>

          <div className={styles.name}>Andrea 作品集</div>
        </div>
      </Link>
    </>
  )
}

export default Album