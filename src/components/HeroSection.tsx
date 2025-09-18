import Link from 'next/link';
import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { Button } from './ui/moving-border';

function HeroSection() {
  return (
    <div
      className="
        h-screen               /* full viewport height */
        w-full
        rounded-md
        flex flex-col items-center justify-center
        relative overflow-hidden
        mx-auto
        px-4
      "
    >
      {/* Spotlight Effect */}
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />

      {/* Hero Text */}
      <div className="relative z-10 w-full text-center">
        <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          EduVerify
        </h1>

        <h2 className="mt-2 md:mt-4 text-2xl md:text-4xl font-semibold text-neutral-200">
          Securing Academic Credentials for a Fraud-Free Future.
        </h2>

        <p className="mt-6 font-normal text-base md:text-lg text-neutral-300 max-w-xl mx-auto">
          Tamper-proof, instant, and universally verifiable certificates.
        </p>

        {/* Call-to-Action Button */}
        <div className="mt-8">
          <Link href="/features">
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 cursor-pointer px-8 py-3 text-lg font-medium"
            >
              Explore Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
