import React, { useState } from "react";
import { Mail, User, Phone, MapPin, CheckCircle } from "lucide-react";
import { submitFormData } from "../services/firebaseService";

const SubmitForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    fitnessGoal: "",
    experience: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.location.trim()) newErrors.location = "Location is required";
    if (!formData.fitnessGoal)
      newErrors.fitnessGoal = "Please select a fitness goal";
    if (!formData.experience)
      newErrors.experience = "Please select your experience level";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");
    console.log("Submit clicked", formData);

    if (validateForm()) {
      setIsLoading(true);
      try {
        await submitFormData(formData);
        console.log("Form submitted to Firebase:", formData);
        setIsSubmitted(true);

        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            phone: "",
            location: "",
            fitnessGoal: "",
            experience: "",
            message: "",
          });
          setIsSubmitted(false);
          setIsLoading(false);
        }, 3000);
      } catch (error) {
        setSubmitError(
          error.message || "Failed to submit form. Please try again.",
        );
        setIsLoading(false);
        console.error("Submission error:", error);
      }
    }
  };

  return (
    <div className="pt-20 md:pt-24 min-h-screen bg-gradient-to-b from-dark to-gray-900">
      <div className="px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Join Our <span className="text-primary">Fitness Community</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Fill out the form below and our team will contact you with
              personalized recommendations
            </p>
          </div>

          {/* Form Container */}
          {isSubmitted ? (
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary rounded-2xl p-8 md:p-12 text-center">
              <CheckCircle size={64} className="text-primary mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-white mb-2">Success!</h3>
              <p className="text-gray-300 text-lg">
                Thank you for your submission. Our team will contact you
                shortly!
              </p>
            </div>
          ) : (
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-white font-semibold mb-2 flex items-center space-x-2">
                      <User size={18} className="text-accent" />
                      <span>Full Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={`w-full px-4 py-3 rounded-lg bg-gray-700/50 border-2 text-white placeholder-gray-500 transition focus:outline-none ${
                        errors.name
                          ? "border-red-500 focus:border-red-500"
                          : "border-gray-600 focus:border-accent"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-white font-semibold mb-2 flex items-center space-x-2">
                      <Mail size={18} className="text-accent" />
                      <span>Email Address</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={`w-full px-4 py-3 rounded-lg bg-gray-700/50 border-2 text-white placeholder-gray-500 transition focus:outline-none ${
                        errors.email
                          ? "border-red-500 focus:border-red-500"
                          : "border-gray-600 focus:border-accent"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone and Location Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-white font-semibold mb-2 flex items-center space-x-2">
                      <Phone size={18} className="text-accent" />
                      <span>Phone Number</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className={`w-full px-4 py-3 rounded-lg bg-gray-700/50 border-2 text-white placeholder-gray-500 transition focus:outline-none ${
                        errors.phone
                          ? "border-red-500 focus:border-red-500"
                          : "border-gray-600 focus:border-accent"
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-400 text-sm mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-white font-semibold mb-2 flex items-center space-x-2">
                      <MapPin size={18} className="text-accent" />
                      <span>Location</span>
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="City, State"
                      className={`w-full px-4 py-3 rounded-lg bg-gray-700/50 border-2 text-white placeholder-gray-500 transition focus:outline-none ${
                        errors.location
                          ? "border-red-500 focus:border-red-500"
                          : "border-gray-600 focus:border-accent"
                      }`}
                    />
                    {errors.location && (
                      <p className="text-red-400 text-sm mt-1">
                        {errors.location}
                      </p>
                    )}
                  </div>
                </div>

                {/* Fitness Goal and Experience Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Fitness Goal
                    </label>
                    <select
                      name="fitnessGoal"
                      value={formData.fitnessGoal}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg bg-gray-700/50 border-2 text-white transition focus:outline-none ${
                        errors.fitnessGoal
                          ? "border-red-500 focus:border-red-500"
                          : "border-gray-600 focus:border-accent"
                      }`}
                    >
                      <option value="">Select Your Goal</option>
                      <option value="weightloss">Weight Loss</option>
                      <option value="musclegain">Muscle Gain</option>
                      <option value="strengthen">Strength Building</option>
                      <option value="endurance">Endurance Training</option>
                      <option value="flexibility">Flexibility & Balance</option>
                      <option value="general">General Fitness</option>
                    </select>
                    {errors.fitnessGoal && (
                      <p className="text-red-400 text-sm mt-1">
                        {errors.fitnessGoal}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Experience Level
                    </label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg bg-gray-700/50 border-2 text-white transition focus:outline-none ${
                        errors.experience
                          ? "border-red-500 focus:border-red-500"
                          : "border-gray-600 focus:border-accent"
                      }`}
                    >
                      <option value="">Select Your Level</option>
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                      <option value="athlete">Professional Athlete</option>
                    </select>
                    {errors.experience && (
                      <p className="text-red-400 text-sm mt-1">
                        {errors.experience}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your fitness journey or any specific questions..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border-2 border-gray-600 text-white placeholder-gray-500 transition focus:outline-none focus:border-accent resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  {submitError && (
                    <p className="text-red-400 text-sm mb-4 text-center">
                      {submitError}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-primary to-accent text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-primary/30 transition duration-300 text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      "Submit Application"
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center hover:border-accent/50 transition">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-white font-semibold mb-2">Fast Response</h3>
              <p className="text-gray-400">We'll contact you within 24 hours</p>
            </div>
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center hover:border-accent/50 transition">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-white font-semibold mb-2">
                Personalized Plan
              </h3>
              <p className="text-gray-400">
                Custom training programs for your goals
              </p>
            </div>
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center hover:border-accent/50 transition">
              <div className="text-4xl mb-3">🏆</div>
              <h3 className="text-white font-semibold mb-2">Expert Guidance</h3>
              <p className="text-gray-400">
                Support from certified fitness professionals
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitForm;
