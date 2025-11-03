import { useEffect, useRef, useState } from 'react';

export function EyesFollow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [strainIntensity, setStrainIntensity] = useState(0);
  const eyesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Calculate strain based on distance from window center
      const windowCenterX = window.innerWidth / 2;
      const windowCenterY = window.innerHeight / 2;
      const distanceFromCenter = Math.hypot(e.clientX - windowCenterX, e.clientY - windowCenterY);
      const maxDistance = Math.hypot(windowCenterX, windowCenterY);
      
      // Strain intensity increases as cursor moves towards edges (0 to 1)
      const intensity = Math.min(1, distanceFromCenter / maxDistance);
      setStrainIntensity(intensity);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const calculatePupilPosition = (eyeElement: HTMLElement) => {
    const eyeRect = eyeElement.getBoundingClientRect();
    const eyeCenterX = eyeRect.left + eyeRect.width / 2;
    const eyeCenterY = eyeRect.top + eyeRect.height / 2;

    // Calculate angle from eye center to mouse
    const angle = Math.atan2(mousePosition.y - eyeCenterY, mousePosition.x - eyeCenterX);
    
    // Calculate distance from eye center to mouse
    const distanceToMouse = Math.hypot(mousePosition.x - eyeCenterX, mousePosition.y - eyeCenterY);
    
    // Eye radius (w-24 = 96px, minus border-4 = 4px on each side = 88px inner diameter, so 44px radius)
    // Pupil radius (w-10 = 40px, so 20px radius)
    // Maximum movement = eye radius - pupil radius = 44 - 20 = 24px
    const maxDistance = 24;
    
    // Use the actual distance to mouse, but cap it at maxDistance
    const distance = Math.min(maxDistance, distanceToMouse / 10);

    return {
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance,
    };
  };

  return (
    <div className="flex gap-8 items-center justify-center my-12" ref={eyesRef}>
      {[1, 2].map((eye) => {
        const pupilPos = eyesRef.current
          ? calculatePupilPosition(eyesRef.current.children[eye - 1] as HTMLElement)
          : { x: 0, y: 0 };

        return (
          <div
            key={eye}
            className="relative w-24 h-24 bg-white border-4 border-gray-900 rounded-full flex items-center justify-center overflow-hidden"
          >
            {/* Red bloodshot veins - appear when eyes strain */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-300"
              style={{ opacity: strainIntensity * 0 }}
              viewBox="0 0 96 96"
            >
              {/* Vein lines radiating from center */}
              <line x1="48" y1="48" x2="20" y2="30" stroke="#dc2626" strokeWidth="1" opacity="0.8" />
              <line x1="20" y1="30" x2="30" y2="40" stroke="#dc2626" strokeWidth="1" opacity="0.7" />
              <line x1="48" y1="48" x2="25" y2="65" stroke="#dc2626" strokeWidth="1" opacity="0.8" />
              <line x1="48" y1="48" x2="76" y2="30" stroke="#dc2626" strokeWidth="1" opacity="0.8" />
              <line x1="48" y1="48" x2="81" y2="48" stroke="#dc2626" strokeWidth="1" opacity="0.7" />
              <line x1="48" y1="48" x2="71" y2="65" stroke="#dc2626" strokeWidth="1" opacity="0.8" />
              <line x1="48" y1="48" x2="48" y2="20" stroke="#dc2626" strokeWidth="1" opacity="0.6" />
              <line x1="48" y1="48" x2="48" y2="76" stroke="#dc2626" strokeWidth="1" opacity="0.6" />
              
              {/* Smaller branch veins */}
              <line x1="20" y1="30" x2="10" y2="25" stroke="#dc2626" strokeWidth="0.5" opacity="0.6" />
              <line x1="25" y1="65" x2="18" y2="75" stroke="#dc2626" strokeWidth="0.5" opacity="0.6" />
              <line x1="76" y1="30" x2="86" y2="25" stroke="#dc2626" strokeWidth="0.5" opacity="0.6" />
              <line x1="71" y1="65" x2="78" y2="75" stroke="#dc2626" strokeWidth="0.5" opacity="0.6" />
            </svg>
            
            <div
              className="w-10 h-10 bg-gray-900 rounded-full transition-transform duration-100 ease-out"
              style={{
                transform: `translate(${pupilPos.x}px, ${pupilPos.y}px)`,
              }}
            >
              <div className="w-4 h-4 bg-white rounded-full absolute top-2 left-2" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
