import styles from "./news-item.module.sass";
export default function NewsItem() {
  return (
    <>
      <div className={styles.item}>
        <div className={styles.category}>最新公告</div>
        <div className={styles.content}>
          <div className={styles.heading}>官方LINE已經上線</div>
          <p className={styles.brief}>請透過官方Lin預約 aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
        </div>
        <div className={styles.date}>
          <p className={styles.yearMonth}>2024 / 4</p>
          <p className={styles.day}> 15</p>
        </div>
      </div>
    </>
  );
}
