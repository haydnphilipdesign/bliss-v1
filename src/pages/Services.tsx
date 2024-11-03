import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Sunrise, Moon, Flower, Star } from 'lucide-react';
import FadeIn from '../components/animations/FadeIn';
import ParallaxSection from '../components/animations/ParallaxSection';
import { AnimatedCards } from '../components/ui/animated-cards';
import { Spotlight } from '../components/ui/spotlight';

const services = [
  {
    id: 1,
    icon: Heart,
    title: "Individual Healing Sessions",
    description: "One-on-one therapeutic sessions combining equine interaction with holistic healing practices.",
    duration: "90 minutes",
    price: "$150"
  },
  {
    id: 2,
    icon: Users,
    title: "Group Wellness Programs",
    description: "Transformative group experiences fostering connection and personal growth.",
    duration: "2 hours",
    price: "$95/person"
  },
  {
    id: 3,
    icon: Sunrise,
    title: "Morning Meditation with Horses",
    description: "Start your day with guided meditation in the presence of our gentle horses.",
    duration: "60 minutes",
    price: "$75"
  },
  {
    id: 4,
    icon: Moon,
    title: "Sunset Healing Circles",
    description: "Evening group sessions combining energy work and equine connection.",
    duration: "2 hours",
    price: "$85/person"
  },
  {
    id: 5,
    icon: Flower,
    title: "Nature Therapy Walks",
    description: "Guided therapeutic walks through our healing gardens and horse pastures.",
    duration: "75 minutes",
    price: "$95"
  },
  {
    id: 6,
    icon: Star,
    title: "Intensive Healing Retreat",
    description: "Immersive weekend retreat for deep healing and transformation.",
    duration: "2 days",
    price: "$595"
  }
];

const benefits = [
  {
    title: "Emotional Healing",
    description: "Process emotions and trauma in a safe, supported environment"
  },
  {
    title: "Stress Reduction",
    description: "Find peace and calm through equine-assisted mindfulness"
  },
  {
    title: "Personal Growth",
    description: "Develop confidence, boundaries, and authentic leadership"
  },
  {
    title: "Mind-Body Connection",
    description: "Strengthen the bond between mental and physical wellbeing"
  }
];

const Services = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1450052590821-8bf91254a353?auto=format&fit=crop&q=80"
            alt="Horses in morning light"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ParallaxSection>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-display text-white mb-6">
                Healing Services
              </h1>
              <p className="text-xl text-white/90 max-w-2xl">
                Discover our range of transformative healing experiences designed to nurture your mind, body, and spirit.
              </p>
            </motion.div>
          </ParallaxSection>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-24 bg-primary-50">
        <Spotlight className="-top-20 left-0 md:left-60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl font-display text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each service is thoughtfully designed to support your healing journey through the power of equine connection.
            </p>
          </FadeIn>

          <AnimatedCards items={services} />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl font-display mb-4">Benefits of Equine Healing</h2>
            <p className="text-xl text-primary-200 max-w-2xl mx-auto">
              Experience profound transformation through our unique approach to healing
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <FadeIn key={index} delay={index * 0.2}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-primary-800/50 p-8 rounded-xl"
                >
                  <h3 className="text-2xl font-display mb-4">{benefit.title}</h3>
                  <p className="text-primary-200">{benefit.description}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-white overflow-hidden">
        <Spotlight className="-top-20 right-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-4xl font-display text-gray-900 mb-6">
              Ready to Begin Your Healing Journey?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Take the first step towards transformation and book your session today.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
            >
              Book Now
            </motion.button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Services;