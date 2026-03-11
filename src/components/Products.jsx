import React from "react";
import { Check } from "lucide-react";

const Products = () => {
  const plans = [
    {
      name: "Starter Pack",
      price: 29,
      duration: "/month",
      description: "Perfect for beginners",
      features: [
        "Gym access (peak hours)",
        "2 trainer sessions/month",
        "Basic nutrition guide",
        "Community access",
        "Basic app features",
      ],
      popular: false,
    },
    {
      name: "Pro Membership",
      price: 59,
      duration: "/month",
      description: "Most popular choice",
      features: [
        "24/7 gym access",
        "8 trainer sessions/month",
        "Personalized meal plan",
        "VIP community",
        "Advanced app features",
        "Progress tracking",
        "Weekly group classes",
      ],
      popular: true,
    },
    {
      name: "Elite Package",
      price: 99,
      duration: "/month",
      description: "For serious athletes",
      features: [
        "24/7 unlimited gym access",
        "Unlimited trainer sessions",
        "Custom nutrition plan",
        "Elite community",
        "Premium app features",
        "AI-powered analytics",
        "Priority support",
        "Guest passes (4/month)",
        "Merchandise discount",
      ],
      popular: false,
    },
  ];

  const products = [
    {
      name: "Premium Protein Shake",
      category: "Supplements",
      price: 24.99,
      emoji: "🥤",
    },
    {
      name: "Resistance Bands Set",
      category: "Equipment",
      price: 34.99,
      emoji: "🎯",
    },
    {
      name: "Gym Bag Pro",
      category: "Accessories",
      price: 49.99,
      emoji: "🎒",
    },
    {
      name: "Smart Watch Fitness",
      category: "Wearables",
      price: 199.99,
      emoji: "⌚",
    },
    {
      name: "Yoga Mat Premium",
      category: "Equipment",
      price: 39.99,
      emoji: "🧘",
    },
    {
      name: "Water Bottle 1L",
      category: "Accessories",
      price: 19.99,
      emoji: "💧",
    },
  ];

  return (
    <div className="pt-20 md:pt-24 min-h-screen bg-gradient-to-b from-dark to-gray-900">
      {/* Memberships Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Choose Your <span className="text-primary">Membership</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Flexible plans tailored to your fitness goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl overflow-hidden transition duration-300 ${
                  plan.popular
                    ? "border-2 border-primary shadow-2xl shadow-primary/20 transform md:scale-105"
                    : "border border-gray-700 hover:border-gray-600"
                } bg-gray-800/50 backdrop-blur-sm`}
              >
                {plan.popular && (
                  <div className="bg-gradient-to-r from-primary to-accent px-4 py-2 text-center">
                    <span className="text-white font-semibold text-sm">
                      ⭐ MOST POPULAR
                    </span>
                  </div>
                )}

                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6">
                    {plan.description}
                  </p>

                  <div className="mb-8">
                    <span className="text-5xl font-bold text-primary">
                      ${plan.price}
                    </span>
                    <span className="text-gray-400 ml-2">{plan.duration}</span>
                  </div>

                  <button
                    className={`w-full py-3 rounded-lg font-semibold transition duration-300 mb-8 ${
                      plan.popular
                        ? "bg-primary text-white hover:bg-primary/90"
                        : "border-2 border-accent text-accent hover:bg-accent/10"
                    }`}
                  >
                    Get Started
                  </button>

                  <div className="space-y-4">
                    {plan.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start space-x-3">
                        <Check
                          size={20}
                          className="text-accent flex-shrink-0 mt-0.5"
                        />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop Products Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Fitness <span className="text-accent">Products</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Premium supplements, equipment, and accessories
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-4 md:p-6 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition duration-300 group"
              >
                <div className="text-5xl md:text-6xl mb-3 text-center">
                  {product.emoji}
                </div>
                <h3 className="text-white font-semibold md:text-lg mb-2 group-hover:text-accent transition">
                  {product.name}
                </h3>
                <p className="text-gray-400 text-xs md:text-sm mb-4">
                  {product.category}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-bold text-lg">
                    ${product.price}
                  </span>
                  <button className="bg-primary/80 hover:bg-primary text-white px-3 py-1 rounded-lg text-sm transition">
                    Add
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition duration-300">
              View All Products
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
