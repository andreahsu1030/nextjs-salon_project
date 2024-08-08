import styles from './page.module.sass';

const ServicePage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>價目表</div>
      <div className={styles.frame}>
        <div className={styles.container}>

          <div className={styles['block-1']}>
            <div className={styles.project}>燙髮</div>
            <div className={styles.item}>
              <div className={styles.name}>技術燙</div>
              <div className={styles.price}>$1000</div>
            </div>
            <div className={styles.item}>
              <div className={styles.name}>熱碩燙</div>
              <div className={styles.price}>3500 UP</div>
            </div>
            <div className={styles.item}>
              <div className={styles.name}>冷燙</div>
              <div className={styles.price}>2000 UP</div>
            </div>
          </div>

          <div className={styles['block-2']}>
            <div className={styles.project}>染髮</div>
            <div className={styles.item}>
              <div className={styles.name}>補染</div>
              <div className={styles.price}>2200 UP</div>
            </div>
            <div className={styles.item}>
              <div className={styles.name}>漂髮</div>
              <div className={styles.price}>2200 UP</div>
            </div>
            <div className={styles.item}>
              <div className={styles.name}>特殊染</div>
              <div className={styles.price}>5000UP</div>
            </div>
          </div>

          <div className={styles['block-3']}>
            <div className={styles.project}>護髮</div>
            <div className={styles.item}>
              <div className={styles.name}>頭皮護理</div>
              <div className={styles.price}>1800 UP</div>
            </div>
            <div className={styles.item}>
              <div className={styles.name}>髮質修護</div>
              <div className={styles.price}>2200 UP</div>
            </div>
          </div>

          <div className={styles['block-4']}>
            <div className={styles.project}>洗髮</div>
            <div className={styles.item}>
              <div className={styles.name}>頭皮深層洗髮</div>
              <div className={styles.price}>200</div>
            </div>
            <div className={styles.item}>
              <div className={styles.name}>精油洗髮</div>
              <div className={styles.price}>500</div>
            </div>
            <div className={styles.item}>
              <div className={styles.name}>護色洗髮</div>
              <div className={styles.price}>500</div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
