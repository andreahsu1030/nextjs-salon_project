import { Noto_Sans_TC, Sans_Serif } from "next/font/google";
import "./normalize.css";
import './globals.css'
import Header from './Components/header/header'
import Footer from './Components/footer/footer'
import Banner from './Components/home-sections/banner'

const noto_sans_tc = Noto_Sans_TC({ weight: ['400'], subsets: ['latin'] });

export const metadata = {
  title: "汎亞髮藝",
  description: "髮型專家",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={noto_sans_tc.className}>
        <Header />
        <Banner />
        {children}
        <Footer />
      </body>
    </html>
  );
}
