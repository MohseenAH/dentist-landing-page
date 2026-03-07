import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt, FaClock, FaEnvelope } from "react-icons/fa";

export default function ContactCTA() {
  return (
    <section id="contact" className="py-10 bg-black/20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Ready to Transform Your Smile?
          </h2>

          <p className="text-gray-700 mt-3">
            Book your dental appointment today and experience comfortable, modern dental care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Info */}
          <div className="space-y-6">

            {/* Address */}
            <div className="bg-gray-200 p-5 rounded-xl flex items-start gap-4">
              <FaMapMarkerAlt className="text-red-500 text-xl" />
              <div>
                <h4 className="font-semibold text-black">Clinic Address</h4>
                <p className="text-gray-700 text-sm">
                  BrightSmile Dental Studio<br/>
                  Baner Road, Pune, Maharashtra 411045
                </p>
              </div>
            </div>

            {/* Timings */}
            <div className="bg-gray-200 p-5 rounded-xl flex items-start gap-4">
              <FaClock className="text-xl text-blue-500 mt-1" />
              <div>
                <h4 className="font-semibold text-black">Clinic Timings</h4>
                <p className="text-gray-700 text-sm">
                  Mon – Sat : 10:00 AM – 8:00 PM<br/>
                  Sunday : Closed
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-gray-200 p-5 rounded-xl flex items-start gap-4">
              <FaPhoneAlt className="text-gray-900 text-xl mt-1" />
              <div>
                <h4 className="font-semibold text-black">Call Us</h4>
                <p className="text-gray-700 text-sm">
                  +91 98765 43210<br/>
                  +91 91234 56789
                </p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="bg-gray-200 p-5 rounded-xl flex items-start gap-4">
              <FaWhatsapp className=" text-green-500 text-xl mt-1" />
              <div>
                <h4 className="font-semibold text-black">WhatsApp</h4>
                <p className="text-gray-700 text-sm">
                  Chat with us for quick appointment booking.
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white p-5 rounded-xl flex items-start gap-4">
              <FaEnvelope className="text-purple-500 text-xl mt-1" />
              <div>
                <h4 className="font-semibold text-black">Email</h4>
                <p className="text-gray-900 text-sm">
                  contact@brightsmile.com
                </p>
              </div>
            </div>

          </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden shadow-md h-full min-h-[520px]">
            <iframe
              src="https://www.google.com/maps?q=Baner+Pune&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>

        </div>

        {/* Final CTA Buttons */}
        <div className="flex justify-center gap-4 mt-12">

          <a
            href="tel:+919876543210"
            className="bg-black text-white px-6 py-4 rounded-lg flex items-center gap-2 hover:opacity-90 transition"
          >
            <FaPhoneAlt />
            Call Now
          </a>

          <a
            href="https://wa.me/919876543210"
            className="bg-green-500 text-black px-6 py-4 rounded-lg flex items-center gap-2 hover:opacity-90 transition font-bold"
          >
            <FaWhatsapp size={24}/>
            WhatsApp
          </a>

        </div>

      </div>
    </section>
  );
}