import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#0c2340] text-slate-300 border-t border-[#15325b]">
      {/* Main Footer */}
      <div className="site-container py-10 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 md:gap-10">
          {/* Column 1: Brand */}
          <div className="space-y-3 sm:space-y-4">
            <Link to="/" className="inline-block bg-white p-2.5 rounded-xl shadow-sm">
              <img src="/images/logo.jpg" alt="Delvex Engineering Logo" className="h-10 md:h-11 w-auto object-contain" />
            </Link>
            <p className="text-xs md:text-sm leading-relaxed text-slate-300 max-w-sm">
              Your trusted partner for split-type air conditioner installation, maintenance, repair and gas charging services across Sri Lanka.
            </p>
            <p className="text-sky-300 font-semibold text-xs md:text-sm italic">
              "Your Comfort, Our Priority"
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-heading font-bold text-base md:text-lg mb-2">Quick Links</h3>
            <div className="w-10 h-0.5 bg-sky-400 mb-3 md:mb-4 rounded-full"></div>
            <nav className="flex flex-wrap sm:flex-col gap-x-5 gap-y-2 text-sm">
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/services" className="footer-link">Services</Link>
              <Link to="/about" className="footer-link">About Us</Link>
              <Link to="/gallery" className="footer-link">Gallery</Link>
              <Link to="/contact" className="footer-link">Contact</Link>
            </nav>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-white font-heading font-bold text-base md:text-lg mb-2">Contact Us</h3>
            <div className="w-10 h-0.5 bg-sky-400 mb-3 md:mb-4 rounded-full"></div>
            <div className="space-y-3 text-xs md:text-sm">
              <div>
                <p className="text-slate-400 text-[11px] uppercase tracking-wider mb-1.5 font-medium">WhatsApp</p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
                  <a href="https://wa.me/94764884688" target="_blank" rel="noopener noreferrer" className="footer-link flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    <span>076 488 4688</span>
                  </a>
                  <a href="https://wa.me/94783920262" target="_blank" rel="noopener noreferrer" className="footer-link flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    <span>078 392 0262</span>
                  </a>
                </div>
              </div>
              <div>
                <p className="text-slate-400 text-[11px] uppercase tracking-wider mb-1.5 font-medium">Direct Phone</p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
                  <a href="tel:+94764884688" className="footer-link flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    <span>076 488 4688</span>
                  </a>
                  <a href="tel:+94741625403" className="footer-link flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    <span>074 162 5403</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Service Areas & Socials */}
          <div>
            <h3 className="text-white font-heading font-bold text-base md:text-lg mb-2">Service Areas</h3>
            <div className="w-10 h-0.5 bg-sky-400 mb-3 md:mb-4 rounded-full"></div>
            <div className="flex flex-wrap gap-1.5 sm:gap-2 text-xs text-slate-300 mb-4 sm:mb-5">
              {['Colombo', 'Matara', 'Dickwella', 'Tangalle', 'Belihattha'].map((area) => (
                <div key={area} className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#15325b]/70 border border-sky-400/20 text-slate-200">
                  <svg className="w-3 h-3 text-sky-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <span>{area}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2.5">
              <a href="https://www.facebook.com/share/14nisH8aAYf/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-[#15325b] border border-sky-400/20 flex items-center justify-center text-slate-300 hover:bg-sky-500 hover:text-white transition-all shadow-sm" aria-label="Facebook">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.tiktok.com/@delvexengineering" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-[#15325b] border border-sky-400/20 flex items-center justify-center text-slate-300 hover:bg-sky-500 hover:text-white transition-all shadow-sm" aria-label="TikTok">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#15325b] bg-[#08172b]">
        <div className="site-container py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400">
          <p>&copy; {new Date().getFullYear()} Delvex Engineering. All rights reserved.</p>
          <Link to="/services" className="text-slate-500 hover:text-sky-400 transition-colors">Installation &nbsp;|&nbsp; Service &nbsp;|&nbsp; Maintenance</Link>
        </div>
      </div>
    </footer>
  );
}
