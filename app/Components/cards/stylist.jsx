import styles from './stylist.module.sass'
import Link from 'next/link'
import Image from 'next/image'

const Stylist = () => {
  return (
    <>
      <Link href='/stylists/1' className={styles.link}>
        <div className={styles.card}>
          <div className={styles.photo}>
            <Image
              src='/stylist-2.webp'
              fill
              alt=''
            />
          </div>

          <div className={styles.name}>Andrea</div>
        </div>
      </Link>
    </>
  )
}
export default Stylist