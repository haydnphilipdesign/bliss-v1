import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Star, Heart, Users, Calendar, Mail, Phone } from 'lucide-react';
import ScrollSection from '../components/animations/ScrollSection';
import ContactForm from '../components/ContactForm';

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section - Wrapped in ScrollSection */}
      <ScrollSection>
        <section className="relative min-h-screen flex items-center">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1472756017185-c6e61f9b9ac3?auto=format&fit=crop&q=80"
              alt="Ranch at sunset"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left"
            >
              <h1 className="text-5xl md:text-7xl font-display text-white mb-6">
                Find Peace Through
                <br />
                Equine Connection
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mb-8">
                Experience transformative healing with our gentle horses in a serene ranch setting.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors inline-flex items-center space-x-2"
              >
                <span>Start Your Journey</span>
                <ChevronRight className="h-5 w-5" />
              </motion.button>
            </motion.div>
          </div>
        </section>
      </ScrollSection>

      {/* Rest of the content remains unchanged */}
      {/* ... */}
    </div>
  );
};

export default Home;