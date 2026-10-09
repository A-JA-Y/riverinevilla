"use client";
import React, { useState } from "react";
import submitForm from "../api/submitform";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { reportLeadConversion } from "@/utils/gtagConversion";

const BlogContactForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({
    name: false,
    phone: false,
    email: false,
  });

  const validate = () => {
    const newErrors = {
      name: formData.name.trim() === "",
      phone: formData.phone.trim() === "",
      email: formData.email.trim() === "",
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      setLoading(true);
      setStatus(null);

      await submitForm({ data: formData });
      await reportLeadConversion();

      const link = document.createElement("a");
      link.href = "/brochure.pdf"; 
      link.setAttribute("download", "Brochure.pdf"); 
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      router.push("/thank-you");
      setFormData({ name: "", phone: "", email: "" });

    } catch (error) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (hasError) =>
    `w-full px-4 py-2.5 text-sm border rounded-md outline-none 
     placeholder-gray-400 text-gray-700 transition-all duration-200
     focus:border-[#c8952a] focus:ring-1 focus:ring-[#c8952a]
     ${hasError ? "border-red-500" : "border-gray-300"}`;

  return (
    <div className="w-full bg-white rounded-xl shadow-lg p-5">

      {/* Heading */}
      <h3 className="text-base font-semibold text-gray-900">
        Book Site Visit
      </h3>
      <p className="text-xs text-gray-500 mb-4">
        Cost sheet and floor plans sent the same day.
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">

        {/* Name */}
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name *"
            className={inputClass(errors.name)}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">Required</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number *"
            maxLength={15}
            className={inputClass(errors.phone)}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">Required</p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email ID *"
            className={inputClass(errors.email)}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">Required</p>
          )}
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#c8952a] hover:bg-[#b07d1f] text-white text-xs font-semibold tracking-widest uppercase px-4 py-3 rounded-md transition-all duration-300"
        >
          {loading ? "Submitting..." : "Get Callback"}
        </button>

        {/* Privacy */}
        <p className="text-[10px] text-center text-gray-400 mt-1">
          100% safe & secure
        </p>
      </form>

      {/* Status */}
      {status === "success" && (
        <p className="text-green-600 mt-3 text-xs flex items-center gap-2">
          <FaCheckCircle /> Submitted successfully!
        </p>
      )}

      {status === "error" && (
        <p className="text-red-600 mt-3 text-xs flex items-center gap-2">
          <FaTimesCircle /> Try again later
        </p>
      )}
    </div>
  );
};

export default BlogContactForm;