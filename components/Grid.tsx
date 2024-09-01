import React from 'react';
import { BentoGrid, BentoGridItem } from './ui/BentoGrid';
import { gridItems } from '@/data';

const Grid = () => {
  return (
    <section id="about" className="py-12 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xs font-bold text-center mb-8 text-gray-800 dark:text-white">
          
        </h2>
        <BentoGrid>
          {gridItems.map((item) => (
            <BentoGridItem
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

export default Grid;
