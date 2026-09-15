import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <img src="/images/technician-safety.jpg" alt="About Delvex Engineering" />
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <p className="text-blue-lighter font-semibold text-sm uppercase tracking-widest mb-2">Who We Are</p>
          <h1 className="text-4xl md:text-5xl font-heading font-black text-white">About Us</h1>
          <div className="section-divider mx-auto mt-4"></div>
        </div>
      </section>

      {/* Coming Soon Content */}
      <section className="py-24 md:py-32 bg-white" id="about-content">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="w-20 h-20 rounded-full bg-blue/10 flex items-center justify-center mx-auto mb-8">
            <svg className="w-10 h-10 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
          </div>
          <h2 className="section-title text-3xl mb-4">About <span className="text-blue">Delvex Engineering</span></h2>
          <div className="section-divider mx-auto"></div>
          <p className="text-gray-600 leading-relaxed mb-6 text-lg">
            <span className="text-blue font-semibold">Delvex Engineering</span> is a trusted provider of split-type air conditioner solutions across Sri Lanka. With a strong commitment to quality and precision, we specialize in delivering reliable AC installation, maintenance, and repair services.
          </p>
          <p className="text-gray-500 leading-relaxed mb-8">
            Our team is driven by expertise, integrity, and a passion for excellence. Our mission is to support your comfort through expert service and innovative thinking. Full company profile and team details are coming soon.
          </p>

          <div className="bg-ice rounded-2xl p-8 mb-8">
            <p className="text-blue font-heading font-bold text-xl italic">"Your Comfort, Our Priority"</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/services" className="btn-primary">
              View Our Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <Link to="/contact" className="btn-whatsapp">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
