import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Leaf, Sparkles } from 'lucide-react';
import FadeIn from '../components/animations/FadeIn';
import ParallaxSection from '../components/animations/ParallaxSection';
import WaveDivider from '../components/ui/WaveDivider';

const values = [
  {
    icon: Heart,
    title: "Compassionate Care",
    description: "We provide a nurturing environment where healing happens naturally through understanding and empathy."
  },
  {
    icon: Users,
    title: "Community Connection",
    description: "Building lasting relationships between humans, horses, and nature for holistic wellness."
  },
  {
    icon: Leaf,
    title: "Natural Healing",
    description: "Embracing the power of nature and equine wisdom in our therapeutic approaches."
  },
  {
    icon: Sparkles,
    title: "Transformative Growth",
    description: "Facilitating personal development and healing through meaningful experiences."
  }
];

const About = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1469122312224-c5846569feb1?auto=format&fit=crop&q=80"
            alt="Sunset at the ranch"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-display text-white mb-6">
              Our Story
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Founded on the belief in the healing power of nature and the profound connection between humans and horses.
            </p>
          </FadeIn>
        </div>
      </section>

      <WaveDivider />

      {/* Mission Statement */}
      <section className="bg-primary-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ParallaxSection className="text-center">
            <motion.h2 
              className="text-4xl md:text-5xl font-display text-primary-800 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Our Mission
            </motion.h2>
            <motion.p 
              className="text-xl text-primary-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              To create a sanctuary where healing flourishes through the harmonious connection between humans, horses, and nature, fostering transformation and growth in mind, body, and spirit.
            </motion.p>
          </ParallaxSection>
        </div>
      </section>

      <WaveDivider flip className="rotate-180" />

      {/* Values Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl font-display text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide our healing journey</p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <FadeIn key={index} delay={index * 0.2}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <value.icon className="h-12 w-12 text-primary-600 mb-6" />
                  <h3 className="text-xl font-display text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-primary-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl font-display mb-4">Our Team</h2>
            <p className="text-xl text-primary-200">Dedicated professionals committed to your healing journey</p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <FadeIn key={index} delay={index * 0.2}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative overflow-hidden rounded-xl"
                >
                  <img
                    src={`https://images.unsplash.com/photo-${[
                      '1494790108377-be9c29b29330',
                      '1507003211169-0a1dd7228f2d',
                      '1438761681033-6461ffad8d80'
                    ][index]}?auto=format&fit=crop&q=80`}
                    alt="Team member"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                    <div>
                      <h3 className="text-xl font-display mb-1">
                        {['Sarah Johnson', 'Michael Chen', 'Emma Williams'][index]}
                      </h3>
                      <p className="text-primary-200">
                        {['Lead Therapist', 'Equine Specialist', 'Wellness Coach'][index]}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;