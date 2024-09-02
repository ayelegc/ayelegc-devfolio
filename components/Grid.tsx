import React from 'react';
import { BentoGrid, BentoGridItem } from './ui/BentoGrid';
import { gridItems } from '@/data';

const Grid = () => {
  return (
    <section id="about" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
          About Me
        </h2>
        <BentoGrid>
          {gridItems.map((item) => (
            <BentoGridItem
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105"
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

export default Grid;
