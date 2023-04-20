import "@/styles/style.css"
import "@/styles/responsive.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from "react";
import "@/components/Custom/ArrowDesign.css"

export default function App({ Component, pageProps }) {

  useEffect(() => {
    AOS.init({
      duration: 2000,
      // once: true,
    })
  }, [])

  return <Component {...pageProps} />
}
