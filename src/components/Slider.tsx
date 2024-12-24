import React from 'react';
import { cn } from "@/lib/utils";

interface SliderProps {
  direction: 'vertical' | 'horizontal';
  className?: string;
}

const images = [
  'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
  'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
  'https://images.unsplash.com/photo-1518770660439-4636190af475',
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
  'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d'
];

const Slider: React.FC<SliderProps> = ({ direction, className }) => {
  return (
    <div className={cn(
      "absolute overflow-hidden",
      direction === 'vertical' ? 'h-screen w-40' : 'w-screen h-40',
      className
    )}>
      <div className={cn(
        "flex gap-4 absolute",
        direction === 'vertical' ? 
          'flex-col animate-slide-vertical' : 
          'animate-slide-horizontal'
      )}>
        {[...images, ...images].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className={cn(
              "object-cover rounded-lg shadow-lg",
              direction === 'vertical' ? 'w-40 h-40' : 'w-40 h-40'
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;