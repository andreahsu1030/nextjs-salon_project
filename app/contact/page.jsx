'use client'
import styles from './page.module.sass'
import Image from 'next/image'
import { useState } from 'react'

const ContactPage = () => {
  const [formVisible, setFormVisible] = useState(false)
  const handleFormOpen = () => {
    setFormVisible(true)
  }
  const handleFormClose = () => {
    setFormVisible(false)
  }
  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log('done')
    handleFormClose()
  }
  return (
    <>
      <div className={styles.title}>聯絡我們</div>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <div className={styles.address}>
            <div className={styles.infoTitle}>汎亞地址：</div>
            <div>台北市松山區南京東路五段123巷2弄9號1樓</div>
          </div>
          <div className={styles.tel}>
            <div className={styles.infoTitle}>聯絡電話： </div>
            <div>02 - 2753-5214</div>
          </div>
          <div className={styles.openTime}>
            <div className={styles.infoTitle}>營業時間： </div>
            <div>週一至六 上午10:30至晚上19:30 / 週日公休</div>
          </div>
        </div>
        <div className={styles.map}>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.466028887104!2d121.55871783974261!3d25.052189077897047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ab94e8fc0103%3A0x7e41103430f3ae24!2z5rGO5Lqe6auu6Jed!5e0!3m2!1szh-TW!2stw!4v1709283258883!5m2!1szh-TW!2stw'
            width='100%'
            height='250'
            style={{ border: 0 }}
            allowfullscreen=''
            loading='lazy'
            referrerpolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </div>

      <div className={styles['customer-service']}>
        <button className={styles.line}>
          <Image
            src='/line.png'
            width={32}
            height={32}
          />
          立即加入
        </button>
        <button
          className={styles['form-btn']}
          onClick={handleFormOpen}
        >
          聯絡客服
        </button>
      </div>

      {formVisible && (
        <div className={styles['form-wrapper']}>
          <form className={styles['contact-form']} onSubmit={handleFormSubmit}>
            <h3>聯絡客服</h3>
            <span>當訊息一被接收會立刻回覆您！</span>
            <input
              type='text'
              placeholder='請輸入您的全名'
            />
            <input
              type='text'
              placeholder='請輸入您的常用電話 e.g. 0987654321'
            />
            <input
              type='text'
              placeholder='請輸入您的信箱 e.g. 123@gmail.com'
            />

            <textarea
              rows={10}
              type='text'
              placeholder=''
            />
            <button>送出</button>
          </form>
        </div>
      )}
    </>
  )
}

export default ContactPage
