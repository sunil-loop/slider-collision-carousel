import React from 'react';
import { cn } from "@/lib/utils";

interface CollisionBoxProps {
  isColliding: boolean;
}

const CollisionBox: React.FC<CollisionBoxProps> = ({ isColliding }) => {
  return (
    <div
      className={cn(
        "absolute w-20 h-20 transition-opacity duration-300",
        isColliding ? "opacity-100" : "opacity-0",
        "bg-[#ea384c] rounded-lg shadow-lg"
      )}
      style={{ right: '20%', top: '50%', transform: 'translate(50%, -50%)' }}
    />
  );
};

export default CollisionBox;