
import styles from './footer.module.sass'
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaPhoneVolume, FaLocationDot } from "react-icons/fa6";
import { RiScissorsFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.sitename}>
          <RiScissorsFill color='#dddd' />
          <div>汎亞髮藝</div>
        </h2>
        <div className={styles.info}>
          <div className={styles.address}>
            <FaLocationDot color='#dddd' size={20} />
            <div>南京東路五段133號2樓</div>
          </div>
          <div className={styles.telephone}>
            <FaPhoneVolume color='#dddd' size={20} />
            <div>02-2753-1111</div>
          </div>
          <div className={styles.medium}>
            <div><a href="#"><FaFacebook color='#dddd' size={30} /></a></div>
            <div><a href="#"><FaInstagram color='#dddd' size={30} /></a></div>
          </div>
        </div>
        <div className={styles.copyright}>Copyright © 汎亞髮藝│ All Rights Reserved.</div>
      </div>
    </div>
  )
}

export default Footer