"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function FAQ() {
  const faqs = [
    {
      question: "Is dental treatment painful?",
      answer:
        "Modern dental technology and anesthesia ensure that most treatments are comfortable and pain-free.",
    },
    {
      question: "Do I need to book an appointment in advance?",
      answer:
        "Yes, booking an appointment helps us provide dedicated time for your treatment and avoid waiting.",
    },
    {
      question: "How long does teeth whitening last?",
      answer:
        "Professional whitening can last from 6 months to 2 years depending on oral hygiene and lifestyle.",
    },
    {
      question: "Do you accept emergency dental cases?",
      answer:
        "Yes, we provide emergency dental care for severe tooth pain, broken teeth, and other urgent cases.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-10 bg-black/10">
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-900 mt-3">
            Answers to common questions about our dental treatments.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-400 rounded-xl shadow-sm border"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-5 text-left"
              >
                <span className="font-semibold text-gray-900">
                  {faq.question}
                </span>

                <FaChevronDown
                  className={`text-black transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-5 pb-5 text-black text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}