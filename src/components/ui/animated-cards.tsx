import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface AnimatedCardsProps {
  items: Array<{
    id: number;
    title: string;
    description: string;
    icon: React.ElementType;
    price: string;
    duration: string;
  }>;
  className?: string;
}

export const AnimatedCards: React.FC<AnimatedCardsProps> = ({
  items,
  className,
}) => {
  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8', className)}>
      {items.map((item, idx) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: idx * 0.1,
          }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
          className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-lg"
        >
          <div className="absolute -right-10 -top-10 z-0 h-40 w-40 rounded-full bg-primary-100 transition-transform duration-300 group-hover:scale-150" />
          
          <div className="relative z-10">
            <div className="mb-4">
              <item.icon className="h-8 w-8 text-primary-600" />
            </div>
            
            <h3 className="mb-2 text-2xl font-display text-gray-900">{item.title}</h3>
            <p className="mb-4 text-gray-600">{item.description}</p>
            
            <div className="mt-auto space-y-2">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>Duration</span>
                <span className="font-medium">{item.duration}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Price</span>
                <span className="text-lg font-semibold text-primary-600">{item.price}</span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};