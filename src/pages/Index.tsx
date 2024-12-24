import { useState, useEffect, useRef } from 'react';
import Slider from '../components/Slider';
import CollisionBox from '../components/CollisionBox';

const Index = () => {
  const [isColliding, setIsColliding] = useState(false);
  const horizontalIndexRef = useRef(0);
  const verticalIndexRef = useRef(0);

  useEffect(() => {
    const checkCollision = () => {
      // Calculate current image indices based on time
      const timeElapsed = (Date.now() % 8000) / 8000; // 8s animation cycle
      const totalImages = 5; // Number of unique images
      
      // Calculate current image indices for both sliders
      horizontalIndexRef.current = Math.floor(timeElapsed * totalImages);
      verticalIndexRef.current = Math.floor(timeElapsed * totalImages);

      // Only show collision when same images meet
      if (horizontalIndexRef.current === verticalIndexRef.current) {
        setIsColliding(true);
        setTimeout(() => setIsColliding(false), 1000);
      }
    };

    // Check collisions every 100ms for more precise detection
    const interval = setInterval(checkCollision, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-gray-50">
      <Slider 
        direction="horizontal" 
        className="top-[45%] -translate-y-1/2"
      />
      <Slider 
        direction="vertical" 
        className="right-[45%] translate-x-1/2"
      />
      <CollisionBox isColliding={isColliding} />
    </div>
  );
};

export default Index;