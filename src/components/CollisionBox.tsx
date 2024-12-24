import React from 'react';
import { cn } from "@/lib/utils";

interface CollisionBoxProps {
  isColliding: boolean;
}

const CollisionBox: React.FC<CollisionBoxProps> = ({ isColliding }) => {
  return (
    <div
      className={cn(
        "absolute w-20 h-20 transition-opacity duration-300 rounded-full",
        "bg-blue-200/20 backdrop-blur-sm",
        isColliding ? "opacity-100 animate-glow" : "opacity-0",
      )}
      style={{ right: '45%', top: '45%', transform: 'translate(50%, -50%)' }}
    />
  );
};

export default CollisionBox;