import Head from 'next/head'

import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Banner from '@/components/Banner'
import OurPrograms from '@/components/OurPrograms'
import HowWeDo from '@/components/HowWeDo'
import OurClientHaveSeen from '@/components/OurClientHaveSeen'
import HowProgramWorks from '@/components/HowProgramWorks'
import Stories from '@/components/Stories'
import Footer from '@/components/Footer'
import ExpertTeam from '@/components/ExpertTeam'
import OurMobileApp from '@/components/OurMobileApp'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Heathy-life</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet"></link>
      </Head>
      <Navbar />
      <Banner />
      <OurPrograms />
      {/* <HowWeDo /> */}
      {/* <OurClientHaveSeen /> */}
      {/* <HowProgramWorks /> */}
      {/* <Stories /> */}
      {/* <ExpertTeam /> */}
      {/* <OurMobileApp /> */}
      {/* <Footer /> */}
    </>
  )
}
