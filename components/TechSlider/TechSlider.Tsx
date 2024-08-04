import React, { useEffect, useRef } from 'react';

const TechSlider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;
    const speed = 2; // Speed of the scrolling (higher number = faster)
    const delay = 20; // Delay between scrolls (ms)

    const scrollStep = () => {
      if (slider) {
        scrollAmount += speed;
        slider.scrollLeft = scrollAmount;
        if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
          scrollAmount = 0; // Reset scroll when reaching the end
        }
      }
    };

    const intervalId = setInterval(scrollStep, delay);

    return () => clearInterval(intervalId); // Clean up on unmount
  }, []);

  return (   
    <section className="h-1/5 bg-gray-800 p-8 rounded-lg shadow-lg mb-8">
      <div
        ref={sliderRef}
        className="flex py-11 overflow-x-scroll scrollbar-hide justify-center gap-4"
      >
        <img src="/html-1.svg" className="ms-[196px] h-[20vh] object-contain" alt="HTML logo" />
        <img
          src="/1174949_js_react js_logo_react_react native_icon.svg"
          className="h-[20vh] object-contain"
          alt="React logo"
        />
        <img
          src="/1174949_js_react js_logo_react_react native_icon.svg"
          className="h-[20vh] object-contain"
          alt="React logo"
        />
        <img src="/tailwindcss.svg" className="h-[20vh] object-contain" alt="Tailwind CSS logo" />
        <img src="/tailwindcss.svg" className="h-[20vh] object-contain" alt="Tailwind CSS logo" />
        <img src="/tailwindcss.svg" className="h-[20vh] object-contain" alt="Tailwind CSS logo" />
        <img src="/tailwindcss.svg" className="h-[20vh] object-contain" alt="Tailwind CSS logo" />
        <img src="/tailwindcss.svg" className="h-[20vh] object-contain" alt="Tailwind CSS logo" />
        <img src="/logo-javascript.svg" className="h-[20vh] object-contain" alt="JavaScript logo" />
        <img
          src="/1174949_js_react js_logo_react_react native_icon.svg"
          className="h-[20vh] object-contain"
          alt="React logo"
        />
        <img src="/logo-color.svg" className="h-[20vh] object-contain" alt="Color logo" />
      </div>
    </section>
  );
};

export default TechSlider;
