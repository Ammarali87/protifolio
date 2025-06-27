import React, { useEffect, useRef } from 'react';

const items = [
  'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', // React
  'https://seeklogo.com/images/N/next-js-logo-7929BCD36F-seeklogo.com.png', // Next.js
  'https://nodejs.org/static/images/logo.svg', // Node.js
  'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png', // Express.js
  "https://www.svgrepo.com/show/374118/tailwind.svg",// Tailwind CSS 
  'https://webassets.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png', // MongoDB
  'https://mui.com/static/logo.png', // Material UI
  'https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo-shadow.png', // Bootstrap
];

const TechSlider: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let position = 0;
    const itemWidth = 220;
    const speed = 1;

    const move = () => {
      position -= speed;
      container.style.transform = `translateX(${position}px)`;

      if (Math.abs(position) >= itemWidth * items.length) {
        position = 0;
      }

      requestAnimationFrame(move);
    };

    move();
  }, []);

  return (
    <div className="overflow-hidden w-full border p-4 rounded-xl h-[180px]">
      <div
        ref={containerRef}
        className="flex gap-6"
        style={{ width: `${items.length * 220 * 2}px` }}
      >
        {items.concat(items).map((item, index) => (
          <div
            key={index}
            className="bg-gray-200 rounded-lg flex items-center justify-center w-[220px] h-[150px]"
          >
            <img
              src={item}
              alt={`item-${index}`}
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechSlider;
