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
                <strong>Vadapalani:</strong> 23, 1st Street Thiru Nagar Colony, Wholesale Market Complex, Vadapalani, Chennai 600078
              </address>
              <address className="not-italic">
                <strong>Chromepet:</strong> 123, National Hwy 32, Lakshmi Nagar, Shanthi Nagar, Chromepet, Chennai 600044
              </address>
              <address className="not-italic">
                <strong>Villivakkam:</strong> No.39/2, Madras Thiruvallur High Rd, Villivakkam, Chennai 600049
              </address>
              <address className="not-italic">
                <strong>Porur:</strong> No 124/12, Thirumurugan Rd, near Viveks Agency, Kamala Nagar, Porur, Chennai 600116
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
