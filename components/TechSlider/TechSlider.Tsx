import React from 'react';

const TechSlider: React.FC = () => {
  return (
    <section className="p-4 sm:p-6 md:p-8 rounded-lg ">
      <div className="flex py-2 sm:py-4 justify-start gap-4 w-full overflow-x-auto md:overflow-x-hidden">
        <div className="flex gap-4 animate-marquee-right md:animate-none">
          <img
            src="/tailwindcss.svg"
            className=" mx-6 h-10 sm:h-14"
            alt="Tailwind CSS logo"
          />
          <img
            src="/css-3.svg"
            className=" mx-6 h-10 sm:h-14"
            alt="Tailwind CSS logo"
          />
          <img
            src="/sass-1.svg"
            className=" mx-6 h-10 sm:h-14"
            alt="Tailwind CSS logo"
          />
          <img
            src="/material-ui-1.svg"
            className=" mx-6 h-10 sm:h-14"
            alt="Tailwind CSS logo"
          />
          <img
            src="/logo-javascript.svg"
            className=" mx-6 h-10 sm:h-14"
            alt="JavaScript logo"
          />
          <img
            src="/tailwindcss.svg"
            className=" mx-6 h-10 sm:h-14"
            alt="Tailwind CSS logo"
          />
         
          <img
            src="/html-1.svg"
            className=" mx-6 h-10 sm:h-14"
            alt="Color logo"
          />
          <img
            src="/bootstrap-5-1.svg"
            className=" mx-6 h-10 sm:h-14"
            alt="Color logo"
          />
         <img
            src="/css-3.svg"
            className=" mx-6 h-10 sm:h-14"
            alt="Tailwind CSS logo"
          />
        </div>

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
//        </div>
//     </section>
//   );
// };

// export default TechSlider;
