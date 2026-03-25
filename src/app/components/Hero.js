"use client";

import Image from "next/image";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

export default function Hero() {
  return (
    <section 
    id="home" 
    className="bg-black/10 flex lg:items-center px-4 sm:px-6 py-12 md:py-14 lg:py-12 xl:min-h-[calc(100vh-80px)]"
    >
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-10 lg:gap-14 items-center">

        {/* Left Content */}
        <div className="text-center md:text-left">

          {/* Clinic Name */}
          <p className="text-teal-600 font-semibold tracking-wide mb-3 text-sm sm:text-base">
            BrightSmile Dental Studio
          </p>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Pain-Free Dental Care <br />
            <span className="text-teal-600">in Baner, Pune</span>
          </h1>

          {/* Subheadline */}
          <p className="text-black text-base sm:text-lg mb-8 max-w-xl mx-auto md:mx-0">
            Modern dental treatments with advanced equipment and experienced dentists focused on comfortable and painless care.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
            <a
              href="https://wa.me/919156413365?text=Hi%2C%20I%20want%20to%20book%20a%20dental%20appointment.%20Please%20share%20available%20slots."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] transition px-8 py-4 rounded-xl font-semibold text-black shadow-md w-full sm:w-auto"
            >
              <FaWhatsapp size={20} />
              Book Appointment
            </a>

            <a
              href="tel:+919156413365"
              className="flex items-center justify-center gap-2 border border-gray-300 bg-black text-white hover:bg-gray-800 transition px-8 py-4 rounded-xl font-semibold shadow-sm w-full sm:w-auto"
            >
              <FaPhone size={18} />
              Call Now
            </a>
          </div>

          {/* Trust Statement */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2 text-black text-sm">
            <p>⭐ 4.8 Google Rating</p>
            <p>1200+ Happy Patients</p>
            <p>10+ Years Experience</p>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-[320px] sm:h-[380px] md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden">
          <Image
            src="/images/HeroDent.webp"
            alt="BrightSmile Dental Clinic"
            fill
            priority
            sizes="(max-width:768px) 100vw, 50vw"
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

      </div>
    </section>
  );
}