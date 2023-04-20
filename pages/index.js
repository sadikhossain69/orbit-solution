import ContactUsSection from '@/components/ContactUsSection/ContactUsSection'
import CounterSection from '@/components/CounterSection/CounterSection'
import EMISection from '@/components/EMISection/EMISection'
import FooterSection from '@/components/FooterSection/FooterSection'
import HeroSection from '@/components/HeroSection/HeroSection'
import LatestProject from '@/components/LatestProject/LatestProject'
import LogoSection from '@/components/LogoSection/LogoSection'
import Navbar from '@/components/Navbar/Navbar'
import OurTeam from '@/components/OurTeam/OurTeam'
import ServiceSection from '@/components/ServiceSection/ServiceSection'
import WeGaveSection from '@/components/WeGaveSection/WeGaveSection'
import Head from 'next/head'
import Script from 'next/script'
import { SiWhatsapp } from 'react-icons/si'

export default function Home() {
  return (
    <>
      <Head>
        <title>Observe Digital Solution</title>
        <meta name="description" content="Welcome To Observe Digital Solution is a Professional software and website agency Platform. Here we will provide you only interesting content, which you will like very much. Were dedicated to providing you the best of software and website agency." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossOrigin="anonymous"></Script>
      <Script src="https://kit.fontawesome.com/a7d5affee1.js" crossOrigin="anonymous"></Script>

      {/* Navbar Imported */}
      <Navbar />

      {/* Hero Section Imported */}
      <HeroSection />

      {/* Logo Section Imported */}
      <LogoSection />

      {/* EMI Section Imported */}
      {/* <EMISection /> */}

      {/* Service Section Imported */}
      <ServiceSection />

      {/* Counter Section Imported */}
      <CounterSection />

      {/* Latest Project Section Imported */}
      <LatestProject />

      {/* We Gave Section Imported */}
      <WeGaveSection />

      {/* Our Team Section Imported */}
      <OurTeam />

      {/* Contact Us Section Imported */}
      <ContactUsSection />

      

      {/* Footer Section Imported */}
      <FooterSection />
    </>
  )
}
