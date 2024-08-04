'use client';
import React from 'react';
import Slider from "../components/Slider/Slider";
import TechSlider from "../components/TechSlider/TechSlider";
import AnimateText from '@/components/AnimateText/AnimateText';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#1A202C] p-8">
      <div className="flex bg-material-ui flex-col md:flex-row items-center h-screen justify-center mt-3 md:mt-[-22px]">
        <section className="w-full mt-[-61px] max-w-4xl text-center mb-12">
          <h1 className="text-5xl w-[30vw] mx-auto text-indigo-700 mb-11">
            <AnimateText />
            <span className="animate-blink">|</span>
          </h1>
        </section>

        <section className="w-1/2 max-w-4xl mt-[-61px] p-8 mb-8 rounded-lg shadow-lg">
          <div className="">
            <img src="logo-color.svg" className="rounded-full" alt="Logo" />
          </div>
        </section>
      </div>

      <section className="items-start justify-center text-center
       overflow-x-scroll scrollbar-hide  space-5 bg-[#2D3748]  p-8 rounded-lg shadow-lg mb-8">
        <h1>Tech We Use</h1>
        <TechSlider />
      </section>

      <section className="w-full max-w-6xl bg-[#2D3748] p-8 rounded-lg shadow-lg mb-8">
        <h2 className="text-5xl text-center text-gray-100 mb-4">Services</h2>
        <p className="text-sm sm:text-lg text-gray-300">
          We are committed to designing a professional website that meets your business and marketing goals. We use the latest technology to deliver high-quality results, all within a timely manner and at an affordable price.
        </p>
      </section>

      <section className="h-1/5 flex-col md:flex-row space-5 bg-[#2D3748] p-8 rounded-lg shadow-lg mb-8">
        <Slider />
      </section>


    </main>
  );
}
