import { useEffect } from 'react';
import AOS from 'aos';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import About from './components/About';
import Services from './components/Services';
import Location from './components/Location';
import Testimonials from './components/Testimonials';
import ContactBanner from './components/ContactBanner';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import ScrollProgress from './components/ScrollProgress';
import SectionReveal from './components/SectionReveal';
import Founders from './components/Founders';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: 'ease-out-quad',
      offset: 40,
      disable: false,
    });
    window.addEventListener('load', () => AOS.refresh());
  }, []);

  return (
    <div className="font-poppins">
      {/* Global scroll progress bar + back-to-top button */}
      <ScrollProgress />

      <Navbar />

      {/* Hero — no reveal wrapper (it self-animates on load) */}
      <Hero />

      {/* Each section slides in from a different direction as user scrolls */}
      <SectionReveal direction="up">
        <WhyUs />
      </SectionReveal>

      <SectionReveal direction="left" delay={0.05}>
        <About />
      </SectionReveal>

      <SectionReveal direction="scale" delay={0.05}>
        <Founders />
      </SectionReveal>

      <SectionReveal direction="up" delay={0.05}>
        <Services />
      </SectionReveal>

      <SectionReveal direction="right" delay={0.05}>
        <Testimonials />
      </SectionReveal>

      <SectionReveal direction="up" delay={0.05}>
        <Location />
      </SectionReveal>

      <SectionReveal direction="scale" delay={0.05}>
        <ContactBanner />
      </SectionReveal>

      <SectionReveal direction="fade" delay={0.05}>
        <Footer />
      </SectionReveal>

      {/* Floating WhatsApp button */}
      <WhatsAppFloat />
    </div>
  );
}

export default App;
