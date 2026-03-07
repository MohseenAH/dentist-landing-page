"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const transformations = [
  {
    title: "Dental Implants",
    before: "/images/dent-implants-before.webp",
    after: "/images/dent-implants-after.webp",
  },
  {
    title: "Misaligned Teeth",
    before: "/images/white-teeth-before.webp",
    after: "/images/white-teeth-after.webp",
  },
];

export default function Transformations() {
  return (
    <section id="transformations" className="bg-black/10 py-16 md:py-10 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Smile <span className="text-teal-600">Transformations</span>
          </h2>

          <p className="text-gray-700 mt-3 max-w-xl mx-auto">
            Real results from our dental treatments that restore healthy and confident smiles.
          </p>
        </div>

        {transformations.map((item, index) => (
          <BeforeAfterSwipe key={index} item={item} />
        ))}

      </div>
    </section>
  );
}

function BeforeAfterSwipe({ item }) {
  const [emblaRef] = useEmblaCarousel({ align: "start", dragFree: false });

  return (
    <div className="mb-16">

      <div className="overflow-hidden rounded-xl shadow-md" ref={emblaRef}>
        <div className="flex">

          {/* Before */}
          <div className="flex-[0_0_100%] relative">
            <Image
              src={item.before}
              alt="Before"
              width={800}
              height={500}
              className="object-cover w-full"
            />

            <span className="absolute top-3 left-3 bg-black text-white text-xs font-semibold px-3 py-1 rounded-full">
              Before
            </span>
          </div>

          {/* After */}
          <div className="flex-[0_0_100%] relative">
            <Image
              src={item.after}
              alt="After"
              width={800}
              height={500}
              className="object-cover w-full"
            />

            <span className="absolute top-3 left-3 bg-teal-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
              After
            </span>
          </div>

        </div>
      </div>

      {/* Swipe Indicator */}
      <div className="flex items-center justify-center gap-2 mt-4 text-black text-xl">
        <span className="text-2xl">⇄</span>
        Swipe to see result
      </div>

      {/* Title */}
      <h3 className="mt-4 text-lg md:text-xl font-semibold text-gray-900">
        {item.title}
      </h3>

    </div>
  );
}