import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* Clinic Info */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4 underline">
            BrightSmile Dental
          </h3>
          <p className="text-sm text-white">
            Providing modern, comfortable, and advanced dental care to help
            you achieve a healthy and confident smile.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>

          <ul className="space-y-2 text-sm">
            <li><a href="#home"
            className="hover:text-white underline">Home</a></li>
            <li><a href="#services" className="hover:text-white underline">Services</a></li>
            <li><a href="#about" className="hover:text-white underline">About</a></li>
            <li><a href="#reviews" className="hover:text-white underline">Reviews</a></li>
            <li><a href="#contact" className="hover:text-white underline">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>

          <div className="space-y-3 text-sm">

            <div className="flex gap-3">
              <FaMapMarkerAlt />
              Baner Road, Pune
            </div>

            <div className="flex gap-3">
              <FaPhoneAlt />
              +91 98765 43210
            </div>

            <div className="flex gap-3">
              <FaWhatsapp />
              WhatsApp Chat
            </div>

            <div className="flex gap-3">
              <FaEnvelope />
              contact@brightsmile.com
            </div>

          </div>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} BrightSmile Dental Clinic. All rights reserved. | Designed & developed by Arclunor with <span className="text-red-700"> ❤</span>
      </div>
    </footer>
  );
}