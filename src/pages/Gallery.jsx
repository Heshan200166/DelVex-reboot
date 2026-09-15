import { Link } from 'react-router-dom';

export default function Gallery() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <img src="/images/service-installation-2.jpg" alt="Our Gallery" />
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <p className="text-blue-lighter font-semibold text-sm uppercase tracking-widest mb-2">Our Work</p>
          <h1 className="text-4xl md:text-5xl font-heading font-black text-white">Gallery</h1>
          <div className="section-divider mx-auto mt-4"></div>
        </div>
      </section>

      {/* Coming Soon Content */}
      <section className="py-24 md:py-32 bg-white" id="gallery-content">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="w-20 h-20 rounded-full bg-blue/10 flex items-center justify-center mx-auto mb-8">
            <svg className="w-10 h-10 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
          </div>
          <h2 className="section-title text-3xl mb-4">Gallery <span className="text-blue">Coming Soon</span></h2>
          <div className="section-divider mx-auto"></div>
          <p className="text-gray-600 leading-relaxed mb-6 text-lg">
            Our gallery is being updated with photos from our latest installation and service projects across Sri Lanka.
          </p>
          <p className="text-gray-500 leading-relaxed mb-8">
            Check back soon to see our completed work, or follow us on social media for real-time updates.
          </p>

          {/* Placeholder Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            {['/images/service-installation.jpg', '/images/service-maintenance.jpg', '/images/service-repair.jpg', '/images/service-supply.jpg', '/images/ac-wall-unit.jpg', '/images/service-gas.jpg'].map((img, i) => (
              <div key={i} className="rounded-xl overflow-hidden shadow-md aspect-square">
                <img src={img} alt={`Gallery preview ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://www.facebook.com/DelvexEngineering" target="_blank" rel="noopener noreferrer" className="btn-primary">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              Follow on Facebook
            </a>
            <Link to="/contact" className="btn-whatsapp">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
