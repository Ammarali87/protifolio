import React, { useEffect, useRef } from 'react';

const TechSlider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);

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
    <section className="h-24 md:h-32 lg:h-40 w-full bg-green-800 p-4 md:p-6 lg:p-8 rounded-lg shadow-lg mb-8">
      <div
        ref={sliderRef}
        className="flex py-4 overflow-x-scroll scrollbar-hide justify-center gap-4"
      >
        <img src="/html-1.svg" className="h-16 md:h-24 lg:h-32 object-contain" alt="HTML logo" />
        <img
          src="/1174949_js_react js_logo_react_react native_icon.svg"
          className="h-16 md:h-24 lg:h-32 object-contain"
          alt="React logo"
        />
        <img
          src="/1174949_js_react js_logo_react_react native_icon.svg"
          className="h-16 md:h-24 lg:h-32 object-contain"
          alt="React logo"
        />
        <img src="/tailwindcss.svg" className="h-16 md:h-24 lg:h-32 object-contain" alt="Tailwind CSS logo" />
        <img src="/tailwindcss.svg" className="h-16 md:h-24 lg:h-32 object-contain" alt="Tailwind CSS logo" />
        <img src="/tailwindcss.svg" className="h-16 md:h-24 lg:h-32 object-contain" alt="Tailwind CSS logo" />
        <img src="/tailwindcss.svg" className="h-16 md:h-24 lg:h-32 object-contain" alt="Tailwind CSS logo" />
        <img src="/tailwindcss.svg" className="h-16 md:h-24 lg:h-32 object-contain" alt="Tailwind CSS logo" />
        <img src="/logo-javascript.svg" className="h-16 md:h-24 lg:h-32 object-contain" alt="JavaScript logo" />
        <img
          src="/1174949_js_react js_logo_react_react native_icon.svg"
          className="h-16 md:h-24 lg:h-32 object-contain"
          alt="React logo"
        />
        <img src="/logo-color.svg" className="h-16 md:h-24 lg:h-32 object-contain" alt="Color logo" />
      </div>
    </section>
  );
};

export default TechSlider;


// import React, { useEffect, useRef } from 'react';

// const TechSlider: React.FC = () => {
//   const sliderRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const slider = sliderRef.current;
//     let scrollAmount = 0;
//     const speed = 2; // Speed of the scrolling (higher number = faster)
//     const delay = 20; // Delay between scrolls (ms)

//     const scrollStep = () => {
//       if (slider) {
//         scrollAmount += speed;
//         slider.scrollLeft = scrollAmount;
//         if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
//           scrollAmount = 0; // Reset scroll when reaching the end
//         }
//       }
//     };

//     const intervalId = setInterval(scrollStep, delay);

//     return () => clearInterval(intervalId); // Clean up on unmount
//   }, []);

//   return (
//     <section className=" p-8 rounded-lg shadow-lg mb-8">
//       <div
//         ref={sliderRef}
//         className="flex py-11 justify-center gap-4"
//       >
//         <img src="/html-1.svg" className=" h-auto ml-[196px]  object-contain" alt="HTML logo" />
//         <img src="/1174949_js_react js_logo_react_react native_icon.svg" className=" h-auto  object-contain" alt="React logo" />
//         <img src="/logo-color.svg" className=" h-auto  object-contain" alt="Color logo" />
//         <img src="/css-3.svg" className=" h-auto  object-contain" alt="CSS logo" />
//         <img src="/sass-1.svg" className=" h-auto  object-contain" alt="Sass logo" />
//         <img src="/material-ui-1.svg" className=" h-auto  object-contain" alt="Material-UI logo" />
//         <img src="/tailwindcss.svg" className=" h-auto  object-contain" alt="Tailwind CSS logo" />
//         <img src="/logo-javascript.svg" className=" h-auto  object-contain" alt="JavaScript logo" />
//         <img src="/1174949_js_react js_logo_react_react native_icon.svg" className=" h-auto  object-contain" alt="React logo" />
//         <img src="/logo-color.svg" className=" h-auto  object-contain" alt="Color logo" />
//       </div>
//     </section>
//   );
// };

// export default TechSlider;
