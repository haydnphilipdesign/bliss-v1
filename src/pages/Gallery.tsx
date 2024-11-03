import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Camera, Tag, Heart } from 'lucide-react';
import FadeIn from '../components/animations/FadeIn';
import ParallaxSection from '../components/animations/ParallaxSection';

const categories = [
  { id: 'all', name: 'All' },
  { id: 'horses', name: 'Horses' },
  { id: 'sessions', name: 'Healing Sessions' },
  { id: 'ranch', name: 'Ranch Life' },
  { id: 'events', name: 'Events' }
];

const images = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1534307250431-ef2530a9d8c5?auto=format&fit=crop&q=80',
    alt: 'Horse in morning light',
    category: 'horses',
    title: 'Spirit at Dawn'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1469122312224-c5846569feb1?auto=format&fit=crop&q=80',
    alt: 'Healing session',
    category: 'sessions',
    title: 'Connection Moment'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1511374322656-8bbe3fd98dff?auto=format&fit=crop&q=80',
    alt: 'Ranch landscape',
    category: 'ranch',
    title: 'Peaceful Pastures'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&q=80',
    alt: 'Group event',
    category: 'events',
    title: 'Community Gathering'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1553284965-99e560e39cf3?auto=format&fit=crop&q=80',
    alt: 'Horse close-up',
    category: 'horses',
    title: 'Soul Window'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1450052590821-8bf91254a353?auto=format&fit=crop&q=80',
    alt: 'Healing session outdoors',
    category: 'sessions',
    title: 'Nature\'s Therapy'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1505246170520-1c003eda7abb?auto=format&fit=crop&q=80',
    alt: 'Ranch sunset',
    category: 'ranch',
    title: 'Golden Hour'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1506499422601-ecc792cf898e?auto=format&fit=crop&q=80',
    alt: 'Workshop session',
    category: 'events',
    title: 'Wisdom Circle'
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  const filteredImages = images.filter(
    img => activeCategory === 'all' || img.category === activeCategory
  );

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1469122312224-c5846569feb1?auto=format&fit=crop&q=80"
            alt="Ranch landscape"
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
                Our Gallery
              </h1>
              <p className="text-xl text-white/90 max-w-2xl">
                Capturing moments of healing, connection, and transformation at Blissful Existence.
              </p>
            </motion.div>
          </ParallaxSection>
        </div>
      </section>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-amber-600 text-white'
                  : 'bg-gray-100 hover:bg-amber-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative aspect-square cursor-pointer group"
              onMouseEnter={() => setHoveredImage(image.id)}
              onMouseLeave={() => setHoveredImage(null)}
              onClick={() => setSelectedImage(image.id)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredImage === image.id ? 1 : 0 }}
                className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center"
              >
                <div className="text-center text-white p-4">
                  <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                  <p className="text-sm opacity-80">{image.alt}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-amber-400 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <img
              src={images.find(img => img.id === selectedImage)?.src}
              alt={images.find(img => img.id === selectedImage)?.alt}
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;