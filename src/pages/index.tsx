import Head from 'next/head';
import Header from '@/components/Header/Header';
import HomeBanner from '@/components/HomeBanner/HomeBanner';
import About from '@/components/About/About';
import Services from '@/components/Services/Services';
import Stats from '@/components/Stats/Stats';
import Portfolio from '@/components/Portfolio/Portfolio';
import Testimonials from '@/components/Testimonials/Testimonials';
import Footer from '@/components/Footer/Footer';
import Blog from '@/components/Blog/Blog';

export default function HomePage() {
  return <>
  <Head>
        <title>CTBENG</title>
        <meta name="description" content="Phuong Dong Offshore Engineering JSC (CTB Engineering) is a company that provides offshore engineering services to the oil and gas industry." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HomeBanner />
      <About />
      <Services />
      <Stats />
      <Portfolio />
      <Testimonials />
      <Blog />
      <Footer />
  </>
}
