import { AlertTriangle, Frown, Sparkles, AlignCenter } from "lucide-react";

export default function Problems() {
  const problems = [
  {
    title: "Tooth Pain",
    description: "Sharp pain while eating, drinking, or chewing food.",
    icon: AlertTriangle,
    color: "text-red-500",
  },
  {
    title: "Missing Teeth",
    description: "Difficulty chewing and loss of confidence while smiling.",
    icon: Frown,
    color: "text-orange-500",
  },
  {
    title: "Yellow Teeth",
    description: "Stains and discoloration affecting your smile.",
    icon: Sparkles,
    color: "text-yellow-500",
  },
  {
    title: "Crooked Teeth",
    description: "Misaligned teeth that affect appearance and bite.",
    icon: AlignCenter,
    color: "text-teal-500",
  },
];
  return (
    <section id="problems" className="bg-gray-100 py-10 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Are You Facing These <span className="text-teal-600">Dental Problems?</span>
        </h2>

        <p className="text-black mb-12 max-w-xl mx-auto">
          Many patients visit our clinic with these common concerns.
          Our advanced treatments help restore healthy and confident smiles.
        </p>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {problems.map((problem, index) => {
  const Icon = problem.icon;

  return (
    <div
      key={index}
      className="p-6 rounded-xl bg-gray-400 border border-gray-300 hover:shadow-lg hover:-translate-y-1 transition text-center"
    >
      <Icon
        className={`mx-auto mb-4 ${problem.color}`}
        size={40}
        strokeWidth={2}
      />

      <h3 className="text-xl font-semibold mb-2 text-gray-900">
        {problem.title}
      </h3>

      <p className="text-black text-sm">
        {problem.description}
      </p>
    </div>
  );
})}
        </div>
      </div>
    </section>
  );
}