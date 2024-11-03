import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, MessageCircle, ChevronRight, CheckCircle } from 'lucide-react';
import FadeIn from '../components/animations/FadeIn';
import ParallaxSection from '../components/animations/ParallaxSection';
import ScrollSection from '../components/animations/ScrollSection';

const services = [
  {
    id: 1,
    title: "Individual Healing Session",
    duration: "90 minutes",
    price: "$150",
    description: "One-on-one therapeutic session with our horses"
  },
  {
    id: 2,
    title: "Group Wellness Program",
    duration: "2 hours",
    price: "$95/person",
    description: "Transformative group experience (4-8 people)"
  },
  {
    id: 3,
    title: "Morning Meditation",
    duration: "60 minutes",
    price: "$75",
    description: "Guided meditation with our gentle horses"
  }
];

const BookingPage = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    participants: 1,
    date: '',
    time: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
  };

  return (
    <div className="w-full">
      <ScrollSection>
        <section className="relative min-h-screen flex items-center">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1469122312224-c5846569feb1?auto=format&fit=crop&q=80"
              alt="Ranch sunset"
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
                  Book Your Session
                </h1>
                <p className="text-xl text-white/90 max-w-2xl">
                  Begin your healing journey with our extraordinary herd.
                </p>
              </motion.div>
            </ParallaxSection>
          </div>
        </section>
      </ScrollSection>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Progress Steps */}
            <div className="flex items-center justify-between mb-12">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`flex items-center ${s < 3 ? 'flex-1' : ''}`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      s <= step ? 'bg-primary-600 text-white' : 'bg-gray-200'
                    }`}
                  >
                    {s < step ? (
                      <CheckCircle className="h-5 w-5" />
                    ) : (
                      <span>{s}</span>
                    )}
                  </div>
                  {s < 3 && (
                    <div
                      className={`flex-1 h-1 mx-4 ${
                        s < step ? 'bg-primary-600' : 'bg-gray-200'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Step 1: Service Selection */}
            {step === 1 && (
              <FadeIn>
                <div className="space-y-6">
                  {services.map((service) => (
                    <motion.div
                      key={service.id}
                      whileHover={{ scale: 1.02 }}
                      className={`p-6 rounded-lg border-2 cursor-pointer transition-colors ${
                        selectedService === service.id
                          ? 'border-primary-600 bg-primary-50'
                          : 'border-gray-200 hover:border-primary-300'
                      }`}
                      onClick={() => setSelectedService(service.id)}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-display text-gray-900 mb-2">
                            {service.title}
                          </h3>
                          <p className="text-gray-600 mb-4">{service.description}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {service.duration}
                            </span>
                            <span className="flex items-center">
                              <Users className="h-4 w-4 mr-1" />
                              Individual
                            </span>
                          </div>
                        </div>
                        <span className="text-xl font-semibold text-primary-600">
                          {service.price}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-primary-600 text-white py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2"
                    onClick={() => selectedService && setStep(2)}
                    disabled={!selectedService}
                  >
                    <span>Continue</span>
                    <ChevronRight className="h-5 w-5" />
                  </motion.button>
                </div>
              </FadeIn>
            )}

            {/* Step 2: Booking Form */}
            {step === 2 && (
              <FadeIn>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Date
                      </label>
                      <input
                        type="date"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        value={formData.date}
                        onChange={(e) =>
                          setFormData({ ...formData, date: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Time
                      </label>
                      <select
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        value={formData.time}
                        onChange={(e) =>
                          setFormData({ ...formData, time: e.target.value })
                        }
                      >
                        <option value="">Select a time</option>
                        <option value="09:00">9:00 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="14:00">2:00 PM</option>
                        <option value="16:00">4:00 PM</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Special Requests or Questions
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-primary-600 text-white py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>Complete Booking</span>
                    <ChevronRight className="h-5 w-5" />
                  </motion.button>
                </form>
              </FadeIn>
            )}

            {/* Step 3: Confirmation */}
            {step === 3 && (
              <FadeIn>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-8 w-8 text-primary-600" />
                  </div>
                  <h2 className="text-2xl font-display text-gray-900 mb-4">
                    Booking Confirmed!
                  </h2>
                  <p className="text-gray-600 mb-8">
                    We've received your booking request and will contact you shortly to
                    confirm the details.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setStep(1);
                      setSelectedService(null);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        participants: 1,
                        date: '',
                        time: '',
                        message: ''
                      });
                    }}
                    className="bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
                  >
                    Book Another Session
                  </motion.button>
                </div>
              </FadeIn>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookingPage;