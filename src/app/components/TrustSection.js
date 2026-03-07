import { FaUserMd, FaTooth, FaSmile, FaRupeeSign } from "react-icons/fa";

export default function TrustSection() {
  const features = [
    {
      title: "Experienced Dentists",
      desc: "Our dental professionals have years of experience providing safe and effective treatments.",
      icon: FaTooth,
    },
    {
      title: "Advanced Technology",
      desc: "We use modern dental equipment to ensure accurate diagnosis and comfortable procedures.",
      icon: FaUserMd,
    },
    {
      title: "Patient Focused Care",
      desc: "Your comfort is our priority. We ensure a stress-free and friendly experience for every visit.",
      icon: FaSmile,
    },
    {
      title: "Transparent Pricing",
      desc: "Clear treatment plans with honest pricing so you always know what to expect.",
      icon: FaRupeeSign,
    },
  ];

  return (
    <section id="trust" className="py-10 bg-black/20">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Why Patients Trust Our Clinic
          </h2>
          <p className="text-black mt-4 max-w-xl mx-auto">
            We combine experience, advanced technology, and compassionate care
            to provide the best dental treatments.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-gray-400 p-6 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <Icon className="text-3xl text-gray-800 mb-4" />

                <h3 className="text-xl font-semibold text-black mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}