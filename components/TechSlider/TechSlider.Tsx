import React, { useEffect, useRef } from 'react';

const TechSlider: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollStep = 1;
    const scrollInterval = 100; // Interval in milliseconds (0.1s)

    const scroll = () => {
      scrollAmount += scrollStep;
      // If the scroll amount reaches the end, reset to 0
      if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollAmount = 0;
      }
      scrollContainer.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
      });
    };

    const intervalId = setInterval(scroll, scrollInterval);

    return () => clearInterval(intervalId); // Clean up on component unmount
  }, []);

  return (
    <section className="h-1/5 space-5 bg-[#2D3748] p-8 rounded-lg shadow-lg mb-8">
      <div
        ref={scrollRef}
        className="flex py-11 overflow-x-scroll justify-center gap-4"
      >
        <img
          src="/html-1.svg"
          className="ms-[131px] h-[20vh] object-contain"
          alt="HTML logo"
        />
        <img
          src="/bootstrap-5-1.svg"
          className="h-[20vh] object-contain"
          alt="React logo"
        />
        <img
          src="/logo-color.svg"
          className="h-[20vh] object-contain"
          alt="React logo"
        />
        <img
          src="/css-3.svg"
          className="h-[20vh] object-contain"
          alt="Tailwind CSS logo"
        />
        <img
          src="/tailwindcss.svg"
          className="h-[20vh] object-contain"
          alt="Tailwind CSS logo"
        />
        <img
          src="/sass-1.svg"
          className="h-[20vh] object-contain"
          alt="Tailwind CSS logo"
        />
        <img
          src="/material-ui-1.svg"
          className="h-[20vh] object-contain"
          alt="Tailwind CSS logo"
        />
        <img
          src="/next-js.svg"
          className="h-[20vh] object-contain"
          alt="Tailwind CSS logo"
        />
        <img
          src="/logo-javascript.svg"
          className="h-[20vh] object-contain"
          alt="JavaScript logo"
        />
        <img
          src="/1174949_js_react js_logo_react_react native_icon.svg"
          className="h-[20vh] object-contain"
          alt="React logo"
        />
        <img
          src="/logo-color.svg"
          className="h-[20vh] object-contain"
          alt="Color logo"
        />
      </div>
    </section>
  );
};

export default TechSlider;
