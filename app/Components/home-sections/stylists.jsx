import styles from "./stylists.module.sass";
import Image from "next/image";
import Link from "next/link";

const stylists = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.avatar}>
          <Image src="/cat.jpeg" alt="" fill />
        </div>
        <div className={styles.stylist}>
          <Link href="./portfolio">
            Andrea
          </Link>
        </div>
      </div>
    </div>
  );
};

export default stylists;
