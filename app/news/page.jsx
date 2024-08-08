import styles from "./page.module.sass";
import NewsItem from "@/Components/news/news-item";

export default function NewsPage() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.title}>最新消息</div>
        <NewsItem />
        <NewsItem />
      </div>
    </>
  );
}
