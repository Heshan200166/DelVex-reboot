import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const waMessage = `Hello Delvex Engineering,%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/94764884688?text=${waMessage}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <img src="/images/technician-thumbsup.jpg" alt="Contact Us" />
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <p className="text-blue-lighter font-semibold text-sm uppercase tracking-widest mb-2">Get In Touch</p>
          <h1 className="text-4xl md:text-5xl font-heading font-black text-white">Contact Us</h1>
          <div className="section-divider mx-auto mt-4"></div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 md:py-24 bg-gray-50" id="contact-info">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="section-title">How To <span className="text-blue">Reach Us</span></h2>
            <div className="section-divider mx-auto"></div>
            <p className="section-subtitle mx-auto">We're always ready to help. Choose the most convenient way to get in touch with us.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* WhatsApp 1 */}
            <a href="https://wa.me/94764884688" target="_blank" rel="noopener noreferrer" className="contact-card group" id="contact-whatsapp-1">
              <div className="w-16 h-16 rounded-full bg-whatsapp/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-whatsapp/20 transition-colors">
                <svg className="w-7 h-7 text-whatsapp" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </div>
              <h3 className="font-heading font-bold text-navy text-base mb-1">WhatsApp</h3>
              <p className="text-blue font-semibold text-sm">076 488 4688</p>
            </a>

            {/* WhatsApp 2 */}
            <a href="https://wa.me/94783920262" target="_blank" rel="noopener noreferrer" className="contact-card group" id="contact-whatsapp-2">
              <div className="w-16 h-16 rounded-full bg-whatsapp/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-whatsapp/20 transition-colors">
                <svg className="w-7 h-7 text-whatsapp" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </div>
              <h3 className="font-heading font-bold text-navy text-base mb-1">WhatsApp</h3>
              <p className="text-blue font-semibold text-sm">078 392 0262</p>
            </a>

            {/* Call 1 */}
            <a href="tel:+94764884688" className="contact-card group" id="contact-call-1">
              <div className="w-16 h-16 rounded-full bg-blue/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue/20 transition-colors">
                <svg className="w-7 h-7 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <h3 className="font-heading font-bold text-navy text-base mb-1">Call Us</h3>
              <p className="text-blue font-semibold text-sm">076 488 4688</p>
            </a>

            {/* Call 2 */}
            <a href="tel:+94741625403" className="contact-card group" id="contact-call-2">
              <div className="w-16 h-16 rounded-full bg-blue/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue/20 transition-colors">
                <svg className="w-7 h-7 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <h3 className="font-heading font-bold text-navy text-base mb-1">Call Us</h3>
              <p className="text-blue font-semibold text-sm">074 162 5403</p>
            </a>
          </div>

          {/* Form + Social / Service Areas */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Enquiry Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100" id="enquiry-form">
              <h2 className="font-heading font-bold text-2xl text-navy mb-2">Send Us A Message</h2>
              <div className="section-divider"></div>
              <p className="text-gray-500 text-sm mb-6">Fill out the form below and we'll get back to you via WhatsApp.</p>

              {submitted && (
                <div className="mb-6 p-4 bg-whatsapp/10 border border-whatsapp/30 rounded-lg text-whatsapp-dark text-sm font-medium">
                  Message sent successfully! We'll get back to you shortly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-navy mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    className="form-input"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="form-input"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-navy mb-2">Your Message</label>
                  <textarea
                    id="message"
                    className="form-input"
                    placeholder="Tell us about your AC needs..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <button type="submit" className="btn-whatsapp w-full justify-center" id="submit-enquiry">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Send via WhatsApp
                </button>
              </form>
            </div>

            {/* Social + Service Areas */}
            <div className="space-y-8">
              {/* Social Media */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100" id="social-links">
                <h2 className="font-heading font-bold text-2xl text-navy mb-2">Follow Us</h2>
                <div className="section-divider"></div>
                <p className="text-gray-500 text-sm mb-6">Stay updated with our latest work and offers on social media.</p>
                <div className="space-y-4">
                  <a
                    href="https://www.facebook.com/DelvexEngineering"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-blue/5 border border-gray-100 hover:border-blue/30 transition-all group"
                    id="social-facebook"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#1877F2] flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </div>
                    <div>
                      <p className="font-heading font-bold text-navy group-hover:text-blue transition-colors">Facebook</p>
                      <p className="text-gray-500 text-sm">Delvex Engineering</p>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 ml-auto group-hover:text-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </a>

                  <a
                    href="https://www.tiktok.com/@delvexengineering"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-blue/5 border border-gray-100 hover:border-blue/30 transition-all group"
                    id="social-tiktok"
                  >
                    <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                    </div>
                    <div>
                      <p className="font-heading font-bold text-navy group-hover:text-blue transition-colors">TikTok</p>
                      <p className="text-gray-500 text-sm">Delvex Engineering</p>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 ml-auto group-hover:text-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100" id="contact-service-areas">
                <h2 className="font-heading font-bold text-2xl text-navy mb-2">Service Areas</h2>
                <div className="section-divider"></div>
                <p className="text-gray-500 text-sm mb-6">We provide island wide AC services across these locations.</p>
                <div className="space-y-3">
                  {['Colombo', 'Matara', 'Dickwella', 'Tangalle', 'Belihattha'].map((area) => (
                    <div key={area} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100">
                      <svg className="w-5 h-5 text-blue flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      <span className="font-medium text-navy text-sm">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
