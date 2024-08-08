import styles from './page.module.sass'
import Contact from './Components/home-sections/contact'
import Stylists from './Components/home-sections/stylists'
import Carousel from './Components/home-sections/carousel/carousel'
import EnvironmentCarousel from './Components/home-sections/environment-carousel';


const HomePage = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.about}>
          汎亞髮藝，這裡不僅是一個理髮店，更像是一個開啟個人風格無限可能性的寶盒。<br />
          我們將髮藝視為一種藝術，每一根髮絲都是我們創造美麗的畫筆，<br />
          每位顧客都是我們的畫布，我們的使命就是讓每個人都散發出自信與魅力。<br />
          <br />
          我們專注於將髮型打造成為展現個人風格的藝術品。<br />
          無論您追求的是時尚前衛還是經典優雅，我們的專業髮型師團隊都能滿足您的需求。<br />
          我們使用高品質產品和先進技術，為您提供修剪、染髮、燙髮等多樣化服務，讓您散發自信魅力。<br />
        </div>
        <EnvironmentCarousel />
        <Contact />
        <Carousel />
      </div>
    </>
  )
}


export default HomePage