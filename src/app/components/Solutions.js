"use client";

import Image from "next/image";

const treatments = [
  {
    title: "Teeth Cleaning",
    desc: "Professional cleaning to remove plaque and keep your teeth healthy.",
    img: "/images/1.webp",
  },
  {
    title: "Dental Implants",
    desc: "Permanent solution to replace missing teeth and restore your smile.",
    img: "/images/2.webp",
  },
  {
    title: "Root Canal",
    desc: "Pain-free treatment to save infected teeth and relieve discomfort.",
    img: "/images/3.webp",
    
  },
  {
    title: "Teeth Whitening",
    desc: "Advanced whitening treatments to brighten your smile safely.",
    img: "/images/4.webp",
  },
  {
    title: "Braces / Aligners",
    desc: "Straighten your teeth with modern braces or invisible aligners.",
    img: "/images/5.webp",
  },
  {
    title: "Tooth Filling",
    desc: "Restore damaged teeth and prevent further decay effectively.",
    img: "/images/6.webp",
  },
];

export default function Solutions() {
  return (
    <section id="services" className="bg-black/20 py-10 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-teal-600">Dental Solutions</span>
          </h2>

          <p className="text-black max-w-2xl mx-auto">
            Modern dental treatments designed to restore your smile,
            improve oral health, and keep your teeth healthy for years.
          </p>

        </div>

        {/* Cards Container */}
        <div className="
        flex md:grid
        md:grid-cols-3
        gap-6
        overflow-x-auto
        pb-4
        ">

          {treatments.map((item, index) => (
            <div
              key={index}
              className="min-w-[260px] md:min-w-0 bg-gray-400 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              {/* Image */}
              <div className="relative h-44">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center">

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-black text-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}