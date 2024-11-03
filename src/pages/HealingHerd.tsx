import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Star, Medal, Sparkles } from 'lucide-react';
import FadeIn from '../components/animations/FadeIn';
import ParallaxSection from '../components/animations/ParallaxSection';

const horses = [
  {
    name: "Luna",
    title: "The Gentle Soul",
    image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&q=80",
    description: "Luna's calm presence and intuitive nature make her perfect for first-time healing sessions. Her gentle spirit helps clients feel safe and understood.",
    specialties: ["Anxiety Relief", "Emotional Healing", "Youth Programs"],
    age: 8,
    personality: "Gentle and nurturing",
    story: "Rescued from a neglectful situation, Luna's transformation story inspires our clients. Her journey from fear to trust mirrors many healing journeys."
  },
  {
    name: "Spirit",
    title: "The Wise Guide",
    image: "https://images.unsplash.com/photo-1534773728080-33d31da27ae5?auto=format&fit=crop&q=80",
    description: "Spirit's profound wisdom and grounding energy create powerful breakthrough moments for our clients dealing with trauma and life transitions.",
    specialties: ["Trauma Recovery", "Leadership Development", "Deep Healing"],
    age: 12,
    personality: "Wise and steady",
    story: "Born wild and gentled through natural horsemanship, Spirit teaches us about freedom within boundaries and authentic leadership."
  },
  {
    name: "Nova",
    title: "The Playful Healer",
    image: "https://images.unsplash.com/photo-1598974357801-cbca100e65d3?auto=format&fit=crop&q=80",
    description: "Nova's playful energy brings joy and lightness to our sessions, helping clients reconnect with their inner child and find joy in healing.",
    specialties: ["Inner Child Work", "Confidence Building", "Group Sessions"],
    age: 6,
    personality: "Playful and energetic",
    story: "Nova came to us as a young horse and blossomed into an incredible therapy partner, showing how joy and healing go hand in hand."
  }
];

const HealingHerd = () => {
  const [selectedHorse, setSelectedHorse] = useState(null);

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1501706362039-c06b2d715385?auto=format&fit=crop&q=80"
            alt="Horses in misty morning"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ParallaxSection>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-display text-white mb-6">
                Meet Our Healing Herd
              </h1>
              <p className="text-xl text-white/90 max-w-2xl">
                Each horse in our herd brings unique healing gifts and wisdom to their work with clients.
              </p>
            </motion.div>
          </ParallaxSection>
        </div>
      </section>

      {/* Horse Profiles */}
      <section className="py-24 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {horses.map((horse, index) => (
              <FadeIn key={index} delay={index * 0.2}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
                  onClick={() => setSelectedHorse(horse)}
                >
                  <div className="relative h-80">
                    <img
                      src={horse.image}
                      alt={horse.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6 text-white">
                      <h3 className="text-2xl font-display mb-2">{horse.name}</h3>
                      <p className="text-primary-200">{horse.title}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{horse.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {horse.specialties.map((specialty, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Horse Modal */}
      <AnimatePresence>
        {selectedHorse && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            onClick={() => setSelectedHorse(null)}
          >
            <div className="absolute inset-0 bg-black/70" />
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative h-96">
                <img
                  src={selectedHorse.image}
                  alt={selectedHorse.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <h2 className="text-4xl font-display mb-2">{selectedHorse.name}</h2>
                  <p className="text-xl text-primary-200">{selectedHorse.title}</p>
                </div>
              </div>
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-display text-gray-900 mb-4">About {selectedHorse.name}</h3>
                    <p className="text-gray-600 mb-6">{selectedHorse.description}</p>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Heart className="h-5 w-5 text-primary-600" />
                        <span className="text-gray-700">Age: {selectedHorse.age} years</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star className="h-5 w-5 text-primary-600" />
                        <span className="text-gray-700">Personality: {selectedHorse.personality}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-display text-gray-900 mb-4">Healing Journey</h3>
                    <p className="text-gray-600 mb-6">{selectedHorse.story}</p>
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-900">Specialties:</h4>
                      {selectedHorse.specialties.map((specialty, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <Medal className="h-4 w-4 text-primary-600" />
                          <span className="text-gray-700">{specialty}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <button
                    className="bg-primary-600 text-white px-8 py-3 rounded-full font-medium inline-flex items-center space-x-2 hover:bg-primary-700 transition-colors"
                    onClick={() => setSelectedHorse(null)}
                  >
                    <Sparkles className="h-5 w-5" />
                    <span>Book a Session with {selectedHorse.name}</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Testimonials */}
      <section className="py-24 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl font-display mb-4">Healing Stories</h2>
            <p className="text-xl text-primary-200">Real transformations with our remarkable herd</p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <FadeIn key={index} delay={index * 0.2}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-primary-800/50 p-6 rounded-xl"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-primary-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-primary-100 mb-6">
                    {[
                      "Working with Luna helped me find inner peace I never knew existed. Her gentle presence guided me through my anxiety.",
                      "Spirit's wisdom and strength gave me the courage to face my past trauma. Every session was a profound journey of healing.",
                      "Nova's playful energy brought joy back into my life. She taught me that healing can be both powerful and fun."
                    ][index]}
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary-700" />
                    <div>
                      <p className="font-medium">
                        {["Sarah M.", "Michael R.", "Emma L."][index]}
                      </p>
                      <p className="text-sm text-primary-300">
                        {["Anxiety Recovery", "Trauma Healing", "Personal Growth"][index]}
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

export default HealingHerd;