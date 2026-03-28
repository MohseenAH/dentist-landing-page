"use client";

import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { GiTooth } from "react-icons/gi";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full px-5 sm:px-6 lg:px-8 flex items-center pt-6 md:pt-10 lg:pt-14 pb-10"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">

        {/* LEFT CONTENT */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-[640px] mx-auto lg:mx-0">

          {/* BRAND */}
          <span className="text-[12px] font-bold uppercase tracking-[0.18em] text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
            BrightSmile Dental Studio
          </span>

          {/* HEADLINE */}
          <h1 className="mt-4 font-bold text-gray-900 leading-[1.1] text-[30px] sm:text-[38px] md:text-[42px] lg:text-[52px]">
            <span className="block">Book Your Dental Appointment</span>
            <span className="block text-teal-600">in 10 Minutes in Pune</span>
          </h1>

          {/* SUBHEADLINE */}
          <p className="mt-4 text-base md:text-lg text-gray-600 max-w-[520px]">
            Same-day appointments available — book now.
          </p>

          {/* TRUST BADGES */}
          <div className="mt-5 flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-gray-600 font-medium">

            <div className="flex items-center gap-2">
              <FaStar className="text-yellow-500 text-sm" />
              4.9 Google Reviews
            </div>

            <div className="flex items-center gap-2">
              <GiTooth className="text-teal-600 text-sm" />
              10+ Years Experience
            </div>

          </div>

          {/* CTA */}
          <div className="mt-7 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">

            <a
              href="https://wa.me/919156413365?text=Hi, I want to book a dental appointment."
              className="flex items-center justify-center gap-2 bg-green-600 text-white py-3 px-6 rounded-xl font-semibold shadow-md hover:bg-green-700 transition"
            >
              <FaWhatsapp />
              Book Appointment
            </a>

            <a
              href="tel:+919156413365"
              className="flex items-center justify-center gap-2 bg-slate-800 text-white py-3 px-6 rounded-xl font-semibold shadow-md hover:bg-black transition"
            >
              <FiPhoneCall />
              Call Now
            </a>

          </div>

        </div>

        {/* IMAGE */}
        <div className="relative w-full h-[320px] sm:h-[380px] md:h-[440px] lg:h-[480px] rounded-3xl overflow-hidden shadow-xl">

          <Image
            src="/images/HeroDent.webp"
            alt="Dental treatment at BrightSmile clinic"
            fill
            priority
            sizes="(max-width:1024px) 100vw, 45vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/10 to-transparent"></div>

        </div>

      </div>
    </section>
  );
}