import Image from 'next/image';
import Hero from './components/Hero';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Promotions from './components/Promotions';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className='min-h-screen bg-white overflow-x-hidden'>
      <Hero />
      <About />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <Promotions />
      <Contact />
      <Footer />
    </main>
  );
}
