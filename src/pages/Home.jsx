import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const heroSlides = [
  { image: '/images/hero-family.jpg', alt: 'Family enjoying cool air conditioning' },
  { image: '/images/hero-comfort.jpg', alt: 'Modern air conditioner providing comfort' },
  { image: '/images/hero-relax.jpg', alt: 'Relaxing in air conditioned room' },
  { image: '/images/hero-happy.jpg', alt: 'Happy couple with air conditioning' },
];

const services = [
  {
    id: 'installation',
    title: 'Split AC Installation',
    desc: 'Professional residential and office AC installation with safe indoor & outdoor unit setup.',
    image: '/images/service-installation.jpg',
  },
  {
    id: 'maintenance',
    title: 'AC Maintenance',
    desc: 'Regular servicing, deep cleaning, and preventive maintenance to keep your AC running at peak performance.',
    image: '/images/service-maintenance.jpg',
  },
  {
    id: 'repairs',
    title: 'Breakdown & Repairs',
    desc: 'Fast diagnosis and repair for AC not cooling, water leakage, strange noises, and power issues.',
    image: '/images/service-repair.jpg',
  },
  {
    id: 'gas-charging',
    title: 'Gas Charging',
    desc: 'Professional gas checking, top-up, leak detection, and refrigerant-related services.',
    image: '/images/service-gas.jpg',
  },
  {
    id: 'design-supply',
    title: 'Design & Supply',
    desc: 'Expert AC system consultation, air conditioner supply, and tailored design recommendations.',
    image: '/images/service-supply.jpg',
  },
];

const badges = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    title: 'Island Wide Coverage',
    desc: 'Serving across Colombo, Matara, Dickwella, Tangalle & Belihattha',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
    ),
    title: 'Expert Technicians',
    desc: 'Skilled and certified professionals with years of experience',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    ),
    title: 'Fast Response',
    desc: 'Quick response times for emergency breakdowns and urgent repairs',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    title: 'Affordable Pricing',
    desc: 'Competitive and transparent pricing with no hidden charges',
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ===== HERO SLIDESHOW ===== */}
      <section className="hero-slideshow" id="hero">
        {heroSlides.map((slide, index) => (
          <div key={index} className={`hero-slide ${index === currentSlide ? 'active' : ''}`}>
            <img src={slide.image} alt={slide.alt} />
            <div className="hero-overlay" />
          </div>
        ))}

        <div className="hero-content">
          <div className="max-w-2xl">
            <p className="text-blue-lighter font-semibold text-sm md:text-base uppercase tracking-widest mb-3">Welcome To</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2 leading-tight">
              Delvex<br />
              <span className="text-blue-lighter">Engineering</span>
            </h1>
            <p className="text-gray-300 text-base md:text-lg mb-8 max-w-lg leading-relaxed">
              We provide smart, reliable, and efficient air conditioning solutions tailored to your needs. With expert service and a focus on quality, we help you achieve lasting comfort.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/94764884688?text=Hello%20Delvex%20Engineering%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                id="hero-get-in-touch"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Get In Touch
              </a>
              <Link to="/services" className="btn-primary" id="hero-our-services">
                Our Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Slide Dots */}
        <div className="hero-dots">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section className="py-16 md:py-24 bg-white" id="about-section">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src="/images/technician-thumbsup.jpg" alt="Delvex Engineering technician" className="w-full h-[400px] object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue/10 rounded-2xl -z-10"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-ice rounded-2xl -z-10"></div>
            </div>

            {/* Content */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1 h-8 bg-blue rounded"></div>
                <p className="text-blue font-semibold text-sm uppercase tracking-wider">About Us</p>
              </div>
              <h2 className="section-title">About — <span className="text-blue">Delvex Engineering</span></h2>
              <div className="section-divider"></div>
              <p className="text-gray-600 leading-relaxed mb-4">
                <span className="text-blue font-semibold">Delvex Engineering</span> is a trusted provider of split-type air conditioner solutions across Sri Lanka. With a strong commitment to quality and precision, we specialize in delivering reliable AC installation, maintenance, and repair services that meet the evolving needs of our clients.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our team is driven by expertise, integrity, and a passion for excellence in every project we undertake. Whether it's a residential installation, office setup, or emergency breakdown repair, Delvex Engineering brings the right mix of experience and modern tools to deliver results that matter.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                At <span className="text-blue font-semibold">Delvex Engineering</span>, we deliver smart, efficient, and reliable AC solutions tailored to your needs. Our mission is to support your comfort through expert service and innovative thinking.
              </p>
              <Link to="/about" className="btn-primary" id="about-learn-more">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="py-16 md:py-24 bg-gray-50" id="services-section">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="section-title">Our Best <span className="text-blue">Services</span></h2>
            <div className="section-divider mx-auto"></div>
            <p className="section-subtitle mx-auto">Comprehensive air conditioning solutions from installation to maintenance, all delivered by certified professionals.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link to={`/services?tab=${service.id}`} key={service.id} className="service-card group" id={`service-card-${service.id}`}>
                <div className="overflow-hidden">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-lg text-navy mb-2 group-hover:text-blue transition-colors">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
                  <div className="mt-4 flex items-center gap-2 text-blue text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/services" className="btn-primary" id="view-all-services">
              View All Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-16 md:py-24 bg-white" id="why-choose-us">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="section-title">Why Choose <span className="text-blue">Us</span></h2>
            <div className="section-divider mx-auto"></div>
            <p className="section-subtitle mx-auto">Trusted by homes and businesses across Sri Lanka for quality AC solutions.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {badges.map((badge, index) => (
              <div key={index} className="badge-card">
                <div className="badge-icon">{badge.icon}</div>
                <h3 className="font-heading font-bold text-navy text-base mb-2">{badge.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{badge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICE AREAS ===== */}
      <section className="py-16 md:py-20 bg-navy" id="service-areas">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-black text-white mb-2">Our Service <span className="text-blue-lighter">Areas</span></h2>
            <div className="section-divider mx-auto"></div>
            <p className="text-gray-400 max-w-lg mx-auto">We provide island wide AC services across these major locations in Sri Lanka.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {['Colombo', 'Matara', 'Dickwella', 'Tangalle', 'Belihattha'].map((area) => (
              <div key={area} className="flex items-center gap-2 bg-navy-light border border-navy-lighter rounded-full px-6 py-3 text-gray-300 hover:border-blue hover:text-white transition-all">
                <svg className="w-4 h-4 text-blue-lighter" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span className="font-semibold text-sm">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-blue to-blue-lighter relative overflow-hidden" id="cta-banner">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3"></div>
        </div>
        <div className="max-w-[1400px] mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-black text-white mb-4">Need AC Service? Contact Us Today!</h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">Get professional air conditioning services at affordable prices. We're just a call or message away.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/94764884688?text=Hello%20Delvex%20Engineering%2C%20I%20need%20AC%20service."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-whatsapp text-white rounded-lg font-heading font-bold text-base hover:bg-whatsapp-dark transition-all hover:-translate-y-1 shadow-lg"
              id="cta-whatsapp"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp Us
            </a>
            <a
              href="tel:+94764884688"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue rounded-lg font-heading font-bold text-base hover:bg-gray-100 transition-all hover:-translate-y-1 shadow-lg"
              id="cta-call"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
