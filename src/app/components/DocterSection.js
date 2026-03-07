import Image from "next/image";

export default function DoctorSection() {
  return (
    <section id="about" className="py-10 bg-black/20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Meet Your Dental Expert
          </h2>
          <p className="text-gray-900 mt-3">
            Experienced care focused on comfort, precision, and beautiful smiles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Doctor Image */}
          <div className="flex justify-center">
            <Image
              src="/images/doctor.webp"
              alt="Dentist"
              width={420}
              height={420}
              className="rounded-2xl shadow-xl"
            />
          </div>

          {/* Doctor Info */}
          <div>

            {/* Doctor Name */}
            <h3 className="text-2xl font-bold text-gray-900">
              Dr. Amit Sharma
            </h3>

            <p className="text-[#059669] font-medium mb-4 underline">
              BDS, MDS - Cosmetic & Restorative Dentistry
            </p>

            <p className="text-black mb-6">
              Dr. Amit Sharma is a highly experienced dentist dedicated to
              delivering gentle and advanced dental care. With more than a
              decade of experience, he has helped thousands of patients regain
              confidence through healthier and brighter smiles.
            </p>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4">

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-xl font-bold text-black">10+</p>
                <p className="text-sm text-black">Years Experience</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-xl font-bold text-black">5000+</p>
                <p className="text-sm text-black">Happy Patients</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-xl font-bold text-black">15+</p>
                <p className="text-sm text-black">Dental Certifications</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-xl font-bold text-black">4.8★</p>
                <p className="text-sm text-black">Patient Rating</p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}