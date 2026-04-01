const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-brand-blue font-bold text-lg mb-4 uppercase">Win Auto</h3>
            <p className="text-gray-600 text-sm">
              House of Genuine spare parts since 2008. Leading distributor of Bajaj auto limited.
            </p>
          </div>
          <div>
            <h3 className="text-brand-blue font-bold text-lg mb-4 uppercase">Quick Links</h3>
            <ul className="text-gray-600 text-sm space-y-2">
              <li><a href="#about" className="hover:text-brand-blue">About Us</a></li>
              <li><a href="#services" className="hover:text-brand-blue">Our Services</a></li>
              <li><a href="#catalog" className="hover:text-brand-blue font-bold text-blue-600">Digital Catalog</a></li>
              <li><a href="#contact" className="hover:text-brand-blue">Get in Touch</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-brand-blue font-bold text-lg mb-4 uppercase">Contact</h3>
            <div className="text-gray-600 text-sm leading-relaxed space-y-2">
              <p><strong>Head Office:</strong> S.no.40, 1/3a, Chettiyar Agaram St, Sivabatham, Vanagaram, Chennai - 600095</p>
              <p><strong>Warehouse:</strong> Vanagaram Industrial Area, Chennai - 600 095</p>
              <p><strong>Email:</strong> arunwinauto@gmail.com</p>
              <p><strong>Phone:</strong> +91 9150760720, +91 9600187328</p>
            </div>
          </div>
          <div>
            <h3 className="text-brand-blue font-bold text-lg mb-4 uppercase">Branch Locations</h3>
            <div className="text-gray-600 text-xs leading-relaxed space-y-3">
              <address className="not-italic">
                <strong>Vadapalani:</strong> NO-23 BHRATHIYAR COMPLEX 100FT ROAD VADAPALANI-CHENNAI-600026<br />Ph: 7550160111
              </address>
              <address className="not-italic">
                <strong>Chromepet:</strong> NO-123 G STROAD CROMPET CHENNAI-600044<br />Ph: 7550160333
              </address>
              <address className="not-italic">
                <strong>Villivakkam:</strong> NO-39 /2, M T H ROAD VILLIVAKKAMCHENNAI-600049<br />Ph: 7550160444
              </address>
              <address className="not-italic">
                <strong>Velachery:</strong> NO-95/94 KANNIKAPURAM, 7TH STREET VELACHERRY MAIN ROAD CHENNAI-600042<br />Ph: 7550160555
              </address>
              <address className="not-italic">
                <strong>Porur:</strong> 124 / 10 - THIRUMURUGAN ROAD, KAMALA NAGAR, PORUR CHENNAI-600116<br />Ph: 7550160666
              </address>
              <address className="not-italic">
                <strong>Old Washermenpet:</strong> NO-27/1, CEMENTRY ROAD OLDWASHERMENPET CHENNAI-600021<br />Ph: 7550160888
              </address>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-400 text-xs text-balance">
          &copy; {new Date().getFullYear()} Win Auto. All rights reserved. Registered at Chennai, Tamil Nadu.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
