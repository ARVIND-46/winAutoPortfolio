const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
            <p className="text-gray-600 text-sm leading-relaxed">
              <strong>Head Office:</strong> 23,Bharathiyar complex, 100 feet road, Vadapalani, Chennai - 600 026<br />
              <strong>Warehouse:</strong> 1, Perumal Kovil street, Maduravoyal, Chennai - 600 095<br />
              <strong>Email:</strong> arunwinauto@gmail.com<br />
              <strong>Phone:</strong> +91 9150760720, +91 9600187328
            </p>
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
