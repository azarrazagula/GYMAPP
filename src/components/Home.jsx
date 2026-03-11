import React from "react";
import { ArrowRight, Users, Award, Zap } from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: <Zap size={32} className="text-primary" />,
      title: "High Intensity",
      description: "Push your limits with powerful training programs",
    },
    {
      icon: <Users size={32} className="text-accent" />,
      title: "Expert Trainers",
      description: "Learn from certified fitness professionals",
    },
    {
      icon: <Award size={32} className="text-primary" />,
      title: "Results Guaranteed",
      description: "Track progress and achieve your fitness goals",
    },
  ];

  return (
    <div className="pt-20 md:pt-24 min-h-screen bg-gradient-to-b from-dark to-gray-900">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 md:space-y-8">
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                  Transform Your <span className="text-primary">Body</span>
                </h1>
                <p className="text-gray-300 text-lg sm:text-xl">
                  Join our elite fitness community and achieve your dream
                  physique with personalized training programs.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition duration-300 flex items-center justify-center sm:justify-start space-x-2 w-full sm:w-auto">
                  <span>Start Training</span>
                  <ArrowRight size={20} />
                </button>
                <button className="border-2 border-accent text-accent px-8 py-3 rounded-lg font-semibold hover:bg-accent/10 transition duration-300 w-full sm:w-auto">
                  Learn More
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-700">
                <div>
                  <p className="text-3xl font-bold text-primary">5K+</p>
                  <p className="text-gray-400 text-sm">Active Members</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-accent">250+</p>
                  <p className="text-gray-400 text-sm">Classes Monthly</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">95%</p>
                  <p className="text-gray-400 text-sm">Success Rate</p>
                </div>
              </div>
            </div>

            {/* Right Image Placeholder */}
            <div className="relative h-96 md:h-full md:min-h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl border border-primary/30 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">💪</div>
                <p className="text-gray-400">Premium Fitness Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Why Choose <span className="text-primary">FITHUB</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 md:p-8 hover:border-primary/50 transition duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Join thousands of members transforming their lives every day
          </p>
          <button className="bg-white text-secondary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
