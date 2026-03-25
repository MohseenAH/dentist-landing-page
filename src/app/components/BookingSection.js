"use client";

import { useState } from "react";

export default function BookingSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    treatment: "",
    date: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await fetch("https://script.google.com/macros/s/AKfycbyFj0I11sY7P9t_sopVnKxSBU0WpDvcG7fzvhcb5wUlf9jXdosqLFGqgqUh_Ey9d_QKjA/exec/exec", {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(formData),
    });

    setLoading(false);
    setSuccess(true);

    setFormData({
      name: "",
      phone: "",
      treatment: "",
      date: "",
      message: "",
    });
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold text-center mb-4">
          Book Appointment
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Name */}
          <input
            type="text"
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className="w-full border p-2 rounded"
          />

          {/* Phone */}
          <input
            type="tel"
            placeholder="Phone Number"
            required
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="w-full border p-2 rounded"
          />

          {/* Treatment */}
          <select
            required
            value={formData.treatment}
            onChange={(e) =>
              setFormData({ ...formData, treatment: e.target.value })
            }
            className="w-full border p-2 rounded"
          >
            <option value="">Select Treatment</option>
            <option>Teeth Cleaning</option>
            <option>Root Canal</option>
            <option>Teeth Whitening</option>
            <option>Dental Implants</option>
          </select>

          {/* Date */}
          <input
            type="date"
            required
            value={formData.date}
            onChange={(e) =>
              setFormData({ ...formData, date: e.target.value })
            }
            className="w-full border p-2 rounded"
          />

          {/* Message */}
          <textarea
            placeholder="Message (Optional)"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="w-full border p-2 rounded"
            rows="3"
          />

          {/* Button */}
          <button className="w-full bg-black text-white py-2 rounded">
            {loading ? "Booking..." : "Book Now"}
          </button>
        </form>

        {success && (
          <p className="text-green-600 text-center mt-3">
            ✅ Appointment booked successfully!
          </p>
        )}
      </div>
    </section>
  );
}