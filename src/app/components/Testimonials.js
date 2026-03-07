import { FaStar } from "react-icons/fa";

export default function Testimonials() {
  const reviews = [
    {
      name: "Priya Sharma",
      text: "The teeth whitening treatment completely transformed my smile. The dentist explained everything clearly and the clinic was very clean and comfortable.",
    },
    {
      name: "Rahul Mehta",
      text: "I was nervous about getting a root canal, but the procedure was completely painless. The staff was very friendly and professional.",
    },
    {
      name: "Ananya Kulkarni",
      text: "Best dental clinic in Baner! Modern equipment, experienced doctors, and a very smooth treatment experience.",
    },
  ];

  return (
    <section id="reviews" className="py-10 bg-black/10">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            What Our Patients Say
          </h2>

          <p className="text-black mt-4 max-w-xl mx-auto">
            Real experiences from patients who trusted us with their dental care.
          </p>
        </div>

        {/* Review Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-400 p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              {/* Stars */}
              <div className="flex text-yellow-400 mb-4">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              {/* Review text */}
              <p className="text-black text-sm mb-4">
                "{review.text}"
              </p>

              {/* Name */}
              <h4 className="font-semibold text-black">
                {review.name}
              </h4>
            </div>
          ))}
        </div>

        {/* Google Rating */}
        <div className="text-center mt-12">
          <p className="text-gray-700">
            ⭐ <span className="font-semibold">4.8 Google Rating</span> from 1200+ happy patients
          </p>
        </div>

      </div>
    </section>
  );
}