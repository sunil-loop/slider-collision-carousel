import { useState, useEffect } from 'react';
import Slider from '../components/Slider';
import CollisionBox from '../components/CollisionBox';

const Index = () => {
  const [isColliding, setIsColliding] = useState(false);

  useEffect(() => {
    const checkCollision = () => {
      // Collision occurs every 5 seconds due to the animation timing
      setIsColliding(true);
      setTimeout(() => setIsColliding(false), 1000);
    };

    const interval = setInterval(checkCollision, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-gray-50">
      <Slider 
        direction="horizontal" 
        className="top-1/2 -translate-y-1/2"
      />
      <Slider 
        direction="vertical" 
        className="right-[20%] translate-x-1/2"
      />
      <CollisionBox isColliding={isColliding} />
    </div>
  );
};

export default Index;