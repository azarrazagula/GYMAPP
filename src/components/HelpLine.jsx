import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  ChevronDown,
} from "lucide-react";

const HelpLine = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(0);

  const faqs = [
    {
      question: "What are your gym hours?",
      answer:
        "Our gym is open 24/7 for all premium members. Standard members have access from 6:00 AM to 10:00 PM. We also offer flexible access schedules for working professionals.",
    },
    {
      question: "Do you offer personal training sessions?",
      answer:
        "Yes! All our memberships include trainer sessions. Starter Pack includes 2/month, Pro includes 8/month, and Elite has unlimited sessions with our certified trainers.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "You can cancel your membership anytime with a 30-day notice. No hidden fees or penalties. We want you to enjoy your fitness journey with us!",
    },
    {
      question: "Do you have classes included in membership?",
      answer:
        "Yes! All members get access to weekly group classes including yoga, CrossFit, spinning, and HIIT training. Elite members also get priority booking for exclusive workshops.",
    },
    {
      question: "How can I track my progress?",
      answer:
        "Our mobile app provides comprehensive progress tracking with body measurements, workout logs, nutrition tracking, and personalized analytics. You can also connect fitness wearables for real-time data.",
    },
    {
      question: "Is there a trial period available?",
      answer:
        "Absolutely! We offer a free 7-day trial for new members so you can experience our facilities and meet our team before committing to a membership.",
    },
  ];

  const contactMethods = [
    {
      icon: <Phone size={32} className="text-primary" />,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      subtext: "Available 24/7",
    },
    {
      icon: <Mail size={32} className="text-accent" />,
      title: "Email Us",
      content: "support@fithub.com",
      subtext: "Response within 2 hours",
    },
    {
      icon: <MapPin size={32} className="text-primary" />,
      title: "Visit Us",
      content: "123 Fitness Avenue, Gym City",
      subtext: "Open everyday",
    },
    {
      icon: <MessageSquare size={32} className="text-accent" />,
      title: "Live Chat",
      content: "Available on website",
      subtext: "9 AM - 9 PM (Mon-Sun)",
    },
  ];

  return (
    <div className="pt-20 md:pt-24 min-h-screen bg-gradient-to-b from-dark to-gray-900">
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            We're Here to <span className="text-primary">Help</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Got questions? Contact us anytime. Our team is ready to assist you!
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 md:p-8 hover:border-primary/50 transition duration-300 text-center group"
              >
                <div className="mb-4 flex justify-center">{method.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-primary transition">
                  {method.title}
                </h3>
                <p className="text-accent font-semibold mb-2">
                  {method.content}
                </p>
                <p className="text-gray-400 text-sm">{method.subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 rounded-2xl p-8 md:p-12">
            <div className="flex items-start space-x-4 mb-6">
              <Clock size={32} className="text-accent flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Business Hours
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-300 font-semibold mb-2">
                      Weekdays (Mon - Fri)
                    </p>
                    <p className="text-accent text-lg">6:00 AM - 11:00 PM</p>
                  </div>
                  <div>
                    <p className="text-gray-300 font-semibold mb-2">
                      Weekends (Sat - Sun)
                    </p>
                    <p className="text-accent text-lg">7:00 AM - 10:00 PM</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-gray-300 font-semibold mb-2">
                      Premium Members
                    </p>
                    <p className="text-primary text-lg">24/7 Access</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-gray-400">
              Find answers to common questions about our services
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden hover:border-accent/50 transition duration-300"
              >
                <button
                  onClick={() =>
                    setExpandedFAQ(expandedFAQ === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-6 hover:bg-gray-700/30 transition"
                >
                  <h3 className="text-white font-semibold text-left text-lg">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    size={24}
                    className={`text-accent flex-shrink-0 transition duration-300 ${
                      expandedFAQ === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedFAQ === index && (
                  <div className="px-6 pb-6 border-t border-gray-700 pt-4">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-20 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-gray-700 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Send us a <span className="text-primary">Message</span>
            </h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="px-4 py-3 rounded-lg bg-gray-700/50 border-2 border-gray-600 text-white placeholder-gray-500 transition focus:outline-none focus:border-accent"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="px-4 py-3 rounded-lg bg-gray-700/50 border-2 border-gray-600 text-white placeholder-gray-500 transition focus:outline-none focus:border-accent"
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border-2 border-gray-600 text-white placeholder-gray-500 transition focus:outline-none focus:border-accent"
              />

              <textarea
                rows={6}
                placeholder="Your Message..."
                className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border-2 border-gray-600 text-white placeholder-gray-500 transition focus:outline-none focus:border-accent resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-accent text-white font-semibold py-3 rounded-lg hover:shadow-lg hover:shadow-primary/30 transition duration-300 text-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Emergency Support */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-secondary to-dark border-2 border-primary/30 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Emergency Support?
          </h3>
          <p className="text-gray-300 mb-6">
            If you have a medical emergency, please call 911 immediately
          </p>
          <p className="text-accent font-semibold text-lg">
            For fitness-related emergencies: +1 (555) 999-8888
          </p>
        </div>
      </section>
    </div>
  );
};

export default HelpLine;
