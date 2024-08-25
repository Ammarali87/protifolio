'use client';
import React from 'react';
import Slider from "../components/Slider/Slider";
// import TechSlider from "../components/TechSlider/TechSlider";
import AnimateText from '@/components/AnimateText/AnimateText';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-8">
      <div className="flex  z-50 flex-col relative mb-8  md:flex-row items-center h-screen justify-center mt-3 md:mt-[-22px]">
        <section className="w-full mt-[-61px] max-w-4xl text-center mb-12">
          <h1 className="text-5xl w-[30vw] mx-auto  mb-11">
            <AnimateText />
            <span className="animate-blink">|</span>
          </h1>
          
        </section>

        <section className="w-1/2 max-w-4xl mt-[-61px] p-8 mb-8 rounded-lg shadow-lg">
          <div className="">
            <img src="code.jpg" className="rounded-full" alt="Logo" />
          </div>
        </section>
      </div>
      <video
          className="absolute inset-0 object-cover w-full h-full "
          autoPlay
          muted
          loop
          src="/vid.mp4"
          aria-label="Background Video"
        />




      <section className="w-full max-w-6xl bg-[#2D3748] p-8 rounded-lg shadow-lg mb-8">
        <h2 className="text-5xl text-center text-gray-100 mb-4">Services</h2>
        <p className="text-2xl mt-4 sm:text-lg text-gray-300">
          We are committed to designing a professional website that 
          meets your business and marketing goals. We use the latest technology 
          , all within a timely manner and at an affordable price.
        </p>
      </section>

      <section className="h-1/5 flex-col md:flex-row space-5 bg-[#2D3748] p-8 rounded-lg shadow-lg mb-8">
        <Slider />
      </section>


    </main>
  );
}



