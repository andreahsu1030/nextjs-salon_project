import styles from "./banner.module.sass";
import Image from "next/image";

const Banner = () => {
  return (
    <>
      <div className={styles.banner}>
        <Image src="/bg1.jpg" fill alt="" priority />
      </div>
    </>
  );
};

export default Banner;
