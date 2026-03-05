import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "./utils";
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, Youtube, ChevronDown } from "lucide-react";
import vicmarLogo from "@/images/logos/transparent-vicmar-logo.png";
import vicmarLogoFooter from "@/images/logos/vicmar-logo-footer.png";

export default function Layout({ children, currentPageName }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", page: "Home" },
    { name: "Listings", page: "Listings" },
    { name: "Properties", page: "Properties" },
    { name: "Amenities", page: "Amenities" },
    { name: "About Us", page: "AboutUs" },
  ];

  const aboutDropdownLinks = [
    { name: "Our Vision", to: createPageUrl("AboutUs") + "#vision" },
    { name: "Our Values", to: createPageUrl("AboutUs") + "#values" },
    { name: "Our Sustainable Community", to: createPageUrl("AboutUs") + "#sustainable-community" },
    { name: "Sustainable Living Features", to: createPageUrl("AboutUs") + "#sustainable-living" },
    { name: "Customizable Home Gardens", to: createPageUrl("AboutUs") + "#home-gardens" },
    { name: "Get In Touch", to: createPageUrl("AboutUs") + "#contact" },
  ];

  const amenitiesDropdownLinks = [
    { name: "Community Amenities", to: createPageUrl("Amenities") + "#community-amenities" },
    { name: "Live the Vicmar Lifestyle", to: createPageUrl("Amenities") + "#vicmar-lifestyle" },
    { name: "Community Gallery", to: createPageUrl("Amenities") + "#community-gallery" },
  ];

  const propertiesDropdownLinks = [
    { name: "Duplex Units", to: createPageUrl("Properties") + "#duplex" },
    { name: "Triplex Units", to: createPageUrl("Properties") + "#triplex" },
    { name: "Rowhouse Units", to: createPageUrl("Properties") + "#rowhouse" },
  ];

  const handleDropdownClick = (e, targetHash, pageName) => {
    // If already on the same page, scroll to section
    if (currentPageName === pageName) {
      e.preventDefault();
      const element = document.getElementById(targetHash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    // Otherwise, let React Router navigate normally and the hash will be handled by the target page
  };

  return (
    <div className="min-h-screen flex flex-col">
      <style>{`
        :root {
          --primary-green: #166534;
          --primary-light-green: #22c55e;
          --primary-light-green-hover: #16a34a;
        }

        .nav-link {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          padding: 0.5rem 1rem;
          border-radius: 0.375rem;
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 1rem;
          right: 1rem;
          height: 2px;
          background-color: #166534;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }

        .nav-link:hover {
          transform: translateY(-2px);
          color: #166534;
        }

        .nav-link:hover::after {
          transform: scaleX(1);
        }

        .nav-link.active {
          background-color: #166534;
          color: white;
        }

        .nav-link.active::after {
          display: none;
        }

        @keyframes pulse-border {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(22, 101, 52, 0.7);
          }
          50% {
            box-shadow: 0 0 0 4px rgba(22, 101, 52, 0);
          }
        }

        @keyframes subtle-scale {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .find-property-btn {
          transition: all 0.3s ease;
        }

        .find-property-btn:hover {
          animation: pulse-border 0.6s ease-out;
          transform: scale(1.05);
          box-shadow: 0 0 0 4px rgba(22, 101, 52, 0.1);
        }
      `}</style>

      {/* Top Bar */}
      <div className="bg-[#166534] text-white py-2 px-4 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+63432332050" className="flex items-center gap-2 hover:text-[#86efac] transition-colors">
              <Phone className="w-4 h-4" />
              (043) 233-2050
            </a>
            <a href="mailto:info@vicmarhomes.com" className="flex items-center gap-2 hover:text-[#86efac] transition-colors">
              <Mail className="w-4 h-4" />
              info@vicmarhomes.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-[#86efac] transition-colors"><Facebook className="w-4 h-4" /></a>
            <a href="#" className="hover:text-[#86efac] transition-colors"><Instagram className="w-4 h-4" /></a>
            <a href="#" className="hover:text-[#86efac] transition-colors"><Youtube className="w-4 h-4" /></a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center">
              <img src={vicmarLogo} alt="Vicmar Homes" className="h-14 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                link.page === "AboutUs" || link.page === "Amenities" || link.page === "Properties" ? (
                  <div key={link.page} className="relative group">
                    <Link
                      to={createPageUrl(link.page)}
                      className={`nav-link ${
                        currentPageName === link.page ? "active" : "text-gray-700"
                      }`}
                    >
                      {link.name}
                      <ChevronDown className="w-4 h-4" />
                    </Link>
                    <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out z-50">
                      <div className="bg-white border border-gray-200 rounded-md shadow-lg min-w-[240px] transform origin-top scale-95 group-hover:scale-100 transition-transform duration-200">
                        {(link.page === "AboutUs"
                          ? aboutDropdownLinks
                          : link.page === "Amenities"
                            ? amenitiesDropdownLinks
                            : propertiesDropdownLinks).map((item, index) => {
                          const hash = item.to.split('#')[1];
                          return (
                            <Link
                              key={item.name}
                              to={item.to}
                              onClick={(e) => hash && handleDropdownClick(e, hash, link.page)}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-[#166534] hover:pl-5 first:rounded-t-md last:rounded-b-md transition-all duration-150 ease-in-out"
                              style={{ transitionDelay: `${index * 30}ms` }}
                            >
                              {item.name}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.page}
                    to={createPageUrl(link.page)}
                    className={`nav-link ${
                      currentPageName === link.page ? "active" : "text-gray-700"
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                to={createPageUrl("Listings")}
                className="find-property-btn border border-[#166534] text-[#166534] hover:bg-green-50 px-6 py-2.5 rounded-full text-sm font-semibold"
              >
                FIND PROPERTY
              </Link>
              <Link
                to={createPageUrl("AboutUs") + "?contact=true"}
                className="find-property-btn bg-[#22c55e] hover:bg-[#16a34a] text-white px-6 py-2.5 rounded-full text-sm font-semibold"
              >
                CONTACT US
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.page}
                  to={createPageUrl(link.page)}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-md text-sm font-medium transition-all ${
                    currentPageName === link.page
                      ? "bg-[#166534] text-white"
                      : "text-gray-700 hover:bg-green-50 hover:translate-x-1"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to={createPageUrl("Listings")}
                onClick={() => setMobileMenuOpen(false)}
                className="find-property-btn block border border-[#166534] text-[#166534] hover:bg-green-50 px-4 py-3 rounded-md text-sm font-semibold text-center mt-4"
              >
                FIND PROPERTY
              </Link>
              <Link
                to={createPageUrl("AboutUs") + "?contact=true"}
                onClick={() => setMobileMenuOpen(false)}
                className="find-property-btn block bg-[#22c55e] hover:bg-[#16a34a] text-white px-4 py-3 rounded-md text-sm font-semibold text-center mt-4"
              >
                CONTACT US
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-[#166534] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Logo & About */}
            <div className="md:col-span-1">
              <img src={vicmarLogoFooter} alt="Vicmar Homes" className="h-12 w-auto" />
              <p className="mt-4 text-green-100 text-sm leading-relaxed">
                Your trusted partner in finding the perfect home. Quality living starts with Vicmar Homes.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.page}>
                    <Link
                      to={createPageUrl(link.page)}
                      className="text-green-100 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
              <ul className="space-y-3 text-sm text-green-100">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#86efac] flex-shrink-0 mt-0.5" />
                  <span>San Jose Sico, Batangas City</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#86efac] flex-shrink-0" />
                  <span>(043) 233-2050</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#86efac] flex-shrink-0" />
                  <span>info@vicmarhomes.com</span>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Stay Updated</h4>
              <p className="text-green-100 text-sm mb-4">Subscribe for the latest property updates.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-l-md bg-white/10 border border-white/20 text-white placeholder-green-200 text-sm focus:outline-none focus:border-[#86efac]"
                />
                <button className="px-4 py-2 bg-[#22c55e] hover:bg-[#16a34a] rounded-r-md text-sm font-semibold transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-green-100 text-sm">
              © 2024 Vicmar Homes. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-green-100 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-green-100 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-green-100 hover:text-white transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
