import styles from './contact.module.sass';
import Image from "next/image";
import Link from "next/link"

const Contact = () => {
  return (
    <div className={styles.contact}>
      <p>各式髮型與變化，不確定自己是哪種嗎？</p>
      <p>依據您的髮質髮量及色彩，為您判斷適合的造型及色調。</p>
      <Link href="/contact">線上專業諮詢</Link>
      <Image src="/bg-2.jpeg" fill alt="" />
    </div>
  );
};
export default Contact;
